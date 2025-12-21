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
        <button className="
    fixed bottom-5 right-5 z-[1000] 
    flex h-[50px] w-[50px] items-center justify-center 
    rounded-full 
    bg-[var(--bg-primary)] text-[var(--text-primary)] text-[20px]
    shadow-[var(--shadow-soft)] 
    transition-all duration-300 ease-in-out
    hover:scale-105
    focus:outline-none
  "
   onClick={toggleTheme}>{theme === darkTheme ? <AweFontIcons iconName={'eye'} /> :
            <AweFontIcons iconName={['far', 'eye']} />}</button>
        {children}
    </ThemeContext.Provider>
}