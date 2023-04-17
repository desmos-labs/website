import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import { useTranslation } from "next-i18next"

export default function PopupSliderComponent({
  lastIndex,
  slide,
  index,
  nextButtons,
}) {
  const { t } = useTranslation("index")
  const buttons = nextButtons
  const [nowIndex, setNowIndex] = useState(1)

  useEffect(() => {
    if (index === 0) {
      setNowIndex(lastIndex)
    } else {
      setNowIndex(index - 1)
    }
  }, [])

  function NextArrow(props) {
    const { className, style, onClick } = props
    return (
      <span
        onClick={onClick}
        style={{ ...style, display: "block" }}
        className={`${className} group md:leading-[27px] leading-[21px] md:tracking-[0.0015em] tracking-[0.0025em] md:text-[18px] text-[14px] text-end before:content-[''] min-w-[180px] static w-full mt-16 md:mt-0 pb-8 md:absolute md:top-[108%] bottom-28 lg:top-[100%] xl:top-[125%] right-0 text-[#FFAA90] transition-all ease-out duration-500 hover:text-desmos-primary`}
      >
        {t(buttons[nowIndex].nextPopupSubtitle)}
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="#FFAA90"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:fill-[#ff6c3e] group-hover:-rotate-45 transition-all ease-out duration-500 inline ml-1 align-middle"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.20771 0.37373C6.46156 0.119889 6.87311 0.119889 7.12695 0.37373L11.7936 5.0404C12.0475 5.29424 12.0475 5.7058 11.7936 5.95964L7.12695 10.6263C6.87311 10.8801 6.46156 10.8801 6.20771 10.6263C5.95387 10.3725 5.95387 9.9609 6.20771 9.70706L9.76476 6.15002H0.667334C0.308349 6.15002 0.017334 5.859 0.017334 5.50002C0.017334 5.14103 0.308349 4.85002 0.667334 4.85002H9.76476L6.20771 1.29297C5.95387 1.03913 5.95387 0.627571 6.20771 0.37373Z"
          />
        </svg>
      </span>
    )
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    )
  }

  const settings = {
    // lazyLoad: "progressive",
    adaptiveHeight: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current) => {
      setNowIndex(current)
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  }

  return <Slider {...settings}>{slide}</Slider>
}
