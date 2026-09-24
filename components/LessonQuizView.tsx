import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  Modal,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Svg, { Path, Circle } from "react-native-svg";
import { Activity } from "@/types/learning";
import { getLessonById, LESSONS } from "@/data/lessons";
import { useProgressStore, useLanguageStore } from "@/store";
import { images } from "@/constants/images";
import { I18N } from "@/constants/i18n";
import { localizeActivity } from "@/lib/quizLocalization";
import { posthog } from "@/src/config/posthog";

interface LessonQuizViewProps {
  lessonId: string;
  onClose?: () => void;
  onOpenAITeacher?: () => void;
}

// ── SVG Icons ────────────────────────────────────────────────

function CloseIcon({ size = 22, color = "#6B7280" }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18M6 6L18 18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function HeartIcon({ size = 22, color = "#EF4444" }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </Svg>
  );
}

function SpeakerIcon({ size = 24, color = "#6C4EF5" }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 5L6 9H2V15H6L11 19V5Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.07 4.93C20.9447 6.80527 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CheckmarkIcon({ size = 28, color = "#22C55E" }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" fill={color} />
      <Path
        d="M8 12.5L10.5 15L16 9.5"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CrossIcon({ size = 28, color = "#EF4444" }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" fill={color} />
      <Path
        d="M15 9L9 15M9 9L15 15"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

// ── Component ────────────────────────────────────────────────

export default function LessonQuizView({
  lessonId,
  onClose,
  onOpenAITeacher,
}: LessonQuizViewProps) {
  const router = useRouter();
  const { completeLesson, addXp } = useProgressStore();
  const { selectedLanguageId, appInterfaceLanguage } = useLanguageStore();
  const t = I18N[appInterfaceLanguage || "vi"];

  const lesson = useMemo(() => {
    return getLessonById(lessonId) || LESSONS[0];
  }, [lessonId]);

  // Derive activities list, with fallback generated from vocabulary if activities is empty
  const activities: Activity[] = useMemo(() => {
    let rawList: Activity[] = [];

    if (lesson?.activities && lesson.activities.length > 0) {
      rawList = lesson.activities;
    } else if (lesson?.vocabulary && lesson.vocabulary.length > 0) {
      // Auto-generate fallback activities from vocabulary
      const vocabList = lesson.vocabulary;
      const generated: Activity[] = [];

      vocabList.forEach((v: any, idx: number) => {
        // Generate a multiple choice question
        const otherOptions = vocabList
          .filter((_: any, i: number) => i !== idx)
          .map((item: any) => item.translation);
        const choices = [v.translation, ...otherOptions.slice(0, 3)];
        // Deterministically rotate based on index
        const shift = idx % choices.length;
        const options = [...choices.slice(shift), ...choices.slice(0, shift)];

        generated.push({
          id: `gen-mc-${v.id}`,
          type: "multiple_choice",
          question: `"${v.word}" có nghĩa là gì?`,
          prompt: v.word,
          options,
          correctAnswer: v.translation,
          explanation: v.exampleSentence
            ? `Ví dụ: ${v.exampleSentence} (${v.exampleTranslation || ""})`
            : undefined,
        });
      });

      // Generate a match pairs activity if at least 3 vocab items exist
      if (vocabList.length >= 3) {
        const top4 = vocabList.slice(0, 4);
        generated.push({
          id: `gen-pair-${lesson.id}`,
          type: "match_pairs",
          question: "Ghép các từ tương ứng với nghĩa đúng:",
          pairs: top4.map((v: any) => ({ left: v.word, right: v.translation })),
          correctAnswer: top4.map((v: any) => `${v.word}:${v.translation}`),
        });
      }

      rawList = generated;
    } else {
      // Fallback default activity
      rawList = [
        {
          id: "default-activity-1",
          type: "multiple_choice",
          question: "Chọn nghĩa đúng cho từ:",
          prompt: "Hello",
          options: ["Xin chào", "Tạm biệt", "Cảm ơn", "Hẹn gặp lại"],
          correctAnswer: "Xin chào",
        },
      ];
    }

    // Localize activities according to user's interface language (e.g. English vs Vietnamese)
    return rawList.map((act) => localizeActivity(act, appInterfaceLanguage || "vi"));
  }, [lesson, appInterfaceLanguage]);

  // Quiz progression states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [isCompleted, setIsCompleted] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showNoHeartsModal, setShowNoHeartsModal] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  // Match pairs specific states
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // array of "left:right"
  const [wrongPairAnimation, setWrongPairAnimation] = useState<string | null>(null);

  // Progress animation
  const [progressAnim] = useState(() => new Animated.Value(0));

  const currentActivity = activities[currentIndex] || activities[0];
  const totalActivities = activities.length;

  // Update progress bar
  useEffect(() => {
    const progressPercent = (currentIndex / totalActivities) * 100;
    Animated.timing(progressAnim, {
      toValue: progressPercent,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [progressAnim, currentIndex, totalActivities]);

  // PostHog analytics tracking refs
  const startTimeRef = useRef<number>(Date.now());
  const hasCompletedRef = useRef<boolean>(false);
  const currentIndexRef = useRef<number>(0);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Track lesson_started on mount & lesson_abandoned on unmount if not completed
  useEffect(() => {
    startTimeRef.current = Date.now();
    hasCompletedRef.current = false;

    if (lesson) {
      posthog?.capture("lesson_started", {
        lesson_id: lesson.id,
        language: selectedLanguageId,
        lesson_number: lesson.order || 1,
      });
    }

    return () => {
      if (!hasCompletedRef.current && lesson) {
        const durationSeconds = Math.max(
          0,
          Math.round((Date.now() - startTimeRef.current) / 1000)
        );
        posthog?.capture("lesson_abandoned", {
          lesson_id: lesson.id,
          time_into_lesson_seconds: durationSeconds,
          last_question_index: currentIndexRef.current,
        });
      }
    };
  }, [lesson?.id, selectedLanguageId]);

  // Shuffled right options for match_pairs (deterministic pure shuffle)
  const shuffledRightOptions = useMemo(() => {
    if (currentActivity?.type !== "match_pairs" || !currentActivity.pairs) return [];
    const seed = (currentActivity.id || "pair").split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return [...currentActivity.pairs.map((p) => p.right)].sort((a, b) => {
      const codeA = (a.charCodeAt(0) * 31 + seed) % 97;
      const codeB = (b.charCodeAt(0) * 31 + seed) % 97;
      return codeA - codeB;
    });
  }, [currentActivity]);

  // Handle Match Pairs Tap
  const handleLeftTap = (leftText: string) => {
    if (answerStatus !== "idle") return;
    if (matchedPairs.some((p) => p.startsWith(`${leftText}:`))) return; // Already matched

    setSelectedLeft(leftText);

    // If right was already selected, check match
    if (selectedRight) {
      checkPair(leftText, selectedRight);
    }
  };

  const handleRightTap = (rightText: string) => {
    if (answerStatus !== "idle") return;
    if (matchedPairs.some((p) => p.endsWith(`:${rightText}`))) return; // Already matched

    setSelectedRight(rightText);

    // If left was already selected, check match
    if (selectedLeft) {
      checkPair(selectedLeft, rightText);
    }
  };

  const checkPair = (left: string, right: string) => {
    const pairString = `${left}:${right}`;
    const validPairs = currentActivity.pairs || [];
    const isValid = validPairs.some((p) => p.left === left && p.right === right);

    if (isValid) {
      const newMatched = [...matchedPairs, pairString];
      setMatchedPairs(newMatched);
      setSelectedLeft(null);
      setSelectedRight(null);

      // Check if all pairs are matched
      if (newMatched.length === validPairs.length) {
        setAnswerStatus("correct");
        setCorrectCount((prev) => prev + 1);
      }
    } else {
      // Wrong match
      setWrongPairAnimation(pairString);
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPairAnimation(null);
      }, 600);
      setHearts((prev) => Math.max(0, prev - 1));
    }
  };

  // Check Answer Handler
  const handleCheck = () => {
    if (answerStatus !== "idle") return;

    if (currentActivity.type === "match_pairs") {
      // Match pairs auto-validates
      return;
    }

    if (!selectedOption) return;

    const correct = currentActivity.correctAnswer;
    const isCorrect = Array.isArray(correct)
      ? correct.includes(selectedOption)
      : selectedOption.trim().toLowerCase() === correct.trim().toLowerCase();

    if (isCorrect) {
      setAnswerStatus("correct");
      setCorrectCount((prev) => prev + 1);
    } else {
      setAnswerStatus("incorrect");
      const nextHearts = Math.max(0, hearts - 1);
      setHearts(nextHearts);
      if (nextHearts === 0) {
        setShowNoHeartsModal(true);
      }
    }
  };

  // Continue to Next Activity
  const handleContinue = () => {
    if (currentIndex + 1 < totalActivities) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setAnswerStatus("idle");
      setSelectedLeft(null);
      setSelectedRight(null);
      setMatchedPairs([]);
    } else {
      // Lesson Finished!
      setIsCompleted(true);
      hasCompletedRef.current = true;
      if (lesson) {
        completeLesson(lesson.id);
        addXp(lesson.xp || 15);
        posthog?.capture("standard_lesson_completed", {
          lesson_id: lesson.id,
          xp_earned: lesson.xp || 15,
          accuracy: Math.round(((correctCount + 1) / totalActivities) * 100),
          language: selectedLanguageId,
        });
        posthog?.capture("lesson_completed", {
          lesson_id: lesson.id,
          language: selectedLanguageId,
          duration_seconds: Math.max(0, Math.round((Date.now() - startTimeRef.current) / 1000)),
          accuracy: Math.round(((correctCount + 1) / totalActivities) * 100),
        });
      }
    }
  };

  // Handle Exit
  const handleExit = () => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  // Restart Quiz
  const handleRestart = () => {
    setHearts(5);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswerStatus("idle");
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedPairs([]);
    setCorrectCount(0);
    setShowNoHeartsModal(false);
  };

  // ── Render Completion Screen ────────────────────────────────

  if (isCompleted) {
    const accuracy = Math.round((correctCount / totalActivities) * 100) || 100;
    const earnedXp = lesson?.xp || 15;

    return (
      <SafeAreaView style={styles.safeContainer} edges={["top", "bottom"]}>
        <View style={styles.completionContainer}>
          {/* Trophy / Mascot Image */}
          <View style={styles.celebrationImageWrapper}>
            <Image
              source={images.mascotWelcome}
              style={styles.celebrationImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.completionTitle}>{t.lessonCompleted}</Text>
          <Text style={styles.completionSubtitle}>
            {appInterfaceLanguage === "en"
              ? `You have successfully completed ${lesson?.title || "the lesson"}`
              : `Bạn đã xuất sắc hoàn thành ${lesson?.title || "bài học"}`}
          </Text>

          {/* Stats Cards */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>⚡</Text>
              <Text style={styles.statValue}>+{earnedXp} XP</Text>
              <Text style={styles.statLabel}>{t.earnedXp}</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statIcon}>🎯</Text>
              <Text style={styles.statValue}>{accuracy}%</Text>
              <Text style={styles.statLabel}>{t.accuracy}</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statIcon}>❤️</Text>
              <Text style={styles.statValue}>{hearts}</Text>
              <Text style={styles.statLabel}>{t.remainingHearts}</Text>
            </View>
          </View>

          {/* Optional: Practice with AI Teacher Button */}
          {onOpenAITeacher && (
            <TouchableOpacity
              style={styles.aiTeacherCTA}
              activeOpacity={0.85}
              onPress={onOpenAITeacher}
            >
              <Text style={styles.aiTeacherCTAIcon}>✨</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.aiTeacherCTATitle}>{t.practiceWithAI}</Text>
                <Text style={styles.aiTeacherCTASubtitle}>
                  {appInterfaceLanguage === "en"
                    ? "Practice speaking live with your AI tutor"
                    : "Thực hành phát âm trực tiếp với gia sư ảo"}
                </Text>
              </View>
              <Text style={styles.aiTeacherCTAArrow}>›</Text>
            </TouchableOpacity>
          )}

          {/* Primary Action Button */}
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={handleExit}
          >
            <Text style={styles.primaryButtonText}>{t.continue}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Render Quiz Question Area ───────────────────────────────

  const canCheck =
    currentActivity.type === "match_pairs"
      ? matchedPairs.length === (currentActivity.pairs?.length || 0)
      : !!selectedOption;

  return (
    <SafeAreaView style={styles.safeContainer} edges={["top", "bottom"]}>
      {/* ── Top Bar ─────────────────────────────────────────── */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => setShowExitModal(true)}
          style={styles.closeBtn}
          activeOpacity={0.7}
        >
          <CloseIcon />
        </TouchableOpacity>

        {/* Animated Progress Bar */}
        <View style={styles.progressBarBackground}>
          <Animated.View
            style={[
              styles.progressBarFill,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>

        {/* Hearts Indicator */}
        <View style={styles.heartsBadge}>
          <HeartIcon size={20} />
          <Text style={styles.heartsText}>{hearts}</Text>
        </View>
      </View>

      {/* ── Question Body ───────────────────────────────────── */}
      <ScrollView
        style={styles.scrollBody}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.questionText}>{currentActivity.question}</Text>

        {/* Prompt Card / Target Word */}
        {currentActivity.prompt && (
          <View style={styles.promptCard}>
            <TouchableOpacity style={styles.speakerButton} activeOpacity={0.7}>
              <SpeakerIcon />
            </TouchableOpacity>
            <Text style={styles.promptText}>{currentActivity.prompt}</Text>
          </View>
        )}

        {/* Audio Listen Prompt */}
        {currentActivity.type === "audio_listen" && currentActivity.audioText && (
          <View style={styles.audioListenCard}>
            <TouchableOpacity style={styles.audioListenBtn} activeOpacity={0.8}>
              <SpeakerIcon size={32} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.audioListenHint}>
              {appInterfaceLanguage === "en" ? "Tap speaker to listen again" : "Chạm vào loa để nghe lại"}
            </Text>
          </View>
        )}

        {/* ── Match Pairs Activity ──────────────────────────── */}
        {currentActivity.type === "match_pairs" && currentActivity.pairs && (
          <View style={styles.matchPairsContainer}>
            {/* Left Column */}
            <View style={styles.pairColumn}>
              {currentActivity.pairs.map((p) => {
                const isMatched = matchedPairs.some((mp) => mp.startsWith(`${p.left}:`));
                const isSelected = selectedLeft === p.left;
                const isWrong = wrongPairAnimation?.startsWith(`${p.left}:`);

                return (
                  <TouchableOpacity
                    key={`left-${p.left}`}
                    disabled={isMatched || answerStatus !== "idle"}
                    onPress={() => handleLeftTap(p.left)}
                    style={[
                      styles.pairCard,
                      isSelected && styles.pairCardSelected,
                      isMatched && styles.pairCardMatched,
                      isWrong && styles.pairCardWrong,
                    ]}
                    activeOpacity={0.75}
                  >
                    <Text
                      style={[
                        styles.pairCardText,
                        isSelected && styles.pairCardTextSelected,
                        isMatched && styles.pairCardTextMatched,
                      ]}
                    >
                      {p.left}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Right Column */}
            <View style={styles.pairColumn}>
              {shuffledRightOptions.map((rightText) => {
                const isMatched = matchedPairs.some((mp) => mp.endsWith(`:${rightText}`));
                const isSelected = selectedRight === rightText;
                const isWrong = wrongPairAnimation?.endsWith(`:${rightText}`);

                return (
                  <TouchableOpacity
                    key={`right-${rightText}`}
                    disabled={isMatched || answerStatus !== "idle"}
                    onPress={() => handleRightTap(rightText)}
                    style={[
                      styles.pairCard,
                      isSelected && styles.pairCardSelected,
                      isMatched && styles.pairCardMatched,
                      isWrong && styles.pairCardWrong,
                    ]}
                    activeOpacity={0.75}
                  >
                    <Text
                      style={[
                        styles.pairCardText,
                        isSelected && styles.pairCardTextSelected,
                        isMatched && styles.pairCardTextMatched,
                      ]}
                    >
                      {rightText}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        {/* ── Multiple Choice / Translate / Fill Blank Options ─ */}
        {currentActivity.type !== "match_pairs" && currentActivity.options && (
          <View style={styles.optionsList}>
            {currentActivity.options.map((opt, i) => {
              const isSelected = selectedOption === opt;
              const isCorrectOpt =
                answerStatus !== "idle" &&
                (Array.isArray(currentActivity.correctAnswer)
                  ? currentActivity.correctAnswer.includes(opt)
                  : currentActivity.correctAnswer.toLowerCase() === opt.toLowerCase());

              return (
                <TouchableOpacity
                  key={`opt-${i}`}
                  disabled={answerStatus !== "idle"}
                  onPress={() => setSelectedOption(opt)}
                  style={[
                    styles.optionButton,
                    isSelected && styles.optionButtonSelected,
                    answerStatus === "correct" && isSelected && styles.optionButtonCorrect,
                    answerStatus === "incorrect" && isSelected && styles.optionButtonWrong,
                    answerStatus === "incorrect" && isCorrectOpt && styles.optionButtonHintCorrect,
                  ]}
                  activeOpacity={0.8}
                >
                  <View style={styles.optionIndexBadge}>
                    <Text
                      style={[
                        styles.optionIndexText,
                        isSelected && styles.optionIndexTextSelected,
                      ]}
                    >
                      {i + 1}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && styles.optionTextSelected,
                    ]}
                  >
                    {opt}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>

      {/* ── Bottom Result Sheet / Action Bar ─────────────────── */}
      <View
        style={[
          styles.bottomBar,
          answerStatus === "correct" && styles.bottomBarCorrect,
          answerStatus === "incorrect" && styles.bottomBarWrong,
        ]}
      >
        {answerStatus === "idle" ? (
          <TouchableOpacity
            disabled={!canCheck}
            onPress={handleCheck}
            style={[
              styles.primaryButton,
              !canCheck && styles.primaryButtonDisabled,
            ]}
            activeOpacity={0.85}
          >
            <Text
              style={[
                styles.primaryButtonText,
                !canCheck && styles.primaryButtonTextDisabled,
              ]}
            >
              {t.checkAnswer}
            </Text>
          </TouchableOpacity>
        ) : answerStatus === "correct" ? (
          <View style={styles.resultContent}>
            <View style={styles.resultBannerTop}>
              <CheckmarkIcon />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.resultTitleCorrect}>{t.correctTitle}</Text>
                {currentActivity.explanation && (
                  <Text style={styles.resultDescCorrect}>
                    {currentActivity.explanation}
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              onPress={handleContinue}
              style={styles.continueButtonCorrect}
              activeOpacity={0.85}
            >
              <Text style={styles.continueButtonText}>{t.continue}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resultContent}>
            <View style={styles.resultBannerTop}>
              <CrossIcon />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.resultTitleWrong}>{t.wrongTitle}</Text>
                <Text style={styles.resultCorrectAnswerText}>
                  {t.correctAnswerIs}{" "}
                  {Array.isArray(currentActivity.correctAnswer)
                    ? currentActivity.correctAnswer.join(", ")
                    : currentActivity.correctAnswer}
                </Text>
                {currentActivity.explanation && (
                  <Text style={styles.resultDescWrong}>
                    {currentActivity.explanation}
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              onPress={handleContinue}
              style={styles.continueButtonWrong}
              activeOpacity={0.85}
            >
              <Text style={styles.continueButtonText}>{t.understood}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* ── Exit Confirmation Modal ─────────────────────────── */}
      <Modal visible={showExitModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{t.quitLessonTitle}</Text>
            <Text style={styles.modalSubtitle}>
              {t.quitLessonDesc}
            </Text>
            <TouchableOpacity
              style={styles.modalKeepLearningBtn}
              onPress={() => setShowExitModal(false)}
              activeOpacity={0.85}
            >
              <Text style={styles.modalKeepLearningText}>{t.keepLearning}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalExitBtn}
              onPress={handleExit}
              activeOpacity={0.7}
            >
              <Text style={styles.modalExitText}>{t.quit}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ── Out of Hearts Modal ─────────────────────────────── */}
      <Modal visible={showNoHeartsModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={{ fontSize: 44, textAlign: "center", marginBottom: 8 }}>💔</Text>
            <Text style={styles.modalTitle}>{t.outOfHeartsTitle}</Text>
            <Text style={styles.modalSubtitle}>
              {t.outOfHeartsDesc}
            </Text>
            <TouchableOpacity
              style={styles.modalKeepLearningBtn}
              onPress={handleRestart}
              activeOpacity={0.85}
            >
              <Text style={styles.modalKeepLearningText}>{t.retryFromStart}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalExitBtn}
              onPress={handleExit}
              activeOpacity={0.7}
            >
              <Text style={styles.modalExitText}>{t.backToHome}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// ── Styles (Using StyleSheet for Layout & Dynamic Native properties) ─

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 16,
  },
  closeBtn: {
    padding: 6,
    borderRadius: 8,
  },
  progressBarBackground: {
    flex: 1,
    height: 14,
    backgroundColor: "#E5E7EB",
    borderRadius: 7,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#58CC02",
    borderRadius: 7,
  },
  heartsBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  heartsText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#EF4444",
  },
  scrollBody: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  questionText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
    color: "#1F2937",
    lineHeight: 30,
    marginBottom: 20,
  },
  promptCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F0FF",
    borderWidth: 1.5,
    borderColor: "#DDD6FE",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    gap: 12,
  },
  speakerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  promptText: {
    flex: 1,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "#4C1D95",
  },
  audioListenCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FAFC",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    paddingVertical: 28,
    marginBottom: 24,
  },
  audioListenBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#6C4EF5",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 12,
  },
  audioListenHint: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#64748B",
  },
  optionsList: {
    gap: 12,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderBottomWidth: 4,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 14,
  },
  optionButtonSelected: {
    borderColor: "#6C4EF5",
    backgroundColor: "#F5F3FF",
  },
  optionButtonCorrect: {
    borderColor: "#22C55E",
    backgroundColor: "#F0FDF4",
  },
  optionButtonWrong: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2",
  },
  optionButtonHintCorrect: {
    borderColor: "#22C55E",
    backgroundColor: "#F0FDF4",
  },
  optionIndexBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  optionIndexText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#6B7280",
  },
  optionIndexTextSelected: {
    color: "#6C4EF5",
  },
  optionText: {
    flex: 1,
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#1F2937",
  },
  optionTextSelected: {
    fontFamily: "Poppins_600SemiBold",
    color: "#4C1D95",
  },
  matchPairsContainer: {
    flexDirection: "row",
    gap: 14,
  },
  pairColumn: {
    flex: 1,
    gap: 12,
  },
  pairCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderBottomWidth: 4,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 64,
  },
  pairCardSelected: {
    borderColor: "#6C4EF5",
    backgroundColor: "#F5F3FF",
  },
  pairCardMatched: {
    borderColor: "#86EFAC",
    backgroundColor: "#F0FDF4",
    opacity: 0.6,
  },
  pairCardWrong: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2",
  },
  pairCardText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#1F2937",
    textAlign: "center",
  },
  pairCardTextSelected: {
    color: "#6C4EF5",
  },
  pairCardTextMatched: {
    color: "#15803D",
  },
  bottomBar: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    backgroundColor: "#FFFFFF",
  },
  bottomBarCorrect: {
    backgroundColor: "#D7FFB8",
    borderTopColor: "#BBF7D0",
  },
  bottomBarWrong: {
    backgroundColor: "#FFDFE0",
    borderTopColor: "#FECDD3",
  },
  primaryButton: {
    backgroundColor: "#58CC02",
    borderBottomWidth: 4,
    borderBottomColor: "#46A302",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonDisabled: {
    backgroundColor: "#E5E7EB",
    borderBottomColor: "#D1D5DB",
  },
  primaryButtonText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  primaryButtonTextDisabled: {
    color: "#9CA3AF",
  },
  resultContent: {
    gap: 14,
  },
  resultBannerTop: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  resultTitleCorrect: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#15803D",
  },
  resultDescCorrect: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#166534",
    marginTop: 2,
  },
  resultTitleWrong: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#B91C1C",
  },
  resultCorrectAnswerText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#991B1B",
    marginTop: 2,
  },
  resultDescWrong: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#7F1D1D",
    marginTop: 2,
  },
  continueButtonCorrect: {
    backgroundColor: "#22C55E",
    borderBottomWidth: 4,
    borderBottomColor: "#16A34A",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  continueButtonWrong: {
    backgroundColor: "#EF4444",
    borderBottomWidth: 4,
    borderBottomColor: "#DC2626",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  continueButtonText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  completionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  celebrationImageWrapper: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  celebrationImage: {
    width: "100%",
    height: "100%",
  },
  completionTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 26,
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 8,
  },
  completionSubtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 28,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
    width: "100%",
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    paddingVertical: 16,
    alignItems: "center",
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  statValue: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#1F2937",
  },
  statLabel: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#9CA3AF",
  },
  aiTeacherCTA: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF2FF",
    borderWidth: 1.5,
    borderColor: "#C7D2FE",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    gap: 12,
    width: "100%",
  },
  aiTeacherCTAIcon: {
    fontSize: 28,
  },
  aiTeacherCTATitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#3730A3",
  },
  aiTeacherCTASubtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#6366F1",
  },
  aiTeacherCTAArrow: {
    fontSize: 24,
    color: "#6366F1",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  modalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
  },
  modalTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#1F2937",
    marginBottom: 8,
    textAlign: "center",
  },
  modalSubtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  modalKeepLearningBtn: {
    backgroundColor: "#58CC02",
    borderBottomWidth: 4,
    borderBottomColor: "#46A302",
    borderRadius: 16,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  modalKeepLearningText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    color: "#FFFFFF",
  },
  modalExitBtn: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  modalExitText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#EF4444",
  },
});
