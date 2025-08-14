import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText, ThemedView } from "../components/Themed";

export default function StatsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText variant="title">Stats</ThemedText>
      <View style={{ height: 16 }} />
      <ThemedText>Current streak: 0 days</ThemedText>
      <ThemedText>Total minutes: 0</ThemedText>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});


