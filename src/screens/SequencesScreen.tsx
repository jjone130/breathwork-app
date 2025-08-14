import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { ThemedText, ThemedView } from "../components/Themed";

export default function SequencesScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText variant="title">Sequences</ThemedText>
        <Button title="New" onPress={() => {}} />
      </View>
      <FlatList
        data={[]}
        keyExtractor={(i, idx) => String(idx)}
        ListEmptyComponent={<ThemedText variant="subtitle">No sequences yet.</ThemedText>}
        renderItem={() => null}
      />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }
});


