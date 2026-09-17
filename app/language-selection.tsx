import LanguageCard from "@/components/LanguageCard";
import { images } from "@/constants/images";
import { DEFAULT_LANGUAGE_ID, SUPPORTED_LANGUAGES } from "@/data/languages";
import { Language, LanguageCode } from "@/types/learning";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLanguageStore } from "@/store";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const { selectedLanguageId: storedLanguageId, setSelectedLanguage } =
    useLanguageStore();

  // Selected language state, defaulting to stored language or 'es' (Spanish)
  const [selectedLanguageId, setSelectedLanguageId] = useState<LanguageCode>(
    storedLanguageId || DEFAULT_LANGUAGE_ID,
  );

  // Search input state
  const [searchQuery, setSearchQuery] = useState("");

  // Safe back navigation
  const handleBack = () => {
    if (storedLanguageId) {
      if (router.canGoBack()) {
        router.back();
      } else {
        router.replace("/(tabs)/");
      }
    } else {
      // If user has not confirmed a language yet, confirm current selection before proceeding to '/'
      setSelectedLanguage(selectedLanguageId);
      router.replace("/(tabs)/");
    }
  };

  // Select language handler
  const handleSelectLanguage = (language: Language) => {
    setSelectedLanguageId(language.id);
  };

  // Confirm selection & proceed
  const handleConfirm = () => {
    setSelectedLanguage(selectedLanguageId);
    router.replace("/(tabs)/");
  };

  // Filter languages based on user search query
  const filteredLanguages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SUPPORTED_LANGUAGES;
    return SUPPORTED_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* ── Top Header ── */}
        <View className="flex-row items-center justify-between px-6 pt-2 pb-4">
          <TouchableOpacity
            onPress={handleBack}
            activeOpacity={0.7}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            style={styles.backButton}
          >
            <Text style={styles.backChevron}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle} className="text-[#0D132B]">
            Choose a language
          </Text>

          {/* Spacer to balance back button */}
          <View style={{ width: 40 }} />
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* ── Search Bar ── */}
          <View className="flex-row items-center px-4 py-3 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search languages"
              placeholderTextColor="#94A3B8"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
            />
            {searchQuery.length > 0 && Platform.OS !== "ios" && (
              <TouchableOpacity
                onPress={() => setSearchQuery("")}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Text style={styles.clearIcon}>✕</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* ── Section Title ── */}
          <Text style={styles.sectionTitle} className="text-[#0D132B] mb-3">
            {searchQuery.trim() ? "Search Results" : "Popular"}
          </Text>

          {/* ── Language List ── */}
          {filteredLanguages.length > 0 ? (
            filteredLanguages.map((language) => (
              <LanguageCard
                key={language.id}
                language={language}
                isSelected={selectedLanguageId === language.id}
                onSelect={handleSelectLanguage}
              />
            ))
          ) : (
            <View className="py-10 items-center justify-center">
              <Text style={{ fontSize: 32, marginBottom: 8 }}>🌍</Text>
              <Text
                style={styles.emptyTitle}
                className="text-[#0D132B] text-center"
              >
                No languages found
              </Text>
              <Text
                style={styles.emptySubtitle}
                className="text-[#64748B] text-center mt-1"
              >
                Try searching for another language name
              </Text>
            </View>
          )}

          {/* ── Confirmation Button (Replaces "See all languages") ── */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleConfirm}
            className="w-full bg-[#6C4EF5] rounded-full py-4 items-center justify-center mt-3 mb-2"
            style={styles.confirmButtonShadow}
          >
            <Text style={styles.confirmButtonText}>Continue</Text>
          </TouchableOpacity>

          {/* ── Earth Landmark Illustration ── */}
          <View style={styles.earthContainer}>
            <Image
              source={images.earth}
              style={styles.earthImage}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    width: "100%",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  backChevron: {
    fontSize: 34,
    lineHeight: 38,
    color: "#0D132B",
    fontWeight: "300",
  },
  headerTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 19,
    lineHeight: 26,
    textAlign: "center",
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
    opacity: 0.6,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "#0D132B",
    padding: 0,
  },
  clearIcon: {
    fontSize: 14,
    color: "#94A3B8",
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 24,
  },
  emptyTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  emptySubtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  confirmButtonShadow: {
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  confirmButtonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 22,
  },
  earthContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 8,
    width: "100%",
    overflow: "hidden",
  },
  earthImage: {
    width: SCREEN_WIDTH - 48,
    height: (SCREEN_WIDTH - 48) * 0.75,
    maxHeight: 260,
  },
});
