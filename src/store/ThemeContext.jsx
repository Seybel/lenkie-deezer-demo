import { createContext, useState, useEffect } from "react";
import ThemeWrapper from "./ThemeWrapper";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  // Toogle theme mode - light & dark
  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    localStorage.setItem("theme", newTheme);
  };

  // Set the initial theme mode based on local storage or system preference
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (localTheme) {
      setThemeMode(localTheme);
    } else if (prefersDarkMode) {
      setThemeMode("dark");
    }
  }, []);

  // Listen for changes in the user's system preference for dark mode
  useEffect(() => {
    // System theme preference change handler
    const handleSystemThemeChange = (e) => {
      setThemeMode(e.matches ? "dark" : "light");
    };

    const systemThemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
    systemThemeMedia.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemThemeMedia.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeWrapper themeMode={themeMode}>{children}</ThemeWrapper>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
