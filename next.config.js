/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default', 'en', 'hi'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: false,
  reactStrictMode: true,
}

module.exports = nextConfig
