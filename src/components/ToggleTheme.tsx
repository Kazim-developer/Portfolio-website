import { useEffect } from "react";

interface ToggleThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function ToggleTheme({ theme, setTheme }: ToggleThemeProps) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`w-[50px] h-[24px] rounded-[12px] cursor-pointer flex items-center px-[3px] ${
        theme === "dark"
          ? "bg-[var(--color-accent-hover)]"
          : "bg-[var(--color-accent)]"
      }`}
    >
      <div
        className={`w-[20px] h-[20px] rounded-full flex items-center justify-center transition-all duration-300 ${
          theme === "dark"
            ? "translate-x-[26px] bg-black"
            : "translate-x-0 bg-white"
        }`}
      >
        {theme === "dark" ? (
          // Moon icon
          <svg fill="#fff" width="100%" height="100%" viewBox="0 0 24 24">
            <path d="M3,11.985A9.811,9.811,0,0,0,12.569,22a9.528,9.528,0,0,0,8.309-5.059,1,1,0,0,0-.947-1.477c-.131.01-.263.02-.4.02A7.811,7.811,0,0,1,12.569,7.469,8.378,8.378,0,0,1,13.585,3,9.855,9.855,0,0,0,3,11.985Z" />
          </svg>
        ) : (
          // Sun icon
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17.75C10.8628 17.75 9.75106 17.4128 8.80547 16.781C7.85989 16.1491 7.1229 15.2511 6.6877 14.2004C6.25249 13.1498 6.13862 11.9936 6.36049 10.8782C6.58235 9.76284 7.12999 8.73829 7.93414 7.93414C8.73829 7.12999 9.76284 6.58235 10.8782 6.36049C11.9936 6.13862 13.1498 6.25249 14.2004 6.6877C15.2511 7.1229 16.1491 7.85989 16.781 8.80547C17.4128 9.75106 17.75 10.8628 17.75 12C17.7474 13.5242 17.1407 14.9852 16.0629 16.0629C14.9852 17.1407 13.5242 17.7474 12 17.75Z"
              fill="#000000"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
