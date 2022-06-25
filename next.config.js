/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["default", "en", "hi"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: false,
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.API_URL,
  },
  images: {
    domains: ["desijewel.in"],
  },
  
};

module.exports = nextConfig;
