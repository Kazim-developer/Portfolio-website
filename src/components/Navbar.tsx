import { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
export default function Navbar() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="flex justify-between items-center gap-[1em] max-w-[1200px] w-[80%] mx-auto mt-[2em] mb-[3em] max-[550px]:w-[90%]">
      <h1>MKR</h1>
      <div className="nav-content flex justify-between items-center gap-[3em]">
        <ToggleTheme theme={theme} setTheme={setTheme} />
        <button className="bg-[var(--color-accent)] hidden">Invite me</button>
      </div>
    </div>
  );
}
