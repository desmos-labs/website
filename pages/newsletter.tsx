import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MainLayout from "@/layouts/MainLayout"
import React, { useCallback, useState } from "react"
import { useTranslation } from "next-i18next"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SectionLayout from "@/layouts/SectionLayout"
import OrangeButton from "@/components/OrangeButton"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["subscribe", "common"])),
  },
})

const url =
  "https://network.us11.list-manage.com/subscribe/post?u=fb992ca98a19c5ef69f9bf9cb&amp;id=f769debea2&amp;f_id=00aea0e0f0"

const Newsletter = () => {
  const { t } = useTranslation("subscribe")

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    },
    []
  )

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/privacy-policy"
    >
      <SectionLayout
        fullScreenHeightOption="always"
        sectionBackground="bg-gradient-orange-mobile md:bg-gradient-orange-tablet lg:bg-gradient-orange-desktop bg-cover bg-center"
      >
        <div className="flex flex-col text-desmos-white-Default text-center items-center pt-[160px] md:pt-[60px]">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status }) => (
              <div>
                <h1 className="xl:text-[56px] lg:text-[48px] xl:leading-[84px] lg:leading-[72px] md:text-[40px] text-[24px] md:leading-[48px] leading-[36px] -tracking-[.015em] font-semibold">
                  {t("formTitle")}
                </h1>

                <p className="lg:w-full md:w-[70%] lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[30px] leading-[24px] tracking-[.0015em] pt-6 lg:pb-10 pb-16">
                  {t("formDescription")}
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    subscribe({ EMAIL: inputValue })
                  }}
                >
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 lg:mb-10 mb-16 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    name="email"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                    autoCapitalize="off"
                    autoCorrect="off"
                    placeholder={t("formEmailPlaceholder") ?? ""}
                  />
                  <OrangeButton
                    buttonText={t("formButtonText")}
                    buttonPadding="px-16 py-2.5"
                    isSubmit={true}
                  />
                </form>

                <div className="text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] lg:mt-10 mt-16">
                  {status === "sending" && <p>{t("sendingText")}</p>}
                  {status === "success" && <p>{t("thankYouText")}</p>}
                </div>
              </div>
            )}
          />
        </div>
      </SectionLayout>
    </MainLayout>
  )
}

export default Newsletter
