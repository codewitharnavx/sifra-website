/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Apple + Linear Warm Light Surfaces
        surface: {
          warm: '#F5F5F2',
          white: '#FFFFFF',
          soft: '#F0F1EE',
          paper: '#FAFAF7',
          border: '#E2E3DF',
          borderSubtle: 'rgba(0, 0, 0, 0.06)',
        },
        // Apple + Linear Deep Dark Surfaces
        dark: {
          DEFAULT: '#101214',
          surface: '#101214',
          graphite: '#191C20',
          elevated: '#22262B',
          border: '#2A2F36',
          borderSubtle: 'rgba(255, 255, 255, 0.08)',
        },
        // Text Palettes
        content: {
          primary: '#17191C',
          secondary: '#686D73',
          tertiary: '#9499A0',
          inversePrimary: '#F8F8F5',
          inverseSecondary: '#A7ABB0',
          inverseTertiary: '#737880',
        },
        // Muted Warm Amber Accent
        amber: {
          DEFAULT: '#C27803',
          light: '#D97706',
          hover: '#B46E02',
          soft: 'rgba(194, 120, 3, 0.08)',
          border: 'rgba(194, 120, 3, 0.22)',
          glow: 'rgba(194, 120, 3, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'squircle-sm': '10px',
        'squircle-md': '14px',
        'squircle-lg': '20px',
        'squircle-xl': '28px',
      },
      boxShadow: {
        'apple-sm': '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)',
        'apple-md': '0 4px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'apple-lg': '0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'apple-dark-sm': '0 1px 3px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'apple-dark-md': '0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'apple-dark-lg': '0 20px 48px -8px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
