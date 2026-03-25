/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: {
          1: '#485C11',
          2: '#DFECC6',
          3: '#8E9C78',
          4: '#000000',
          5: '#6F6F6F',
          6: '#929292',
        },
        headline: '#000000',
        paragraph: '#6F6F6F',
        caption: '#485C11',
        divider: '#E9E9E9',
        'mid-green': '#8E9C78',
      },
      fontSize: {
        'display': ['140px', { lineHeight: '0.8', letterSpacing: '-0.05em' }],
        'display-tablet': ['90px', { lineHeight: '0.8', letterSpacing: '-0.05em' }],
        'display-mobile': ['56px', { lineHeight: '0.8', letterSpacing: '-0.05em' }],
        'h1': ['54px', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'h1-mobile': ['36px', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'h2': ['40px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'h2-mobile': ['28px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'h3': ['18px', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'stat': ['64px', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'stat-mobile': ['48px', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'para': ['15px', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        'cap': ['12px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'link': ['14px', { lineHeight: '1.4', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        'pill': '1000px',
        '2.5xl': '20px',
        '3.5xl': '30px',
      },
    },
  },
  plugins: [],
}
