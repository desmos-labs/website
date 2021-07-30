// const NextI18Next = require('next-i18next').default;
// const {
//   localeSubpaths, use = [],
// } = require('next/config').default().publicRuntimeConfig;

// const path = require('path');

// module.exports = new NextI18Next({
//   otherLanguages: [],
//   defaultLanguage: 'en',
//   localeSubpaths,
//   localePath: path.resolve('./public/locales'),
//   strictMode: false,
//   use,
// });

module.exports = {
    locales: ['en', 'zht'],
    defaultLocale: 'en',
    pages: {
      '*': ['common', 'home'],
      '/': ['common', 'home'],
    },
    loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
  };