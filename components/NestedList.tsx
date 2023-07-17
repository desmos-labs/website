import React, { useCallback } from "react"
import { Trans } from "next-i18next"
import { Content, PageData, Section } from "@/types/PageData"

export interface NestedListProps {
  readonly content: PageData
  readonly t: any
}

const NestedList = (props: NestedListProps) => {
  const { content, t } = props

  const translatedBlock = useCallback(
    (key: string) => {
      return (
        <Trans
          i18nKey={key}
          t={t}
          components={{
            bold: <span className="font-bold" />,
            underline: <span className="underline underline-offset-2" />,
            a: (
              <a
                className="underline underline-offset-2"
                target="_blank"
                href="https://desmos.network"
              />
            ),
          }}
        />
      )
    },
    [t]
  )

  const mapPoint = useCallback(
    (pointData: Content) => {
      return (
        <ul>
          {/* Text */}
          {pointData.text &&
            pointData.text?.map((text) => {
              return <div className="pb-16">{translatedBlock(text)}</div>
            })}

          {/* Subpoints */}
          {pointData.points && pointData.points.map(mapPoint)}
        </ul>
      )
    },
    [translatedBlock]
  )

  const mapContent = useCallback(
    (contentData: Content) => {
      return (
        <div>
          {/* Text */}
          {contentData.text &&
            contentData.text?.map((text) => {
              return <div className="pb-16">{translatedBlock(text)}</div>
            })}

          {/* Points */}
          {contentData.points && contentData.points.map(mapPoint)}
        </div>
      )
    },
    [mapPoint, translatedBlock]
  )

  const mapSection = useCallback(
    (sectionData: Section) => {
      return (
        <div>
          {/* Section title */}
          {sectionData.title && (
            <div className="pb-8 md:pb-16">
              <div className="flex text-base md:text-2xl font-semibold leading-6 md:leading-9 tracking-[0.001em] md:tracking-[0.0015em]">
                <div className="flex-none w-8 md:w-12 before:[counter-increment:section] before:content-[counter(section)'.']" />
                <div>{translatedBlock(sectionData.title)}</div>
              </div>
            </div>
          )}

          {/* Section content */}
          {sectionData.content && sectionData.content.map(mapContent)}

          {/* Subsections */}
          {sectionData.subsections && sectionData.subsections.map(mapSection)}
        </div>
      )
    },
    [mapContent, translatedBlock]
  )

  return (
    <div className="xl:px-[240px] lg:pl-[90px] lg:pr-[168px] lg:py-[160px] md:pl-[40px] md:pt-[80px] md:pb-[7px] pt-[70px] pb-[20px] pl-[24px] text-desmos-black-light box-border">
      <div className="grid grid-cols-1 md:justify-items-center lg:justify-items-start">
        <h2 className="text-[20px] md:text-[32px] lg:text-[48px] font-semibold">
          {t(content.title)}
        </h2>
        <div className="text-[12px] md:text-[16px] lg:leading-[29px] md:leading-[22px] tracking-[0.005em] md:pt-[80px] pt-[35px] md:pr-[104px] pr-[79px]">
          {/* Last updated date */}
          <p>{t(content.date)}</p>

          {/* Content */}
          {content.content.map(mapContent)}

          {/* Sections */}
          {content.sections.map(mapSection)}
        </div>
      </div>
    </div>
  )
}

export default NestedList
