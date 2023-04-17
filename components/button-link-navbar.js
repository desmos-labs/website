export default function NavbarLinkButton({
  buttonLink,
  buttonText,
  fontSize,
  leading,
  tracking,
}) {
  return (
    <>
      <a
        href={`${buttonLink}`}
        target="_blank"
        className={`group ${fontSize} ${leading} ${tracking} text-[#FFAA90] transition-all ease-out duration-500 hover:text-desmos-primary`}
      >
        {buttonText}
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="#FFAA90"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:-rotate-45 group-hover:fill-[#ff6c3e] transition-all ease-out duration-500 inline ml-1 align-middle"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.20771 0.37373C6.46156 0.119889 6.87311 0.119889 7.12695 0.37373L11.7936 5.0404C12.0475 5.29424 12.0475 5.7058 11.7936 5.95964L7.12695 10.6263C6.87311 10.8801 6.46156 10.8801 6.20771 10.6263C5.95387 10.3725 5.95387 9.9609 6.20771 9.70706L9.76476 6.15002H0.667334C0.308349 6.15002 0.017334 5.859 0.017334 5.50002C0.017334 5.14103 0.308349 4.85002 0.667334 4.85002H9.76476L6.20771 1.29297C5.95387 1.03913 5.95387 0.627571 6.20771 0.37373Z"
          ></path>
        </svg>
      </a>
    </>
  )
}
