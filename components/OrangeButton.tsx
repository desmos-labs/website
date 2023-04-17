import React from "react"

export interface OrangeButtonProps {
  readonly buttonText: string
  readonly buttonLink: string
  readonly buttonMargin?: string
  readonly buttonPadding?: string
}

const OrangeButton = (props: OrangeButtonProps) => {
  const { buttonText, buttonLink, buttonMargin, buttonPadding } = props
  return (
    <a
      href={`${buttonLink}`}
      target="_blank"
      className={`${buttonMargin} ${buttonPadding} group relative text-[16px] leading-[24px] tracking-[.0015em] font-semibold box-content md:inline-block text-white z-10`}
    >
      {buttonText}
      <svg
        className="group-hover:-rotate-45 transition-all ease-out duration-500 inline ml-1 align-middle"
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.20796 0.373974C6.4618 0.120134 6.87336 0.120134 7.1272 0.373974L11.7939 5.04064C12.0477 5.29448 12.0477 5.70604 11.7939 5.95988L7.1272 10.6265C6.87336 10.8804 6.4618 10.8804 6.20796 10.6265C5.95412 10.3727 5.95412 9.96115 6.20796 9.70731L9.76501 6.15026H0.667578C0.308593 6.15026 0.0175781 5.85925 0.0175781 5.50026C0.0175781 5.14128 0.308593 4.85026 0.667578 4.85026H9.76501L6.20796 1.29321C5.95412 1.03937 5.95412 0.627815 6.20796 0.373974Z"
          fill="#EFEFEF"
        />
      </svg>
      <div className="group-hover:opacity-0 bg-gradient-to-49 from-[#F07155] to-[#FFA756] absolute top-0 right-0 rounded w-full h-full -z-10 transition-all ease-out duration-500"></div>
      <div className="bg-gradient-to-b from-[#FF9900] via-[#FF8A00] to-[#E86A50] absolute top-0 right-0 rounded w-full h-full -z-20 opacity-1"></div>
    </a>
  )
}

export default OrangeButton
