import "../global.css";

import { ClerkProvider, useAuth, useUser } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef } from "react";
import { Platform, Text, View } from "react-native";
import { PostHogProvider } from "posthog-react-native";

import { posthog } from "@/src/config/posthog";
import { useLanguageStore } from "@/store";

// Keep the splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";

// Auth routes that should never trigger a redirect
const AUTH_ROUTES = new Set([
  "sign-in",
  "sign-up",
  "forgot-password",
  "onboarding",
  "sso-callback",
]);

// Inner layout that handles fonts + auth & language redirect
function AppLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const segments = useSegments();
  const router = useRouter();
  const rootSegment = segments[0] as string | undefined;

  const { selectedLanguageId, hasHydrated } = useLanguageStore();

  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const ready = (fontsLoaded || !!fontError) && isLoaded && hasHydrated;

  // Track the last redirect target to avoid re-running the same redirect
  const lastRedirect = useRef<string | null>(null);

  const lastIdentifiedUser = useRef<string | null>(null);
  const lastIdentifiedLang = useRef<string | null>(null);

  useEffect(() => {
    if (!user?.id || !posthog) return;

    const preferredLang = selectedLanguageId || null;

    if (lastIdentifiedUser.current !== user.id) {
      lastIdentifiedUser.current = user.id;
      lastIdentifiedLang.current = preferredLang;
      posthog.identify(user.id, {
        preferred_language: preferredLang,
        $set_once: { signup_date: new Date().toISOString() },
      });
      return;
    }

    if (lastIdentifiedLang.current !== preferredLang) {
      lastIdentifiedLang.current = preferredLang;
      posthog.identify(user.id, { preferred_language: preferredLang });
    }
  }, [user?.id, selectedLanguageId]);

  useEffect(() => {
    if (!ready) return;
    SplashScreen.hideAsync();

    const isAuthRoute = AUTH_ROUTES.has(rootSegment ?? "");
    const isMainApp = rootSegment === "(tabs)";
    const isLessonRoute = rootSegment === "lesson";

    let target: string | null = null;

    if (!isSignedIn) {
      // Not signed in and on a protected route → go to sign-in
      if (!isAuthRoute) {
        target = "/sign-in";
      }
    } else {
      // Signed in but still on SSO callback → let sso-callback handle routing
      if (rootSegment === "sso-callback") return;

      if (!selectedLanguageId) {
        // Signed in but no language → go to language selection
        if (rootSegment !== "language-selection") {
          target = "/language-selection";
        }
      } else {
        // Signed in with language → go to main app if stuck on auth/other route
        if (isAuthRoute || (!isMainApp && !isLessonRoute && rootSegment !== "language-selection")) {
          target = "/(tabs)";
        }
      }
    }

    // Only redirect if we have a target AND it's different from the last redirect
    if (target && lastRedirect.current !== target) {
      lastRedirect.current = target;
      router.replace(target as any);
    } else if (!target) {
      // Reset tracker when no redirect needed (user is already on correct route)
      lastRedirect.current = null;
    }
  }, [ready, isSignedIn, selectedLanguageId, rootSegment]);

  // Don't render until fonts + Clerk + storage are ready
  if (!ready) return null;

  return <Slot />;
}

export default function RootLayout() {
  if (!publishableKey) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#DC2626",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Missing Clerk Publishable Key
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#4B5563",
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          Please ensure EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is set in your .env
          file, then restart Expo with clean cache:
        </Text>
        <View
          style={{
            backgroundColor: "#F3F4F6",
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 8,
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontFamily: Platform.OS === "ios" ? "Courier" : "monospace",
              fontSize: 14,
              color: "#1F2937",
              fontWeight: "600",
            }}
          >
            npx expo start -c
          </Text>
        </View>
      </View>
    );
  }

  const app = (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <AppLayout />
    </ClerkProvider>
  );

  if (!posthog) return app;

  return (
    <PostHogProvider
      client={posthog}
      autocapture={{ captureScreens: false, captureTouches: true }}
    >
      {app}
    </PostHogProvider>
  );
}
