/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "95.163.230.84",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // domains: ["127.0.0.1:1337"],
  // images: {
  //   domains: ["127.0.0.1:1337"],
  // },
  // reactStrictMode: true,
};

module.exports = nextConfig;
