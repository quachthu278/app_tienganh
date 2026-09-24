import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Svg, { Path, Rect, Circle } from "react-native-svg";
import { useLanguageStore, useProgressStore } from "@/store";
import { I18N } from "@/constants/i18n";
import { getUnitsByLanguage } from "@/data/units";
import { getLessonsByUnitId } from "@/data/lessons";
import {
  getUnitDisplayTitle,
  getUnitDisplayDescription,
  getLessonDisplayTitle,
} from "@/data";
import { Lesson, Unit } from "@/types/learning";
import { images } from "@/constants/images";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// ── SVG Icons ────────────────────────────────────────────────

function ChevronLeftIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18L9 12L15 6"
        stroke="#1F2937"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function BookmarkIcon({ filled }: { filled: boolean }) {
  return (
    <Svg width={28} height={32} viewBox="0 0 28 32" fill="none">
      {/* Orange top tab */}
      <Rect x={16} y={0} width={12} height={8} rx={1} fill="#FF8A00" />
      {/* Bookmark shape */}
      <Path
        d="M4 4C4 2.89543 4.89543 2 6 2H22C23.1046 2 24 2.89543 24 4V30L14 23L4 30V4Z"
        fill={filled ? "#F3F0FF" : "#F9FAFB"}
        stroke={filled ? "#6C4EF5" : "#D1D5DB"}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CheckCircleIcon() {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <Circle cx={15} cy={15} r={15} fill="#22C55E" />
      <Path
        d="M9 15.5L13 19.5L21 11"
        stroke="#FFFFFF"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function LockIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect
        x={4.5}
        y={10.5}
        width={15}
        height={11}
        rx={2}
        stroke="#9CA3AF"
        strokeWidth={1.8}
      />
      <Path
        d="M8.5 10.5V7.5C8.5 5.29086 10.2909 3.5 12.5 3.5C14.7091 3.5 16.5 5.29086 16.5 7.5V10.5"
        stroke="#9CA3AF"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <Circle cx={12} cy={16} r={1.5} fill="#9CA3AF" />
      <Path
        d="M12 17.5V19"
        stroke="#9CA3AF"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </Svg>
  );
}

// ── Main Screen ──────────────────────────────────────────────

export default function LearnScreen() {
  const router = useRouter();
  const { selectedLanguageId, selectedUnitId, setSelectedUnit, appInterfaceLanguage } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();

  const t = I18N[appInterfaceLanguage || "vi"];
  const currentLang = selectedLanguageId ?? "en";

  // Fetch units for current language
  const units = useMemo(() => {
    return getUnitsByLanguage(currentLang);
  }, [currentLang]);

  // Current selected unit
  const currentUnit: Unit | undefined = useMemo(() => {
    if (units.length === 0) return undefined;
    if (selectedUnitId) {
      const found = units.find((u) => u.id === selectedUnitId);
      if (found) return found;
    }
    return units[0];
  }, [units, selectedUnitId]);

  // Fetch all lessons for this unit
  const unitLessons: Lesson[] = useMemo(() => {
    if (!currentUnit) return [];
    return getLessonsByUnitId(currentUnit.id);
  }, [currentUnit]);

  // Active segment tab
  const [activeSegment, setActiveSegment] = useState<"lessons" | "practice">("lessons");

  // Bookmark toggle
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Unit modal toggle
  const [showUnitModal, setShowUnitModal] = useState(false);

  // Default selected = first uncompleted lesson in the unit, or first lesson
  const defaultLessonId = useMemo(() => {
    if (unitLessons.length === 0) return "";
    const firstUncompleted = unitLessons.find((l) => !completedLessonIds.includes(l.id));
    return firstUncompleted?.id ?? unitLessons[0].id;
  }, [unitLessons, completedLessonIds]);

  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  const activeLesson = useMemo(() => {
    if (selectedLessonId) {
      const match = unitLessons.find((l) => l.id === selectedLessonId);
      if (match) return match;
    }
    return unitLessons.find((l) => l.id === defaultLessonId) ?? unitLessons[0] ?? null;
  }, [unitLessons, selectedLessonId, defaultLessonId]);

  // Current unit index for prev/next navigation
  const currentUnitIndex = useMemo(() => {
    if (!currentUnit) return 0;
    return units.findIndex((u) => u.id === currentUnit.id);
  }, [units, currentUnit]);

  // Switch to previous unit or back
  const handleBackOrPrevUnit = () => {
    if (currentUnitIndex > 0) {
      setSelectedUnit(units[currentUnitIndex - 1].id);
    } else {
      if (router.canGoBack()) {
        router.back();
      } else {
        setShowUnitModal(true);
      }
    }
  };

  const handleSelectUnit = (unitId: string) => {
    setSelectedUnit(unitId);
    setShowUnitModal(false);
  };

  // Hero image: show distinct hero banner per unit
  const heroImage = useMemo(() => {
    if (currentUnit?.id === "unit-es-3") return images.lessonCafeHero;
    if (currentUnit?.order === 1) return images.mascotWelcome;
    if (currentUnit?.order === 2) return images.earth;
    if (currentUnit?.order === 3) return images.palace;
    if (currentUnit?.order === 4) return images.lessonCafeHero;
    if (currentUnit?.order === 5) return images.palace;
    if (currentUnit?.order === 6) return images.treasure;
    if (activeLesson?.heroImage) {
      return typeof activeLesson.heroImage === "string"
        ? { uri: activeLesson.heroImage }
        : activeLesson.heroImage;
    }
    return images.lessonCafeHero;
  }, [currentUnit, activeLesson]);

  // Header title = localized unit title (or lesson title as fallback)
  const headerTitle = currentUnit
    ? getUnitDisplayTitle(currentUnit, appInterfaceLanguage)
    : activeLesson
    ? getLessonDisplayTitle(activeLesson, appInterfaceLanguage)
    : "Lessons";

  // Progress
  const unitNumber = currentUnit?.order ?? 1;
  const totalLessonsCount = unitLessons.length || 5;
  const completedCount = useMemo(() => {
    return unitLessons.filter((l) => {
      return completedLessonIds.includes(l.id);
    }).length;
  }, [unitLessons, completedLessonIds]);

  const subtitleText = `${t.unitTitle} ${unitNumber} • ${completedCount} / ${totalLessonsCount} ${t.unitLessons}`;

  // Derive sequential lesson card status
  const getLessonStatus = (lesson: Lesson, index: number) => {
    if (completedLessonIds.includes(lesson.id)) {
      return "completed";
    }
    // AI Teacher Speaking Practice (Lesson 5) is always available so user can practice speaking anytime!
    if (lesson.type === "audio_ai") {
      return "in_progress";
    }
    if (index === 0) {
      return "in_progress";
    }
    const prevLesson = unitLessons[index - 1];
    if (prevLesson && completedLessonIds.includes(prevLesson.id)) {
      return "in_progress";
    }
    return "locked";
  };

  const handleLessonPress = (lesson: Lesson, index: number) => {
    const status = getLessonStatus(lesson, index);
    if (status === "locked") {
      return;
    }
    setSelectedLessonId(lesson.id);
    router.push({
      pathname: "/lesson/[id]",
      params: { id: lesson.id },
    } as any);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ─────────────────────────────────────────── */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleBackOrPrevUnit}
            activeOpacity={0.7}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            style={styles.backBtn}
          >
            <ChevronLeftIcon />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowUnitModal(true)}
            activeOpacity={0.7}
            style={styles.headerTextBlock}
          >
            <View style={styles.headerTitleRow}>
              <Text style={styles.headerTitle} numberOfLines={1}>
                {headerTitle}
              </Text>
              <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M6 9L12 15L18 9"
                  stroke="#6C4EF5"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
            <Text style={styles.headerSubtitle}>
              {subtitleText} • <Text style={styles.headerChangeUnitText}>{t.changeUnit}</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.headerRightActions}>
            <TouchableOpacity
              onPress={() => setShowUnitModal(true)}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 8, right: 8 }}
              style={styles.unitListBtn}
            >
              <Text style={styles.unitListBtnIcon}>📑</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setIsBookmarked(!isBookmarked)}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 6, right: 10 }}
            >
              <BookmarkIcon filled={isBookmarked} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Horizontal Unit Pills ───────────────────────────── */}
        {units.length > 1 && (
          <View style={styles.unitPillsWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.unitPillsScroll}
            >
              {units.map((unit) => {
                const isSelected = unit.id === currentUnit?.id;
                return (
                  <TouchableOpacity
                    key={unit.id}
                    onPress={() => handleSelectUnit(unit.id)}
                    activeOpacity={0.75}
                    style={[
                      styles.unitPill,
                      isSelected && styles.unitPillActive,
                    ]}
                  >
                    <Text style={styles.unitPillIcon}>{unit.icon ?? "📚"}</Text>
                    <Text
                      style={[
                        styles.unitPillText,
                        isSelected && styles.unitPillTextActive,
                      ]}
                    >
                      {t.unitTitle} {unit.order}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}

        {/* ── Hero Banner (edge-to-edge, no horizontal padding) ── */}
        <View style={styles.heroContainer}>
          <Image source={heroImage} style={styles.heroImage} resizeMode="cover" />
        </View>

        {/* ── Segmented Control ───────────────────────────────── */}
        <View style={styles.segmentedBar}>
          {/* Lessons tab */}
          <TouchableOpacity
            onPress={() => setActiveSegment("lessons")}
            activeOpacity={0.8}
            style={styles.segTab}
          >
            <Text
              style={[
                styles.segTabText,
                activeSegment === "lessons" && styles.segTabTextActive,
              ]}
            >
              {t.lessonsTab}
            </Text>
            {activeSegment === "lessons" && <View style={styles.segUnderline} />}
          </TouchableOpacity>

          {/* Practice tab */}
          <TouchableOpacity
            onPress={() => setActiveSegment("practice")}
            activeOpacity={0.8}
            style={styles.segTab}
          >
            <Text
              style={[
                styles.segTabText,
                activeSegment === "practice" && styles.segTabTextActive,
              ]}
            >
              {t.practiceTab}
            </Text>
            {activeSegment === "practice" && <View style={styles.segUnderline} />}
          </TouchableOpacity>
        </View>

        {/* ── Divider ─────────────────────────────────────────── */}
        <View style={styles.divider} />

        {/* ── Content area ────────────────────────────────────── */}
        {activeSegment === "lessons" ? (
          <View style={styles.lessonList}>
            {unitLessons.map((lesson, index) => {
              const status = getLessonStatus(lesson, index);
              const lessonNum = lesson.order || index + 1;

              if (status === "completed") {
                return (
                  <TouchableOpacity
                    key={lesson.id}
                    onPress={() => handleLessonPress(lesson, index)}
                    activeOpacity={0.75}
                    style={styles.cardBase}
                  >
                    <View style={styles.cardLeft}>
                      <Text style={styles.cardLabelMuted}>{t.lesson} {lessonNum}</Text>
                      <Text style={styles.cardTitle}>
                        {getLessonDisplayTitle(lesson, appInterfaceLanguage)}
                      </Text>
                    </View>
                    <CheckCircleIcon />
                  </TouchableOpacity>
                );
              }

              if (status === "in_progress") {
                const isAiLesson = lesson.type === "audio_ai";
                return (
                  <TouchableOpacity
                    key={lesson.id}
                    onPress={() => handleLessonPress(lesson, index)}
                    activeOpacity={0.75}
                    style={[
                      styles.cardInProgress,
                      isAiLesson && { borderColor: "#8B5CF6", backgroundColor: "#FAF5FF" },
                    ]}
                  >
                    <View style={styles.cardLeft}>
                      <Text style={[styles.cardLabelPurple, isAiLesson && { color: "#7C3AED" }]}>
                        {isAiLesson ? "🎙️ AI Practice" : `${t.lesson} ${lessonNum}`}
                      </Text>
                      <Text style={[styles.cardTitle, styles.cardTitleBold]}>
                        {getLessonDisplayTitle(lesson, appInterfaceLanguage)}
                      </Text>
                      <Text
                        style={[
                          styles.inProgressBadge,
                          isAiLesson && { backgroundColor: "#EDE9FE", color: "#6D28D9" },
                        ]}
                      >
                        {isAiLesson ? "Live AI Teacher" : t.inProgress}
                      </Text>
                    </View>
                    <Image
                      source={
                        isAiLesson
                          ? (lesson.thumbnailIcon ?? images.cafeTableIcon)
                          : images.mascotLogo
                      }
                      style={styles.thumbnailIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                );
              }

              // Locked / upcoming
              return (
                <TouchableOpacity
                  key={lesson.id}
                  onPress={() => handleLessonPress(lesson, index)}
                  activeOpacity={0.75}
                  style={styles.cardBase}
                >
                  <View style={styles.cardLeft}>
                    <Text style={styles.cardLabelMuted}>{t.lesson} {lessonNum}</Text>
                    <Text style={styles.cardTitle}>
                      {getLessonDisplayTitle(lesson, appInterfaceLanguage)}
                    </Text>
                    <Text style={styles.subCount}>
                      +{lesson.xp || 15} XP • {lesson.estimatedMinutes || 5} {t.min}
                    </Text>
                  </View>
                  <LockIcon />
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          /* ── Practice Tab ─────────────────────────────────── */
          <View style={styles.practiceList}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.practiceCard}
              onPress={() => {
                if (activeLesson) {
                  router.push({
                    pathname: "/lesson/[id]",
                    params: { id: activeLesson.id },
                  } as any);
                }
              }}
            >
              <View style={styles.practiceCardLeft}>
                <Text style={styles.practiceIcon}>⚡</Text>
                <View>
                  <Text style={styles.practiceCardTitle}>{t.dailySpeakingDrill}</Text>
                  <Text style={styles.practiceCardDesc}>
                    {t.dailySpeakingDesc}
                  </Text>
                </View>
              </View>
              <View style={styles.practiceStartBtn}>
                <Text style={styles.practiceStartBtnText}>{t.start}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.practiceCard}
            >
              <View style={styles.practiceCardLeft}>
                <Text style={styles.practiceIcon}>🃏</Text>
                <View>
                  <Text style={styles.practiceCardTitle}>{t.vocabFlashcards}</Text>
                  <Text style={styles.practiceCardDesc}>
                    {t.vocabFlashcardsDesc}
                  </Text>
                </View>
              </View>
              <View style={[styles.practiceStartBtn, styles.practiceStartBtnSecondary]}>
                <Text style={[styles.practiceStartBtnText, styles.practiceStartBtnTextSecondary]}>
                  {t.start}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.practiceCard}
            >
              <View style={styles.practiceCardLeft}>
                <Text style={styles.practiceIcon}>🎧</Text>
                <View>
                  <Text style={styles.practiceCardTitle}>{t.listeningWorkout}</Text>
                  <Text style={styles.practiceCardDesc}>
                    {t.listeningWorkoutDesc}
                  </Text>
                </View>
              </View>
              <View style={[styles.practiceStartBtn, styles.practiceStartBtnSecondary]}>
                <Text style={[styles.practiceStartBtnText, styles.practiceStartBtnTextSecondary]}>
                  {t.start}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* ── Unit Selection Modal ────────────────────────────── */}
      <Modal
        visible={showUnitModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowUnitModal(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowUnitModal(false)}
        >
          <Pressable
            style={styles.modalSheet}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.modalHandleBar} />
            <View style={styles.modalHeader}>
              <View style={{ flex: 1, paddingRight: 10 }}>
                <Text style={styles.modalTitle}>{t.selectUnit}</Text>
                <Text style={styles.modalSubtitle}>
                  {units.length} {t.unitsAvailable}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setShowUnitModal(false)}
                style={styles.modalCloseBtn}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.modalCloseText}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.modalList}
              contentContainerStyle={styles.modalListContent}
              showsVerticalScrollIndicator={false}
            >
              {units.map((unit) => {
                const isSelected = unit.id === currentUnit?.id;
                const lessons = getLessonsByUnitId(unit.id);
                const unitDoneCount = lessons.filter(
                  (l) => completedLessonIds.includes(l.id)
                ).length;

                return (
                  <TouchableOpacity
                    key={unit.id}
                    onPress={() => handleSelectUnit(unit.id)}
                    activeOpacity={0.75}
                    style={[
                      styles.unitCard,
                      isSelected && styles.unitCardSelected,
                    ]}
                  >
                    <View style={styles.unitCardRow}>
                      <View
                        style={[
                          styles.unitCardIconBox,
                          isSelected && styles.unitCardIconBoxSelected,
                        ]}
                      >
                        <Text style={styles.unitCardEmoji}>
                          {unit.icon ?? "📖"}
                        </Text>
                      </View>
                      <View style={styles.unitCardInfo}>
                        <View style={styles.unitCardTitleRow}>
                          <Text
                            style={[
                              styles.unitCardTitle,
                              isSelected && styles.unitCardTitleSelected,
                            ]}
                            numberOfLines={1}
                          >
                            {getUnitDisplayTitle(unit, appInterfaceLanguage)}
                          </Text>
                          {isSelected && (
                            <View style={styles.unitCurrentBadge}>
                              <Text style={styles.unitCurrentBadgeText}>
                                {unitDoneCount === lessons.length
                                  ? t.completed
                                  : unitDoneCount > 0
                                  ? t.inProgress
                                  : t.selectedUnit}
                              </Text>
                            </View>
                          )}
                        </View>
                        <Text
                          style={styles.unitCardDesc}
                          numberOfLines={2}
                        >
                          {getUnitDisplayDescription(unit, appInterfaceLanguage)}
                        </Text>
                        <Text style={styles.unitCardMeta}>
                          {lessons.length} {t.unitLessons} • {t.unitDone} {unitDoneCount}/{lessons.length}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

// ── Styles ───────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 48,
  },

  // ── Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 14,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 4,
  },
  headerTextBlock: {
    flex: 1,
    paddingHorizontal: 6,
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#111827",
    flexShrink: 1,
  },
  headerSubtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 1,
  },
  headerChangeUnitText: {
    color: "#6C4EF5",
    fontFamily: "Poppins_600SemiBold",
  },
  headerRightActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  unitListBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F3F0FF",
    alignItems: "center",
    justifyContent: "center",
  },
  unitListBtnIcon: {
    fontSize: 18,
  },

  // ── Hero Banner (full-width, no padding)
  heroContainer: {
    width: SCREEN_WIDTH,
    height: 210,
    backgroundColor: "#E8E4F9",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },

  // ── Segmented Control (tab bar style)
  segmentedBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 6,
  },
  segTab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    position: "relative",
  },
  segTabText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#9CA3AF",
  },
  segTabTextActive: {
    fontFamily: "Poppins_600SemiBold",
    color: "#6C4EF5",
  },
  segUnderline: {
    position: "absolute",
    bottom: 0,
    left: "15%",
    right: "15%",
    height: 3,
    backgroundColor: "#6C4EF5",
    borderRadius: 2,
  },

  // ── Divider below segmented bar
  divider: {
    height: 1,
    backgroundColor: "#F3F4F6",
    marginBottom: 16,
  },

  // ── Lesson List
  lessonList: {
    paddingHorizontal: 20,
    gap: 10,
  },

  // Base card (completed + locked)
  cardBase: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EBEBF0",
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
      },
      android: { elevation: 1 },
    }),
  },

  // In-progress card: purple border + lavender bg
  cardInProgress: {
    backgroundColor: "#F5F3FF",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#7C5CF6",
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        shadowColor: "#7C5CF6",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.14,
        shadowRadius: 8,
      },
      android: { elevation: 3 },
    }),
  },

  cardLeft: {
    flex: 1,
    paddingRight: 12,
  },
  cardLabelMuted: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 2,
  },
  cardLabelPurple: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#7C5CF6",
    marginBottom: 2,
  },
  cardTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#111827",
  },
  cardTitleBold: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#111827",
  },
  inProgressBadge: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#7C5CF6",
    marginTop: 3,
  },
  subCount: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 3,
  },
  thumbnailIcon: {
    width: 52,
    height: 52,
  },

  // ── Practice Tab
  practiceList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  practiceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EBEBF0",
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: { elevation: 1 },
    }),
  },
  practiceCardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  practiceIcon: {
    fontSize: 26,
  },
  practiceCardTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#111827",
  },
  practiceCardDesc: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 1,
  },
  practiceStartBtn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  practiceStartBtnSecondary: {
    backgroundColor: "#F3F0FF",
  },
  practiceStartBtnText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#FFFFFF",
  },
  practiceStartBtnTextSecondary: {
    color: "#6C4EF5",
  },

  // ── Unit Pills Bar
  unitPillsWrapper: {
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  unitPillsScroll: {
    paddingHorizontal: 20,
    gap: 8,
  },
  unitPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F9FAFB",
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
  },
  unitPillActive: {
    backgroundColor: "#6C4EF5",
    borderColor: "#6C4EF5",
  },
  unitPillIcon: {
    fontSize: 14,
  },
  unitPillText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#4B5563",
  },
  unitPillTextActive: {
    color: "#FFFFFF",
    fontFamily: "Poppins_600SemiBold",
  },

  // ── Unit Selection Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    justifyContent: "flex-end",
  },
  modalSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: "85%",
    paddingTop: 12,
    paddingBottom: Platform.OS === "ios" ? 34 : 20,
  },
  modalHandleBar: {
    width: 44,
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 12,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  modalTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#111827",
  },
  modalSubtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#6B7280",
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
  modalCloseText: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "bold",
  },
  modalList: {
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  modalListContent: {
    gap: 12,
    paddingBottom: 24,
  },
  unitCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
      },
      android: { elevation: 2 },
    }),
  },
  unitCardSelected: {
    borderColor: "#6C4EF5",
    backgroundColor: "#F5F3FF",
  },
  unitCardRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  unitCardIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  unitCardIconBoxSelected: {
    backgroundColor: "#EDE9FE",
  },
  unitCardEmoji: {
    fontSize: 24,
  },
  unitCardInfo: {
    flex: 1,
  },
  unitCardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  unitCardTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#111827",
    flex: 1,
  },
  unitCardTitleSelected: {
    color: "#6C4EF5",
    fontFamily: "Poppins_700Bold",
  },
  unitCurrentBadge: {
    backgroundColor: "#6C4EF5",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  unitCurrentBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontFamily: "Poppins_600SemiBold",
  },
  unitCardDesc: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
    lineHeight: 18,
  },
  unitCardMeta: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 6,
  },
});
