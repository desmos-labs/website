import { useTranslation } from "react-i18next"

export default function SlideLayout({
  title,
  subtitle,
  desktopContent,
  mobileContent,
  image,
}) {
  const { t } = useTranslation("index")

  return (
    <div className="h-full px-4">
      <h1 className="xl:mt-[180px] lg:mt-[80px] md:mt-[40px] mt-[16px] xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px] font-semibold text-desmos-primary leading-[36px] md:leading-[48px] lg:leading-[60px] xl:leading-[72px]">
        {t(title)}
      </h1>
      <div className="grid lg:hidden justify-items-center my-8">
        <img src={image} className="block lg:hidden mix-blend-lighten" />
      </div>
      <h2 className="lg:mt-[32px] lg:text-[32px] md:text-[26px] text-[18px] font-semibold leading-[27px] md:leading-[39px] tracking-[-0.4px] md:tracking-[0.15px] lg:leading-[48px] lg:tracking-[0.0025em]">
        {t(subtitle)}
      </h2>
      <div className="lg:mt-[24px] lg:grid lg:grid-cols-2 xl:grid-cols-5 hidden">
        <div className="lg:text-[18px] lg:leading-[36px] xl:leading-[36px] tracking-[0.005em] xl:col-span-3 lg:min-w-[585px]">
          {desktopContent}
        </div>
        <div className="animate-popupImgBounce grid justify-items-center xl:col-span-2">
          <img className="mix-blend-lighten" src={image} />
        </div>
      </div>
      <div className="md:text-[16px] text-[14px] md:leading-[32px] leading-[24px] tracking-[0.005em] lg:hidden block md:max-w-[640px]">
        {mobileContent}
      </div>
    </div>
  )
}
