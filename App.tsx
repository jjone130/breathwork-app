/**
 * App.tsx — Entry point for Breathflow.
 * - Sets up ThemeProvider and AppNavigator (auth-gated tabs).
 */
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/theme';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
