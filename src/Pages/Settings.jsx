import React from "react";

const themes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
  "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
  "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
  "night", "coffee", "winter", "dim", "nord", "sunset"
];

const Settings = () => {
  const changeTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {themes.map((theme, index) => (
        <div
          key={index}
          data-theme={theme}
          className="theme-preview rounded-lg border border-base-300 p-4 flex flex-col items-center justify-between shadow h-40"
        >
          <div className="text-sm font-semibold capitalize mb-2">{theme}</div>
          <div className="flex gap-1 mb-2">
            <div className="w-5 h-5 rounded-full bg-primary"></div>
            <div className="w-5 h-5 rounded-full bg-secondary"></div>
            <div className="w-5 h-5 rounded-full bg-accent"></div>
            <div className="w-5 h-5 rounded-full bg-neutral"></div>
            <div className="w-5 h-5 rounded-full bg-base-100 border"></div>
          </div>
          <button
            onClick={() => changeTheme(theme)}
            className="btn btn-xs"
          >
            Apply
          </button>
        </div>
      ))}
    </div>
  );
};

export default Settings;
