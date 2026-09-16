import { images } from "@/constants/images";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* ── Logo Row ── */}
      <View className="flex-row items-center justify-center gap-2 pt-2">
        <Image source={images.mascotLogo} style={styles.logoImage} />
        <Text className="text--h2 text-text-primary" style={styles.logoText}>
          TT601-Lingo
        </Text>
      </View>

      {/* ── Headline ── */}
      <View className="px-6 pt-8">
        <Text className="text--h1 text-text-primary">
          Your AI language{" "}
          <Text className="text--h1 text-brand-purple">teacher.</Text>
        </Text>
        <Text className="text--body-md text-text-secondary pt-3">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>
      </View>

      {/* ── Mascot + Speech Bubbles ── */}
      <View className="flex-1 items-center justify-center">
        {/* Speech bubble — Hello! (left) */}
        <View style={[styles.bubble, styles.bubbleLeft]}>
          <Text style={styles.bubbleText}>Hello!</Text>
        </View>

        {/* Speech bubble — ¡Hola! (top right) */}
        <View style={[styles.bubble, styles.bubbleTopRight]}>
          <Text style={[styles.bubbleText, styles.bubbleTextPurple]}>
            ¡Hola!
          </Text>
        </View>

        {/* Mascot illustration */}
        <Image source={images.mascotWelcome} style={styles.mascot} />

        {/* Speech bubble — 你好! (bottom right) */}
        <View style={[styles.bubble, styles.bubbleBottomRight]}>
          <Text style={[styles.bubbleText, styles.bubbleTextRed]}>你好!</Text>
        </View>
      </View>

      {/* ── CTA Button ── */}
      <View className="px-6 pb-8">
        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.85}
          onPress={() => router.push("/")}
        >
          <Text style={styles.ctaLabel}>Get Started</Text>
          <Text style={styles.ctaArrow}>›</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  logoText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
    color: "#0D132B",
  },
  mascot: {
    width: 280,
    height: 280,
    resizeMode: "contain",
  },
  // ── Speech bubbles ──
  bubble: {
    position: "absolute",
    backgroundColor: "#EEF2FF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  bubbleLeft: {
    left: 28,
    top: "22%",
  },
  bubbleTopRight: {
    right: 24,
    top: "8%",
  },
  bubbleBottomRight: {
    right: 24,
    top: "52%",
    backgroundColor: "#FFF0F0",
  },
  bubbleText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#0D132B",
  },
  bubbleTextPurple: {
    color: "#6C4EF5",
  },
  bubbleTextRed: {
    color: "#FF4D4F",
  },
  // ── CTA button ──
  ctaButton: {
    backgroundColor: "#6C4EF5",
    borderRadius: 9999,
    paddingVertical: 18,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  ctaLabel: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "#FFFFFF",
  },
  ctaArrow: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    color: "#FFFFFF",
    lineHeight: 26,
  },
});
