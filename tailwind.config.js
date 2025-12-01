/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#1a1b1e',
                    surface: '#25262b',
                    display: '#141517',
                },
                accent: {
                    primary: '#4dabf7',
                    secondary: '#fa5252',
                    tertiary: '#ffd43b',
                }
            },
            boxShadow: {
                'neumorph': '5px 5px 10px #161719, -5px -5px 10px #2c2d33',
                'neumorph-inset': 'inset 5px 5px 10px #161719, inset -5px -5px 10px #2c2d33',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            animation: {
                'press': 'press 0.1s ease-in-out',
            },
            keyframes: {
                press: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(0.95)' },
                }
            }
        },
    },
    plugins: [],
}
