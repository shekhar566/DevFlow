// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./constants/**/*.{ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           "100": "#FFF1E6",
//           "500": "#FF7000",
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         dark: {
//           "100": "#000000",
//           "200": "#0F1117",
//           "300": "#151821",
//           "400": "#212734",
//           "500": "#101012",
//         },
//         light: {
//           "400": "#858EAD",
//           "500": "#7B8EC8",
//           "700": "#DCE3F1",
//           "800": "#F4F6F8",
//           "850": "#FDFDFD",
//           "900": "#FFFFFF",
//         },
//         link: {
//           "100": "#1DA1F2",
//         },
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//       },
//       boxShadow: {
//         "light-100":
//           "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
//         "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
//         "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
//         "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
//         "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
//       },
//       screens: {
//         xs: "420px",
//       },
//       fontFamily: {
//         inter: ["var(--font-inter)"],
//         "space-grotesk": ["var(--font-space-grotesk)"],
//       },
//       borderRadius: {
//         "2": "8px",
//         "1.5": "6px",
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       backgroundImage: {
//         "auth-dark": 'url("/images/auth-dark.png")',
//         "auth-light": 'url("/images/auth-light.png")',
//       },
//     },
//   },
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
// };
// export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{ts,tsx}",
//     "./constants/**/*.{ts,tsx}", // Ensures your constants/ files are scanned
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // --- FIXED: CARECONNECT BLUE ---
//         primary: {
//           "100": "#DBEAFE", // <--- This was likely #FFF1E6 (Orange-ish)
//           "500": "#3B82F6",
//           DEFAULT: "#3B82F6", // Fallback to Blue
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         // -------------------------------
//         dark: {
//           "100": "#000000",
//           "200": "#0F1117",
//           "300": "#151821",
//           "400": "#212734",
//           "500": "#101012",
//         },
//         light: {
//           "400": "#858EAD",
//           "500": "#7B8EC8",
//           "700": "#DCE3F1",
//           "800": "#F4F6F8",
//           "850": "#FDFDFD",
//           "900": "#FFFFFF",
//         },
//         link: {
//           "100": "#1DA1F2", // Link Blue
//         },
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//       },
//       boxShadow: {
//         "light-100":
//           "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
//         "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
//         "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
//         "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
//         "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
//       },
//       screens: {
//         xs: "420px",
//       },
//       fontFamily: {
//         inter: ["var(--font-inter)"],
//         "space-grotesk": ["var(--font-space-grotesk)"],
//       },
//       borderRadius: {
//         "2": "8px",
//         "1.5": "6px",
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       backgroundImage: {
//         "auth-dark": 'url("/images/auth-dark.svg")',
//         "auth-light": 'url("/images/auth-dark.png")',
//       },
//     },
//   },
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
// };
// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- CareConnect Medical Blue Theme ---
        primary: {
          "100": "#DBEAFE", // Light Blue (Backgrounds)
          "500": "#3B82F6", // Medical Blue (Buttons/Actions)
          DEFAULT: "#3B82F6",
          foreground: "hsl(var(--primary-foreground))",
        },
        // -------------------------------------
        dark: {
          "100": "#000000",
          "200": "#0F1117", // Main Dark Background
          "300": "#151821", // Card Background
          "400": "#212734",
          "500": "#101012",
        },
        light: {
          "400": "#858EAD",
          "500": "#7B8EC8",
          "700": "#DCE3F1",
          "800": "#F4F6F8",
          "850": "#FDFDFD",
          "900": "#FFFFFF",
        },
        link: {
          "100": "#1DA1F2",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      screens: {
        xs: "420px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      borderRadius: {
        "2": "8px",
        "1.5": "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "auth-dark": 'url("/images/auth-dark.jpg")',
        "auth-light": 'url("/images/auth-light.jpg")',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
