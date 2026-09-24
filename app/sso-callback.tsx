import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useClerk } from "@clerk/expo";
import { useLanguageStore } from "@/store";

/**
 * Handles SSO/OAuth callbacks from Clerk (Google, Apple, Facebook)
 * Deep link: appta://sso-callback?created_session_id=...&rotating_token_nonce=...
 */
export default function SSOCallback() {
  const router = useRouter();
  const { setActive } = useClerk();
  const { selectedLanguageId } = useLanguageStore();
  const params = useLocalSearchParams<{
    created_session_id?: string;
    rotating_token_nonce?: string;
  }>();

  useEffect(() => {
    let isMounted = true;

    async function handleCallback() {
      try {
        const sessionId = params.created_session_id || (params as any).createdSessionId;
        if (sessionId && setActive) {
          await setActive({ session: sessionId });
        }
      } catch (err) {
        console.warn("[SSOCallback] Error activating session:", err);
      } finally {
        if (isMounted) {
          if (!selectedLanguageId) {
            router.replace("/language-selection");
          } else {
            router.replace("/(tabs)" as any);
          }
        }
      }
    }

    handleCallback();

    return () => {
      isMounted = false;
    };
  }, [params.created_session_id, setActive, selectedLanguageId, router]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <ActivityIndicator size="large" color="#6C4EF5" />
    </View>
  );
}
