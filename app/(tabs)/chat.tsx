import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.emoji}>💬</Text>
        <Text style={styles.title}>Chat</Text>
        <Text style={styles.subtitle}>Coming soon</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F9FAFC" },
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 8 },
  emoji: { fontSize: 48 },
  title: { fontFamily: "Poppins_700Bold", fontSize: 24, color: "#1F2937" },
  subtitle: { fontFamily: "Poppins_400Regular", fontSize: 14, color: "#9CA3AF" },
});
