import React, { useCallback, useState } from "react"
import { useTranslation } from "next-i18next"

const SubscriptionForm = () => {
  const { t } = useTranslation("common")

  const [inputValue, setInputValue] = useState("")
  const [status, setStatus] = useState({
    message: "",
    isError: false,
  })

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    },
    []
  )

  const subscribeUser = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      // Perform a Mailchimp request
      const res = await fetch("/api/subscribeUser", {
        body: JSON.stringify({
          email: inputValue,
        }),

        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      })
      const data = await res.json()

      setStatus({
        message:
          res.status >= 400
            ? `${t(data.error)}`
            : `${t("subscription-message-success")}`,
        isError: res.status >= 400,
      })
    },
    [inputValue, t]
  )

  return (
    <div className="flex flex-col lg:pb-20">
      <form onSubmit={subscribeUser}>
        <div className="flex p-0 mt-4 w-full" style={{ height: "48px" }}>
          <input
            className={`${
              status.isError
                ? "text-butter-purple-dark"
                : "text-butter-black-default"
            } pl-[27px] text-[14px] leading-normal tracking-[.0025em] inline-block border-[#EFEFEF] border-[1px] rounded-l-xl rounded-r-none w-3/4 h-full text-md  box-border focus:outline-none focus:shadow-none focus:ring-transparent focus:border-butter-primary focus:border-[1px] placeholder:text-[#9D9D9D]`}
            type="email"
            id="email"
            name="email"
            value={inputValue}
            onChange={handleInputChange}
            required
            autoCapitalize="off"
            autoCorrect="off"
            placeholder={t("subscription-email-placeholder") ?? ""}
          />
          <button type="submit">{t("subscription-button-title")}</button>
        </div>
      </form>
      <div className="text-butter-black-default text-[10px] leading-[15px] pt-[9px]">
        {status.message}
      </div>
    </div>
  )
}

export default SubscriptionForm
