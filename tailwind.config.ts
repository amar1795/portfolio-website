import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },screens: {
      'below-1445': {'max': '1445px'},
      'below-1100': {'max': '1100px'},
      'below-1050': {'max': '1050px'},
      'below-1025': {'max': '1025px'},
      'below-1000': {'max': '1000px'},
      'below-900': {'max': '899px'},
      'below-925': {'max': '925px'},
      'below-868': {'max': '868px'},
      'below-835': {'max': '835px'},
      'below-700': {'max': '805px'},
      'below-730': {'max': '730px'},
      'below-695': {'max': '695px'},
      'below-650': {'max': '650px'},
      'below-635': {'max': '635px'},
      'below-600': {'max': '600px'},
      'below-590': {'max': '590px'},
      'below-550': {'max': '550px'},
      'below-566': {'max': '566px'},
      'below-500': {'max': '500px'},
      'below-445': {'max': '445px'},
      'below-426': {'max': '426px'},
      'below-460': {'max': '460px'},
      'below-400': {'max': '400px'},
      'below-378': {'max': '378px'},
      'below-370': {'max': '370px'},
      'below-321': {'max': '321px'},
    },
  },
  plugins: [],
};
export default config;
