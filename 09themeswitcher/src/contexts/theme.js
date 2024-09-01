import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "Light",
  darkTheme: () => {},
  LightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
//creating custom hook

export default function useTheme() {
  return useContext(ThemeContext);
}
