import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import PopupLayout from "@/layouts/popup"
import SlideLayout from "@/layouts/slide"
import PopupSliderComponent from "components/slider-popup"
import CompleteToolkitButton from "components/button-complete-toolkit"
import OrangeButton from "components/orange-button"
import CenteredContentLayout from "@/layouts/content-centered"

export default function CompleteToolkitSection() {
  const { t } = useTranslation("index")
  const buttons = [
    {
      id: 1,
      title: "completeToolkitPopupButton01",
      buttonImage: "/WebMobile.png",
      image: "/WebMobilePopup.png",
      popupTitle: "completeToolkitPopupTitle",
      desktopContent: (
        <>
          <div className="lg:mb-[40px] block whitespace-pre-wrap xl:max-w-[865px]">
            {t("completeToolkitPopupWMContent01")}
          </div>
          <div className="block whitespace-pre-wrap xl:max-w-[865px]">
            {t("completeToolkitPopupWMContent02")}
          </div>
        </>
      ),
      mobileContent: (
        <>
          <span className="mt-[24px] block whitespace-pre-wrap">
            {t("completeToolkitPopupWMContent01")}
          </span>
          <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
            {t("completeToolkitPopupWMContent02")}
          </span>
        </>
      ),
    },
    {
      id: 2,
      title: "completeToolkitPopupButton02",
      buttonImage: "/GraphQL.png",
      image: "/GraphQLPopup.png",
      popupTitle: "completeToolkitPopupTitle",
      desktopContent: (
        <>
          <div className="lg:mb-[40px] block whitespace-pre-wrap xl:max-w-[865px]">
            {t("completeToolkitPopupGQLContent01")}
          </div>
          <div className="block lg:mb-[16px] whitespace-pre-wrap xl:max-w-[865px]">
            {t("completeToolkitPopupGQLContent02")}
          </div>
          <div className="lg:mb-[16px] lg:leading-[27px] md:ml-[30px] xl:max-w-[865px]">
            <ul className="list-disc">
              <li>{t("completeToolkitPopupGQLContent03")}</li>
              <li>{t("completeToolkitPopupGQLContent04")}</li>
            </ul>
          </div>
          <div className="block whitespace-pre-wrap xl:max-w-[865px]">
            {t("completeToolkitPopupGQLContent05")}
          </div>
        </>
      ),
      mobileContent: (
        <>
          <span className="mt-[24px] block whitespace-pre-wrap">
            {t("completeToolkitPopupGQLContent01")}
          </span>
          <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
            {t("completeToolkitPopupGQLContent02")}
          </span>
          <div className="ml-[22px] md:ml-[30px]">
            <ul className="list-disc">
              <li>{t("completeToolkitPopupGQLContent03")}</li>
              <li>{t("completeToolkitPopupGQLContent04")}</li>
            </ul>
          </div>
          <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
            {t("completeToolkitPopupGQLContent05")}
          </span>
        </>
      ),
    },
    {
      id: 3,
      title: "completeToolkitPopupButton03",
      buttonImage: "/Live.png",
      image: "/LivePopup.png",
      popupTitle: "completeToolkitPopupTitle",
      popupContent01: "completeToolkitPopupLTContent01",
      desktopContent: (
        <>
          <div className="xl:mb-[40px] lg:mb-[16px] block whitespace-pre-wrap xl:max-w-[865px]">
            {t("completeToolkitPopupLTContent01")}
          </div>
          <div className="block lg:mb-[16px] whitespace-pre-wrap xl:max-w-[865px]">
            {t("completeToolkitPopupLTContent02")}
          </div>
          <div className="block whitespace-pre-wrap xl:max-w-[865px]">
            {t("completeToolkitPopupLTContent03")}
          </div>
        </>
      ),
      mobileContent: (
        <>
          <span className="mt-[24px] block whitespace-pre-wrap">
            {t("completeToolkitPopupLTContent01")}
          </span>
          <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
            {t("completeToolkitPopupLTContent02")}
          </span>
          <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
            {t("completeToolkitPopupLTContent03")}
          </span>
        </>
      ),
    },
  ]

  const nextButtons = [
    {
      nextPopupSubtitle: "completeToolkitPopupButton03",
    },
    {
      nextPopupSubtitle: "completeToolkitPopupButton01",
    },
    {
      nextPopupSubtitle: "completeToolkitPopupButton02",
    },
  ]
  const lastIndex = nextButtons.length - 1

  const slides = (index) => {
    return (
      <>
        <PopupSliderComponent
          lastIndex={lastIndex}
          nextButtons={nextButtons}
          index={index}
          slide={buttons.map((button) => {
            return (
              <SlideLayout
                title={button.popupTitle}
                subtitle={button.title}
                desktopContent={button.desktopContent}
                mobileContent={button.mobileContent}
                image={button.image}
              />
            )
          })}
        />
      </>
    )
  }

  return (
    <SectionLayout
      contentBackground={{
        image:
          "bg-gradient-orange-mobile md:bg-gradient-orange-tablet lg:bg-complete-toolkit",
        videos: {
          lg: "/section5_d.mp4",
          xl: "/section5_d.mp4",
        },
        isFullScreenWidth: false,
      }}
      fullScreenHeightOption="onlyDesktop"
    >
      <CenteredContentLayout>
        <div className=" mix-blend-lighten">
          <div className="text-desmos-black-light">
            <h2 className="font-semibold text-desmos-primary text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px]">
              {t("completeToolkitTitle")}
            </h2>
            <h3 className="text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] whitespace-pre-wrap md:whitespace-nowrap">
              {t("completeToolkitSubitle")}
            </h3>
          </div>
          <div className="grid md:gap-4 lg:gap-0 xl:gap-12 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 md:mt-[100px] lg:mt-[60px]">
            <div className="md:col-span-3 lg:col-span-2 xl:col-span-3">
              <div className="lg:leading-[36px] leading-[24px] text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] my-[24px] md:my-0 md:mb-[40px] lg:mb-[50px]">
                {t("completeToolkitContent")}
              </div>
              <div className="lg:block hidden">
                <OrangeButton
                  buttonText={t("completeToolkitButton")}
                  buttonLink="https://docs.desmos.network/"
                  buttonMargin=""
                  buttonPadding="px-4 py-2.5"
                />
              </div>
            </div>
            {buttons.map((button) => {
              return (
                <div className="md:col-span-1">
                  <PopupLayout
                    key={button.id}
                    openItem={<CompleteToolkitButton button={button} />}
                    popupContent={slides(button.id - 1)}
                    closeText={"completeToolkitCloseText"}
                  />
                </div>
              )
            })}
            <div className="block lg:hidden mt-[54px]">
              <OrangeButton
                buttonText={t("completeToolkitButton")}
                buttonLink="https://docs.desmos.network/"
                buttonMargin=""
                buttonPadding="px-4 py-2.5"
              />
            </div>
          </div>
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}
