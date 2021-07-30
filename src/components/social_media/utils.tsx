import React from "react";
import { DiscordIcon, TwitterIcon, GithubIcon } from "@icons";

export const socialMediaLinks: {
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <DiscordIcon />,
    className: "discord",
    url: "https://t.me/desmosnetwork",
  },
  {
    component: <GithubIcon />,
    className: "github",
    url: "https://github.com/forbole",
  },
  {
    component: <TwitterIcon />,
    className: "twitter",
    url: "https://twitter.com/bigdipperlive",
  },
];
