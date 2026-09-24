import { View, ActivityIndicator } from "react-native";

/**
 * Root entry point. Routing is handled entirely by _layout.tsx.
 * This screen just shows a spinner while the layout decides where to go.
 */
export default function Index() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}
    >
      <ActivityIndicator size="large" color="#6C4EF5" />
    </View>
  );
}
