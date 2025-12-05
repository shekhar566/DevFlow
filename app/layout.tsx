// import localFont from "next/font/local";
// import { SessionProvider } from "next-auth/react";
// import { ReactNode } from "react";

// import "./globals.css";
// import { auth } from "@/auth";
// import { Toaster } from "@/components/ui/toaster";
// import { ThemeProvider } from "next-themes";
// import TopLoader from "@/components/ui/top-loader";

// const inter = localFont({
//   src: "./fonts/InterVF.ttf",
//   variable: "--font-inter",
//   weight: "100 200 300 400 500 700 800 900",
// });

// const spaceGrotesk = localFont({
//   src: "./fonts/SpaceGroteskVF.ttf",
//   variable: "--font-space-grotesk",
//   weight: "300 400 500 700",
// });

// export const metadata = {
//   title: "Dev Overflow | Home",
//   description:
//     "Dev Overflow is a community-driven platform to ask and answer real-world programming questions. Learn, grow, and connect with developers around the world.",

//   generator: "Next.js",
//   applicationName: "Dev Overflow",
//   referrer: "origin-when-cross-origin",

//   keywords: [
//     "Dev Overflow",
//     "programming questions",
//     "developer Q&A",
//     "web development",
//     "JavaScript",
//     "React",
//     "Node.js",
//     "algorithms",
//     "data structures",
//     "developer community",
//   ],

//   authors: [{ name: "Shekhar" }, { name: "Dev Overflow", url: "" }],
//   creator: "Shekhar",
//   publisher: "Dev Overflow",

//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },

//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   icons: {
//     icon: "/images/site-logo.svg", // regular favicon
//     shortcut: "/favicon.ico", // browser address bar icon
//     apple: "/apple-touch-icon.png", // Apple devices
//     other: [
//       {
//         rel: "mask-icon",
//         url: "/safari-pinned-tab.svg",
//         color: "#5bbad5",
//       },
//     ],
//   },

//   // Optional: Theme color for browser UI and mobile experience
//   themeColor: "#18181b",

//   // Optional: Color for Microsoft tiles and pinned sites
//   msapplication: {
//     TileColor: "#ffffff",
//     TileImage: "/mstile-150x150.png",
//   },
// };

// const RootLayout = async ({ children }: { children: ReactNode }) => {
//   const session = await auth();

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
//         />
//       </head>
//       <SessionProvider session={session}>
//         <body
//           className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
//         >
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <TopLoader />
//             {children}
//           </ThemeProvider>
//           <Toaster />
//         </body>
//       </SessionProvider>
//     </html>
//   );
// };

// export default RootLayout;

// 1. Rename 'Plus_Jakarta_Sans' to 'PlusJakartaSans' during import
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import "./globals.css";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import TopLoader from "@/components/ui/top-loader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const jakarta = PlusJakartaSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "CareConnect | Clinical Case Consultation",
  description:
    "CareConnect is a secure medical platform for clinicians to share cases, seek second opinions, and collaborate on patient rounds.",

  generator: "Next.js",
  applicationName: "CareConnect",
  referrer: "origin-when-cross-origin",

  keywords: [
    "CareConnect",
    "Medical Cases",
    "Clinical Consultation",
    "Doctors",
    "Health Tech",
    "Patient Rounds",
    "Second Opinion",
  ],

  authors: [{ name: "Shekhar" }, { name: "CareConnect", url: "" }],
  creator: "Shekhar",
  publisher: "CareConnect",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // FIXED: Updated paths based on your file structure
  icons: {
    icon: [
      // 1. Priority: Your custom SVG in public/images/
      { url: "/images/Group.svg", type: "image/svg+xml" },
      // 2. Fallback: The standard ICO file in app/ (Next.js serves this at root)
      { url: "/favicon.ico" },
    ],
    // 3. Apple Touch Icon in public/
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  themeColor: "#0F1117",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* TopLoader for smooth page transitions */}
            <TopLoader />
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
