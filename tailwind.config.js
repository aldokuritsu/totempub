/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "./js/**/*.js"],
    theme: {
        extend: {
            colors: {
                'brand': {
                    DEFAULT: '#e63946', // Primary brand color (example)
                    dark: '#1d3557',
                    light: '#f1faee',
                    accent: '#a8dadc',
                    secondary: '#457b9d',
                }
            },
            fontFamily: {
                'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
