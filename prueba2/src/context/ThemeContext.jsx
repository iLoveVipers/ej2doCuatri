import { Children, createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'white')

    let colors = {
        white: 'grey',
        blue: 'lightblue'
    }

    document.querySelector('body').style.backgroundColor = colors[theme]
    localStorage.setItem('theme', theme)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}