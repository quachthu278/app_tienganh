import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  /** Called with the 6-digit code string when all digits are entered. */
  onVerify: (code: string) => Promise<void>;
  /** Optional: called when the user taps "Resend code" */
  onResend?: () => Promise<void>;
  /** Error message to display below the inputs */
  error?: string;
  isLoading?: boolean;
}

const CODE_LENGTH = 6;

export default function VerificationModal({
  visible,
  onClose,
  onVerify,
  onResend,
  error,
  isLoading = false,
}: Props) {
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputRefs = useRef<(TextInput | null)[]>(Array(CODE_LENGTH).fill(null));

  // Reset code when modal opens and focus first input
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setCode(Array(CODE_LENGTH).fill(""));
        inputRefs.current[0]?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleChange = (text: string, index: number) => {
    if (isLoading) return;

    // Handle pasting all 6 digits
    const cleaned = text.replace(/[^0-9]/g, "");
    if (cleaned.length === CODE_LENGTH) {
      const splitCode = cleaned.split("");
      setCode(splitCode);
      inputRefs.current[CODE_LENGTH - 1]?.blur();
      onVerify(cleaned);
      return;
    }

    const digit = cleaned.slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (digit && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Trigger verify directly on 6th digit input
    const full = newCode.join("");
    if (full.length === CODE_LENGTH && !newCode.includes("")) {
      inputRefs.current[index]?.blur();
      onVerify(full);
    }
  };

  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number,
  ) => {
    if (isLoading) return;
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    if (isLoading) return;
    setCode(Array(CODE_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
    await onResend?.();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />

        <View style={styles.sheet}>
          {/* Handle bar */}
          <View style={styles.handle} />

          {/* Icon */}
          <View style={styles.iconContainer}>
            <Text style={styles.iconEmoji}>📧</Text>
          </View>

          {/* Text */}
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            We sent a verification code to your email. Enter the 6-digit code
            below.
          </Text>

          {/* Code inputs */}
          <View style={styles.codeRow}>
            {Array(CODE_LENGTH)
              .fill(0)
              .map((_, i) => (
                <TextInput
                  key={i}
                  ref={(ref) => {
                    inputRefs.current[i] = ref;
                  }}
                  style={[
                    styles.codeBox,
                    code[i] ? styles.codeBoxFilled : null,
                    error ? styles.codeBoxError : null,
                  ]}
                  value={code[i]}
                  onChangeText={(text) => handleChange(text, i)}
                  onKeyPress={(e) => handleKeyPress(e, i)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                  textAlign="center"
                  caretHidden
                  editable={!isLoading}
                />
              ))}
          </View>

          {/* Loading indicator */}
          {isLoading && (
            <ActivityIndicator
              size="small"
              color="#6C4EF5"
              style={styles.loader}
            />
          )}

          {/* Error message */}
          {!!error && !isLoading && (
            <Text style={styles.errorText}>{error}</Text>
          )}

          {/* Resend */}
          <TouchableOpacity
            style={styles.resendBtn}
            activeOpacity={0.7}
            onPress={handleResend}
            disabled={isLoading}
          >
            <Text style={styles.resendText}>
              Didn&apos;t receive it?{" "}
              <Text style={styles.resendLink}>Resend code</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 28,
    paddingTop: 12,
    paddingBottom: Platform.OS === "ios" ? 48 : 32,
    alignItems: "center",
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    marginBottom: 24,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  iconEmoji: {
    fontSize: 34,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
    color: "#0D132B",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 28,
    paddingHorizontal: 8,
  },
  codeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
  },
  codeBox: {
    width: 48,
    height: 56,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: "#0D132B",
    backgroundColor: "#F6F7FB",
  },
  codeBoxFilled: {
    borderColor: "#6C4EF5",
    backgroundColor: "#EEF2FF",
  },
  codeBoxError: {
    borderColor: "#FF4D4F",
    backgroundColor: "#FFF0F0",
  },
  loader: {
    marginBottom: 12,
  },
  errorText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#FF4D4F",
    textAlign: "center",
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  resendBtn: {
    paddingVertical: 8,
  },
  resendText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  resendLink: {
    fontFamily: "Poppins_600SemiBold",
    color: "#6C4EF5",
  },
});
