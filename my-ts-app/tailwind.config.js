/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'apple-sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%': { width: '0.25rem' },
          '100%': { width: '14rem' },
        },
        wiggleback: {
          '0%': { width: '14rem' },
          '100%': { width: '0.25rem' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.2s linear forwards',
        wiggleback: 'wiggleback 0.1s linear forwards',
      },
    }
  },
  plugins: []
};

