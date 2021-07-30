export const navItems = [
  {
    key: "solution",
    url: "/#solution",
  },
  {
    key: "desmosProfile",
    url: "/#profile",
  },
  {
    key: "dsmSupply",
    url: "/#supply",
  },
  {
    key: "ourTeam",
    url: "/#team",
  },
  {
    key: "roadMap",
    url: "/#roadmap",
  },
  {
    key: "ecosystem",
    url: "/#ecosystem",
  },
];

export const mapLanguages = {
  en: "English",
  // zht: "中文",
};

const languageKeys = Object.keys(mapLanguages);

export const availableLanguages = languageKeys.map((x) => ({
  key: x,
  display: mapLanguages[x],
}));
