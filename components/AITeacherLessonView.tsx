import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Modal,
  ScrollView,
  Platform,
  ActivityIndicator,
  PermissionsAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Svg, { Path, Line, Rect } from "react-native-svg";
import { images } from "@/constants/images";
import { getLessonById, LESSONS } from "@/data/lessons";
import { getUnitById } from "@/data/units";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE_ID } from "@/data/languages";
import { useLanguageStore, useProgressStore } from "@/store";
import { useUser } from "@clerk/expo";
import Constants from "expo-constants";
import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  Call,
  useCallStateHooks,
} from "@stream-io/video-react-native-sdk";
import { posthog } from "@/src/config/posthog";
import { LiveCaptionBar } from "./LiveCaptionBar";
import { useTranslation } from "@/hooks/useTranslation";

interface AITeacherLessonViewProps {
  lessonId?: string;
  activeTab?: "learn" | "ai-teacher";
  onClose?: () => void;
}



/**
 * Feather Mic Icon (Active Listening State)
 */
function FeatherMic({ size = 22, color = "#FFFFFF" }: { size?: number; color?: string }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <Path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <Line x1="12" y1="19" x2="12" y2="23" />
      <Line x1="8" y1="23" x2="16" y2="23" />
    </Svg>
  );
}

/**
 * Feather Mic-Off Icon (Muted State with diagonal slash)
 */
function FeatherMicOff({ size = 22, color = "#64748B" }: { size?: number; color?: string }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Line x1="1" y1="1" x2="23" y2="23" />
      <Path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
      <Path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
      <Line x1="12" y1="19" x2="12" y2="23" />
      <Line x1="8" y1="23" x2="16" y2="23" />
    </Svg>
  );
}

/**
 * Subtitles "文A" Translation Icon
 */
function SubtitlesIcon({ size = 22, color = "#0D132B" }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
        fill={color}
      />
    </Svg>
  );
}

/**
 * MaterialIcons call-end Icon
 */
function CallEndIcon({ size = 24, color = "#FFFFFF" }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 9c-3.1 0-6 .86-8.48 2.37-.54.33-.82.97-.68 1.59l1.24 5.37c.18.79.9 1.34 1.71 1.34.22 0 .44-.04.66-.12 1.77-.67 3.69-1.05 5.55-1.05 1.86 0 3.78.38 5.55 1.05.22.08.44.12.66.12.81 0 1.53-.55 1.71-1.34l1.24-5.37c.14-.62-.14-1.26-.68-1.59C18 9.86 15.1 9 12 9z"
        fill={color}
      />
    </Svg>
  );
}

const DEFAULT_CONVERSATIONAL_PHRASES: Record<
  string,
  { id: string; text: string; translation: string; phonetic: string; context: string }[]
> = {
  ko: [
    { id: "ko-1", text: "안녕하세요! 만나서 반가워요.", translation: "Hello! Nice to meet you.", phonetic: "an-nyeong-ha-se-yo! man-na-seo ban-ga-wo-yo", context: "Friendly greeting" },
    { id: "ko-2", text: "제 이름은 지우예요. 어떻게 지내세요?", translation: "My name is Jiwoo. How are you doing?", phonetic: "je i-reum-eun Ji-woo-ye-yo. eo-tteo-ke ji-nae-se-yo?", context: "Introducing yourself" },
    { id: "ko-3", text: "감사합니다. 한국어 연습을 시작해 볼까요?", translation: "Thank you. Shall we start practicing Korean?", phonetic: "gam-sa-ham-ni-da. han-gug-eo yeon-seub-eul si-jag-hae bol-kka-yo?", context: "Inviting to practice" },
    { id: "ko-4", text: "좋아요! 천천히 따라해 보세요.", translation: "Great! Please repeat after me slowly.", phonetic: "jo-a-yo! cheon-cheon-hi tta-ra-hae bo-se-yo", context: "Encouragement" },
  ],
  ja: [
    { id: "ja-1", text: "こんにちは！はじめまして。", translation: "Hello! Nice to meet you.", phonetic: "kon-ni-chi-wa! ha-ji-me-ma-shi-te", context: "Polite greeting" },
    { id: "ja-2", text: "お元気ですか？日本語を練習しましょう。", translation: "How are you? Let's practice Japanese.", phonetic: "o-gen-ki desu ka? ni-hon-go o ren-shuu shi-ma-shou", context: "Friendly question" },
    { id: "ja-3", text: "ありがとうございます。よくできました！", translation: "Thank you very much. Well done!", phonetic: "a-ri-ga-tou go-zai-ma-su. yo-ku de-ki-ma-shi-ta!", context: "Praise" },
  ],
  zh: [
    { id: "zh-1", text: "你好！很高兴认识你。", translation: "Hello! Nice to meet you.", phonetic: "nǐ hǎo! hěn gāo xìng rèn shí nǐ", context: "Friendly greeting" },
    { id: "zh-2", text: "你今天过得怎么样？我们开始练习吧。", translation: "How is your day going? Let's start practicing.", phonetic: "nǐ jīn tiān guò de zěn me yàng? wǒ men kāi shǐ liàn xí ba", context: "Small talk" },
    { id: "zh-3", text: "非常棒！发音很准确。", translation: "Awesome! Your pronunciation is very accurate.", phonetic: "fēi cháng bàng! fā yīn hěn zhǔn què", context: "Praise" },
  ],
  es: [
    { id: "es-1", text: "¡Hola! Mucho gusto en conocerte.", translation: "Hello! Nice to meet you.", phonetic: "oh-lah! moo-choh goos-toh ehn koh-noh-sehr-teh", context: "Friendly greeting" },
    { id: "es-2", text: "¿Cómo estás hoy? ¡Vamos a practicar español!", translation: "How are you today? Let's practice Spanish!", phonetic: "koh-moh ehs-tahs oy? vah-mohs ah prahk-tee-kahr ehs-pah-nyohl!", context: "Small talk" },
    { id: "es-3", text: "¡Muy bien! Excelente pronunciación.", translation: "Very good! Excellent pronunciation.", phonetic: "mwee byehn! ex-seh-lehn-teh proh-noon-syah-syohn", context: "Praise" },
  ],
  fr: [
    { id: "fr-1", text: "Bonjour ! Ravi de vous rencontrer.", translation: "Hello! Nice to meet you.", phonetic: "bon-zhoor! rah-vee duh voo rahn-kohn-tray", context: "Warm greeting" },
    { id: "fr-2", text: "Comment allez-vous aujourd'hui ?", translation: "How are you today?", phonetic: "koh-mahn tah-lay voo oh-zhoor-dwee", context: "Small talk" },
    { id: "fr-3", text: "C'est parfait ! Très bon travail.", translation: "That's perfect! Very good job.", phonetic: "say pahr-fay! tray bohn trah-vy", context: "Praise" },
  ],
  de: [
    { id: "de-1", text: "Hallo! Schön, dich kennenzulernen.", translation: "Hello! Nice to meet you.", phonetic: "hah-loh! shurn dikh ken-nen-tsoo-ler-nen", context: "Warm greeting" },
    { id: "de-2", text: "Wie geht es dir heute? Lass uns Deutsch üben!", translation: "How are you today? Let's practice German!", phonetic: "vee gayt es deer hoy-tuh? lahs oons doytch oo-ben!", context: "Small talk" },
    { id: "de-3", text: "Ausgezeichnet! Sehr gut gemacht.", translation: "Outstanding! Very well done.", phonetic: "ows-ge-tsaykh-net! zayr goot ge-mahkht", context: "Praise" },
  ],
  vi: [
    { id: "vi-1", text: "Xin chào! Rất vui được gặp bạn.", translation: "Hello! Nice to meet you.", phonetic: "seen chow! ruht vooy duhk guhp bahn", context: "Lời chào thân thiện" },
    { id: "vi-2", text: "Hôm nay bạn thế nào? Chúng ta cùng luyện nói nhé!", translation: "How are you today? Let's practice speaking together!", phonetic: "hohm nay bahn tay now? choong tah koong luyen noy nye", context: "Bắt đầu bài học" },
    { id: "vi-3", text: "Tuyệt vời lắm! Phát âm của bạn rất tốt.", translation: "Awesome! Your pronunciation is very good.", phonetic: "twyet vuhy luhm! faht uhm coo-ah bahn ruht toht", context: "Khen ngợi" },
  ],
  en: [
    { id: "en-1", text: "Hello! Nice to meet you.", translation: "Xin chào! Rất vui được gặp bạn.", phonetic: "heh-loh! nys too meet yoo", context: "Warm greeting" },
    { id: "en-2", text: "How are you doing today? Let's practice speaking!", translation: "Hôm nay bạn thế nào? Cùng luyện nói nhé!", phonetic: "how ahr yoo doo-ing too-day? lets prak-tis spee-king", context: "Small talk" },
    { id: "en-3", text: "Awesome! Your pronunciation is spot on.", translation: "Tuyệt vời! Bạn phát âm rất chuẩn xác.", phonetic: "aw-sum! yoor proh-nun-see-ay-shun iz spaht on", context: "Praise" },
  ],
};

function AITeacherLessonContent({
  lessonId,
  activeTab = "learn",
  onClose,
  call,
  onEndCallSession,
  userId,
  onRetryAgent,
  isReconnectingAgent,
}: AITeacherLessonViewProps & {
  call?: Call | null;
  onEndCallSession?: () => void;
  userId: string;
  onRetryAgent?: () => Promise<void>;
  isReconnectingAgent?: boolean;
}) {
  const router = useRouter();
  const { selectedLanguageId, appInterfaceLanguage } = useLanguageStore();
  const { completedLessonIds, completeLesson, addXp } = useProgressStore();

  const currentLangId = selectedLanguageId || DEFAULT_LANGUAGE_ID;
  const currentLanguage = SUPPORTED_LANGUAGES.find((l) => l.id === currentLangId);
  const targetAppLang = appInterfaceLanguage || "vi";

  // Derive base API URL — single source of truth
  const baseUrl = (() => {
    if (process.env.EXPO_PUBLIC_API_URL) {
      return process.env.EXPO_PUBLIC_API_URL.replace(/\/$/, "");
    }
    const hostUri = Constants.expoConfig?.hostUri;
    if (hostUri) {
      const host = hostUri.split(":")[0];
      return `http://${host}:8081`;
    }
    return Platform.OS === "android" ? "http://10.0.2.2:8081" : "http://localhost:8081";
  })();

  // Live translation — via extracted hook (fixes race condition)
  const { getTranslation, isTranslatingKey, translate: translateText } = useTranslation({
    targetLang: targetAppLang,
    baseUrl,
  });

  // Derive lesson: Prioritize specified lessonId or the audio_ai speaking lesson of the current unit/language
  const lesson =
    (lessonId ? getLessonById(lessonId) : null) ||
    LESSONS.find(
      (l) =>
        l.unitId.startsWith(`unit-${currentLangId}`) &&
        l.type === "audio_ai" &&
        !completedLessonIds.includes(l.id)
    ) ||
    LESSONS.find(
      (l) =>
        l.unitId.startsWith(`unit-${currentLangId}`) &&
        l.type === "audio_ai"
    ) ||
    LESSONS.find((l) => l.type === "audio_ai") ||
    LESSONS[0];

  const unit = lesson ? getUnitById(lesson.unitId) : undefined;

  // Interactive UI states
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showContextModal, setShowContextModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [hasCompletedThisSession, setHasCompletedThisSession] = useState(false);

  // Dynamic feedback ratings
  const [speakingRating, setSpeakingRating] = useState("Excellent");
  const [pronunciationRating, setPronunciationRating] = useState("Great");
  const [grammarRating, setGrammarRating] = useState("Good");

  // Animations
  const [pulseAnim] = useState(() => new Animated.Value(1));
  const [bubbleFadeAnim] = useState(() => new Animated.Value(1));
  const [micRippleAnim] = useState(() => new Animated.Value(1));
  const [micRippleOpacity] = useState(() => new Animated.Value(0.6));

  // Derive phrases list in target learning language
  const phrases =
    lesson?.phrases && lesson.phrases.length > 0
      ? lesson.phrases
      : (lesson?.vocabulary && lesson.vocabulary.length > 0
          ? lesson.vocabulary.map((v, idx) => ({
              id: `v-${idx}`,
              text: v.word,
              translation:
                v.translation && v.translation !== "Từ vựng trọng tâm"
                  ? v.translation
                  : "",
              phonetic: v.phonetic || "",
              context: "Lesson vocabulary",
            }))
          : null) ||
        DEFAULT_CONVERSATIONAL_PHRASES[currentLangId] ||
        DEFAULT_CONVERSATIONAL_PHRASES.ko;

  const currentPhrase = phrases[phraseIndex % phrases.length];

  // translateCurrentPhrase is now delegated to the useTranslation hook
  const translateCurrentPhrase = useCallback(
    (text: string) => translateText(text),
    [translateText]
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (showSubtitles && currentPhrase?.text) {
      timer = setTimeout(() => {
        translateCurrentPhrase(currentPhrase.text);
      }, 0);
    }
  }, [currentPhrase?.text, showSubtitles, targetAppLang, translateCurrentPhrase]);

  // PostHog analytics tracking
  const startTimeRef = useRef<number>(Date.now());
  const hasCompletedRef = useRef<boolean>(false);
  const phraseIndexRef = useRef<number>(phraseIndex);

  useEffect(() => {
    phraseIndexRef.current = phraseIndex;
  }, [phraseIndex]);

  useEffect(() => {
    startTimeRef.current = Date.now();
    hasCompletedRef.current = false;

    if (lesson) {
      posthog?.capture("lesson_started", {
        lesson_id: lesson.id,
        language: currentLangId,
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
          last_question_index: phraseIndexRef.current,
        });
      }
    };
  }, [lesson?.id, currentLangId]);

  const handleToggleSubtitles = () => {
    const nextState = !showSubtitles;
    setShowSubtitles(nextState);
    if (nextState && currentPhrase?.text) {
      translateCurrentPhrase(currentPhrase.text);
    }
  };

  // Speaker audio animation simulation
  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 1.25,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1.2,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsPlayingAudio(false);
    });
  };

  // Next phrase advance
  const handleNextPhrase = () => {
    Animated.sequence([
      Animated.timing(bubbleFadeAnim, {
        toValue: 0.2,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(bubbleFadeAnim, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start();

    const nextIndex = (phraseIndex + 1) % phrases.length;
    setPhraseIndex(nextIndex);
    const nextPhrase = phrases[nextIndex];
    if (showSubtitles && nextPhrase?.text) {
      translateCurrentPhrase(nextPhrase.text);
    }

    // Rotate dynamic feedback scores slightly
    const scores = ["Excellent", "Great", "Good", "Outstanding", "Perfect"];
    setSpeakingRating(scores[nextIndex % scores.length]);
    setPronunciationRating(scores[(nextIndex + 1) % scores.length]);
    setGrammarRating(scores[(nextIndex + 2) % scores.length]);
  };

  const { useMicrophoneState, useCallState, useParticipants } = useCallStateHooks();
  const { status: micStatus, microphone } = useMicrophoneState();
  const participants = useParticipants();
  const [localMuted, setLocalMuted] = useState<boolean | null>(null);

  // If user tapped mic button, respect localMuted; otherwise use Stream micStatus
  const isMuted = localMuted !== null ? localMuted : micStatus === 'disabled';
  const { callingState } = useCallState();

  const aiTeacher = participants.find(
    (p) => p.userId === "ai-teacher" || p.name?.toLowerCase().includes("teacher")
  );
  const isTeacherSpeaking = !!aiTeacher?.isSpeaking;
  const isTeacherOnline = !!aiTeacher;

  // Watchdog timer: detect if AI Teacher is taking too long to join the call
  const [agentTimeout, setAgentTimeout] = useState(false);

  useEffect(() => {
    let timeoutTimer: ReturnType<typeof setTimeout> | undefined;

    if (isTeacherOnline) {
      setAgentTimeout(false);
    } else if (callingState === "joined") {
      timeoutTimer = setTimeout(() => {
        if (!isTeacherOnline) {
          console.warn("[STREAM] Watchdog: AI Teacher did not join call within 10 seconds.");
          setAgentTimeout(true);
        }
      }, 10000);
    }

    return () => {
      if (timeoutTimer) clearTimeout(timeoutTimer);
    };
  }, [callingState, isTeacherOnline]);

  const localParticipant = participants.find((p) => p.isLocalParticipant);
  const isStudentSpeaking = !!localParticipant?.isSpeaking;

  // Sync localMuted back to null once Stream micStatus reflects the expected state
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (localMuted !== null) {
      const streamIsMuted = micStatus === 'disabled';
      if (streamIsMuted === localMuted) {
        timer = setTimeout(() => {
          setLocalMuted(null);
        }, 0);
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [micStatus, localMuted]);

  // Continuous breathing ripple animation for Hero Mic when active (listening)
  useEffect(() => {
    let rippleLoop: Animated.CompositeAnimation | null = null;
    if (!isMuted) {
      micRippleAnim.setValue(1);
      micRippleOpacity.setValue(0.6);
      rippleLoop = Animated.loop(
        Animated.parallel([
          Animated.timing(micRippleAnim, {
            toValue: 1.35,
            duration: 1600,
            useNativeDriver: true,
          }),
          Animated.timing(micRippleOpacity, {
            toValue: 0,
            duration: 1600,
            useNativeDriver: true,
          }),
        ])
      );
      rippleLoop.start();
    } else {
      micRippleAnim.setValue(1);
      micRippleOpacity.setValue(0);
    }
    return () => {
      if (rippleLoop) {
        rippleLoop.stop();
      }
    };
  }, [isMuted, micRippleAnim, micRippleOpacity]);


  // End Call handler
  const handleEndCall = () => {
    hasCompletedRef.current = true;
    if (!hasCompletedThisSession && lesson) {
      completeLesson(lesson.id);
      addXp(lesson.xp || 15);
      setHasCompletedThisSession(true);
      posthog?.capture("audio_lesson_completed", {
        lesson_id: lesson.id,
        language: currentLangId,
      });
      posthog?.capture("lesson_completed", {
        lesson_id: lesson.id,
        language: currentLangId,
        duration_seconds: Math.max(0, Math.round((Date.now() - startTimeRef.current) / 1000)),
      });
    }
    if (onEndCallSession) {
      onEndCallSession();
    }
    try {
      call?.leave().catch((e) => console.warn("[STREAM] Error leaving call:", e));
    } catch (e) {
      console.warn("[STREAM] Error leaving call:", e);
    }
    setShowCompletionModal(true);
  };

  const toggleMic = async () => {
    const nextMuted = !isMuted;
    setLocalMuted(nextMuted);

    if (!call && !microphone) return;

    try {
      if (nextMuted) {
        if (microphone) {
          await microphone.disable();
        } else if (call) {
          await call.microphone.disable();
        }
      } else {
        if (Platform.OS === "android") {
          try {
            const hasPerm = await PermissionsAndroid.check(
              PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
            );
            if (!hasPerm) {
              const res = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                  title: "Microphone Permission",
                  message: "AI Teacher needs access to your microphone so you can practice speaking.",
                  buttonPositive: "Allow",
                }
              );
              if (res !== PermissionsAndroid.RESULTS.GRANTED) {
                console.warn("[STREAM] Audio permission not granted");
              }
            }
          } catch (permErr) {
            console.warn("[STREAM] Permission check error:", permErr);
          }
        }

        if (microphone) {
          await microphone.enable();
        } else if (call) {
          await call.microphone.enable();
        }
      }
    } catch (err: any) {
      console.warn("[AITeacher] Handled microphone toggle error:", err?.message || err);
    }
  };

  const handleBack = () => {
    try {
      call?.leave().catch((e) => console.warn("[STREAM] Error leaving call on back:", e));
    } catch (e) {}
    if (onClose) {
      onClose();
    } else if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(tabs)/learn");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      {/* ── Top Header ─────────────────────────────────────────────── */}
      <View style={styles.header}>
        {/* Left: Back Button + Title + Status */}
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={handleBack}
            style={styles.backButton}
            activeOpacity={0.7}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <Path
                d="M15 19L8 12L15 5"
                stroke="#0D132B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>

          <View style={styles.titleColumn}>
            <Text style={styles.headerTitle}>AI Teacher</Text>
            <TouchableOpacity
              style={styles.statusRow}
              onPress={() => {
                if (agentTimeout && !isTeacherOnline && onRetryAgent) {
                  onRetryAgent();
                }
              }}
              disabled={!agentTimeout || isTeacherOnline}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.statusDot,
                  {
                    backgroundColor: isTeacherSpeaking
                      ? "#3B82F6"
                      : isTeacherOnline
                      ? "#10B981"
                      : agentTimeout
                      ? "#EF4444"
                      : callingState === "joined"
                      ? "#F59E0B"
                      : "#EF4444",
                  },
                ]}
              />
              <Text
                style={[
                  styles.statusText,
                  agentTimeout && !isTeacherOnline ? { color: "#EF4444", fontWeight: "600" } : undefined,
                ]}
              >
                {isTeacherSpeaking
                  ? (targetAppLang === "vi" ? "AI đang nói..." : "AI Speaking...")
                  : isTeacherOnline
                  ? (targetAppLang === "vi" ? "Giáo viên Online" : "Teacher Online")
                  : isReconnectingAgent
                  ? (targetAppLang === "vi" ? "Đang kết nối lại..." : "Reconnecting...")
                  : agentTimeout
                  ? (targetAppLang === "vi" ? "Chưa kết nối · Nhấn thử lại" : "AI Offline · Tap to retry")
                  : callingState === "joined"
                  ? (targetAppLang === "vi" ? "Đang kết nối AI..." : "Connecting AI...")
                  : callingState}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Right: Tokens count [10] + User Avatar / Info */}
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.badgeIconButton}
            activeOpacity={0.75}
            onPress={handleNextPhrase}
          >
            <Text style={styles.badgeCountText}>
              {lesson?.estimatedMinutes ? lesson.estimatedMinutes * 2 : 10}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.avatarIconButton}
            onPress={() => setShowContextModal(true)}
            activeOpacity={0.75}
          >
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                fill="#0D132B"
              />
              <Path
                d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20V21H4V20Z"
                fill="#0D132B"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Main Vertical Content (Flexbox naturally shrinks Mascot Card) ── */}
      <View style={styles.contentContainer}>
        {/* Watchdog / Timeout Banner if AI Teacher takes too long to join */}
        {agentTimeout && !isTeacherOnline && (
          <View style={styles.timeoutBanner}>
            <Text style={styles.timeoutBannerText}>
              {targetAppLang === "vi"
                ? "⚠️ AI Teacher chưa tham gia cuộc gọi."
                : "⚠️ AI Teacher is taking longer to join."}
            </Text>
            <TouchableOpacity
              style={styles.timeoutRetryButton}
              onPress={() => onRetryAgent?.()}
              disabled={isReconnectingAgent}
              activeOpacity={0.8}
            >
              {isReconnectingAgent ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.timeoutRetryText}>
                  {targetAppLang === "vi" ? "Thử lại" : "Retry"}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* ── Mascot Card (rounded-3xl, flex-1) ────────────────────── */}
        <View style={styles.mascotCard}>
          {/* Fox Mascot Image as Full Background */}
          <Image
            source={images.aiTeacherFox}
            style={styles.mascotImage}
            resizeMode="cover"
          />


          {/* Dynamic AI Teacher Speaking Pill */}
          {isTeacherSpeaking && (
            <View style={styles.teacherSpeakingPill}>
              <Text style={{ fontSize: 13, marginRight: 6 }}>🔊</Text>
              <Text style={styles.teacherSpeakingText}>AI Teacher is speaking...</Text>
            </View>
          )}

          {/* Teacher Speech Bubble at Bottom of Mascot Card */}
          <Animated.View
            style={[styles.bubbleWrapper, { opacity: bubbleFadeAnim }]}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={handleNextPhrase}
              style={styles.speechBubble}
            >
              <View style={styles.bubbleTextColumn}>
                <Text style={styles.bubbleNativeText}>
                  {currentPhrase.text}
                </Text>
                {showSubtitles && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={(e) => {
                      e.stopPropagation();
                      if (currentPhrase?.text) {
                        translateCurrentPhrase(currentPhrase.text);
                      }
                    }}
                    style={{ flexDirection: "row", alignItems: "center", marginTop: 4, flexWrap: "wrap" }}
                  >
                    <View
                      style={{
                        backgroundColor: "#EEF2FF",
                        paddingHorizontal: 6,
                        paddingVertical: 2,
                        borderRadius: 6,
                        marginRight: 6,
                        borderWidth: 0.8,
                        borderColor: "#C7D2FE",
                      }}
                    >
                      <Text style={{ fontSize: 10, fontWeight: "700", color: "#4F46E5" }}>
                        ✨ AI DỊCH
                      </Text>
                    </View>
                    <Text style={styles.bubbleSubText}>
                      {getTranslation(currentPhrase.text) ||
                        (isTranslatingKey(currentPhrase.text)
                          ? (targetAppLang === "vi" ? "Đang dịch bằng AI..." : "Translating with AI...")
                          : (currentPhrase.translation && currentPhrase.translation !== "Từ vựng trọng tâm"
                              ? currentPhrase.translation
                              : (targetAppLang === "vi" ? "Tên tôi là" : "My name is")))}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* Speaker Audio Button */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handlePlayAudio}
                style={styles.speakerButton}
              >
                <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                  <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <Path
                      d="M11 5L6 9H2V15H6L11 19V5Z"
                      fill="#6C4EF5"
                    />
                    <Path
                      d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"
                      stroke="#6C4EF5"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </Svg>
                </Animated.View>
              </TouchableOpacity>
            </TouchableOpacity>

            {/* Speech bubble tail pointer */}
            <View style={styles.speechTail} />
          </Animated.View>
        </View>

        {/* ── Live Captions Bar (Stream Closed Captions) ───────────── */}
        <LiveCaptionBar
          localUserId={userId}
          visible={showSubtitles}
          maxVisible={5}
        />

        {/* ── Control Dock (Audio-First Hero Mic Layout) ──────────── */}
        <View style={styles.controlDockContainer}>
          <View style={styles.controlDock}>
            {/* 1. Subtitles Toggle Button (Auxiliary Left) */}
            <View style={styles.auxControlItem}>
              <TouchableOpacity
                style={[
                  styles.dockBtnAux,
                  showSubtitles && styles.dockBtnAuxActive,
                ]}
                activeOpacity={0.8}
                onPress={handleToggleSubtitles}
              >
                <SubtitlesIcon
                  size={22}
                  color={showSubtitles ? "#6C4EF5" : "#64748B"}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.dockLabel,
                  showSubtitles && styles.dockLabelActive,
                ]}
              >
                Subtitles
              </Text>
            </View>

            {/* 2. Hero Center Mic Button (Large 74x74 with Animated Pulse Ring) */}
            <View style={styles.heroMicItem}>
              {/* Outer Pulsing Ripple Effect when active */}
              {!isMuted && (
                <Animated.View
                  style={[
                    styles.heroMicRipple,
                    {
                      transform: [{ scale: micRippleAnim }],
                      opacity: micRippleOpacity,
                    },
                  ]}
                />
              )}

              <TouchableOpacity
                style={[
                  styles.heroMicBtn,
                  isMuted ? styles.heroMicBtnMuted : styles.heroMicBtnActive,
                ]}
                activeOpacity={0.85}
                onPress={toggleMic}
              >
                {isMuted ? (
                  <FeatherMicOff size={30} color="#64748B" />
                ) : (
                  <FeatherMic size={30} color="#FFFFFF" />
                )}
              </TouchableOpacity>

              {/* Status Indicator Text under Mic */}
              <View style={styles.micStatusRow}>
                <View
                  style={[
                    styles.micStatusDot,
                    isMuted
                      ? styles.micStatusDotMuted
                      : isStudentSpeaking
                      ? styles.micStatusDotSpeaking
                      : styles.micStatusDotActive,
                  ]}
                />
                <Text
                  style={[
                    styles.micStatusText,
                    isMuted
                      ? styles.micStatusTextMuted
                      : isStudentSpeaking
                      ? styles.micStatusTextSpeaking
                      : styles.micStatusTextActive,
                  ]}
                >
                  {isMuted
                    ? (targetAppLang === "vi" ? "Đã tắt mic · Chạm để nói" : "Muted · Tap to speak")
                    : (isTeacherSpeaking
                        ? (targetAppLang === "vi" ? "Giáo viên đang nói..." : "Teacher speaking...")
                        : (isStudentSpeaking
                            ? (targetAppLang === "vi" ? "🎙️ Đang nghe giọng bạn..." : "🎙️ Listening to you...")
                            : (targetAppLang === "vi" ? "Đang lắng nghe..." : "Listening...")))}
                </Text>
              </View>
            </View>

            {/* 3. End Call Button (Auxiliary Right) */}
            <View style={styles.auxControlItem}>
              <TouchableOpacity
                style={styles.endCallBtnAux}
                activeOpacity={0.85}
                onPress={handleEndCall}
              >
                <CallEndIcon size={22} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.dockLabel}>End Call</Text>
            </View>
          </View>
        </View>

        {/* ── Score Card (Speaking, Pronunciation, Grammar) ───────────── */}
        <TouchableOpacity
          style={styles.scoreCard}
          activeOpacity={0.9}
          onPress={() => setShowContextModal(true)}
        >
          <View style={styles.scoreCol}>
            <Text style={styles.scoreLabel}>Speaking</Text>
            <Text style={[styles.scoreValue, { color: "#10B981" }]}>
              {speakingRating}
            </Text>
          </View>

          <View style={styles.scoreDivider} />

          <View style={styles.scoreCol}>
            <Text style={styles.scoreLabel}>Pronunciation</Text>
            <Text style={[styles.scoreValue, { color: "#3B82F6" }]}>
              {pronunciationRating}
            </Text>
          </View>

          <View style={styles.scoreDivider} />

          <View style={styles.scoreCol}>
            <Text style={styles.scoreLabel}>Grammar</Text>
            <Text style={[styles.scoreValue, { color: "#8B5CF6" }]}>
              {grammarRating}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* ── Lesson Context & Goals Modal ──────────────────────────── */}
      <Modal
        visible={showContextModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowContextModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHandle} />

            <View style={styles.modalHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.modalSubtitle}>
                  {currentLanguage?.name ?? "Language"} • {unit?.title ?? "Unit"}
                </Text>
                <Text style={styles.modalTitle}>{lesson?.title}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setShowContextModal(false)}
                style={styles.modalCloseBtn}
              >
                <Text style={{ fontSize: 18, color: "#6B7280" }}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: 380 }}>
              {/* Learning Goals */}
              {lesson?.goals && lesson.goals.length > 0 && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Learning Goals</Text>
                  {lesson.goals.map((g, idx) => (
                    <View key={g.id || idx} style={styles.goalRow}>
                      <View style={styles.goalCheck}>
                        <Text style={styles.goalCheckText}>✓</Text>
                      </View>
                      <Text style={styles.goalText}>{g.description}</Text>
                    </View>
                  ))}
                </View>
              )}

              {/* AI Teacher Scenario & Context */}
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>AI Teacher Scenario</Text>
                <View style={styles.aiPromptBox}>
                  <Text style={styles.aiPromptText}>
                    {lesson?.aiTeacherPrompt?.scenario ||
                      lesson?.description ||
                      "Practice speaking real-life phrases with your AI Teacher. Focus on clear pronunciation and natural rhythm."}
                  </Text>
                </View>
              </View>

              {/* All Phrases in this Lesson */}
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>
                  Practice Phrases ({phrases.length})
                </Text>
                {phrases.map((p, idx) => (
                  <TouchableOpacity
                    key={p.id || idx}
                    style={[
                      styles.phraseCard,
                      phraseIndex === idx && styles.phraseCardActive,
                    ]}
                    onPress={() => {
                      setPhraseIndex(idx);
                      setShowContextModal(false);
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={styles.phraseCardNative}>{p.text}</Text>
                      <Text style={styles.phraseCardTranslation}>{p.translation}</Text>
                      {p.phonetic && (
                        <Text style={styles.phraseCardPhonetic}>/{p.phonetic}/</Text>
                      )}
                    </View>
                    {phraseIndex === idx && (
                      <View style={styles.activePill}>
                        <Text style={styles.activePillText}>Current</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <TouchableOpacity
              style={styles.modalConfirmBtn}
              onPress={() => setShowContextModal(false)}
            >
              <Text style={styles.modalConfirmBtnText}>Continue Practice</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ── Completion Modal ──────────────────────────────────────── */}
      <Modal
        visible={showCompletionModal}
        transparent
        animationType="fade"
        onRequestClose={() => {
          setShowCompletionModal(false);
          handleBack();
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.completionCard}>
            <Text style={{ fontSize: 48, textAlign: "center", marginBottom: 12 }}>
              🎉
            </Text>
            <Text style={styles.completionTitle}>Lesson Completed!</Text>
            <Text style={styles.completionDesc}>
              You did an awesome job practicing with your AI Teacher.
            </Text>

            <View style={styles.xpRewardBadge}>
              <Text style={styles.xpRewardText}>+{lesson?.xp || 15} XP Earned</Text>
            </View>

            <View style={styles.completionStatsRow}>
              <View style={styles.statCol}>
                <Text style={styles.statScore}>98%</Text>
                <Text style={styles.statLabel}>Speaking</Text>
              </View>
              <View style={styles.statCol}>
                <Text style={styles.statScore}>95%</Text>
                <Text style={styles.statLabel}>Pronunciation</Text>
              </View>
              <View style={styles.statCol}>
                <Text style={styles.statScore}>100%</Text>
                <Text style={styles.statLabel}>Grammar</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.modalConfirmBtn}
              onPress={() => {
                setShowCompletionModal(false);
                handleBack();
              }}
            >
              <Text style={styles.modalConfirmBtnText}>Back to Lessons</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  titleColumn: {
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#0D132B",
    lineHeight: 22,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#10B981",
    marginRight: 6,
  },
  statusText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#6B7280",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badgeIconButton: {
    minWidth: 38,
    height: 38,
    paddingHorizontal: 10,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeCountText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#0D132B",
  },
  avatarIconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  timeoutBanner: {
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: "#FEF2F2",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FECACA",
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#EF4444",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  timeoutBannerText: {
    flex: 1,
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#991B1B",
    marginRight: 8,
  },
  timeoutRetryButton: {
    backgroundColor: "#EF4444",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 64,
  },
  timeoutRetryText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#FFFFFF",
  },
  mascotCard: {
    flex: 1,
    minHeight: 200,
    maxHeight: 380,
    marginHorizontal: 16,
    borderRadius: 28,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#E2E8F0",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  mascotImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  bubbleWrapper: {
    marginHorizontal: 16,
    marginBottom: 16,
    alignSelf: "stretch",
  },
  speechBubble: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 6,
  },
  speechTail: {
    position: "absolute",
    bottom: -7,
    right: 36,
    width: 14,
    height: 14,
    backgroundColor: "#FFFFFF",
    transform: [{ rotate: "45deg" }],
  },
  bubbleTextColumn: {
    flex: 1,
    paddingRight: 10,
  },
  bubbleNativeText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#0D132B",
    lineHeight: 22,
  },
  bubbleSubText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#475569",
    marginTop: 2,
    lineHeight: 18,
  },
  speakerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  controlDockContainer: {
    marginVertical: 4,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  controlDock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 380,
    paddingVertical: 4,
  },
  auxControlItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 68,
  },
  dockBtnAux: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.2,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  dockBtnAuxActive: {
    borderColor: "#6C4EF5",
    backgroundColor: "#F5F3FF",
    borderWidth: 1.5,
  },
  dockLabel: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#475569",
    marginTop: 6,
    textAlign: "center",
  },
  dockLabelActive: {
    color: "#6C4EF5",
    fontWeight: "700",
  },
  endCallBtnAux: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#EF4444",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#EF4444",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  heroMicItem: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingHorizontal: 12,
  },
  heroMicRipple: {
    position: "absolute",
    top: -6,
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "rgba(108, 78, 245, 0.25)",
  },
  heroMicBtn: {
    width: 74,
    height: 74,
    borderRadius: 37,
    alignItems: "center",
    justifyContent: "center",
  },
  heroMicBtnActive: {
    backgroundColor: "#6C4EF5",
    borderWidth: 2,
    borderColor: "#8165FA",
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 8,
  },
  heroMicBtnMuted: {
    backgroundColor: "#F1F5F9",
    borderWidth: 1.5,
    borderColor: "#CBD5E1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  micStatusRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  micStatusDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginRight: 6,
  },
  micStatusDotActive: {
    backgroundColor: "#10B981",
  },
  micStatusDotSpeaking: {
    backgroundColor: "#22C55E",
  },
  micStatusDotMuted: {
    backgroundColor: "#94A3B8",
  },
  micStatusText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
  },
  micStatusTextActive: {
    color: "#4F46E5",
    fontWeight: "600",
  },
  micStatusTextSpeaking: {
    color: "#059669",
    fontWeight: "700",
  },
  micStatusTextMuted: {
    color: "#64748B",
  },
  teacherSpeakingPill: {
    position: "absolute",
    top: 14,
    left: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(13, 19, 43, 0.8)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 10,
  },
  teacherSpeakingText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#FFFFFF",
  },
  scoreCard: {
    marginHorizontal: 16,
    marginBottom: Platform.OS === "ios" ? 14 : 16,
    marginTop: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  scoreCol: {
    flex: 1,
    alignItems: "center",
  },
  scoreLabel: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#64748B",
  },
  scoreValue: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    marginTop: 2,
  },
  scoreDivider: {
    width: 1,
    height: 28,
    backgroundColor: "#F1F5F9",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
    maxHeight: "80%",
  },
  modalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E5E7EB",
    alignSelf: "center",
    marginBottom: 16,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  modalSubtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#6C4EF5",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  modalTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#0D132B",
    marginTop: 2,
  },
  modalCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  modalSection: {
    marginBottom: 16,
  },
  modalSectionTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    color: "#0D132B",
    marginBottom: 8,
  },
  goalRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  goalCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ECFDF5",
    alignItems: "center",
    justifyContent: "center",
  },
  goalCheckText: {
    fontSize: 11,
    color: "#10B981",
    fontWeight: "bold",
  },
  goalText: {
    flex: 1,
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#374151",
  },
  aiPromptBox: {
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  aiPromptText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#475569",
    lineHeight: 18,
  },
  phraseCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F1F5F9",
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  phraseCardActive: {
    borderColor: "#6C4EF5",
    backgroundColor: "#F5F3FF",
  },
  phraseCardNative: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#0D132B",
  },
  phraseCardTranslation: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  phraseCardPhonetic: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 1,
  },
  activePill: {
    backgroundColor: "#6C4EF5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activePillText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 11,
    color: "#FFFFFF",
  },
  modalConfirmBtn: {
    backgroundColor: "#6C4EF5",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 12,
  },
  modalConfirmBtnText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#FFFFFF",
  },
  completionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
    marginHorizontal: 24,
    alignItems: "center",
    marginBottom: "auto",
    marginTop: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  completionTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
    color: "#0D132B",
    textAlign: "center",
  },
  completionDesc: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
  },
  xpRewardBadge: {
    backgroundColor: "#FFF4E5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 16,
  },
  xpRewardText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    color: "#FF8A00",
  },
  completionStatsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#F9FAFC",
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 20,
  },
  statCol: {
    alignItems: "center",
  },
  statScore: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#6C4EF5",
  },
  statLabel: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#6B7280",
    marginTop: 2,
  },
  stateContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  stateHeader: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  stateCenterContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: -40,
  },
  errorIconBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FEF2F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  stateTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#0D132B",
    textAlign: "center",
    marginBottom: 8,
  },
  stateDescription: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  primaryActionButton: {
    backgroundColor: "#208AEF",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryActionText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#FFFFFF",
  },
  secondaryActionButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
  },
  secondaryActionText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#64748B",
  },
});

export default function AITeacherLessonView(props: AITeacherLessonViewProps) {
  const { user } = useUser();
  const router = useRouter();
  const { selectedLanguageId } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const [isReconnectingAgent, setIsReconnectingAgent] = useState(false);

  const clientRef = useRef<StreamVideoClient | null>(null);
  const callRef = useRef<Call | null>(null);
  const agentSessionIdRef = useRef<string | null>(null);
  const currentCallIdRef = useRef<string | null>(null);
  const isCancelledRef = useRef(false);

  const stopAgentSession = async (callId?: string, sessionId?: string) => {
    const cid = callId || currentCallIdRef.current;
    const sid = sessionId || agentSessionIdRef.current;
    agentSessionIdRef.current = null;
    if (cid && sid) {
      try {
        const baseUrl = process.env.EXPO_PUBLIC_API_URL
          ? process.env.EXPO_PUBLIC_API_URL.replace(/\/$/, "")
          : Platform.OS === "android"
          ? "http://10.0.2.2:8081"
          : "http://localhost:8081";

        await fetch(`${baseUrl}/api/agent/stop`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ callId: cid, sessionId: sid }),
        }).catch(() => {});
      } catch (e) {
        console.warn("[STREAM] Error stopping Vision Agent session:", e);
      }
    }
  };

  const getLessonMetadata = () => {
    const currentLangId = selectedLanguageId || DEFAULT_LANGUAGE_ID;
    const currentLanguage = SUPPORTED_LANGUAGES.find((l) => l.id === currentLangId);
    const activeLesson =
      (props.lessonId ? getLessonById(props.lessonId) : null) ||
      LESSONS.find(
        (l) =>
          l.unitId.startsWith(`unit-${currentLangId}`) &&
          l.type === "audio_ai" &&
          !completedLessonIds.includes(l.id)
      ) ||
      LESSONS.find(
        (l) =>
          l.unitId.startsWith(`unit-${currentLangId}`) &&
          l.type === "audio_ai"
      ) ||
      LESSONS.find((l) => l.type === "audio_ai") ||
      LESSONS[0];

    const customData = {
      language: currentLanguage?.name || "English",
      target_language: currentLanguage?.name || "English",
      lesson_title: activeLesson?.title || "",
      lesson: activeLesson?.title || "",
      goals: activeLesson?.goals?.map((g) => g.description) || [],
      vocabulary: activeLesson?.vocabulary?.map((v) => `${v.word}: ${v.translation}`) || [],
      phrases: activeLesson?.phrases?.map((p) => `${p.text} (${p.translation})`) || [],
      prompt: activeLesson?.aiTeacherPrompt?.systemPrompt || "",
      teacher_prompt: activeLesson?.aiTeacherPrompt?.systemPrompt || "",
      scenario: activeLesson?.aiTeacherPrompt?.scenario || "",
      student_id: user?.id || "",
      userId: user?.id || "",
    };

    return { currentLangId, currentLanguage, activeLesson, customData };
  };

  const startVisionAgentSession = async (
    baseUrl: string,
    callId: string,
    streamCall: Call,
    customData: any
  ): Promise<boolean> => {
    try {
      console.log(`[STREAM 4/5] Launching Vision Agent backend for call ${callId}...`);
      const agentStartRes = await fetch(`${baseUrl}/api/agent/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          callId,
          callType: "audio_room",
          userId: user?.id,
          custom: customData,
        }),
      });

      if (agentStartRes.ok) {
        const agentData = await agentStartRes.json();
        if (agentData?.session_id) {
          agentSessionIdRef.current = agentData.session_id;
          console.log(`[STREAM 4/5] Vision Agent session started successfully! (session_id: ${agentData.session_id})`);
        }
        try {
          await streamCall.microphone.enable();
          console.log("[STREAM 4/5] Student microphone confirmed enabled after agent launch");
        } catch (micReErr) {
          console.warn("[STREAM] Microphone re-enable warning:", micReErr);
        }
        return true;
      } else {
        const errText = await agentStartRes.text().catch(() => "");
        console.warn(`[STREAM 4/5] Vision Agent start returned HTTP ${agentStartRes.status}: ${errText}`);
        return false;
      }
    } catch (agentErr) {
      console.error("[STREAM 4/5] Vision Agent start network error (is backend running?):", agentErr);
      return false;
    }
  };

  const handleRetryAgent = async () => {
    if (!callRef.current || !currentCallIdRef.current || !user) return;
    setIsReconnectingAgent(true);
    try {
      const isAndroidEmulator = Platform.OS === "android" && !Constants.isDevice;
      const baseUrl = isAndroidEmulator
        ? "http://10.0.2.2:8081"
        : process.env.EXPO_PUBLIC_API_URL
        ? process.env.EXPO_PUBLIC_API_URL.replace(/\/$/, "")
        : Platform.OS === "android"
        ? "http://10.0.2.2:8081"
        : "http://localhost:8081";

      const { customData } = getLessonMetadata();
      await startVisionAgentSession(baseUrl, currentCallIdRef.current, callRef.current, customData);
    } finally {
      if (!isCancelledRef.current) {
        setIsReconnectingAgent(false);
      }
    }
  };

  const handleBack = async () => {
    await stopAgentSession();
    const activeCall = callRef.current;
    const activeClient = clientRef.current;
    callRef.current = null;
    clientRef.current = null;

    if (activeCall) {
      try {
        await activeCall.leave().catch(() => {});
      } catch (e) {}
    }
    if (activeClient) {
      try {
        await activeClient.disconnectUser().catch(() => {});
      } catch (e) {}
    }

    if (props.onClose) {
      props.onClose();
    } else if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(tabs)/learn");
    }
  };

  const init = async () => {
    if (!user) return;
    const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY;
    if (!apiKey) {
      setInitError("EXPO_PUBLIC_STREAM_API_KEY is missing from environment.");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setInitError(null);

      // Clean up previous call and client before establishing new connection
      if (agentSessionIdRef.current) {
        await stopAgentSession();
      }
      if (callRef.current) {
        try {
          await callRef.current.leave().catch(() => {});
        } catch (e) {}
        callRef.current = null;
      }
      if (clientRef.current) {
        try {
          await clientRef.current.disconnectUser().catch(() => {});
        } catch (e) {}
        clientRef.current = null;
      }

      const isAndroidEmulator = Platform.OS === "android" && !Constants.isDevice;
      const baseUrl = isAndroidEmulator
        ? "http://10.0.2.2:8081"
        : process.env.EXPO_PUBLIC_API_URL
        ? process.env.EXPO_PUBLIC_API_URL.replace(/\/$/, "")
        : Platform.OS === "android"
        ? "http://10.0.2.2:8081"
        : "http://localhost:8081";

      const endpoint = "/api/stream/token";
      const apiUrl = `${baseUrl}${endpoint}`;

      console.log("[STREAM 1/5] Fetching user token from:", apiUrl);
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      });

      if (!res.ok) {
        throw new Error(`Token endpoint returned HTTP ${res.status}`);
      }

      const data = await res.json();
      if (!data.token) throw new Error("No token returned from server");
      console.log("[STREAM 1/5] Token acquired successfully for user:", user.id);

      // Request runtime microphone permission on Android
      console.log("[STREAM 2/5] Checking microphone permissions...");
      if (Platform.OS === "android") {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
              title: "Microphone Permission",
              message: "AI Teacher needs access to your microphone so you can practice speaking.",
              buttonPositive: "Allow",
            }
          );
          console.log("[STREAM 2/5] RECORD_AUDIO permission status:", granted);
        } catch (permErr) {
          console.warn("[STREAM 2/5] Permission request warning:", permErr);
        }
      } else {
        console.log("[STREAM 2/5] iOS/Web audio permission ready");
      }

      const streamClient = new StreamVideoClient({
        apiKey,
        user: { id: user.id, name: user.fullName || "Student" },
        token: data.token,
      });

      if (isCancelledRef.current) {
        await streamClient.disconnectUser().catch(() => {});
        return;
      }

      clientRef.current = streamClient;
      setClient(streamClient);

      const { currentLanguage, activeLesson, customData } = getLessonMetadata();
      const callId = `lesson-${activeLesson?.id || props.lessonId || "default"}-${user.id}`;
      currentCallIdRef.current = callId;
      console.log(`[STREAM 3/5] Initializing Stream call (type: audio_room, id: ${callId})...`);

      const streamCall = streamClient.call("audio_room", callId);
      callRef.current = streamCall;

      try {
        await streamCall.getOrCreate({
          data: {
            members: [
              { user_id: user.id, role: "admin" },
              { user_id: "ai-teacher", role: "admin" },
            ],
            custom: customData,
          },
        });
      } catch (metaErr) {
        console.warn("[STREAM 3/5] getOrCreate custom data notice:", metaErr);
      }

      try {
        await streamCall.join({ create: true });
        console.log("[STREAM 3/5] Joined call successfully");
        try {
          await streamCall.microphone.enable();
          console.log("[STREAM 3/5] Microphone auto-enabled on join");
        } catch (micErr) {
          console.warn("[STREAM 3/5] Auto-enable mic notice:", micErr);
        }
      } catch (joinErr: any) {
        console.warn("[STREAM 3/5] Join error:", joinErr);
        if (
          joinErr?.name === "SecurityError" ||
          joinErr?.name === "MediaStreamError" ||
          joinErr?.message?.includes("Permission denied") ||
          joinErr?.message?.includes("MediaStreamError")
        ) {
          console.log("[STREAM 3/5] Retrying join with microphone disabled...");
          await streamCall.microphone.disable().catch(() => {});
          await streamCall.join({ create: true });
        } else {
          throw joinErr;
        }
      }

      // Automatically launch Python Vision Agent for this call
      await startVisionAgentSession(baseUrl, callId, streamCall, customData);

      // Start Stream Closed Captions (Live Captions feature)
      try {
        console.log("[STREAM 5/5] Starting closed captions...");
        const supportedCaptionLangs = ["en", "es", "fr", "de", "it", "pt", "ja", "ko", "zh", "th", "id", "ru", "auto"];
        const targetLang = (currentLanguage?.id || "en").toLowerCase();
        const langCode = (supportedCaptionLangs.includes(targetLang) ? targetLang : "auto") as any;
        await streamCall.startClosedCaptions({ language: langCode });
        console.log(`[STREAM 5/5] Closed captions started with language: ${langCode}`);
      } catch (captionErr) {
        try {
          await streamCall.startClosedCaptions();
          console.log("[STREAM 5/5] Closed captions started (fallback default)");
        } catch (fbErr) {
          console.warn("[STREAM 5/5] Could not start closed captions:", fbErr);
        }
      }

      if (!isCancelledRef.current) {
        setCall(streamCall);
      }
    } catch (e: any) {
      console.error("Stream init error:", e);
      if (!isCancelledRef.current) {
        setInitError(
          "Cannot connect to the lesson streaming server.\nPlease make sure the server is running."
        );
      }
    } finally {
      if (!isCancelledRef.current) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    isCancelledRef.current = false;
    const timer = setTimeout(() => {
      init();
    }, 0);

    return () => {
      isCancelledRef.current = true;
      clearTimeout(timer);
      stopAgentSession();
      const activeCall = callRef.current;
      const activeClient = clientRef.current;
      callRef.current = null;
      clientRef.current = null;

      if (activeCall) {
        try {
          activeCall.stopClosedCaptions().catch(() => {});
          activeCall.leave().catch((e) => console.warn("[STREAM] Error leaving call on unmount:", e));
        } catch (e) {}
      }
      if (activeClient) {
        try {
          activeClient.disconnectUser().catch((e) => console.warn("[STREAM] Error disconnecting client on unmount:", e));
        } catch (e) {}
      }
    };
  }, [user?.id, props.lessonId]);

  if (initError) {
    return (
      <SafeAreaView style={styles.stateContainer} edges={["top", "bottom"]}>
        <View style={styles.stateHeader}>
          <TouchableOpacity
            onPress={handleBack}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <Path
                d="M15 19L8 12L15 5"
                stroke="#0D132B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={styles.stateCenterContent}>
          <View style={styles.errorIconBadge}>
            <Text style={{ fontSize: 32 }}>⚠️</Text>
          </View>
          <Text style={styles.stateTitle}>Connection Error</Text>
          <Text style={styles.stateDescription}>{initError}</Text>

          <TouchableOpacity
            style={styles.primaryActionButton}
            onPress={init}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryActionText}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryActionButton}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Text style={styles.secondaryActionText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (isLoading || !client || !call) {
    return (
      <SafeAreaView style={styles.stateContainer} edges={["top", "bottom"]}>
        <View style={styles.stateHeader}>
          <TouchableOpacity
            onPress={handleBack}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <Path
                d="M15 19L8 12L15 5"
                stroke="#0D132B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={styles.stateCenterContent}>
          <ActivityIndicator
            size="large"
            color="#208AEF"
            style={{ marginBottom: 20 }}
          />
          <Text style={styles.stateTitle}>Connecting to AI Teacher...</Text>
          <Text style={styles.stateDescription}>
            Setting up your audio lesson...
          </Text>
          <TouchableOpacity
            style={styles.secondaryActionButton}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Text style={styles.secondaryActionText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <AITeacherLessonContent
          {...props}
          call={call}
          userId={user?.id ?? ""}
          onEndCallSession={stopAgentSession}
          onRetryAgent={handleRetryAgent}
          isReconnectingAgent={isReconnectingAgent}
        />
      </StreamCall>
    </StreamVideo>
  );
}

