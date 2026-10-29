/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  // Use standalone output only when building Docker containers
  ...(process.env.DOCKER_BUILD === "true" && { output: "standalone" }),
};

module.exports = nextConfig;
