module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue-200': '#5669FF',
      'blue': '#5669FF',
      'purple-ct': '#5669FF',
      'black': '#222222',
      'white': '#fff',
      'gray': '#E0E0E0',
      'gray/3': '#d1d1d1',
      'gray/4': '#626262',
      'gray/2': '#bababa',
      'yellow': '#F3A22C',
      'error': '#F65747',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '48px': '48px',
      '36px': '36px',
      '24px': '24px',
      '22px': '22px',
      '20px': '20px',
      '18px': '18px',
      '16px': '16px',
      '14px': '14px',
    },
    extend: {
      flex: {
        center: {
          'justify-content': 'center',
          'align-items': 'center',
        }
      }
    },
  },
  plugins: [],
}
