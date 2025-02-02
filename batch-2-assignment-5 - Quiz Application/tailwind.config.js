/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#28194b",
                dark: {
                    primary: "#0B192C",
                    secondary: "#021526",
                    optimal: "#1E3E62",
                    textPrimary: "#F3F3E0",
                    textSecondary: "#219B9D",
                },
                /*  primary: "#7D49F8", */
                red: {
                    400: "#f87171",
                    500: "#f43f5e",
                    600: "#e11d48",
                },
                green: {
                    400: "#86efac",
                    500: "#22c55e",
                    600: "#16a34a",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
