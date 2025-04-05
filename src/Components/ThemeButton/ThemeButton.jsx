// ThemeSwitcher.jsx
import ThemeButton from "./ThemeButton";

const themes = ["light", "dark", "cupcake", "bumblebee", "synthwave", "retro"];

const ThemeSwitcher = () => {
  return (
    <div className="p-4 flex flex-wrap gap-2">
      {themes.map((themeName) => (
        <ThemeButton key={themeName} theme={themeName} />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
