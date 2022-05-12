const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      'libs/design-system/src/**/!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(__dirname, 'apps/flow-docs/app/**/!(*.stories|*.spec).{ts,tsx,html}'),
  ],
  theme: {
    fontSize: {
      '2xs': ['0.625rem', { lineHeight: '1rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.25rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    screens: {
      xs: '360px',
      sm: '375px',
      md: '768px',
      lg: '1440px',
      xl: '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Acumin Pro', ...defaultTheme.fontFamily.sans],
        display: 'Termina',
        mono: 'IBM Plex Mono',
      },
      colors: {
        green: '#00EF8B',
        blue: '#3B3CFF',
        purple: '#A269FF',
        yellow: '#F1E72A',
        pink: '#F4C6FB',
        red: '#F67D65',
        'red-error': '#FC4723',
        'green-success': '#05CE7A',
        'blue-hover': '#3031D1',
        'blue-hover-dark': '#A183E0',
        'green-dark': '#47FFB2',
        'blue-dark': '#B795FF',
        'pink-dark': '#F4C6FB',
        'red-error-dark': '#F67D65',
        'green-success-dark': '#7AFFC',
        'main-gray': {
          50: '#F6F7F9',
          100: '#DEE2E9',
          200: '#ABB3BF',
          300: '#69717E',
          400: '#2F353F',
        },
      },
      spacing: {
        micro: defaultTheme.spacing['1'],
        xxs: defaultTheme.spacing['2'],
        xs: defaultTheme.spacing['4'],
        s: defaultTheme.spacing['6'],
        m: defaultTheme.spacing['10'],
        xl: defaultTheme.spacing['16'],
        '2xl': defaultTheme.spacing['20'],
        '3xl': '7.5rem',
        '4xl': '12.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
