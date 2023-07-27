const { i18n } = require("./next-i18next.config")

const isProd = process.env.NODE_ENV === "production"
const domainName = isProd ? "https://desmos.network" : ""

/** @type {import("next").NextConfig} */

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  // Set a custom asseet prefix for CSS and JS files to always load from the
  // same domain name. This is to make sure that even pages that are tied to
  // custom domains (i.e. dpm.desmos.network) load their images properly.
  assetPrefix: domainName,
  images: {
    // Set a custom path for images to always load from the same domain name.
    // This is to make sure that even pages that are tied to custom domains
    // (i.e. dpm.desmos.network) load their images properly.
    path: `${domainName}/_next/image`,
  },
  experimental: {
    // https://mmazzarolo.com/blog/2021-04-10-nextjs-scroll-restoration/
    scrollRestoration: true,
  },
  i18n,
}
