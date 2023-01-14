import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:light)");

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        element.classList.remove("light");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.add("light");
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
