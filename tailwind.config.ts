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
        "purple": "#9747FF",
        "gray": "#252323",
        "link": "#00FF94",
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
        ".border-gradient" :{
          "border-width": "2px",
          "border-style": "solid",
          "border-image": 'linear-gradient(to right, #00FF94, #43DBFD)',
          "border-image-slice": "1",
          "border-radius": "6px"
        },
        ".card" : {
          "border-radius": "5px",
          "background-color": "#FFF",
          "box-shadow": "4px 4px 17px 0px rgba(194, 240, 250, 0.50)",
          "padding": "50px"
        },
        ".card-hover" : {
          "box-shadow": "4px 4px 21px 0px rgba(105, 213, 237, 0.50)"
        }
      };
      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    },
  ],
};

export default config;
