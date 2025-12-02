/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // required for GitHub Pages
  images: {
    unoptimized: true, // required (GitHub Pages doesn't support image optimization)
  },
  basePath: "/Mr_Bhogesh_Portfolio", // IMPORTANT: replace with your repo name
  assetPrefix: "/Mr_Bhogesh_Portfolio/",
};

module.exports = nextConfig;
