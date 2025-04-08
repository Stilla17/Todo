import React from "react";

const themes = ["light", "dark", "cupcake", "bumblebee", "synthwave", "dracula"];

const Calendar = () => {
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {themes.map((theme) => (
        <div>
          <button key={theme} data-theme={theme}
            onClick={() => setTheme(theme)}
            className="btn capitalize m-1"
          >
            {theme}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
