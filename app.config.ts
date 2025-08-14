/**
 * app.config.ts — Expo configuration for Breathflow.
 */
import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: "Breathflow",
  slug: "breathflow",
  scheme: "breathflow",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon.png", // add placeholder image
  splash: {
    image: "./assets/splash.png", // add placeholder image
    resizeMode: "contain",
    backgroundColor: "#0B1416",
  },
  updates: { fallbackToCacheTimeout: 0 },
  assetBundlePatterns: ["**/*"],
  ios: { supportsTablet: true },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png", // add placeholder
      backgroundColor: "#0B1416",
    },
  },
  web: { bundler: "metro" },
  extra: {
    // We'll read EXPO_PUBLIC_SUPABASE_URL/ANON_KEY from env at runtime.
  },
});


