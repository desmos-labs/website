import React from "react";
import {
  DiscordIcon,
  TwitterIcon,
  GithubIcon,
  MediumIcon,
  YoutubeIcon,
} from "@icons";

export const socialMediaLinks: {
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <DiscordIcon />,
    className: "discord",
    url: "https://discord.desmos.network",
  },
  {
    component: <GithubIcon />,
    className: "github",
    url: "https://github.com/desmos-labs",
  },
  {
    component: <TwitterIcon />,
    className: "twitter",
    url: "https://twitter.com/DesmosNetwork",
  },
  {
    component: <MediumIcon />,
    className: "medium",
    url: "https://medium.com/desmosnetwork",
  },
  {
    component: <YoutubeIcon />,
    className: "youtube",
    url: "https://www.youtube.com/channel/UCWsStillLytB4OyWu3-vS4w/",
  },
];
