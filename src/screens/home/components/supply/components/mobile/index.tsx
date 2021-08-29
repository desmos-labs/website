import React from "react";
import Image from "next/image";
import { NoSSR } from "@components";
import classname from "classnames";
import Carousel from "react-material-ui-carousel";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import NextIcon from "@assets/next-slide-icon.svg";
import PrevIcon from "@assets/prev-slide-icon.svg";
import InitialSupply from "@assets/initial-supply.svg";
import { slideItems } from "./utils";

const MobileCarousel: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { windowSize, isTablet } = useGetScreenSizeHook();
  const screenWidth = windowSize.width;
  return (
    <div className={classname(className, classes.root)}>
      <div className="headerDiv">
        <div className="image-container">
          <Image
            src="/images/supply-slogan.png"
            alt="Supply Slogan"
            className="image"
            layout="fill"
          />
        </div>
        <NoSSR>
          <InitialSupply width={isTablet ? 280 : screenWidth - 150} />
        </NoSSR>
      </div>
      <Carousel
        NextIcon={<NextIcon />}
        PrevIcon={<PrevIcon />}
        indicators={false}
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            borderRadius: 0,
          },
        }}
      >
        {slideItems.map((slide, i) => {
          const Svg = slide.svg;
          return (
            <div className="svgSlide" key={i}>
              <NoSSR>
                <Svg
                  className="roadMap"
                  width={screenWidth - 100}
                  height={400}
                />
              </NoSSR>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
