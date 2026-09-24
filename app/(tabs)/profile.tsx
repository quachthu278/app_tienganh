import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser, useAuth } from "@clerk/expo";
import { router } from "expo-router";
import { useLanguageStore, useProgressStore } from "@/store";
import { SUPPORTED_LANGUAGES } from "@/data/languages";
import { getLanguageDisplayName } from "@/data";
import { I18N } from "@/constants/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { posthog } from "@/src/config/posthog";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const {
    selectedLanguageId,
    appInterfaceLanguage,
    setAppInterfaceLanguage,
  } = useLanguageStore();
  const { resetProgress } = useProgressStore();

  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const t = I18N[appInterfaceLanguage || "vi"];
  const language = SUPPORTED_LANGUAGES.find((l) => l.id === selectedLanguageId);

  const fullName = user?.fullName || user?.firstName || "Learner";
  const primaryEmail = user?.primaryEmailAddress?.emailAddress || "No email";
  const imageUrl = user?.imageUrl;

  const handleSignOut = async () => {
    try {
      posthog?.capture("user_signed_out");
      await posthog?.flush();
      posthog?.reset();

      resetProgress();
      await AsyncStorage.removeItem("lingo-progress-storage");
      await signOut();
    } catch (e) {
      console.warn("Sign out error:", e);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 px-6 pt-8 pb-10 bg-[#F9FAFC]">
        {/* Header: User Info */}
        <View className="items-center mb-8">
          <View
            className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4 border-4 border-white"
            style={styles.avatarShadow}
          >
            {imageUrl ? (
              <Image source={{ uri: imageUrl }} style={styles.avatar} />
            ) : (
              <View className="flex-1 items-center justify-center bg-indigo-100">
                <Text className="text-3xl">👤</Text>
              </View>
            )}
          </View>
          <Text className="font-[Poppins_700Bold] text-2xl text-[#1F2937]">
            {fullName}
          </Text>
          <Text className="font-[Poppins_400Regular] text-base text-[#6B7280]">
            {primaryEmail}
          </Text>
        </View>

        {/* Settings List */}
        <View className="flex-1">
          <Text className="font-[Poppins_600SemiBold] text-lg text-[#374151] mb-4">
            {t.preferences}
          </Text>

          {/* 1. Learning Language */}
          <TouchableOpacity
            className="flex-row items-center justify-between bg-white px-5 py-4 rounded-2xl mb-4 border border-gray-100"
            style={styles.cardShadow}
            activeOpacity={0.7}
            onPress={() => router.push("/language-selection")}
          >
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-full bg-[#EEF2FF] items-center justify-center overflow-hidden">
                {language?.flag?.startsWith("http") ? (
                  <Image
                    source={{ uri: language.flag }}
                    className="w-12 h-12 rounded-full overflow-hidden"
                    resizeMode="cover"
                  />
                ) : (
                  <Text className="text-2xl">{language?.flagEmoji ?? language?.flag ?? "🌍"}</Text>
                )}
              </View>
              <View>
                <Text className="font-[Poppins_600SemiBold] text-base text-[#1F2937]">
                  {t.learningLanguage}
                </Text>
                <Text className="font-[Poppins_400Regular] text-sm text-[#6B7280]">
                  {getLanguageDisplayName(language, appInterfaceLanguage) ||
                    (appInterfaceLanguage === "vi" ? "Chưa chọn" : "Not Selected")}
                </Text>
              </View>
            </View>
            <Text className="text-3xl text-[#9CA3AF] pb-1">›</Text>
          </TouchableOpacity>

          {/* 2. App Interface Language (Vi/En) */}
          <TouchableOpacity
            className="flex-row items-center justify-between bg-white px-5 py-4 rounded-2xl mb-4 border border-gray-100"
            style={styles.cardShadow}
            activeOpacity={0.7}
            onPress={() => setShowLanguageModal(true)}
          >
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-full bg-[#F0FDF4] items-center justify-center">
                <Text className="text-2xl">
                  {appInterfaceLanguage === "vi" ? "🇻🇳" : "🇺🇸"}
                </Text>
              </View>
              <View>
                <Text className="font-[Poppins_600SemiBold] text-base text-[#1F2937]">
                  {t.interfaceLanguage}
                </Text>
                <Text className="font-[Poppins_400Regular] text-sm text-[#6B7280]">
                  {appInterfaceLanguage === "vi" ? t.vietnamese : t.english}
                </Text>
              </View>
            </View>
            <Text className="text-3xl text-[#9CA3AF] pb-1">›</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity
          className="bg-[#FEF2F2] py-4 rounded-2xl items-center justify-center border border-[#FCA5A5]"
          activeOpacity={0.7}
          onPress={handleSignOut}
        >
          <Text className="font-[Poppins_600SemiBold] text-base text-[#EF4444]">
            {t.signOut}
          </Text>
        </TouchableOpacity>
      </View>

      {/* ── App Language Selection Modal ────────────────────── */}
      <Modal
        visible={showLanguageModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowLanguageModal(false)}
        >
          <Pressable style={styles.modalCard} onPress={(e) => e.stopPropagation()}>
            <Text style={styles.modalTitle}>{t.selectInterfaceLangTitle}</Text>

            {/* Vietnamese Option */}
            <TouchableOpacity
              style={[
                styles.langOptionBtn,
                appInterfaceLanguage === "vi" && styles.langOptionBtnSelected,
              ]}
              activeOpacity={0.75}
              onPress={() => {
                setAppInterfaceLanguage("vi");
                setShowLanguageModal(false);
              }}
            >
              <Text style={{ fontSize: 26, marginRight: 12 }}>🇻🇳</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.langOptionName}>Tiếng Việt</Text>
                <Text style={styles.langOptionSub}>Ngôn ngữ giao diện tiếng Việt</Text>
              </View>
              {appInterfaceLanguage === "vi" && (
                <Text style={styles.checkmarkBadge}>✓</Text>
              )}
            </TouchableOpacity>

            {/* English Option */}
            <TouchableOpacity
              style={[
                styles.langOptionBtn,
                appInterfaceLanguage === "en" && styles.langOptionBtnSelected,
              ]}
              activeOpacity={0.75}
              onPress={() => {
                setAppInterfaceLanguage("en");
                setShowLanguageModal(false);
              }}
            >
              <Text style={{ fontSize: 26, marginRight: 12 }}>🇺🇸</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.langOptionName}>English</Text>
                <Text style={styles.langOptionSub}>App user interface in English</Text>
              </View>
              {appInterfaceLanguage === "en" && (
                <Text style={styles.checkmarkBadge}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeModalBtn}
              activeOpacity={0.7}
              onPress={() => setShowLanguageModal(false)}
            >
              <Text style={styles.closeModalText}>Đóng / Close</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFC",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarShadow: {
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  modalCard: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  modalTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#1F2937",
    marginBottom: 16,
    textAlign: "center",
  },
  langOptionBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    marginBottom: 12,
  },
  langOptionBtnSelected: {
    borderColor: "#6C4EF5",
    backgroundColor: "#F5F3FF",
  },
  langOptionName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#1F2937",
  },
  langOptionSub: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#6B7280",
  },
  checkmarkBadge: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#6C4EF5",
    marginLeft: 8,
  },
  closeModalBtn: {
    marginTop: 6,
    paddingVertical: 10,
    alignItems: "center",
  },
  closeModalText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#9CA3AF",
  },
});
