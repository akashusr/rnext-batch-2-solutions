/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1.25rem",
            },
            colors: {
                primary: "#00D991",
                dark: "#171923",
                light: "#fff",
                body: "#1D1E28",
                "moviedb-red": "#E50914",
                "moviedb-black": "#221F1F",
                "moviedb-gray": "#353535",
            },
        },
    },
    plugins: [],
};
