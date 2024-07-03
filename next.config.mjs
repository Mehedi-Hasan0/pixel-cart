/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vinova-ecommax.myshopify.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
