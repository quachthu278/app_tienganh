import { getLanguageFlagUrl } from "@/data/languages";
import { Language } from "@/types/learning";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLanguageStore } from "@/store";

interface LanguageCardProps {
  language: Language;
  isSelected: boolean;
  onSelect: (language: Language) => void;
}

/**
 * CircularFlag: Renders a clean circular country flag from official flag CDN.
 */
function CircularFlag({ language }: { language: Language }) {
  const uri = getLanguageFlagUrl(language);

  return (
    <View style={styles.flagCircle}>
      <Image
        source={{ uri }}
        style={styles.flagImage}
        resizeMode="cover"
      />
    </View>
  );
}

export default function LanguageCard({
  language,
  isSelected,
  onSelect,
}: LanguageCardProps) {
  const { appInterfaceLanguage } = useLanguageStore();
  const displayName =
    appInterfaceLanguage === "vi" && language.nameVi
      ? language.nameVi
      : language.name;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => onSelect(language)}
      className={`flex-row items-center px-4 py-3.5 rounded-2xl mb-3 ${
        isSelected
          ? "border-2 border-[#6C4EF5] bg-[#FAF9FF]"
          : "border border-[#F1F5F9] bg-white"
      }`}
      style={styles.cardShadow}
    >
      {/* Circular Flag Avatar */}
      <CircularFlag language={language} />

      {/* Language Info */}
      <View className="flex-1 ml-3.5 justify-center">
        <Text style={styles.languageName} className="text-[#0D132B]">
          {displayName}
        </Text>
        {language.learnersCount ? (
          <Text style={styles.learnersCount} className="text-[#64748B] mt-0.5">
            {language.learnersCount}
          </Text>
        ) : null}
      </View>

      {/* Selection State / Chevron */}
      {isSelected ? (
        <View className="w-6 h-6 rounded-full bg-[#6C4EF5] items-center justify-center">
          <Text style={styles.checkmark}>✓</Text>
        </View>
      ) : (
        <View className="w-6 h-6 items-center justify-center">
          <Text style={styles.chevron}>›</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flagCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  flagImage: {
    width: "100%",
    height: "100%",
  },
  cardShadow: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  languageName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  learnersCount: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 16,
  },
  chevron: {
    color: "#94A3B8",
    fontSize: 22,
    lineHeight: 24,
    fontWeight: "400",
  },
});
