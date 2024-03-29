import React from "react"
import Link from "next/link"

export interface FooterProps {
  readonly privacyPathOverride?: string
  readonly tosPathOverride?: string
}

const Footer = (props: FooterProps) => {
  const { privacyPathOverride, tosPathOverride } = props

  return (
    <div className="flex flex-col md:gap-6 gap-3 py-12 px-xMobile md:px-xMd lg:px-xLg xl:px-xXl">
      <div className="flex md:flex-row flex-col-reverse items-center md:justify-between">
        <div className="text-center md:text-left text-[#878787] text-[14px] font-[400] tracking-[.0025em] leading-[21px]">
          <span className="hidden lg:inline-block lg:pr-6">
            Copyright © Desmos Labs {new Date().getFullYear()}
          </span>
          <Link
            className="text-desmos-white-Default block md:inline-block px-0 md:leading-[21px] leading-[40px]"
            href={"/newsletter"}
          >
            Newsletter
          </Link>
          <span className="hidden md:inline-block md:px-6">|</span>
          <Link
            className="text-desmos-white-Default block md:inline-block px-0 md:leading-[21px] leading-[40px]"
            href={tosPathOverride || "/terms"}
          >
            Terms & Conditions
          </Link>
          <span className="hidden md:inline-block md:px-6">|</span>
          <Link
            className="text-desmos-white-Default block md:inline-block px-0 md:leading-[21px] leading-[40px]"
            href={privacyPathOverride || "/privacy"}
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-row gap-2 md:mb-0 mb-3">
          <Link href="https://t.me/desmosnetwork" target="_blank">
            <svg
              width="28"
              height="28"
              viewBox="0 0 54 54"
              className="fill-desmos-gray-dark hover:fill-desmos-white-light transition-all ease-out duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-.2.1h53.8v53.4H-.2z"
                style={{
                  fill: "none",
                }}
              />
              <path d="M49.7 16.5c1.3 3.1 2 6.3 2 9.7s-.7 6.6-2 9.7c-1.3 3.1-3.1 5.7-5.3 8-2.2 2.2-4.9 4-8 5.3-3.1 1.3-6.3 2-9.7 2-3.4 0-6.6-.7-9.7-2s-5.7-3.1-8-5.3c-2.2-2.2-4-4.9-5.3-8-1.3-3.1-2-6.3-2-9.7s.7-6.6 2-9.7c1.3-3.1 3.1-5.7 5.3-8 2.2-2.2 4.9-4 8-5.3s6.3-2 9.7-2c3.4 0 6.6.7 9.7 2 3.1 1.3 5.7 3.1 8 5.3 2.2 2.3 3.9 5 5.3 8zM34.8 37.7l4.1-19.3c.2-.8.1-1.4-.3-1.8-.4-.4-.8-.4-1.4-.2l-24.1 9.3c-.5.2-.9.4-1.1.7-.2.3-.2.5-.1.7.1.2.4.4.9.5l6.2 1.9 14.3-9c.4-.3.7-.3.9-.2.1.1.1.2-.1.4L22.5 31.3l-.5 6.4c.4 0 .8-.2 1.3-.6l3-2.9 6.2 4.6c1.3.7 2 .3 2.3-1.1z" />
            </svg>
          </Link>
          <Link href="https://twitter.com/desmosnetwork" target="_blank">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="fill-desmos-gray-dark hover:fill-desmos-white-light transition-all ease-out duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2088_12220)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM19.1461 11.0984C19.1461 14.767 16.3529 19 11.2445 19C9.67801 19 8.21518 18.5393 7 17.7445C7.21885 17.7733 7.4377 17.7848 7.6623 17.7848C8.96387 17.7848 10.1618 17.3414 11.112 16.5984C9.89686 16.5754 8.87173 15.7749 8.52042 14.6691C8.69319 14.7037 8.86597 14.7209 9.0445 14.7209C9.2979 14.7209 9.54555 14.6864 9.77592 14.623C8.50314 14.3639 7.54712 13.2466 7.54712 11.899V11.8644C7.92147 12.0717 8.34764 12.1984 8.80262 12.2099C8.05393 11.7147 7.5644 10.8623 7.5644 9.90052C7.5644 9.39372 7.70262 8.91571 7.93874 8.50681C9.30942 10.1885 11.3539 11.2942 13.6633 11.4094C13.6115 11.2079 13.5885 10.9948 13.5885 10.7759C13.5885 9.24398 14.8325 8 16.3644 8C17.1649 8 17.8848 8.33403 18.3916 8.87539C19.0251 8.74869 19.6183 8.51832 20.1539 8.20157C19.9466 8.85236 19.5089 9.39372 18.933 9.73927C19.4974 9.67016 20.033 9.52042 20.5283 9.30157C20.1539 9.86021 19.6817 10.3497 19.1403 10.7414C19.1461 10.8565 19.1461 10.9775 19.1461 11.0984Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_2088_12220">
                  <rect width="28" height="28" rx="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="https://scripta.network/@desmosnetwork" target="_blank">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="fill-desmos-gray-dark hover:fill-desmos-white-light transition-all ease-out duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2088_12236)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM17.2397 15.5434L17.8866 16.664C17.91 16.7045 17.9393 16.7494 17.9706 16.7971C18.0727 16.9533 18.1947 17.1398 18.1933 17.3026C18.1923 17.4714 18.0639 17.666 17.956 17.8295L17.956 17.8296C17.9212 17.8823 17.8885 17.9318 17.863 17.9761L17.2063 19.1133L16.237 20.7922C16.1675 20.9127 16.0368 20.9865 15.898 20.9865H13.8905H12.5966C12.5496 20.9865 12.4961 20.9895 12.4393 20.9926L12.4392 20.9926C12.2555 21.0028 12.0377 21.015 11.8981 20.9343C11.751 20.8495 11.6465 20.6405 11.5587 20.4651C11.5307 20.4091 11.5044 20.3565 11.479 20.3125C11.2599 19.9335 11.041 19.5544 10.8222 19.1754L9.85285 17.4962C9.78332 17.3759 9.78191 17.2262 9.85149 17.1056C10.1473 16.5931 10.4431 16.0808 10.7391 15.5685C10.9896 15.1345 11.6618 15.5226 11.4113 15.9565C11.1755 16.3651 10.9396 16.7736 10.7036 17.1821L10.6358 17.2995L11.8132 19.339L12.3161 20.21H15.6769L17.3572 17.2997L15.6769 14.3894H12.0893C12.0418 14.3894 12.0002 14.3806 11.9618 14.3678L11.9528 14.3652L11.9528 14.3652L11.9528 14.3652C11.9452 14.363 11.9375 14.3608 11.9302 14.3576C11.9199 14.3532 11.9104 14.3474 11.901 14.3416L11.901 14.3416L11.8942 14.3375L11.8858 14.3328C11.8788 14.3289 11.8717 14.325 11.865 14.3201C11.8564 14.3137 11.8488 14.3064 11.8413 14.2991L11.8413 14.2991L11.8344 14.2926C11.8062 14.2665 11.7797 14.2364 11.7574 14.1977L11.2125 13.2541L9.8529 10.8992C9.78337 10.779 9.78197 10.6291 9.85155 10.5086L10.8554 8.76998L11.5023 7.64958C11.5259 7.60872 11.5502 7.56051 11.576 7.50933C11.6588 7.3452 11.7571 7.15049 11.8956 7.06937C12.0431 6.98293 12.2812 6.99705 12.4796 7.00883L12.4797 7.00883C12.5424 7.01255 12.6011 7.01604 12.6518 7.01604H13.965H15.9038C16.0382 7.01604 16.1686 7.0913 16.2358 7.20767L17.8865 10.0668C17.9686 10.2091 18.0507 10.3514 18.133 10.4937C18.2553 10.7056 18.1533 10.8794 18.0489 11.0576L18.023 11.1019L17.224 12.486C16.9735 12.9199 16.3013 12.5318 16.5518 12.098C16.8202 11.6327 17.0887 11.1678 17.3573 10.7028L15.677 7.79227H12.3163L10.636 10.7026L12.3162 13.6132H15.9038C16.0383 13.6132 16.1687 13.6885 16.2359 13.8049L16.4067 14.1007L16.4084 14.1038C16.6855 14.5837 16.9625 15.0636 17.2397 15.5434ZM12.7833 9.43964C12.5143 9.43964 12.2963 9.22158 12.2963 8.95284C12.2963 8.68383 12.5143 8.46582 12.7833 8.46582C13.0523 8.46582 13.2702 8.68377 13.2702 8.95284C13.2702 9.22158 13.0523 9.43964 12.7833 9.43964ZM15.5411 15.6633C15.5411 15.3943 15.3231 15.1762 15.0541 15.1762C14.7852 15.1762 14.5672 15.3943 14.5672 15.6633C14.5672 15.9321 14.7852 16.1501 15.0541 16.1501C15.323 16.1501 15.5411 15.9321 15.5411 15.6633Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_2088_12240">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="https://discord.desmos.network" target="_blank">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="fill-desmos-gray-dark hover:fill-desmos-white-light transition-all ease-out duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2088_12232)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.998 28C21.73 28 27.998 21.732 27.998 14C27.998 6.26801 21.73 0 13.998 0C6.26606 0 -0.00195312 6.26801 -0.00195312 14C-0.00195312 21.732 6.26606 28 13.998 28ZM16.1839 8.00082C17.2754 8.1951 18.3192 8.53432 19.2926 8.99473C19.3011 8.99848 19.3083 9.00473 19.3125 9.01347C21.0372 11.6285 21.8891 14.5784 21.5706 17.9744C21.5694 17.9887 21.5622 18.0019 21.5507 18.0106C20.2444 18.9995 18.979 19.5999 17.7311 19.9978C17.7112 20.0041 17.6895 19.9966 17.6775 19.9791C17.3891 19.5655 17.1273 19.1295 16.8979 18.6715C16.8847 18.6447 16.8967 18.6122 16.9238 18.6016C17.3398 18.4398 17.7353 18.2461 18.1157 18.0169C18.1458 17.9987 18.1476 17.9544 18.12 17.9331C18.0393 17.8713 17.9592 17.8063 17.8828 17.7414C17.8683 17.7295 17.8491 17.727 17.8328 17.7351C15.3628 18.9114 12.6568 18.9114 10.1573 17.7351C10.1411 17.7276 10.1218 17.7301 10.108 17.742C10.0315 17.8069 9.95144 17.8713 9.87137 17.9331C9.84369 17.9544 9.8461 17.9987 9.87619 18.0169C10.2567 18.2417 10.6522 18.4398 11.0675 18.6022C11.0946 18.6128 11.1073 18.6447 11.094 18.6715C10.8695 19.1301 10.6076 19.5662 10.3139 19.9797C10.3012 19.9966 10.2801 20.0041 10.2603 19.9978C9.01836 19.5999 7.75295 18.9995 6.44662 18.0106C6.43578 18.0019 6.42795 17.9881 6.42675 17.9738C6.16067 15.0364 6.70307 12.0621 8.68305 9.01285C8.68784 9.00473 8.69507 8.99848 8.7035 8.99473C9.67754 8.53369 10.7214 8.19448 11.8122 8.00082C11.8321 7.99769 11.8519 8.00706 11.8622 8.02518C11.997 8.27131 12.1511 8.5868 12.2553 8.84479C13.4051 8.66363 14.573 8.66363 15.7469 8.84479C15.851 8.59241 15.9997 8.27131 16.134 8.02518C16.1442 8.00644 16.1641 7.99707 16.1839 8.00082ZM10.0947 14.5984C10.0947 15.473 10.7148 16.1852 11.4673 16.1852C12.2318 16.1852 12.8398 15.473 12.8398 14.5984C12.8519 13.7301 12.2378 13.0117 11.4673 13.0117C10.7027 13.0117 10.0947 13.7238 10.0947 14.5984ZM15.1696 14.5984C15.1696 15.473 15.7896 16.1852 16.5421 16.1852C17.3127 16.1852 17.9147 15.473 17.9147 14.5984C17.9267 13.7301 17.3127 13.0117 16.5421 13.0117C15.7776 13.0117 15.1696 13.7238 15.1696 14.5984Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_2088_12232">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="https://github.com/desmos-labs" target="_blank">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="fill-desmos-gray-dark hover:fill-desmos-white-light transition-all ease-out duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2088_12240)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.998 28C21.73 28 27.998 21.732 27.998 14C27.998 6.26801 21.73 0 13.998 0C6.26606 0 -0.00195312 6.26801 -0.00195312 14C-0.00195312 21.732 6.26606 28 13.998 28ZM8.65356 7.9568C10.1448 6.69463 12.0389 6.00102 13.9973 6H14C15.9586 6.00037 17.8532 6.69352 19.3449 7.95548C20.8366 9.21745 21.8282 10.9659 22.1422 12.8881C22.4563 14.8104 22.0724 16.781 21.0592 18.4476C20.046 20.1142 18.4695 21.3681 16.6118 21.9849C16.1938 22.0651 16.0449 21.8097 16.0449 21.5911C16.0449 21.5014 16.0459 21.3444 16.0474 21.1345C16.0502 20.7115 16.0545 20.0739 16.0545 19.3405C16.0545 18.5744 15.7908 18.076 15.4958 17.8206C17.3317 17.6182 19.2618 16.9242 19.2618 13.7745C19.2742 12.9581 18.9694 12.1685 18.4108 11.5701C18.4955 11.3609 18.7782 10.527 18.3288 9.39692C18.3288 9.39692 17.6376 9.17689 16.0627 10.2377C14.7106 9.87001 13.284 9.87001 11.9319 10.2377C10.3555 9.17689 9.66297 9.39692 9.66297 9.39692C9.21492 10.5297 9.49769 11.3636 9.58238 11.5701C9.02557 12.1684 8.72137 12.9567 8.73273 13.7718C8.73273 16.9147 10.6588 17.6182 12.4919 17.8247C12.2556 18.0298 12.0412 18.3911 11.9674 18.9221C11.4975 19.134 10.3023 19.4967 9.56736 18.243C9.56736 18.243 9.1316 17.4553 8.30245 17.3969C8.30245 17.3969 7.49787 17.3873 8.24644 17.8953C8.24644 17.8953 8.78737 18.1452 9.16165 19.096C9.16165 19.096 9.64658 20.5602 11.9414 20.0644C11.943 20.4548 11.9463 20.8262 11.9489 21.1133C11.9509 21.3297 11.9524 21.4983 11.9524 21.5911C11.9524 21.807 11.798 22.061 11.3882 21.9849C9.53071 21.3682 7.9544 20.1145 6.94115 18.4482C5.92791 16.7819 5.54381 14.8115 5.85753 12.8895C6.17125 10.9674 7.16233 9.21898 8.65356 7.9568Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_2088_12240">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
      <div className="lg:hidden text-[#878787] text-[14px] font-[400] tracking-[.0025em] leading-[21px] md:text-left text-center">
        Copyright © Desmos Labs {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default Footer
