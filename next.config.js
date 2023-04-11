const { i18n } = require("./next-i18next.config")

/** @type {import('next').NextConfig} */

module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    // https://mmazzarolo.com/blog/2021-04-10-nextjs-scroll-restoration/
    scrollRestoration: true,
  },
  i18n,
}
