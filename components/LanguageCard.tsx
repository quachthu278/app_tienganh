import { Language } from "@/types/learning";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface LanguageCardProps {
  language: Language;
  isSelected: boolean;
  onSelect: (language: Language) => void;
}

/**
 * CircularFlag: Renders a pixel-perfect circular country flag matching the design.
 */
function CircularFlag({ languageId }: { languageId: string }) {
  switch (languageId) {
    case "es":
      // Spain: Red - Yellow (with emblem) - Red
      return (
        <View style={styles.flagCircle}>
          <View style={{ flex: 1, backgroundColor: "#C60B1E" }} />
          <View
            style={{
              flex: 2,
              backgroundColor: "#FFC400",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Spanish Coat of Arms hint */}
            <View
              style={{
                width: 7,
                height: 10,
                backgroundColor: "#C60B1E",
                borderRadius: 2,
                opacity: 0.85,
              }}
            />
          </View>
          <View style={{ flex: 1, backgroundColor: "#C60B1E" }} />
        </View>
      );

    case "fr":
      // France: Blue - White - Red vertical stripes
      return (
        <View style={[styles.flagCircle, { flexDirection: "row" }]}>
          <View style={{ flex: 1, backgroundColor: "#002654" }} />
          <View style={{ flex: 1, backgroundColor: "#FFFFFF" }} />
          <View style={{ flex: 1, backgroundColor: "#ED2939" }} />
        </View>
      );

    case "ja":
      // Japan: White background with centered red sun
      return (
        <View
          style={[
            styles.flagCircle,
            {
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 11,
              backgroundColor: "#BC002D",
            }}
          />
        </View>
      );

    case "ko":
      // South Korea: White background with red/blue Taegeuk
      return (
        <View
          style={[
            styles.flagCircle,
            {
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          {/* Taegeuk circle */}
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 11,
              overflow: "hidden",
            }}
          >
            <View style={{ flex: 1, backgroundColor: "#CD2E3A" }} />
            <View style={{ flex: 1, backgroundColor: "#0047A0" }} />
          </View>
        </View>
      );

    case "de":
      // Germany: Black - Red - Gold horizontal stripes
      return (
        <View style={styles.flagCircle}>
          <View style={{ flex: 1, backgroundColor: "#000000" }} />
          <View style={{ flex: 1, backgroundColor: "#DD0000" }} />
          <View style={{ flex: 1, backgroundColor: "#FFCE00" }} />
        </View>
      );

    case "zh":
      // China: Red with golden star
      return (
        <View
          style={[
            styles.flagCircle,
            {
              backgroundColor: "#DE2910",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Text
            style={{
              color: "#FFDE00",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            ★
          </Text>
        </View>
      );

    case "en":
      // USA / English: Blue canton with stripes
      return (
        <View style={[styles.flagCircle, { backgroundColor: "#B22234" }]}>
          <View
            style={{ flex: 1, backgroundColor: "#FFFFFF", marginVertical: 3 }}
          />
          <View
            style={{ flex: 1, backgroundColor: "#FFFFFF", marginBottom: 3 }}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 22,
              height: 22,
              backgroundColor: "#3C3B6E",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 9 }}>★</Text>
          </View>
        </View>
      );

    case "vi":
      // Vietnam: Red with centered golden star
      return (
        <View
          style={[
            styles.flagCircle,
            {
              backgroundColor: "#DA251D",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Text
            style={{
              color: "#FFFF00",
              fontSize: 20,
              lineHeight: 22,
              fontWeight: "bold",
            }}
          >
            ★
          </Text>
        </View>
      );

    default:
      return (
        <View
          style={[
            styles.flagCircle,
            {
              backgroundColor: "#F1F5F9",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Text style={{ fontSize: 24 }}>🌐</Text>
        </View>
      );
  }
}

export default function LanguageCard({
  language,
  isSelected,
  onSelect,
}: LanguageCardProps) {
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
      <CircularFlag languageId={language.id} />

      {/* Language Info */}
      <View className="flex-1 ml-3.5 justify-center">
        <Text style={styles.languageName} className="text-[#0D132B]">
          {language.name}
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
    borderWidth: 1,
    borderColor: "#F1F5F9",
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
