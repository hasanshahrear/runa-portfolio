import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "primary": "#0D0B0B",
      },
      backgroundClip: {
        text: 'text'
      },
      linearGradientColors: {
        'gradient-90': '90deg, #00FF94 0%, #43DBFD 100%'
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(89deg, #00FF94 0.68%, #5FFDFD 80.87%)',
      },
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover'],
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.global-background': {
          'backgroundImage': 'linear-gradient(to right, #00FF94, #43DBFD)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'backgroundClip': 'text',
          'color': 'transparent'
        },
      };
      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    },
  ],
};

export default config;
