import React, { useCallback, useMemo } from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import ModuleButton from "@/components/ModuleButton"
import PopupLayout from "@/layouts/PopupLayout"
import SlideLayout from "@/layouts/SlideLayout"
import PopupSlider from "@/components/PopupSlider"
import CenteredContentLayout from "@/layouts/CenteredContentLayout"

const ModulesSection = () => {
  const { t } = useTranslation("index")
  const buttons = useMemo(() => {
    return [
      {
        id: 1,
        title: "modulesButton01",
        popupTitle: "modulesPopupTitle",
        popupSubtitle: "modulesPopupSubtitle01",
        position:
          "xl:top-[260px] xl:left-[554px] lg:top-[135px] lg:left-[240px] md:top-[70px] md:left-[110px] top-[50px] left-[11px]",
        size: "md:w-[113px] md:h-[113px] w-[74px] h-[74px]",
        hoverSize: "md:w-[134px] md:h-[142px] w-[88px] h-[93px]",
        smallText: false,
        animationDelay: "lg:animation-delay-2000",
        image: "modules-button-01.png",
        desktopContent: (
          <>
            <div className="lg:mb-[40px] block whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupProfilesContent01")}
            </div>
            <div className="block lg:mb-[16px] whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupProfilesContent02")}
            </div>
            <div className="lg:mb-[16px] md:ml-[30px] xl:max-w-[865px]">
              <ul className="list-disc">
                <li>{t("modulesPopupProfilesContent03a")}</li>
                <li>{t("modulesPopupProfilesContent03b")}</li>
              </ul>
            </div>
            <div className="block whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupProfilesContent04")}
            </div>
          </>
        ),
        mobileContent: (
          <>
            <span className="mt-[24px] block whitespace-pre-wrap">
              {t("modulesPopupProfilesContent01")}
            </span>
            <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
              {t("modulesPopupProfilesContent02")}
            </span>
            <div className="ml-[22px] md:ml-[30px]">
              <ul className="list-disc p-0">
                <li>{t("modulesPopupProfilesContent03a")}</li>
                <li>{t("modulesPopupProfilesContent03b")}</li>
              </ul>
            </div>
            <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
              {t("modulesPopupProfilesContent04")}
            </span>
          </>
        ),
      },
      {
        id: 2,
        title: "modulesButton02",
        popupTitle: "modulesPopupTitle",
        popupSubtitle: "modulesPopupSubtitle02",
        position:
          "xl:top-[405px] xl:left-[461px] lg:top-[290px] lg:left-[135px] md:top-[330px] md:left-[80px] top-[220px] left-[0px]",
        size: "md:w-[162px] md:h-[162px] w-[106px] h-[106px]",
        hoverSize: "md:w-[192px] md:h-[204px] w-[126px] h-[133px]",
        smallText: true,
        animationDelay: "lg:animation-delay-900",
        image: "modules-button-02.png",
        desktopContent: (
          <>
            <div className="lg:mb-[40px] block whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupRelationshipsContent01")}
            </div>
            <div className="block lg:mb-[16px] whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupRelationshipsContent02")}
            </div>
          </>
        ),
        mobileContent: (
          <>
            <span className="mt-[24px] block whitespace-pre-wrap">
              {t("modulesPopupRelationshipsContent01")}
            </span>
            <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
              {t("modulesPopupRelationshipsContent02")}
            </span>
          </>
        ),
      },
      {
        id: 3,
        title: "modulesButton03",
        popupTitle: "modulesPopupTitle",
        popupSubtitle: "modulesPopupSubtitle03",
        position:
          "xl:top-[300px] xl:left-[755px] lg:top-[180px] lg:left-[442px] md:top-[200px] md:left-[270px] top-[150px] left-[111px]",
        size: "md:w-[113px] md:h-[113px] w-[74px] h-[74px]",
        hoverSize: "md:w-[134px] md:h-[142px] w-[88px] h-[93px]",
        smallText: false,
        animationDelay: "lg:animation1-delay-1500",
        image: "modules-button-03.png",
        desktopContent: (
          <>
            <div className="lg:mb-[40px] block whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupReportsContent01")}
            </div>
            <div className="block lg:mb-[16px] whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupReportsContent02")}
            </div>
          </>
        ),
        mobileContent: (
          <>
            <span className="mt-[24px] block whitespace-pre-wrap">
              {t("modulesPopupReportsContent01")}
            </span>
            <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
              {t("modulesPopupReportsContent02")}
            </span>
          </>
        ),
      },
      {
        id: 4,
        title: "modulesButton04",
        popupTitle: "modulesPopupTitle",
        popupSubtitle: "modulesPopupSubtitle04",
        position:
          "xl:top-[400px] xl:left-[954px] lg:top-[290px] lg:left-[655px] md:top-[355px] md:left-[350px] top-[240px] left-[170px]",
        size: "md:w-[113px] md:h-[113px] w-[74px] h-[74px]",
        hoverSize: "md:w-[134px] md:h-[142px] w-[88px] h-[93px]",
        smallText: false,
        animationDelay: "lg:animation-delay-4000",
        image: "modules-button-04.png",
        desktopContent: (
          <>
            <div className="lg:mb-[40px] block whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupPostsContent01")}
            </div>
          </>
        ),
        mobileContent: (
          <>
            <span className="mt-[24px] block whitespace-pre-wrap">
              {t("modulesPopupPostsContent01")}
            </span>
          </>
        ),
      },
      {
        id: 5,
        title: "modulesButton05",
        popupTitle: "modulesPopupTitle",
        popupSubtitle: "modulesPopupSubtitle05",
        position:
          "xl:top-[200px] xl:left-[1049px] lg:top-[90px] lg:left-[765px] md:top-[220px] md:left-[480px] top-[145px] left-[241px]",
        size: "md:w-[131px] md:h-[131px] w-[86px] h-[86px]",
        hoverSize: "md:w-[155px] md:h-[165px] w-[102px] h-[108px]",
        smallText: true,
        animationDelay: "",
        image: "modules-button-05.png",
        desktopContent: (
          <>
            <div className="lg:mb-[40px] block whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupSubspacesContent01")}
            </div>
            <div className="block lg:mb-[16px] whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupSubspacesContent02")}
            </div>
            <div className="lg:mb-[16px] md:ml-[30px] xl:max-w-[865px] lg:leading-[27px]">
              <ul className="list-disc">
                <li>{t("modulesPopupSubspacesContent03")}</li>
                <li>{t("modulesPopupSubspacesContent04")}</li>
              </ul>
            </div>
            <div className="block whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupSubspacesContent05")}
            </div>
          </>
        ),
        mobileContent: (
          <>
            <span className="mt-[24px] block whitespace-pre-wrap">
              {t("modulesPopupSubspacesContent01")}
            </span>
            <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
              {t("modulesPopupSubspacesContent02")}
            </span>
            <div className="ml-[22px] md:ml-[30px]">
              <ul className="list-disc p-0">
                <li>{t("modulesPopupSubspacesContent03")}</li>
                <li>{t("modulesPopupSubspacesContent04")}</li>
              </ul>
            </div>
            <span className="mt-[24px] md:mt-[32px] block whitespace-pre-wrap">
              {t("modulesPopupSubspacesContent05")}
            </span>
          </>
        ),
      },
      {
        id: 6,
        title: "modulesButton06",
        popupTitle: "modulesPopupTitle",
        popupSubtitle: "modulesPopupSubtitle06",
        position:
          "xl:top-[520px] xl:left-[1150px] lg:top-[370px] lg:left-[855px] md:top-[530px] md:left-[420px] top-[355px] left-[221px]",
        size: "md:w-[131px] md:h-[131px] w-[92px] h-[92px]",
        hoverSize: "md:w-[155px] md:h-[165px] w-[102px] h-[108px]",
        smallText: false,
        animationDelay: "lg:animation-delay-1300",
        image: "modules-button-06.png",
        desktopContent: (
          <>
            <div className="lg:mb-[40px] block whitespace-pre-wrap xl:max-w-[865px]">
              {t("modulesPopupReactionsContent01")}
            </div>
          </>
        ),
        mobileContent: (
          <>
            <span className="mt-[24px] block whitespace-pre-wrap">
              {t("modulesPopupReactionsContent01")}
            </span>
          </>
        ),
      },
    ]
  }, [t])

  const nextButtons = useMemo(() => {
    return [
      {
        nextPopupSubtitle: "modulesPopupSubtitle03",
      },
      {
        nextPopupSubtitle: "modulesPopupSubtitle04",
      },
      {
        nextPopupSubtitle: "modulesPopupSubtitle05",
      },
      {
        nextPopupSubtitle: "modulesPopupSubtitle06",
      },
      {
        nextPopupSubtitle: "modulesPopupSubtitle01",
      },
      {
        nextPopupSubtitle: "modulesPopupSubtitle02",
      },
    ]
  }, [])

  const lastIndex = nextButtons.length - 1

  const createSlides = useCallback(
    (index: number) => {
      return (
        <>
          <PopupSlider
            lastIndex={lastIndex}
            nextButtons={nextButtons}
            index={index}
            slide={buttons.map((button) => {
              return (
                <SlideLayout
                  title={button.popupTitle}
                  subtitle={button.popupSubtitle}
                  desktopContent={button.desktopContent}
                  mobileContent={button.mobileContent}
                  image={button.image}
                />
              )
            })}
          />
        </>
      )
    },
    [buttons, lastIndex, nextButtons]
  )

  return (
    <SectionLayout
      contentBackground={{
        image:
          "bg-gradient-orange-mobile md:bg-gradient-orange-tablet xl:bg-modules-xl lg:bg-modules-lg",
        videos: {
          lg: "/Section3_1280w.mp4",
          xl: "/Section3_1920w.mp4",
        },
        isFullScreenWidth: false,
      }}
      fullScreenHeightOption="onlyDesktop"
    >
      <CenteredContentLayout>
        <div className="flex flex-col items-center w-full h-full text-desmos-primary xl:text-[40px] lg:text-[32px] md:text-[26px] text-[20px]">
          <h2>{t("modulesTitle")}</h2>

          <div className="relative w-full h-our-modules-mobile md:h-our-modules-md lg:h-our-modules-lg xl:h-our-modules-xl">
            {buttons.map((button) => {
              return (
                <PopupLayout
                  key={button.id}
                  openItem={
                    <ModuleButton
                      button={button}
                      position={button.position}
                      size={button.size}
                      smallText={button.smallText}
                      animationDelay={button.animationDelay}
                      hoverSize={button.hoverSize}
                    />
                  }
                  popupContent={createSlides(button.id - 1)}
                  closeText={"modulecloseText"}
                />
              )
            })}
            <div className="hidden lg:block absolute xl:bottom-[200px] bottom-[110px] xl:left-[300px] -left-[5px] -z-10">
              <svg
                width="1136"
                height="360"
                viewBox="0 0 1136 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1518_16876)">
                  <path
                    d="M402.347 60.5209C402.763 60.5209 403.101 60.1805 403.101 59.7605C403.101 59.3405 402.763 59 402.347 59C401.93 59 401.593 59.3405 401.593 59.7605C401.593 60.1805 401.93 60.5209 402.347 60.5209Z"
                    fill="white"
                  />
                  <path
                    d="M408.486 62.5876C408.902 62.5876 409.24 62.2471 409.24 61.8271C409.24 61.4071 408.902 61.0667 408.486 61.0667C408.069 61.0667 407.732 61.4071 407.732 61.8271C407.732 62.2471 408.069 62.5876 408.486 62.5876Z"
                    fill="white"
                  />
                  <path
                    d="M414.616 64.6452C415.032 64.6452 415.37 64.3047 415.37 63.8847C415.37 63.4647 415.032 63.1243 414.616 63.1243C414.199 63.1243 413.862 63.4647 413.862 63.8847C413.862 64.3047 414.199 64.6452 414.616 64.6452Z"
                    fill="white"
                  />
                  <path
                    d="M420.072 67.392C420.488 67.392 420.826 67.0515 420.826 66.6316C420.826 66.2116 420.488 65.8711 420.072 65.8711C419.655 65.8711 419.318 66.2116 419.318 66.6316C419.318 67.0515 419.655 67.392 420.072 67.392Z"
                    fill="white"
                  />
                  <path
                    d="M425.581 70.6752C425.997 70.6752 426.335 70.3347 426.335 69.9148C426.335 69.4948 425.997 69.1543 425.581 69.1543C425.164 69.1543 424.827 69.4948 424.827 69.9148C424.827 70.3347 425.164 70.6752 425.581 70.6752Z"
                    fill="white"
                  />
                  <path
                    d="M432.243 74.746C432.659 74.746 432.997 74.4056 432.997 73.9856C432.997 73.5656 432.659 73.2251 432.243 73.2251C431.826 73.2251 431.489 73.5656 431.489 73.9856C431.489 74.4056 431.826 74.746 432.243 74.746Z"
                    fill="white"
                  />
                  <path
                    d="M440.52 80.454C440.936 80.454 441.274 80.1136 441.274 79.6936C441.274 79.2736 440.936 78.9331 440.52 78.9331C440.103 78.9331 439.766 79.2736 439.766 79.6936C439.766 80.1136 440.103 80.454 440.52 80.454Z"
                    fill="white"
                  />
                  <path
                    d="M448.699 87.3339C449.116 87.3339 449.453 86.9934 449.453 86.5735C449.453 86.1535 449.116 85.813 448.699 85.813C448.283 85.813 447.945 86.1535 447.945 86.5735C447.945 86.9934 448.283 87.3339 448.699 87.3339Z"
                    fill="white"
                  />
                  <path
                    d="M601.054 171.575C601.471 171.575 601.808 171.235 601.808 170.815C601.808 170.395 601.471 170.054 601.054 170.054C600.638 170.054 600.3 170.395 600.3 170.815C600.3 171.235 600.638 171.575 601.054 171.575Z"
                    fill="white"
                  />
                  <path
                    d="M606.421 175.216C606.838 175.216 607.175 174.876 607.175 174.456C607.175 174.036 606.838 173.696 606.421 173.696C606.005 173.696 605.667 174.036 605.667 174.456C605.667 174.876 606.005 175.216 606.421 175.216Z"
                    fill="white"
                  />
                  <path
                    d="M611.788 178.849C612.205 178.849 612.543 178.508 612.543 178.088C612.543 177.668 612.205 177.328 611.788 177.328C611.372 177.328 611.034 177.668 611.034 178.088C611.034 178.508 611.372 178.849 611.788 178.849Z"
                    fill="white"
                  />
                  <path
                    d="M617.289 181.515C617.705 181.515 618.043 181.174 618.043 180.754C618.043 180.334 617.705 179.994 617.289 179.994C616.872 179.994 616.535 180.334 616.535 180.754C616.535 181.174 616.872 181.515 617.289 181.515Z"
                    fill="white"
                  />
                  <path
                    d="M623.232 183.903C623.649 183.903 623.986 183.563 623.986 183.143C623.986 182.723 623.649 182.383 623.232 182.383C622.816 182.383 622.478 182.723 622.478 183.143C622.478 183.563 622.816 183.903 623.232 183.903Z"
                    fill="white"
                  />
                  <path
                    d="M630.498 186.74C630.914 186.74 631.252 186.399 631.252 185.979C631.252 185.559 630.914 185.219 630.498 185.219C630.082 185.219 629.744 185.559 629.744 185.979C629.744 186.399 630.082 186.74 630.498 186.74Z"
                    fill="white"
                  />
                  <path
                    d="M640.035 189.844C640.451 189.844 640.789 189.504 640.789 189.084C640.789 188.664 640.451 188.323 640.035 188.323C639.618 188.323 639.281 188.664 639.281 189.084C639.281 189.504 639.618 189.844 640.035 189.844Z"
                    fill="white"
                  />
                  <path
                    d="M650.432 192.17C650.848 192.17 651.186 191.83 651.186 191.41C651.186 190.99 650.848 190.649 650.432 190.649C650.015 190.649 649.678 190.99 649.678 191.41C649.678 191.83 650.015 192.17 650.432 192.17Z"
                    fill="white"
                  />
                  <path
                    d="M793.197 170.314C793.613 170.314 793.951 169.973 793.951 169.553C793.951 169.133 793.613 168.793 793.197 168.793C792.78 168.793 792.443 169.133 792.443 169.553C792.443 169.973 792.78 170.314 793.197 170.314Z"
                    fill="white"
                  />
                  <path
                    d="M797.384 165.339C797.801 165.339 798.138 164.999 798.138 164.579C798.138 164.159 797.801 163.818 797.384 163.818C796.968 163.818 796.63 164.159 796.63 164.579C796.63 164.999 796.968 165.339 797.384 165.339Z"
                    fill="white"
                  />
                  <path
                    d="M801.571 160.374C801.988 160.374 802.326 160.033 802.326 159.613C802.326 159.193 801.988 158.853 801.571 158.853C801.155 158.853 800.817 159.193 800.817 159.613C800.817 160.033 801.155 160.374 801.571 160.374Z"
                    fill="white"
                  />
                  <path
                    d="M804.827 155.167C805.244 155.167 805.581 154.826 805.581 154.406C805.581 153.986 805.244 153.646 804.827 153.646C804.411 153.646 804.073 153.986 804.073 154.406C804.073 154.826 804.411 155.167 804.827 155.167Z"
                    fill="white"
                  />
                  <path
                    d="M807.852 149.486C808.269 149.486 808.606 149.146 808.606 148.726C808.606 148.306 808.269 147.965 807.852 147.965C807.436 147.965 807.098 148.306 807.098 148.726C807.098 149.146 807.436 149.486 807.852 149.486Z"
                    fill="white"
                  />
                  <path
                    d="M811.463 142.525C811.879 142.525 812.217 142.185 812.217 141.765C812.217 141.345 811.879 141.004 811.463 141.004C811.046 141.004 810.709 141.345 810.709 141.765C810.709 142.185 811.046 142.525 811.463 142.525Z"
                    fill="white"
                  />
                  <path
                    d="M815.606 133.319C816.022 133.319 816.36 132.979 816.36 132.559C816.36 132.139 816.022 131.798 815.606 131.798C815.189 131.798 814.852 132.139 814.852 132.559C814.852 132.979 815.189 133.319 815.606 133.319Z"
                    fill="white"
                  />
                  <path
                    d="M819.074 123.165C819.491 123.165 819.828 122.825 819.828 122.405C819.828 121.985 819.491 121.644 819.074 121.644C818.658 121.644 818.32 121.985 818.32 122.405C818.32 122.825 818.658 123.165 819.074 123.165Z"
                    fill="white"
                  />
                  <path
                    d="M815.02 278.299C815.437 278.299 815.774 277.959 815.774 277.539C815.774 277.119 815.437 276.778 815.02 276.778C814.604 276.778 814.266 277.119 814.266 277.539C814.266 277.959 814.604 278.299 815.02 278.299Z"
                    fill="white"
                  />
                  <path
                    d="M821.07 280.607C821.487 280.607 821.825 280.267 821.825 279.847C821.825 279.427 821.487 279.086 821.07 279.086C820.654 279.086 820.316 279.427 820.316 279.847C820.316 280.267 820.654 280.607 821.07 280.607Z"
                    fill="white"
                  />
                  <path
                    d="M827.112 282.925C827.528 282.925 827.866 282.584 827.866 282.164C827.866 281.744 827.528 281.404 827.112 281.404C826.695 281.404 826.358 281.744 826.358 282.164C826.358 282.584 826.695 282.925 827.112 282.925Z"
                    fill="white"
                  />
                  <path
                    d="M832.452 285.895C832.869 285.895 833.206 285.554 833.206 285.134C833.206 284.714 832.869 284.374 832.452 284.374C832.036 284.374 831.698 284.714 831.698 285.134C831.698 285.554 832.036 285.895 832.452 285.895Z"
                    fill="white"
                  />
                  <path
                    d="M837.819 289.411C838.236 289.411 838.573 289.07 838.573 288.65C838.573 288.23 838.236 287.89 837.819 287.89C837.403 287.89 837.065 288.23 837.065 288.65C837.065 289.07 837.403 289.411 837.819 289.411Z"
                    fill="white"
                  />
                  <path
                    d="M844.313 293.75C844.73 293.75 845.067 293.409 845.067 292.989C845.067 292.569 844.73 292.229 844.313 292.229C843.897 292.229 843.559 292.569 843.559 292.989C843.559 293.409 843.897 293.75 844.313 293.75Z"
                    fill="white"
                  />
                  <path
                    d="M852.351 299.798C852.767 299.798 853.105 299.458 853.105 299.038C853.105 298.618 852.767 298.277 852.351 298.277C851.934 298.277 851.596 298.618 851.596 299.038C851.596 299.458 851.934 299.798 852.351 299.798Z"
                    fill="white"
                  />
                  <path
                    d="M860.246 307C860.662 307 861 306.659 861 306.239C861 305.819 860.662 305.479 860.246 305.479C859.83 305.479 859.492 305.819 859.492 306.239C859.492 306.659 859.83 307 860.246 307Z"
                    fill="white"
                  />
                  <path
                    d="M264.399 135.851C264.815 135.851 265.153 135.511 265.153 135.091C265.153 134.671 264.815 134.331 264.399 134.331C263.982 134.331 263.645 134.671 263.645 135.091C263.645 135.511 263.982 135.851 264.399 135.851Z"
                    fill="white"
                  />
                  <path
                    d="M262.42 142.06C262.837 142.06 263.174 141.72 263.174 141.3C263.174 140.88 262.837 140.54 262.42 140.54C262.004 140.54 261.666 140.88 261.666 141.3C261.666 141.72 262.004 142.06 262.42 142.06Z"
                    fill="white"
                  />
                  <path
                    d="M260.442 148.269C260.859 148.269 261.196 147.929 261.196 147.509C261.196 147.089 260.859 146.749 260.442 146.749C260.026 146.749 259.688 147.089 259.688 147.509C259.688 147.929 260.026 148.269 260.442 148.269Z"
                    fill="white"
                  />
                  <path
                    d="M259.413 154.326C259.829 154.326 260.167 153.986 260.167 153.566C260.167 153.146 259.829 152.805 259.413 152.805C258.997 152.805 258.659 153.146 258.659 153.566C258.659 153.986 258.997 154.326 259.413 154.326Z"
                    fill="white"
                  />
                  <path
                    d="M258.774 160.75C259.191 160.75 259.528 160.409 259.528 159.989C259.528 159.569 259.191 159.229 258.774 159.229C258.358 159.229 258.02 159.569 258.02 159.989C258.02 160.409 258.358 160.75 258.774 160.75Z"
                    fill="white"
                  />
                  <path
                    d="M258.082 168.578C258.499 168.578 258.836 168.238 258.836 167.818C258.836 167.398 258.499 167.057 258.082 167.057C257.666 167.057 257.328 167.398 257.328 167.818C257.328 168.238 257.666 168.578 258.082 168.578Z"
                    fill="white"
                  />
                  <path
                    d="M257.754 178.679C258.171 178.679 258.508 178.338 258.508 177.918C258.508 177.498 258.171 177.158 257.754 177.158C257.338 177.158 257 177.498 257 177.918C257 178.338 257.338 178.679 257.754 178.679Z"
                    fill="white"
                  />
                  <path
                    d="M258.411 189.397C258.827 189.397 259.165 189.056 259.165 188.636C259.165 188.216 258.827 187.876 258.411 187.876C257.994 187.876 257.656 188.216 257.656 188.636C257.656 189.056 257.994 189.397 258.411 189.397Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1518_16876">
                    <rect
                      width="604"
                      height="248"
                      fill="white"
                      transform="translate(257 59)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="lg:hidden absolute bottom-[150px] md:bottom-[240px]">
            <svg
              className="w-[317px] h-[286px] md:w-[484px] md:h-[438px]"
              viewBox="0 0 484 438"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M129.353 51.0379C129.736 50.53 129.632 49.805 129.119 49.4185C128.607 49.0321 127.881 49.1305 127.498 49.6383C127.115 50.1462 127.22 50.8712 127.732 51.2577C128.244 51.6442 128.97 51.5457 129.353 51.0379Z"
                fill="#DDDDDD"
              />
              <path
                d="M135.104 59.1638C135.488 58.656 135.383 57.9309 134.871 57.5445C134.359 57.158 133.633 57.2564 133.25 57.7643C132.866 58.2722 132.971 58.9972 133.483 59.3836C133.995 59.7701 134.721 59.6717 135.104 59.1638Z"
                fill="#DDDDDD"
              />
              <path
                d="M140.856 67.2897C141.239 66.7819 141.135 66.0569 140.622 65.6704C140.11 65.2839 139.384 65.3823 139.001 65.8902C138.618 66.3981 138.722 67.1231 139.235 67.5095C139.747 67.896 140.473 67.7976 140.856 67.2897Z"
                fill="#DDDDDD"
              />
              <path
                d="M147.295 74.1181C147.679 73.6102 147.574 72.8852 147.062 72.4988C146.55 72.1123 145.824 72.2107 145.441 72.7186C145.057 73.2264 145.162 73.9514 145.674 74.3379C146.186 74.7244 146.912 74.626 147.295 74.1181Z"
                fill="#DDDDDD"
              />
              <path
                d="M154.541 80.808C154.925 80.3002 154.82 79.5751 154.308 79.1887C153.796 78.8022 153.07 78.9006 152.687 79.4085C152.303 79.9164 152.408 80.6414 152.92 81.0278C153.432 81.4143 154.158 81.3159 154.541 80.808Z"
                fill="#DDDDDD"
              />
              <path
                d="M163.451 88.8553C163.834 88.3475 163.73 87.6224 163.218 87.236C162.706 86.8495 161.98 86.9479 161.596 87.4558C161.213 87.9637 161.318 88.6887 161.83 89.0751C162.342 89.4616 163.068 89.3632 163.451 88.8553Z"
                fill="#DDDDDD"
              />
              <path
                d="M175.467 98.5502C175.85 98.0423 175.746 97.3173 175.234 96.9308C174.721 96.5444 173.996 96.6428 173.612 97.1506C173.229 97.6585 173.334 98.3835 173.846 98.77C174.358 99.1564 175.084 99.058 175.467 98.5502Z"
                fill="#DDDDDD"
              />
              <path
                d="M186.086 107.613C186.47 107.105 186.365 106.38 185.853 105.993C185.341 105.607 184.615 105.705 184.232 106.213C183.848 106.721 183.953 107.446 184.465 107.832C184.977 108.219 185.703 108.12 186.086 107.613Z"
                fill="#DDDDDD"
              />
              <path
                d="M370.753 409.749C370.176 410.019 369.93 410.709 370.201 411.29C370.473 411.871 371.161 412.124 371.737 411.854C372.313 411.585 372.56 410.895 372.288 410.314C372.017 409.733 371.329 409.48 370.753 409.749Z"
                fill="#DDDDDD"
              />
              <path
                d="M368.202 396.275C367.626 396.544 367.379 397.234 367.651 397.815C367.923 398.396 368.61 398.649 369.187 398.38C369.763 398.11 370.01 397.42 369.738 396.839C369.466 396.258 368.779 396.005 368.202 396.275Z"
                fill="#DDDDDD"
              />
              <path
                d="M365.707 387.227C365.13 387.496 364.883 388.186 365.155 388.767C365.427 389.349 366.115 389.601 366.691 389.332C367.267 389.062 367.514 388.372 367.242 387.791C366.97 387.21 366.283 386.957 365.707 387.227Z"
                fill="#DDDDDD"
              />
              <path
                d="M362.433 377.924C361.857 378.194 361.61 378.883 361.882 379.464C362.154 380.046 362.841 380.298 363.417 380.029C363.994 379.759 364.241 379.07 363.969 378.488C363.697 377.907 363.009 377.655 362.433 377.924Z"
                fill="#DDDDDD"
              />
              <path
                d="M358.324 366.643C357.748 366.912 357.501 367.602 357.773 368.183C358.045 368.765 358.732 369.017 359.309 368.748C359.885 368.478 360.132 367.789 359.86 367.207C359.588 366.626 358.901 366.373 358.324 366.643Z"
                fill="#DDDDDD"
              />
              <path
                d="M352.241 352.452C351.665 352.722 351.418 353.412 351.69 353.993C351.962 354.574 352.649 354.827 353.226 354.557C353.802 354.288 354.049 353.598 353.777 353.017C353.505 352.436 352.818 352.183 352.241 352.452Z"
                fill="#DDDDDD"
              />
              <path
                d="M347.097 339.474C346.52 339.744 346.274 340.434 346.545 341.015C346.817 341.596 347.505 341.849 348.081 341.579C348.657 341.31 348.904 340.62 348.632 340.039C348.361 339.458 347.673 339.205 347.097 339.474Z"
                fill="#DDDDDD"
              />
              <path
                d="M307.756 234.5C307.378 235.011 307.49 235.735 308.006 236.117C308.522 236.498 309.247 236.392 309.625 235.881C310.003 235.369 309.891 234.645 309.375 234.264C308.859 233.882 308.135 233.988 307.756 234.5Z"
                fill="#DDDDDD"
              />
              <path
                d="M303.395 228.535C303.017 229.047 303.128 229.771 303.644 230.152C304.16 230.533 304.885 230.428 305.263 229.916C305.641 229.404 305.53 228.68 305.014 228.299C304.498 227.918 303.773 228.023 303.395 228.535Z"
                fill="#DDDDDD"
              />
              <path
                d="M296.887 221.772C296.509 222.283 296.621 223.007 297.137 223.389C297.653 223.77 298.377 223.664 298.756 223.152C299.134 222.641 299.022 221.917 298.506 221.536C297.99 221.154 297.265 221.26 296.887 221.772Z"
                fill="#DDDDDD"
              />
              <path
                d="M289.574 215.155C289.196 215.666 289.308 216.39 289.824 216.772C290.34 217.153 291.065 217.047 291.443 216.536C291.821 216.024 291.709 215.3 291.193 214.919C290.677 214.537 289.952 214.643 289.574 215.155Z"
                fill="#DDDDDD"
              />
              <path
                d="M280.584 207.197C280.206 207.709 280.318 208.433 280.834 208.814C281.35 209.196 282.075 209.09 282.453 208.578C282.831 208.066 282.719 207.343 282.203 206.961C281.687 206.58 280.962 206.686 280.584 207.197Z"
                fill="#DDDDDD"
              />
              <path
                d="M268.471 197.624C268.093 198.135 268.205 198.859 268.721 199.24C269.237 199.622 269.962 199.516 270.34 199.004C270.718 198.493 270.606 197.769 270.09 197.387C269.574 197.006 268.849 197.112 268.471 197.624Z"
                fill="#DDDDDD"
              />
              <path
                d="M257.762 188.668C257.384 189.18 257.495 189.904 258.011 190.285C258.527 190.666 259.252 190.561 259.63 190.049C260.008 189.537 259.897 188.813 259.381 188.432C258.865 188.051 258.14 188.156 257.762 188.668Z"
                fill="#DDDDDD"
              />
              <path
                d="M363.101 258.701C362.728 258.185 362.005 258.071 361.484 258.446C360.964 258.822 360.844 259.544 361.216 260.06C361.589 260.576 362.312 260.69 362.833 260.315C363.353 259.939 363.473 259.216 363.101 258.701Z"
                fill="#DDDDDD"
              />
              <path
                d="M370.11 256.361C369.738 255.845 369.014 255.731 368.494 256.107C367.973 256.482 367.853 257.205 368.226 257.721C368.598 258.237 369.322 258.351 369.842 257.975C370.362 257.6 370.482 256.877 370.11 256.361Z"
                fill="#DDDDDD"
              />
              <path
                d="M378.533 252.221C378.161 251.705 377.437 251.591 376.917 251.966C376.397 252.342 376.277 253.065 376.649 253.58C377.021 254.096 377.745 254.21 378.265 253.835C378.786 253.459 378.906 252.737 378.533 252.221Z"
                fill="#DDDDDD"
              />
              <path
                d="M387.062 247.269C386.689 246.753 385.966 246.639 385.446 247.015C384.925 247.39 384.805 248.113 385.178 248.629C385.55 249.145 386.274 249.258 386.794 248.883C387.314 248.507 387.434 247.785 387.062 247.269Z"
                fill="#DDDDDD"
              />
              <path
                d="M397.378 241.127C397.006 240.611 396.282 240.497 395.762 240.873C395.242 241.248 395.122 241.971 395.494 242.487C395.866 243.003 396.59 243.117 397.11 242.741C397.631 242.366 397.75 241.643 397.378 241.127Z"
                fill="#DDDDDD"
              />
              <path
                d="M410.184 232.503C409.812 231.987 409.088 231.874 408.568 232.249C408.048 232.625 407.928 233.347 408.3 233.863C408.673 234.379 409.396 234.493 409.916 234.117C410.437 233.742 410.557 233.019 410.184 232.503Z"
                fill="#DDDDDD"
              />
              <path
                d="M419.973 225.342C419.601 224.826 418.877 224.712 418.357 225.087C417.837 225.463 417.717 226.185 418.089 226.701C418.462 227.217 419.185 227.331 419.705 226.956C420.226 226.58 420.346 225.858 419.973 225.342Z"
                fill="#DDDDDD"
              />
              <path
                d="M68.3755 126.575C68.9979 126.707 69.6102 126.305 69.7431 125.677C69.8759 125.049 69.4791 124.434 68.8566 124.302C68.2342 124.17 67.6219 124.572 67.489 125.2C67.3562 125.828 67.753 126.443 68.3755 126.575Z"
                fill="#DDDDDD"
              />
              <path
                d="M68.9376 112.534C69.56 112.665 70.1723 112.263 70.3052 111.635C70.4381 111.008 70.0412 110.392 69.4188 110.26C68.7963 110.129 68.184 110.531 68.0512 111.158C67.9183 111.786 68.3152 112.402 68.9376 112.534Z"
                fill="#DDDDDD"
              />
              <path
                d="M71.1091 97.7858C71.7315 97.9175 72.3438 97.5154 72.4767 96.8877C72.6096 96.26 72.2127 95.6443 71.5903 95.5126C70.9678 95.3808 70.3555 95.7829 70.2227 96.4106C70.0898 97.0383 70.4867 97.654 71.1091 97.7858Z"
                fill="#DDDDDD"
              />
              <path
                d="M74.9978 82.9636C75.6202 83.0953 76.2325 82.6933 76.3654 82.0655C76.4983 81.4378 76.1014 80.8222 75.4789 80.6904C74.8565 80.5586 74.2442 80.9607 74.1113 81.5884C73.9785 82.2162 74.3753 82.8318 74.9978 82.9636Z"
                fill="#DDDDDD"
              />
              <path
                d="M79.5924 69.7519C80.2148 69.8837 80.8271 69.4816 80.96 68.8539C81.0929 68.2262 80.696 67.6105 80.0736 67.4787C79.4511 67.347 78.8388 67.749 78.706 68.3768C78.5731 69.0045 78.97 69.6202 79.5924 69.7519Z"
                fill="#DDDDDD"
              />
              <path
                d="M70.858 140.023C71.4804 140.155 72.0927 139.753 72.2256 139.125C72.3585 138.497 71.9616 137.882 71.3392 137.75C70.7167 137.618 70.1044 138.02 69.9716 138.648C69.8387 139.276 70.2356 139.891 70.858 140.023Z"
                fill="#DDDDDD"
              />
              <path
                d="M72.7252 153.957C73.3476 154.089 73.9599 153.687 74.0928 153.059C74.2257 152.432 73.8288 151.816 73.2064 151.684C72.5839 151.552 71.9716 151.955 71.8388 152.582C71.7059 153.21 72.1028 153.826 72.7252 153.957Z"
                fill="#DDDDDD"
              />
              <path
                d="M77.3769 166.412C77.9994 166.543 78.6117 166.141 78.7445 165.514C78.8774 164.886 78.4805 164.27 77.8581 164.138C77.2357 164.007 76.6234 164.409 76.4905 165.036C76.3576 165.664 76.7545 166.28 77.3769 166.412Z"
                fill="#DDDDDD"
              />
              <path
                d="M81.5044 177.893C82.1268 178.025 82.7391 177.623 82.872 176.995C83.0048 176.367 82.608 175.752 81.9855 175.62C81.3631 175.488 80.7508 175.89 80.6179 176.518C80.4851 177.146 80.8819 177.761 81.5044 177.893Z"
                fill="#DDDDDD"
              />
              <path
                d="M85.4568 188.302C86.0792 188.434 86.6915 188.032 86.8244 187.404C86.9572 186.777 86.5604 186.161 85.9379 186.029C85.3155 185.898 84.7032 186.3 84.5703 186.927C84.4375 187.555 84.8343 188.171 85.4568 188.302Z"
                fill="#DDDDDD"
              />
              <path
                d="M87.8622 200.235C88.4846 200.367 89.0969 199.964 89.2298 199.337C89.3626 198.709 88.9658 198.093 88.3433 197.962C87.7209 197.83 87.1086 198.232 86.9757 198.86C86.8429 199.487 87.2397 200.103 87.8622 200.235Z"
                fill="#DDDDDD"
              />
              <path
                d="M86.3345 210.929C86.9569 211.061 87.5692 210.659 87.7021 210.031C87.8349 209.403 87.4381 208.787 86.8156 208.656C86.1932 208.524 85.5809 208.926 85.448 209.554C85.3151 210.181 85.712 210.797 86.3345 210.929Z"
                fill="#DDDDDD"
              />
            </svg>
          </div>
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}

export default ModulesSection
