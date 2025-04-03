/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")], // Добавляем плагин DaisyUI
    daisyui: {
        themes: ["light", "dark", "synthwave", "cyberpunk"], // Указываем доступные темы
    },
};  