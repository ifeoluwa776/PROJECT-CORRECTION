/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to cleanly export your working static pages
  images: {
    unoptimized: true, // Completely disables Vercel's network image blocking
  },
};

export default nextConfig;


