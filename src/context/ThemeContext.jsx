import {createContext,useContext,useEffect,useState} from 'react';
const ThemeContext=createContext();
export function ThemeProvider({children}){const[darkMode,setDarkMode]=useState(()=>localStorage.getItem('nova-theme')==='dark');useEffect(()=>{document.body.className=darkMode?'dark':'';localStorage.setItem('nova-theme',darkMode?'dark':'light')},[darkMode]);return <ThemeContext.Provider value={{darkMode,toggleTheme:()=>setDarkMode(v=>!v)}}>{children}</ThemeContext.Provider>}
export const useTheme=()=>useContext(ThemeContext);
