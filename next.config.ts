// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   serverExternalPackages: ["pino", "pino-pretty"],
//   images: {
//     qualities: [75, 100], // allow quality 100
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "img.freepik.com",
//         port: "",
//       },
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com",
//         port: "",
//       },
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//         port: "",
//       },
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino", "pino-pretty"],
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // <-- NEW
        port: "",
      },
    ],
  },
};

export default nextConfig;
