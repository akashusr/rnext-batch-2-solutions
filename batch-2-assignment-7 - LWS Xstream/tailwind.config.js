/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                "color-bg": "#1A1A1A",
                "color-purple": "#FD088F",
                "color-gray": "#2E2E2E",
            },
            fontFamily: {
                exo: ['"Exo 2"', "sans-serif"],
                play: ['"Play"', "serif"],
            },
        },
    },

    plugins: [],
};
