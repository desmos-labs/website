import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import GreyCard from "@/components/GreyCard"

export default function HowItWorksSection() {
  const { t } = useTranslation("kickstart-program")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="flex flex-col text-desmos-white-Default lg:mt-0 md:mt-32 mt-14">
        <h2 className="text-desmos-primary lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[60px] md:leading-[48px] leading-[36px] tracking-[.005em] font-semibold md:mb-10 mb-[24px]">
          {t("howItWorksTitle")}
        </h2>
        <GreyCard
          imagePath="/icon-submit.svg"
          imageText="Submit"
          cardTitle={t("howItWorksCardTitle01")}
          cardDescription={
            <>
              {t("howItWorksCardDescription01a")}{" "}
              <a
                className="text-[#FF9575] hover:text-[#F3725A]"
                href="https://docs.google.com/forms/d/e/1FAIpQLSent5pknHfLVjHpMvF6_DsR8JKQnTwqzyi3yYXxF5l-kpFngQ/viewform"
                target="_blank"
              >
                {t("howItWorksCardDescription01b")}
              </a>
              {t("howItWorksCardDescription01c")}
            </>
          }
        />
        <GreyCard
          imagePath="/icon-review.svg"
          imageText="Review"
          cardTitle={t("howItWorksCardTitle02")}
          cardDescription={t("howItWorksCardDescription02")}
        />
        <GreyCard
          imagePath="/icon-support.svg"
          imageText="Support"
          cardTitle={t("howItWorksCardTitle03")}
          cardDescription={t("howItWorksCardDescription03")}
        />
        <GreyCard
          imagePath="/icon-payment.svg"
          imageText="Payment"
          cardTitle={t("howItWorksCardTitle04")}
          cardDescription={t("howItWorksCardDescription04")}
        />
      </div>
    </SectionLayout>
  )
}
