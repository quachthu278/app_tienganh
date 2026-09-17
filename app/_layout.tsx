import "../global.css";

import { ClerkProvider, useAuth } from "@clerk/expo";
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
import { useEffect } from "react";
import { Platform, Text, View } from "react-native";

import { useLanguageStore } from "@/store";

// Keep the splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";

// Inner layout that handles fonts + auth & language redirect
function AppLayout() {
  const { isLoaded, isSignedIn } = useAuth();
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

  useEffect(() => {
    if (!ready) return;
    SplashScreen.hideAsync();

    const isAuthRoute =
      rootSegment === "sign-in" ||
      rootSegment === "sign-up" ||
      rootSegment === "forgot-password" ||
      rootSegment === "onboarding";

    const isMainApp = rootSegment === "(tabs)";

    if (!isSignedIn) {
      if (!isAuthRoute) {
        router.replace("/onboarding");
      }
    } else {
      // User is signed in
      if (!selectedLanguageId) {
        // Authenticated user has no selected language -> route to /language-selection
        if (rootSegment !== "language-selection") {
          router.replace("/language-selection");
        }
      } else {
        // Authenticated user has selected a language
        if (isAuthRoute || (!isMainApp && rootSegment !== "language-selection")) {
          router.replace("/(tabs)/");
        }
      }
    }
  }, [ready, isSignedIn, selectedLanguageId, rootSegment, router]);

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

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <AppLayout />
    </ClerkProvider>
  );
}
