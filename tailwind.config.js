/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Slate_300: "hsl(212, 45%, 89%)",
                c_Slate_500: "hsl(216, 15%, 48%)",
                c_Slate_900: "hsl(218, 44%, 22%)",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"]
            }
        },
    },
    plugins: [],
}

