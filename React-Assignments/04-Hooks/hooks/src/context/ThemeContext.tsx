import { ReactNode, createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface IThemeContext {
  theme: Theme;
  toggleTheme: () => null;
}

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (): null => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    return null;
  };

  const contextValue: IThemeContext = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
