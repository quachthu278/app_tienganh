/**
 * Lingua Design Tokens
 *
 * Single source of truth for all design values used across the app.
 * Use these tokens when StyleSheet is needed (e.g. SafeAreaView, animations).
 * For NativeWind className styling, use the CSS utilities in global.css.
 */

export const colors = {
  // ── Primary ──────────────────────────────────────────
  brandPurple: "#6C4EF5",
  brandDeepPurple: "#5B3BF6",
  brandBlue: "#4D8BFF",
  brandGreen: "#21C16B",

  // ── Semantic ──────────────────────────────────────────
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  // ── Neutrals ──────────────────────────────────────────
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export const fontFamily = {
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  semiBold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
} as const;

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 13,
  caption: 11,
} as const;

export const lineHeight = {
  tight: 1.2, // H1
  snug: 1.3, // H2, H3
  normal: 1.4, // H4, Caption
  relaxed: 1.6, // Body sizes
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

const theme = {
  colors,
  fontFamily,
  fontSize,
  lineHeight,
  spacing,
  radius,
};

export default theme;
