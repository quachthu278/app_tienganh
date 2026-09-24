import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/expo";
import { router } from "expo-router";
import { useLanguageStore, useProgressStore } from "@/store";
import { DEFAULT_LANGUAGE_ID, SUPPORTED_LANGUAGES, getLanguageFlagUrl } from "@/data/languages";
import { LESSONS } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import {
  getUnitDisplayTitle,
  getLessonDisplayTitle,
  getLanguageDisplayName,
} from "@/data";
import { images } from "@/constants/images";
import { I18N } from "@/constants/i18n";
import { posthog } from "@/src/config/posthog";

const LANGUAGE_GREETINGS: Record<string, string> = {
  es: "Hola",
  fr: "Bonjour",
  ja: "Konnichiwa",
  ko: "Annyeong",
  de: "Hallo",
  zh: "Nǐ Hǎo",
  en: "Hello",
  vi: "Xin chào",
};

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguageId, selectedUnitId, appInterfaceLanguage } = useLanguageStore();
  const { xp, dailyXpGoal, streak, completedLessonIds } = useProgressStore();

  const t = I18N[appInterfaceLanguage || "vi"];

  const currentLangId = selectedLanguageId || DEFAULT_LANGUAGE_ID;
  const language = SUPPORTED_LANGUAGES.find((l) => l.id === currentLangId);
  const userName = user?.firstName || user?.username || "Learner";
  const greeting = (currentLangId && LANGUAGE_GREETINGS[currentLangId]) || "Hello";
  const flagUrl = getLanguageFlagUrl(language);
  const xpProgress = Math.min(xp / dailyXpGoal, 1);

  // Derive units and current unit
  const units = getUnitsByLanguage(currentLangId);
  const currentUnit =
    (selectedUnitId && units.find((u) => u.id === selectedUnitId)) || units[0];

  // Derive lessons for current unit or language
  const unitLessons = currentUnit
    ? LESSONS.filter((l) => l.unitId === currentUnit.id)
    : [];

  const languageLessons = selectedLanguageId
    ? LESSONS.filter((l) => l.unitId.startsWith(`unit-${selectedLanguageId}`))
    : [];

  // Next incomplete lesson in current unit (or language) — drives the Continue button
  const nextLesson =
    unitLessons.find((l) => !completedLessonIds.includes(l.id)) ||
    languageLessons.find((l) => !completedLessonIds.includes(l.id));

  // Derive today's plan from actual lesson data so it reflects the selected
  // language instead of hardcoded Spanish values.
  const standardLesson = languageLessons.find((l) => l.type === "standard");
  const aiLesson = languageLessons.find((l) => l.type === "audio_ai");
  const vocabCount = standardLesson?.vocabulary.length ?? 10;

  const handleLessonStart = (lessonId: string) => {
    posthog?.capture("lesson_started", {
      lesson_id: lessonId,
      language_id: selectedLanguageId,
    });
    router.push({
      pathname: "/lesson/[id]",
      params: { id: lessonId },
    } as any);
  };

  const todayPlan = [
    {
      id: "plan-1",
      icon: "📖",
      iconBg: "#6C4EF5",
      title: t.planLesson,
      subtitle: standardLesson
        ? getLessonDisplayTitle(standardLesson, appInterfaceLanguage)
        : "Start your first lesson",
      lessonId: standardLesson?.id ?? null,
    },
    {
      id: "plan-2",
      icon: "🎧",
      iconBg: "#6C4EF5",
      title: t.planAIConversation,
      subtitle: aiLesson
        ? getLessonDisplayTitle(aiLesson, appInterfaceLanguage)
        : "Practice speaking",
      lessonId: aiLesson?.id ?? null,
    },
    {
      id: "plan-3",
      icon: "💬",
      iconBg: "#EF4444",
      title: t.planNewWords,
      subtitle: `${vocabCount} ${appInterfaceLanguage === "en" ? "words" : "từ vựng"}`,
      lessonId: null,
    },
  ];

  return (
    // SafeAreaView does not support className — use inline style
    <SafeAreaView style={styles.safeArea}>
      {/* ScrollView contentContainerStyle requires StyleSheet */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ──────────────────────────────────────────── */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
          {/* Left: Flag + Greeting */}
          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/language-selection" as any)}
              className="w-8 h-8 rounded-full overflow-hidden bg-[#F3F4F6] items-center justify-center"
              style={styles.headerFlagContainer}
            >
              <Image
                source={{ uri: flagUrl }}
                className="w-8 h-8 rounded-full overflow-hidden"
                style={styles.headerFlag}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <Text className="font-[Poppins_500Medium] text-base text-[#0D132B]">
              {greeting}, {userName || "Learner"}! 👋
            </Text>
          </View>

          {/* Right: Streak + Bell */}
          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-1">
              {/* Image w/h in px → StyleSheet */}
              <Image
                source={images.streakFire}
                style={styles.streakIcon}
                resizeMode="contain"
              />
              <Text className="font-[Poppins_700Bold] text-base text-[#FF8A00]">
                {streak}
              </Text>
            </View>
            <TouchableOpacity
              className="w-9 h-9 rounded-full bg-[#F3F4F6] items-center justify-center"
              activeOpacity={0.7}
            >
              <Text className="text-lg">🔔</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ─────────────────────────────────── */}
        {/* Shadow requires StyleSheet on iOS/Android */}
        <View
          className="mx-5 mb-4 flex-row items-center rounded-[20px] bg-[#FFF8F0] px-5 py-[18px]"
          style={styles.dailyGoalShadow}
        >
          <View className="flex-1 pr-4">
            <Text className="font-[Poppins_500Medium] text-[13px] text-[#6B7280]">
              {t.dailyGoal}
            </Text>
            <View className="flex-row items-baseline gap-1 mt-1">
              <Text className="font-[Poppins_700Bold] text-[32px] text-[#0D132B] leading-10">
                {xp}
              </Text>
              <Text className="font-[Poppins_400Regular] text-base text-[#6B7280] leading-10">
                / {dailyXpGoal} XP
              </Text>
            </View>
            {/* Progress bar — dynamic width must stay in StyleSheet */}
            <View className="h-2 bg-[#FFE4C4] rounded mt-[10px] overflow-hidden">
              <View
                style={[styles.progressFill, { width: `${xpProgress * 100}%` }]}
              />
            </View>
          </View>
          {/* Fixed-size image → StyleSheet */}
          <Image
            source={images.treasure}
            style={styles.treasureImage}
            resizeMode="contain"
          />
        </View>

        {/* ── Continue Learning Banner ─────────────────────────── */}
        {/* Shadow + overflow requires StyleSheet */}
        <View
          className="mx-5 mb-5 flex-row items-center rounded-[20px] bg-[#5B45E8] overflow-hidden pl-5 py-5 min-h-[160px]"
          style={styles.continueShadow}
        >
          {/* Text Side */}
          <View className="flex-1 pr-2 justify-center">
            <Text className="font-[Poppins_400Regular] text-[13px] text-white/85 mb-0.5">
              {t.continueLesson}
            </Text>
            <Text className="font-[Poppins_700Bold] text-[28px] text-white leading-9">
              {getLanguageDisplayName(language, appInterfaceLanguage)}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(tabs)/learn" as any)}
            >
              <Text className="font-[Poppins_400Regular] text-[13px] text-white/80 mb-[14px]">
                {currentUnit?.order && currentUnit.order > 6 ? "A2" : "A1"} • {t.unitTitle} {currentUnit?.order ?? 1}: {getUnitDisplayTitle(currentUnit, appInterfaceLanguage)} ▾
              </Text>
            </TouchableOpacity>
            {/* Show Continue only when an incomplete lesson exists */}
            {nextLesson ? (
              <TouchableOpacity
                className="bg-white rounded-3xl py-[10px] px-6 self-start"
                style={styles.continueButtonShadow}
                activeOpacity={0.85}
                onPress={() => handleLessonStart(nextLesson.id)}
              >
                <Text className="font-[Poppins_600SemiBold] text-[14px] text-[#6C4EF5]">
                  {t.continue}
                </Text>
              </TouchableOpacity>
            ) : (
              <View className="bg-white/40 rounded-3xl py-[10px] px-6 self-start">
                <Text className="font-[Poppins_600SemiBold] text-[14px] text-white/70">
                  {t.completed} 🎉
                </Text>
              </View>
            )}
          </View>

          {/* Palace Image — fixed size → StyleSheet */}
          <Image
            source={images.palace}
            style={styles.palaceImage}
            resizeMode="contain"
          />
        </View>

        {/* ── Today's Plan ─────────────────────────────────────── */}
        <View className="px-5 mb-5">
          {/* Section Header */}
          <View className="flex-row items-center justify-between mb-3">
            <Text className="font-[Poppins_700Bold] text-[17px] text-[#0D132B]">
              {t.todaysPlan}
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="font-[Poppins_600SemiBold] text-[14px] text-[#6C4EF5]">
                View all
              </Text>
            </TouchableOpacity>
          </View>

          {/* Plan Items — derived from selected language lessons */}
          {todayPlan.map((item, index) => {
            const isDone = item.lessonId
              ? completedLessonIds.includes(item.lessonId)
              : false;
            return (
              <View
                key={item.id}
                className={`flex-row items-center py-[14px] ${
                  index < todayPlan.length - 1
                    ? "border-b border-[#F3F4F6]"
                    : ""
                }`}
              >
                {/* Icon — dynamic bg color → inline style only for backgroundColor */}
                <View
                  className="w-12 h-12 rounded-[14px] items-center justify-center"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Text className="text-[22px]">{item.icon}</Text>
                </View>

                {/* Text */}
                <View className="flex-1 ml-3">
                  <Text className="font-[Poppins_600SemiBold] text-[15px] text-[#0D132B]">
                    {item.title}
                  </Text>
                  <Text className="font-[Poppins_400Regular] text-[13px] text-[#6B7280] mt-px">
                    {item.subtitle}
                  </Text>
                </View>

                {/* Checkbox */}
                <View
                  className={`w-7 h-7 rounded-full border-2 items-center justify-center ${
                    isDone
                      ? "bg-[#6C4EF5] border-[#6C4EF5]"
                      : "border-[#D1D5DB]"
                  }`}
                >
                  {isDone && (
                    <Text className="text-white font-[Poppins_700Bold] text-[14px] leading-[18px]">
                      ✓
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // SafeAreaView — className not supported
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  // ScrollView contentContainerStyle — must use StyleSheet
  scrollContent: {
    paddingBottom: 24,
  },
  // Fixed-size image assets — width/height in px
  streakIcon: {
    width: 22,
    height: 22,
  },
  // Shadows — platform-specific, not supported by NativeWind
  dailyGoalShadow: {
    shadowColor: "#FF8A00",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  // Dynamic progress fill — runtime width value
  progressFill: {
    height: 8,
    backgroundColor: "#FF8A00",
    borderRadius: 4,
  },
  // Fixed-size image
  treasureImage: {
    width: 80,
    height: 80,
  },
  // Shadow for continue banner
  continueShadow: {
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  // Shadow for continue button — TouchableOpacity pressed states need StyleSheet
  continueButtonShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  // Fixed-size palace image
  palaceImage: {
    width: 130,
    height: 140,
    marginRight: -10,
  },
  headerFlagContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
  },
  headerFlag: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
