import React, { createContext, useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./theme";
import AweFontIcons from "./components/common/IconComponent";

const ThemeContext = createContext();
export const useTheme = () => useState(ThemeContext);

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setTheme(curr => curr === darkTheme ? lightTheme : darkTheme);
    }

    useEffect(() => {
        const rootElement = document.documentElement;
        Object.keys(theme).forEach(key => {
            rootElement.style.setProperty(key, theme[key]);
        });
    }, [theme]);

    const contextValue = {
        theme: theme,
        toggleTheme: toggleTheme,
        isDark: theme === darkTheme,
    }

    return <ThemeContext.Provider value={contextValue}>
        <button className="theme-toggle-btn" onClick={toggleTheme}>{theme === darkTheme ? <AweFontIcons iconName={'eye'} /> :
            <AweFontIcons iconName={['far', 'eye']} />}</button>
        {children}
    </ThemeContext.Provider>
}