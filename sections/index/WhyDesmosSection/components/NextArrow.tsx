import React from "react"

export interface NextArrowProps {
  readonly className?: string
  readonly style?: React.CSSProperties
  readonly onClick?: () => void
}

const NextArrow = (props: NextArrowProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.20771 0.873974C6.46156 0.620134 6.87311 0.620134 7.12695 0.873974L11.7936 5.54064C12.0475 5.79448 12.0475 6.20604 11.7936 6.45988L7.12695 11.1265C6.87311 11.3804 6.46156 11.3804 6.20771 11.1265C5.95387 10.8727 5.95387 10.4611 6.20771 10.2073L9.76476 6.65026H0.667334C0.308349 6.65026 0.017334 6.35925 0.017334 6.00026C0.017334 5.64128 0.308349 5.35026 0.667334 5.35026H9.76476L6.20771 1.79321C5.95387 1.53937 5.95387 1.12782 6.20771 0.873974Z"
        />
      </svg>
    </span>
  )
}

export default NextArrow
