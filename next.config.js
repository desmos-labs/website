const { i18n } = require("./next-i18next.config")

const isProd = process.env.NODE_ENV === "production"

/** @type {import("next").NextConfig} */

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "https://desmos.network" : undefined,
  experimental: {
    // https://mmazzarolo.com/blog/2021-04-10-nextjs-scroll-restoration/
    scrollRestoration: true,
  },
  i18n,
}
