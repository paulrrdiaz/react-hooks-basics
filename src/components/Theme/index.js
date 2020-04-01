import React, { createContext, useState } from "react";

export const themes = {
  light: {
    primary: "gray",
    background: "blue",
  },
  dark: {
    primary: "white",
    background: "green",
  },
};

export const ThemeContext = createContext(themes);

export const ThemeProvider = ({ children }) => {
  const toggleTheme = () => {
    setState(prevState => ({
      ...prevState,
      theme: prevState.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  const [state, setState] = useState({ theme: themes.light, toggleTheme });
  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>;
};
