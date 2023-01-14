import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) currentTheme = "dark-theme";

    element.classList.add(currentTheme)
  }, []);
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        break;
    }
  }, [theme]);

  return [theme, setTheme];
};

export default Theme;
