import Image from "next/image"

export default function GreyCard({
  cardTitle,
  cardDescription,
  imagePath,
  imageText,
}) {
  return (
    <>
      <div className="flex md:flex-row flex-col lg:w-[747px] items-start md:transparent-grey transparent-grey-2 rounded-lg md:p-6 py-[20px] pl-[17px] pr-[15px] mb-6">
        <div>
          <Image
            className="md:max-w-[62px] w-[40px]"
            width="62"
            height="62"
            src={imagePath}
            alt={imageText}
          />
        </div>
        <div className="md:ml-8 mt-[16px] md:mt-0">
          <h3 className="font-semibold lg:text-[24px] md:text-[22px] text-[18px] lg:leading-[36px] md:leading-[33px] leading-[27px] tracking-[.005em] md:pb-2 pb-[4px]">
            {cardTitle}
          </h3>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[36px] md:leading-[32px] leading-[24px] tracking-[.005em]">
            {cardDescription}
          </p>
        </div>
      </div>
    </>
  )
}
