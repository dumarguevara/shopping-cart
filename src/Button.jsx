import { useState } from 'react'
 
export default function Button() {
    const [theme, settheme] = useState("dark")
 
    const handleToggle = () => {
 const newTheme = theme === "light" ? "dark" : "light"
 settheme(newTheme)
 document.body.dataset.theme = theme
    }
    return (
        <>
            <button className="themeBtn" onClick={handleToggle}>
                {theme=== "light" ? <span>cambiar a modo claro</span> : <span>cambiar a modo oscuro</span>}
            </button>
        </>
    )
}