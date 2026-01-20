/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F172A',
        'secondary': '#1E293B',
        'accent': '#6366F1',
        'accent-light': '#818CF8',
        'accent-dark': '#4F46E5',
        'glow': '#A78BFA',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1200px',
        },
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
