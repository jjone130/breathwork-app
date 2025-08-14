import React, { createContext, useContext, PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';

type Theme = {
  colors: {
    background: string;
    text: string;
    primary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    background: '#0B1416',
    text: '#FFFFFF',
    primary: '#5CD6C0',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <StatusBar barStyle="light-content" />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}


