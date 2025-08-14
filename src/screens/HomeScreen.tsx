import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Timer from '../components/Timer';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Timer duration={10} label="Inhale" onComplete={() => Alert.alert('Done!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});


