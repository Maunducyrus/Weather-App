This is a weather app built in Next.js and Typescript utilising ripple ui from tailwind css to style components.
The weather data is retrieved from an api built in laravel.

## Getting Started

Clone the project:

```bash
git clone https://github.com/Celine-Bowen/weather-app-frontend.git
```

install the dependencies:

```bash
npm install
```

then install tailwind css:

```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

Create Tailwind CSS configuration:

```bash
npx tailwindcss init -p
```

Install Ripple Ui:

```bash
npm install rippleui
```

Configure ripple ui in your tailwind.config.js:

```bash
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/rippleui/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
	plugins: [require("rippleui")],
};
export default config;
```

Import ripple ui from global.css:

```bash
@import 'rippleui/dist/css/styles.css';
@import 'rippleui/dist/css/base.css';
@import 'rippleui/dist/css/utilities.css';
@import 'rippleui/dist/css/components.css';
```

Serve the project Locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
