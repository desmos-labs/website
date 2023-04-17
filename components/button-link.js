import { useTranslation } from "next-i18next"

export default function LinkButton({ title, link, margin }) {
  const { t } = useTranslation("ecosystem")
  return (
    <a href={link} target="_blank">
      <span
        className={`${margin} tracking-[0.0015em] group text-[18px] text-[#FFAA90] transition-all ease-out duration-500 hover:text-desmos-primary`}
      >
        {t(title)}
        <svg
          width="16"
          height="16"
          viewBox="0 0 17 17"
          fill="#FFAA90"
          xmlns="http://www.w3.org/2000/svg"
          className={`group-hover:fill-[#ff6c3e] group-hover:-rotate-45 ml-2 transition-all ease-out duration-500 inline ml-1 align-middle`}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.70796 3.37373C8.9618 3.11989 9.37336 3.11989 9.6272 3.37373L14.2939 8.0404C14.5477 8.29424 14.5477 8.7058 14.2939 8.95964L9.6272 13.6263C9.37336 13.8801 8.9618 13.8801 8.70796 13.6263C8.45412 13.3725 8.45412 12.9609 8.70796 12.7071L12.265 9.15002H3.16758C2.80859 9.15002 2.51758 8.859 2.51758 8.50002C2.51758 8.14103 2.80859 7.85002 3.16758 7.85002H12.265L8.70796 4.29297C8.45412 4.03913 8.45412 3.62757 8.70796 3.37373Z"
          />
        </svg>
      </span>
    </a>
  )
}
