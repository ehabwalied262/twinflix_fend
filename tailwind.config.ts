/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#100c08',
      primary: '#d90429',
      secondary: '#00406c',
      orange: '#fb8500',
      gray: '#ced4da',
      white: '#FFFFF',
      success: '#355e3b',
    },    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text)-(transparent|background|primary|secondary|orange|gray|white|gray|success)/
    },
  ],
}
