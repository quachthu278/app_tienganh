import { useClerk, useSignIn } from "@clerk/expo";
import { images } from "@/constants/images";
import { posthog } from "@/src/config/posthog";
import { router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
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

export default function ForgotPasswordScreen() {
  const { signIn } = useSignIn();
  const { setActive } = useClerk();

  // Step 1: email, Step 2: code + new password
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const isSubmittingRef = useRef(false);

  // Countdown timer for resend button
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // ── Safe back navigation ──
  const handleBack = useCallback(() => {
    if (step === 2) {
      setStep(1);
      setCode("");
      setNewPassword("");
      return;
    }
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/sign-in");
    }
  }, [step]);

  // ── Step 1: Send reset password code ──
  const handleSendCode = async () => {
    if (!signIn || isSubmittingRef.current) return;
    if (!email.trim()) {
      Alert.alert("Missing Field", "Please enter your email address.");
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      // Initialize sign in with email
      const { error: createErr } = await signIn.create({
        identifier: email.trim(),
      });

      if (createErr) {
        Alert.alert(
          "Request Failed",
          createErr.longMessage || createErr.message || "Email not found."
        );
        return;
      }

      // Send the password reset code
      if (signIn.resetPasswordEmailCode?.sendCode) {
        const { error: sendErr } =
          await signIn.resetPasswordEmailCode.sendCode();
        if (sendErr) {
          Alert.alert(
            "Error",
            sendErr.longMessage ||
              sendErr.message ||
              "Could not send reset code."
          );
          return;
        }
      } else if (typeof (signIn as unknown as { create: Function }).create === "function") {
        await (signIn as unknown as { create: Function }).create({
          strategy: "reset_password_email_code",
          identifier: email.trim(),
        });
      }

      setStep(2);
      setResendCooldown(30);
      Alert.alert(
        "Code Sent",
        `A 6-digit verification code has been sent to ${email.trim()}.`
      );
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Could not send reset code. Please try again.";
      Alert.alert("Request Failed", message);
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  // ── Step 2: Verify code and submit new password ──
  const handleResetPassword = async () => {
    if (!signIn || isSubmittingRef.current) return;

    if (!code.trim()) {
      Alert.alert("Missing Field", "Please enter the 6-digit code.");
      return;
    }

    if (!newPassword.trim()) {
      Alert.alert("Missing Field", "Please enter your new password.");
      return;
    }

    if (newPassword.trim().length < 8) {
      Alert.alert(
        "Password Too Short",
        "Password must be at least 8 characters long."
      );
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      if (
        signIn.resetPasswordEmailCode?.verifyCode &&
        signIn.resetPasswordEmailCode?.submitPassword
      ) {
        // 1. Verify code
        const { error: verifyErr } =
          await signIn.resetPasswordEmailCode.verifyCode({
            code: code.trim(),
          });
        if (verifyErr) {
          Alert.alert(
            "Reset Failed",
            verifyErr.longMessage ||
              verifyErr.message ||
              "Invalid or expired verification code."
          );
          return;
        }

        // 2. Submit new password
        const { error: submitErr } =
          await signIn.resetPasswordEmailCode.submitPassword({
            password: newPassword,
          });
        if (submitErr) {
          Alert.alert(
            "Reset Failed",
            submitErr.longMessage || submitErr.message
          );
          return;
        }
      } else if (
        typeof (signIn as unknown as { attemptFirstFactor: Function })
          .attemptFirstFactor === "function"
      ) {
        const result = await (
          signIn as unknown as { attemptFirstFactor: Function }
        ).attemptFirstFactor({
          strategy: "reset_password_email_code",
          code: code.trim(),
          password: newPassword,
        });

        if (result?.status !== "complete") {
          Alert.alert("Reset Failed", "Could not complete password reset.");
          return;
        }
      }

      // Finalize and activate the new session
      if (signIn.status === "complete") {
        if (signIn.createdSessionId && setActive) {
          await setActive({ session: signIn.createdSessionId });
        } else if (signIn.finalize) {
          await signIn.finalize();
        }

        posthog?.capture("password_reset_completed", {
          auth_method: "email_code",
        });
        Alert.alert("Success", "Your password has been reset successfully!", [
          {
            text: "Continue",
            onPress: () => router.replace("/"),
          },
        ]);
      } else {
        router.replace("/sign-in");
      }
    } catch (err: unknown) {
      posthog?.captureException(
        err instanceof Error ? err : new Error("Password reset failed"),
        { flow: "password_reset" },
      );
      const message =
        err instanceof Error
          ? err.message
          : "Failed to reset password. Please try again.";
      Alert.alert("Reset Failed", message);
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  // ── Resend code ──
  const handleResend = async () => {
    if (!signIn || resendCooldown > 0 || isSubmitting) return;

    try {
      if (signIn.resetPasswordEmailCode?.sendCode) {
        const { error } = await signIn.resetPasswordEmailCode.sendCode();
        if (error) {
          Alert.alert("Error", error.longMessage || error.message);
          return;
        }
      }
      setResendCooldown(30);
      Alert.alert("Sent", "A new verification code has been sent to your email.");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to resend code.";
      Alert.alert("Error", message);
    }
  };

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
            <Text style={styles.title}>
              {step === 1 ? "Forgot password?" : "Reset password"}
            </Text>
            <Text style={styles.subtitle}>
              {step === 1
                ? "Enter your email to receive a password reset code 🔑"
                : `Enter the code sent to ${email} and your new password ✨`}
            </Text>
          </View>

          {/* ── Mascot ── */}
          <View style={styles.mascotContainer}>
            <Image source={images.mascotAuth} style={styles.mascot} />
          </View>

          {/* ── Form ── */}
          <View style={styles.form}>
            {step === 1 ? (
              <>
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

                {/* Submit Button */}
                <TouchableOpacity
                  style={[
                    styles.primaryBtn,
                    isSubmitting && styles.primaryBtnDisabled,
                  ]}
                  onPress={handleSendCode}
                  activeOpacity={0.85}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <Text style={styles.primaryBtnLabel}>Send Reset Code</Text>
                  )}
                </TouchableOpacity>
              </>
            ) : (
              <>
                {/* 6-Digit Code Field */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputLabel}>6-Digit Code</Text>
                  <TextInput
                    style={styles.input}
                    value={code}
                    onChangeText={setCode}
                    placeholder="123456"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="number-pad"
                    maxLength={6}
                  />
                </View>

                {/* New Password Field */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputLabel}>New Password</Text>
                  <View style={styles.passwordRow}>
                    <TextInput
                      style={[styles.input, styles.passwordInput]}
                      value={newPassword}
                      onChangeText={setNewPassword}
                      secureTextEntry={!showPassword}
                      placeholder="At least 8 characters"
                      placeholderTextColor="#9CA3AF"
                    />
                    <TouchableOpacity
                      style={styles.eyeBtn}
                      onPress={() => setShowPassword((v) => !v)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.eyeIcon}>
                        {showPassword ? "🙈" : "👁"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Resend link */}
                <TouchableOpacity
                  style={styles.resendBtn}
                  onPress={handleResend}
                  disabled={resendCooldown > 0 || isSubmitting}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.resendText,
                      resendCooldown > 0 && styles.resendTextDisabled,
                    ]}
                  >
                    {resendCooldown > 0
                      ? `Resend code in ${resendCooldown}s`
                      : "Didn't receive code? Resend"}
                  </Text>
                </TouchableOpacity>

                {/* Submit Button */}
                <TouchableOpacity
                  style={[
                    styles.primaryBtn,
                    isSubmitting && styles.primaryBtnDisabled,
                  ]}
                  onPress={handleResetPassword}
                  activeOpacity={0.85}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <Text style={styles.primaryBtnLabel}>Reset Password</Text>
                  )}
                </TouchableOpacity>
              </>
            )}
          </View>

          {/* ── Return to Log In ── */}
          <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>Remember your password? </Text>
            <TouchableOpacity onPress={() => router.replace("/sign-in")}>
              <Text style={styles.bottomLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    width: 140,
    height: 120,
    resizeMode: "contain",
  },
  form: {
    gap: 14,
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
  resendBtn: {
    alignItems: "center",
    paddingVertical: 4,
  },
  resendText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#6C4EF5",
  },
  resendTextDisabled: {
    color: "#9CA3AF",
  },
  primaryBtn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 6,
  },
  primaryBtnDisabled: {
    opacity: 0.7,
  },
  primaryBtnLabel: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    color: "#FFFFFF",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
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
