import React, { useEffect, useMemo, useState } from "react"
import Slider from "react-slick"
import { useTranslation } from "next-i18next"
import NextArrow from "./components/NextArrow"
import PrevArrow from "./components/PrevArrow"

export interface PopupSliderButtonData {
  readonly nextPopupSubtitle: string
}

export interface PopupSliderProps {
  readonly lastIndex: number
  readonly slide: any
  readonly index: number
  readonly nextButtons: PopupSliderButtonData[]
}

const PopupSlider = (props: PopupSliderProps) => {
  const { lastIndex, slide, index, nextButtons } = props

  const { t } = useTranslation("index")
  const [nowIndex, setNowIndex] = useState(1)

  useEffect(() => {
    if (index === 0) {
      setNowIndex(lastIndex)
    } else {
      setNowIndex(index - 1)
    }
  }, [])

  const settings = useMemo(() => {
    return {
      // lazyLoad: "progressive",
      adaptiveHeight: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: index,
      nextArrow: (
        <NextArrow text={t(nextButtons[nowIndex].nextPopupSubtitle)} />
      ),
      prevArrow: <PrevArrow />,
      beforeChange: (current: any) => {
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
  }, [t, nowIndex, nextButtons])

  return <Slider {...settings}>{slide}</Slider>
}

export default PopupSlider
