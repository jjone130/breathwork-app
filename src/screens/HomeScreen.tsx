import React from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import { ThemedText, ThemedView } from "../components/Themed";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText variant="title" style={styles.title}>
        Practice
      </ThemedText>
      <ThemedText variant="subtitle">Your breathwork session starts here.</ThemedText>
      <View style={{ height: 16 }} />
      <Button title="Start Session" onPress={() => Alert.alert("Coming soon", "Timer engine next.")} />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { marginBottom: 8 }
});


