import { useClerk, useSignIn } from "@clerk/expo";
import { useSSO } from "@clerk/expo/experimental";
import * as WebBrowser from "expo-web-browser";
import { images } from "@/constants/images";
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

export default function SignInScreen() {
  const { signIn } = useSignIn();
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
  // Tracks which factor is currently awaiting verification so handleVerify
  // and handleResend use the correct SDK method.
  const [activeFactorStrategy, setActiveFactorStrategy] = useState<
    "email_code" | "phone_code" | "totp" | "backup_code" | null
  >(null);

  // ── Social Auth ──
  const handleSocialAuth = async (
    strategy: "oauth_google" | "oauth_facebook" | "oauth_apple"
  ) => {
    setIsSocialSubmitting(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Social sign-in failed.";
      Alert.alert("Social Sign In", message);
    } finally {
      setIsSocialSubmitting(false);
    }
  };

  // ── Step 1: Sign in with Email + Password ──
  const handleSignIn = async () => {
    if (!signIn) return;
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing fields", "Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Authenticate with email & password using Clerk
      const { error: signInError } = await signIn.password({
        identifier: email.trim(),
        password,
      });

      if (signInError) {
        Alert.alert(
          "Sign In Failed",
          signInError.longMessage || signInError.message
        );
        return;
      }

      // Check sign-in status
      if (signIn.status === "complete") {
        if (signIn.createdSessionId && setActive) {
          await setActive({ session: signIn.createdSessionId });
        } else {
          await signIn.finalize();
        }
        router.replace("/");
      } else if (signIn.status === "needs_first_factor") {
        // Select the email_code factor from the supported list.
        const emailFactor = signIn.supportedFirstFactors?.find(
          (f) => f.strategy === "email_code"
        );
        if (!emailFactor) {
          Alert.alert(
            "Sign In",
            "Email verification is not available for this account. Please use a supported sign-in method."
          );
          return;
        }
        const { error: sendError } = await signIn.emailCode.sendCode();
        if (sendError) {
          Alert.alert("Error", sendError.longMessage || sendError.message);
          return;
        }
        setActiveFactorStrategy("email_code");
        setShowVerification(true);
      } else if (signIn.status === "needs_second_factor") {
        // Dispatch the correct MFA send method based on the first supported
        // second factor. Supported: totp, phone_code, backup_code.
        const secondFactor = signIn.supportedSecondFactors?.[0];
        const strategy = secondFactor?.strategy;

        if (strategy === "phone_code") {
          const { error: sendError } = await signIn.mfa.sendPhoneCode();
          if (sendError) {
            Alert.alert("Error", sendError.longMessage || sendError.message);
            return;
          }
          setActiveFactorStrategy("phone_code");
        } else if (strategy === "totp") {
          // TOTP doesn't require a send step; show the input immediately.
          setActiveFactorStrategy("totp");
        } else if (strategy === "backup_code") {
          setActiveFactorStrategy("backup_code");
        } else {
          Alert.alert(
            "Sign In",
            "Multi-factor authentication is required but no supported method is configured."
          );
          return;
        }
        setShowVerification(true);
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Try again.";
      Alert.alert("Sign In Failed", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Step 2: Verify the code using the correct factor method ──
  const handleVerify = useCallback(
    async (code: string) => {
      if (!signIn || isVerifyingRef.current || code.length < 6) return;

      isVerifyingRef.current = true;
      setIsVerifying(true);
      setVerifyError("");
      try {
        let verifyErr: { longMessage?: string; message?: string } | null = null;

        if (activeFactorStrategy === "email_code") {
          ({ error: verifyErr } = await signIn.emailCode.verifyCode({ code }));
        } else if (activeFactorStrategy === "phone_code") {
          ({ error: verifyErr } = await signIn.mfa.verifyPhoneCode({ code }));
        } else if (activeFactorStrategy === "totp") {
          ({ error: verifyErr } = await signIn.mfa.verifyTOTP({ code }));
        } else if (activeFactorStrategy === "backup_code") {
          ({ error: verifyErr } = await signIn.mfa.verifyBackupCode({ code }));
        } else {
          setVerifyError("No verification factor selected. Please try signing in again.");
          return;
        }

        if (verifyErr) {
          setVerifyError(
            verifyErr.longMessage || verifyErr.message || "Invalid code."
          );
          return;
        }

        // Finalize sign-in — creates the session automatically
        const { error: finalizeError } = await signIn.finalize();
        if (finalizeError) {
          setVerifyError(
            finalizeError.longMessage ||
              finalizeError.message ||
              "Could not complete sign-in."
          );
          return;
        }

        // Session is now active — navigate home
        setShowVerification(false);
        router.replace("/");
      } catch (err: unknown) {
        const message =
          err instanceof Error
            ? err.message
            : "Invalid code. Please try again.";
        setVerifyError(message);
      } finally {
        isVerifyingRef.current = false;
        setIsVerifying(false);
      }
    },
    [signIn, activeFactorStrategy]
  );

  // ── Resend verification code (only applicable for email_code / phone_code) ──
  const handleResend = useCallback(async () => {
    if (!signIn || isVerifyingRef.current) return;
    if (activeFactorStrategy === "email_code") {
      const { error } = await signIn.emailCode.sendCode();
      if (error) {
        Alert.alert("Error", error.longMessage || error.message || "Failed to resend code.");
      }
    } else if (activeFactorStrategy === "phone_code") {
      const { error } = await signIn.mfa.sendPhoneCode();
      if (error) {
        Alert.alert("Error", error.longMessage || error.message || "Failed to resend code.");
      }
    }
    // TOTP and backup_code have no resend step.
  }, [signIn, activeFactorStrategy]);

  // ── Safe back navigation ──
  const handleBack = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/onboarding");
    }
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
            <Text style={styles.title}>Welcome back!</Text>
            <Text style={styles.subtitle}>
              Continue your language journey ✨
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

            {/* Forgot Password Link */}
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity
                onPress={() => router.push("/forgot-password")}
                activeOpacity={0.7}
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            {/* Log In Button */}
            <TouchableOpacity
              style={[
                styles.primaryBtn,
                isSubmitting && styles.primaryBtnDisabled,
              ]}
              onPress={handleSignIn}
              activeOpacity={0.85}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryBtnLabel}>Log In</Text>
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
            <Text style={styles.bottomText}>Don&apos;t have an account? </Text>
            <TouchableOpacity onPress={() => router.replace("/sign-up")}>
              <Text style={styles.bottomLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
        factorStrategy={activeFactorStrategy ?? "email_code"}
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
    marginVertical: 20,
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
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginTop: 2,
    marginBottom: 4,
  },
  forgotPasswordText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#6C4EF5",
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
