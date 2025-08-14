import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';

type TimerProps = {
  duration: number; // in seconds
  label?: string;
  onComplete?: () => void;
};

export default function Timer({ duration, label, onComplete }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((previous) => previous - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeLeft]);

  const handleComplete = async () => {
    await playSound();
    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {
      // ignore haptics errors
    }
    if (onComplete) onComplete();
  };

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        // Add this file under src/assets/sounds/beep.mp3
        require('../assets/sounds/beep.mp3')
      );
      try {
        await sound.playAsync();
      } finally {
        // Best-effort cleanup
        setTimeout(() => {
          sound.unloadAsync().catch(() => {});
        }, 1000);
      }
    } catch (error) {
      console.warn('Sound play failed. Ensure src/assets/sounds/beep.mp3 exists.', error);
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Text style={styles.time}>{timeLeft}s</Text>
      <Button title="Start" onPress={() => setTimeLeft(duration)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', padding: 20 },
  label: { fontSize: 20, marginBottom: 10 },
  time: { fontSize: 48, fontWeight: 'bold' },
});


