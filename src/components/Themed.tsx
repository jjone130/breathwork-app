import React from "react";
import { View, Text, type ViewProps, type TextProps } from "react-native";
import { useTheme } from "../theme";

export const ThemedView: React.FC<ViewProps> = ({ style, ...props }) => {
  const { palette } = useTheme();
  return <View style={[{ backgroundColor: palette.bg }, style]} {...props} />;
};

export const ThemedText: React.FC<TextProps & { variant?: "title" | "subtitle" | "body" }> = ({
  style,
  variant = "body",
  ...props
}) => {
  const { palette } = useTheme();
  const base = { color: palette.text };
  const variants: Record<string, any> = {
    title: { fontSize: 28, fontWeight: "700" },
    subtitle: { fontSize: 16, color: palette.subtext },
    body: { fontSize: 16 }
  };
  return <Text style={[base, variants[variant], style]} {...props} />;
};


