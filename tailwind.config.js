/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", "synthwave"], // এখানে তুমি যে থিমগুলো ব্যবহার করতে চাও
    },
};

module.exports = config;
