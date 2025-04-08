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
    <div className="flex flex-wrap gap-2">
      {themes.map((item, index) => (
        <div key={index}>
          <button data-theme={item}
            onClick={() => changeTheme(item)}
            className="btn capitalize m-1"
          >
            {item}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Settings;
