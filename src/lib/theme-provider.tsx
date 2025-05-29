// // src/lib/theme-provider.tsx
// import React, { createContext, useContext, useEffect, useState } from "react"

// type Theme = "light" | "dark" | "system"

// const ThemeContext = createContext<{
//   theme: Theme
//   setTheme: (theme: Theme) => void
// }>({
//   theme: "system",
//   setTheme: () => {},
// })

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setThemeState] = useState<Theme>(() => {
//     if (typeof window === "undefined") return "system"
//     return (localStorage.getItem("theme") as Theme) || "system"
//   })

//   const setTheme = (theme: Theme) => {
//     setThemeState(theme)
//     localStorage.setItem("theme", theme)
//   }

//   useEffect(() => {
//     const root = window.document.documentElement
//     const isDark =
//       theme === "dark" ||
//       (theme === "system" &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)

//     root.classList.toggle("dark", isDark)
//   }, [theme])

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export const useTheme = () => useContext(ThemeContext)
