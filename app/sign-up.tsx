import { useClerk, useSignUp } from "@clerk/expo";
import { useSSO } from "@clerk/expo/experimental";
import * as WebBrowser from "expo-web-browser";
import { images } from "@/constants/images";
import { posthog } from "@/src/config/posthog";
import { useLanguageStore } from "@/store";
import { router } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
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
import VerificationModal from "@/components/VerificationModal";

WebBrowser.maybeCompleteAuthSession();

export default function SignUpScreen() {
  const { signUp } = useSignUp();
  const { setActive } = useClerk();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSocialSubmitting, setIsSocialSubmitting] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const isVerifyingRef = useRef(false);

  // ── Social Auth ──
  const handleSocialAuth = async (
    strategy: "oauth_google" | "oauth_facebook" | "oauth_apple"
  ) => {
    setIsSocialSubmitting(true);
    try {
      const res = (await startSSOFlow({ strategy })) as any;
      const sessionId = res?.createdSessionId;
      if (sessionId && setActive) {
        await setActive({ session: sessionId });
        posthog?.capture("user_signed_up", {
          auth_method: strategy.replace("oauth_", ""),
        });
        const currentLang = useLanguageStore.getState().selectedLanguageId;
        router.replace(currentLang ? ("/(tabs)" as any) : "/language-selection");
      }
    } catch (err: unknown) {
      posthog?.captureException(
        err instanceof Error ? err : new Error("Social sign-up failed"),
        { flow: "sign_up", auth_method: strategy.replace("oauth_", "") },
      );
      const message =
        err instanceof Error ? err.message : "Social sign-up failed.";
      Alert.alert("Social Sign Up", message);
    } finally {
      setIsSocialSubmitting(false);
    }
  };

  // ── Step 1: Submit email + password ──
  const handleSignUp = async () => {
    if (!signUp) return;
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing fields", "Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Create sign-up with email + password using Core 3 API
      const { error: signUpError } = await signUp.password({
        emailAddress: email.trim(),
        password,
      });

      if (signUpError) {
        Alert.alert(
          "Sign Up Failed",
          signUpError.longMessage || signUpError.message
        );
        return;
      }

      // Send the email verification code
      const { error: sendError } = await signUp.verifications.sendEmailCode();
      if (sendError) {
        Alert.alert("Error", sendError.longMessage || sendError.message);
        return;
      }

      setShowVerification(true);
    } catch (err: unknown) {
      posthog?.captureException(
        err instanceof Error ? err : new Error("Password sign-up failed"),
        { flow: "sign_up", auth_method: "password" },
      );
      const clerkError = (err as any)?.errors?.[0];
      const message =
        clerkError?.longMessage ||
        clerkError?.message ||
        (err instanceof Error ? err.message : "Something went wrong. Try again.");
      Alert.alert("Sign Up Failed", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Step 2: Verify the email code ──
  const handleVerify = useCallback(
    async (code: string) => {
      if (!signUp || isVerifyingRef.current || code.length < 6) return;

      isVerifyingRef.current = true;
      setIsVerifying(true);
      setVerifyError("");
      try {
        const { error: verifyError } =
          await signUp.verifications.verifyEmailCode({ code });

        if (verifyError) {
          setVerifyError(
            verifyError.longMessage || verifyError.message || "Invalid code."
          );
          return;
        }

        // Finalize sign-up and create the session
        if (signUp.status === "complete") {
          if (signUp.createdSessionId && setActive) {
            await setActive({ session: signUp.createdSessionId });
          } else if (signUp.finalize) {
            await signUp.finalize();
          }
          posthog?.capture("user_signed_up", { auth_method: "password" });
          setShowVerification(false);
          const currentLang = useLanguageStore.getState().selectedLanguageId;
          router.replace(currentLang ? ("/(tabs)" as any) : "/language-selection");
        } else {
          setVerifyError("Verification incomplete. Please try again.");
        }
      } catch (err: unknown) {
        posthog?.captureException(
          err instanceof Error ? err : new Error("Sign-up verification failed"),
          { flow: "sign_up_verification", auth_method: "password" },
        );
        const clerkError = (err as any)?.errors?.[0];
        const message =
          clerkError?.longMessage ||
          clerkError?.message ||
          (err instanceof Error ? err.message : "Invalid code. Please try again.");
        setVerifyError(message);
      } finally {
        isVerifyingRef.current = false;
        setIsVerifying(false);
      }
    },
    [signUp, setActive]
  );

  // ── Resend verification code ──
  const handleResend = useCallback(async () => {
    if (!signUp || isVerifyingRef.current) return;
    try {
      const { error } = await signUp.verifications.sendEmailCode();
      if (error) {
        Alert.alert(
          "Error",
          error.longMessage || error.message || "Failed to resend code."
        );
      }
    } catch (err: unknown) {
      const clerkError = (err as any)?.errors?.[0];
      const message =
        clerkError?.longMessage || clerkError?.message || "Failed to resend code.";
      Alert.alert("Error", message);
    }
  }, [signUp]);

  // ── Safe back navigation ──
  const handleBack = useCallback(() => {
    router.replace("/onboarding");
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ── Back Button ── */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>

          {/* ── Heading ── */}
          <View style={styles.headingContainer}>
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
              Start your language journey today ✨
            </Text>
          </View>

          {/* ── Mascot ── */}
          <View style={styles.mascotContainer}>
            <Image source={images.mascotAuth} style={styles.mascot} />
          </View>

          {/* ── Form ── */}
          <View style={styles.form}>
            {/* Email Field */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="alex@gmail.com"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password Field */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                />
                <TouchableOpacity
                  style={styles.eyeBtn}
                  onPress={() => setShowPassword((v) => !v)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁"}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              style={[
                styles.primaryBtn,
                isSubmitting && styles.primaryBtnDisabled,
              ]}
              onPress={handleSignUp}
              activeOpacity={0.85}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryBtnLabel}>Sign Up</Text>
              )}
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Social Buttons */}
            <TouchableOpacity
              style={styles.socialBtn}
              activeOpacity={0.8}
              onPress={() => handleSocialAuth("oauth_google")}
              disabled={isSocialSubmitting}
            >
              <Image source={images.googleLogo} style={styles.socialLogo} />
              <Text style={styles.socialLabel}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialBtn}
              activeOpacity={0.8}
              onPress={() => handleSocialAuth("oauth_facebook")}
              disabled={isSocialSubmitting}
            >
              <Image source={images.facebookLogo} style={styles.socialLogo} />
              <Text style={styles.socialLabel}>Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialBtn}
              activeOpacity={0.8}
              onPress={() => handleSocialAuth("oauth_apple")}
              disabled={isSocialSubmitting}
            >
              <Image source={images.appleLogo} style={styles.socialLogo} />
              <Text style={styles.socialLabel}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>

          {/* ── Bottom Link ── */}
          <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.replace("/sign-in")}>
              <Text style={styles.bottomLink}>Log in</Text>
            </TouchableOpacity>
          </View>

          {/* Required for sign-up flows on Expo web */}
          <View nativeID="clerk-captcha" />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* ── Verification Modal ── */}
      <VerificationModal
        visible={showVerification}
        onClose={() => setShowVerification(false)}
        onVerify={handleVerify}
        onResend={handleResend}
        error={verifyError}
        isLoading={isVerifying}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  backBtn: {
    marginTop: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 32,
    color: "#0D132B",
    lineHeight: 38,
  },
  headingContainer: {
    marginTop: 8,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 28,
    color: "#0D132B",
    lineHeight: 34,
  },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "#6B7280",
    marginTop: 4,
  },
  mascotContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  mascot: {
    width: 160,
    height: 140,
    resizeMode: "contain",
  },
  form: {
    gap: 12,
  },
  inputWrapper: {
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  inputLabel: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 2,
  },
  input: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#0D132B",
    padding: 0,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeBtn: {
    paddingLeft: 8,
  },
  eyeIcon: {
    fontSize: 18,
  },
  primaryBtn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 4,
  },
  primaryBtnDisabled: {
    opacity: 0.7,
  },
  primaryBtnLabel: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    color: "#FFFFFF",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    gap: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#9CA3AF",
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 12,
    backgroundColor: "#FFFFFF",
  },
  socialLogo: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  socialLabel: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#0D132B",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  bottomText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  bottomLink: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#6C4EF5",
  },
});
