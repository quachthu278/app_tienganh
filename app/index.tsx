import AsyncStorage from "@react-native-async-storage/async-storage";
import { SUPPORTED_LANGUAGES } from "@/data/languages";
import { useLanguageStore, useProgressStore } from "@/store";
import { useAuth } from "@clerk/expo";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { signOut } = useAuth();
  const { selectedLanguageId, clearLanguage } = useLanguageStore();
  const { resetProgress } = useProgressStore();
  const language = SUPPORTED_LANGUAGES.find((l) => l.id === selectedLanguageId);

  const handleSignOut = async () => {
    // Clear this user's progress before signing out so the next account
    // cannot read stale XP, streak, or completedLessonIds.
    resetProgress();
    await AsyncStorage.removeItem("lingo-progress-storage");
    await signOut();
    router.replace("/onboarding");
  };

  const handleClearLanguage = async () => {
    await clearLanguage();
    router.replace("/language-selection");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* App Title */}
        <Text style={styles.title}>Lingua</Text>

        {/* Selected Language Display */}
        {language && (
          <View style={styles.languageCard}>
            <Text style={styles.languageFlag}>{language.flag}</Text>
            <Text style={styles.languageName}>{language.name}</Text>
            <Text style={styles.languageNative}>{language.nativeName}</Text>
          </View>
        )}

        {/* Primary Action Button */}
        <TouchableOpacity
          style={styles.chooseButton}
          activeOpacity={0.85}
          onPress={() => router.push("/language-selection")}
        >
          <Text style={styles.chooseButtonText}>Choose a Language</Text>
        </TouchableOpacity>

        {/* Secondary Action: Sign Out */}
        <TouchableOpacity
          style={styles.textButton}
          activeOpacity={0.6}
          onPress={handleSignOut}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

        {/* Test Utility: Clear Language (Test) */}
        <TouchableOpacity
          style={styles.textButton}
          activeOpacity={0.6}
          onPress={handleClearLanguage}
        >
          <Text style={styles.clearText}>Clear Language (Test)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFC",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 32,
    lineHeight: 40,
    color: "#6C4EF5",
    textAlign: "center",
    marginBottom: 24,
  },
  chooseButton: {
    backgroundColor: "#6C4EF5",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 20,
    width: "100%",
    maxWidth: 240,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  chooseButtonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 22,
    textAlign: "center",
  },
  textButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  signOutText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
  clearText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#EF4444",
    textAlign: "center",
  },
  languageCard: {
    alignItems: "center",
    gap: 6,
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  languageFlag: {
    fontSize: 48,
  },
  languageName: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#1F2937",
    textAlign: "center",
  },
  languageNative: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});
