import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import Slider from "react-slick"
import CenteredContentLayout from "@/layouts/content-centered"
import VideoWithPlaceholder from "@/components/video-with-placeholder"
import useBreakpoints from "@/hooks/use-breakpoints"

export default function WhyDesmosSection() {
  const { t } = useTranslation("index")
  const [isMobile, isMd, isLg, isXl] = useBreakpoints()

  function NextArrow(props) {
    const { className, style, onClick } = props
    return (
      <span
        onClick={onClick}
        style={{ ...style, display: "block", border: "solid 1px" }}
        className={`${className} before:content-[''] static top-[50%] w-[40px] h-[40px] bg-desmos-background-primary rounded-full
                border-desmos-white-light md:absolute transition-all ease-out duration-500 hover:border-desmos-primary
                grid justify-items-center group`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="#EFEFEF"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:-rotate-45 group-hover:fill-[#ff6c3e] animate-whyDesmosSlideNextButton slider-next-icon-arrow transition-all ease-out duration-500"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.20771 0.873974C6.46156 0.620134 6.87311 0.620134 7.12695 0.873974L11.7936 5.54064C12.0475 5.79448 12.0475 6.20604 11.7936 6.45988L7.12695 11.1265C6.87311 11.3804 6.46156 11.3804 6.20771 11.1265C5.95387 10.8727 5.95387 10.4611 6.20771 10.2073L9.76476 6.65026H0.667334C0.308349 6.65026 0.017334 6.35925 0.017334 6.00026C0.017334 5.64128 0.308349 5.35026 0.667334 5.35026H9.76476L6.20771 1.79321C5.95387 1.53937 5.95387 1.12782 6.20771 0.873974Z"
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
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <SectionLayout
      contentBackground={{
        image:
          "bg-gradient-orange-mobile md:bg-gradient-orange-tablet lg:bg-none",
        isFullScreenWidth: false,
      }}
      fullScreenHeightOption="onlyDesktop"
    >
      <CenteredContentLayout>
        <div className="pt-[86px] pb-[130px] md:pb-[123px] md:pt-[130px] lg:pb-0 lg:pt-0">
          <div className="text-[#c2c2c2]">
            <h2 className="font-semibold text-desmos-primary text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] lg:mb-[11px] md:mb-[24px] mb-[14px]">
              {t("whyDesmosTitle")}
            </h2>
            <span className="block xl:max-w-[1100px] lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[36px] md:leading-[32px] leading-[24px] tracking-[0.0015em]">
              {t("whyDesmosDescription")}
            </span>
          </div>
          {/* tablet and mobile */}
          {(isMobile || isMd) && (
            <div className="text-desmos-black-light mt-4">
              <div className="grid overflow-x-hidden md:grid-cols-2 grid-cols-3 relative">
                <div className="col-span-1"></div>
                <div className="mix-blend-lighten md:col-span-1 col-span-2 mr-[-30px] ml-[30px] md:mr-0 md:pl-0 md:min-h-[345px] min-h-[224px]">
                  <VideoWithPlaceholder
                    src="/Why Desmos 1.mp4"
                    placeholder="bg-why-desmos-01"
                  />
                </div>
                <div className="md:col-span-2 col-span-3 md:text-[16px] text-[14px] mt-4 md:leading-[32px] leading-[24px] tracking-[0.0015em]">
                  <h3 className="md:text-[22px] mb-[24px] text-[18px] whitespace-pre-wrap text-desmos-black-light font-semibold md:leading-[33px] leading-[27px] tracking-[0.0015em]">
                    {t("whyDesmosSlide01Title")}
                  </h3>
                  {t("whyDesmosSlide01Content")}
                </div>
                <div className="mix-blend-lighten bg-desmos-background-primary md:col-span-1 col-span-2 mt-4 rotate-90 md:min-h-[345px] min-h-[224px]">
                  <VideoWithPlaceholder
                    src="/Why Desmos 2.mp4"
                    placeholder="bg-why-desmos-02"
                  />
                </div>
                <div className="col-span-1"></div>
                <div className="md:col-span-2 col-span-3 md:text-[16px] text-[14px] mt-4 whitespace-pre-wrap md:leading-[32px] leading-[24px] tracking-[0.0015em]">
                  <h3 className="md:text-[22px] mb-[24px] text-[18px] whitespace-pre-wrap text-desmos-black-light font-semibold md:leading-[33px] leading-[27px] tracking-[0.0015em]">
                    {t("whyDesmosSlide02Title")}
                  </h3>
                  {t("whyDesmosSlide02Content")}
                </div>
              </div>
            </div>
          )}

          {/* desktop slider */}
          {(isLg || isXl) && (
            <div className="mt-[38px] md:mt-[45px] text-desmos-black-light block">
              <Slider {...settings}>
                {/* slide01 */}
                <div>
                  <div className="grid xl:grid-cols-3 lg:grid-cols-5 bg-desmos-background-primary">
                    <div className="mix-blend-lighten lg:col-span-2 xl:col-span-1 min-h-[486px]">
                      <VideoWithPlaceholder
                        src="/Why Desmos 1.mp4"
                        placeholder="bg-why-desmos-01"
                      />
                    </div>
                    <div className="xl:mt-[70px] lg:mt-[52px] lg:col-span-3 xl:col-span-2 px-[60px] xl:px-[109px] lg:text-[18px] lg:leading-[36px] tracking-[0.005em]">
                      <h3 className="lg:text-[24px] lg:mb-[16px] text-desmos-black-light lg:font-semibold tracking-[0.0015em]">
                        {t("whyDesmosSlide01Title")}
                      </h3>
                      {t("whyDesmosSlide01Content")}
                    </div>
                  </div>
                </div>
                {/* slide02 */}
                <div>
                  <div className="grid xl:grid-cols-3 lg:grid-cols-5 bg-desmos-background-primary">
                    <div className="lg:col-span-2 xl:col-span-1 mix-blend-lighten min-h-[474px]">
                      <VideoWithPlaceholder
                        src="/Why Desmos 2.mp4"
                        placeholder="bg-why-desmos-02"
                      />
                    </div>
                    <div className="xl:mt-[70px] lg:mt-[52px] lg:col-span-3 xl:col-span-2 px-[60px] xl:px-[109px] lg:text-[18px] leading-[36px] tracking-[0.005em] whitespace-pre-wrap">
                      <h3 className="lg:text-[24px] lg:mb-[16px] text-desmos-black-light lg:font-semibold tracking-[0.0015em]">
                        {t("whyDesmosSlide02Title")}
                      </h3>
                      {t("whyDesmosSlide02Content")}
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          )}
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}
