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

  const getListType = (pointLevel: number) => {
    return pointLevel % 2 === 0 ? "list-decimal" : "list-roman"
  }

  const mapPoint = useCallback(
    (pointIndex: number, pointData: Content, pointLevel: number = 1) => {
      return (
        <li>
          {/* Text */}
          {pointData.text &&
            pointData.text?.map((text) => {
              return <div>{translatedBlock(text)}</div>
            })}

          {/* Subpoints */}
          {pointData.points && (
            <ul className={`${getListType(pointLevel)} pb-6 pl-10`}>
              {pointData.points.map((pointContent, index) =>
                mapPoint(index, pointContent, pointLevel + 1)
              )}
            </ul>
          )}
        </li>
      )
    },
    [translatedBlock]
  )

  const mapContent = useCallback(
    (contentData: Content, _: number = 1) => {
      return (
        <div className="pb-2">
          {/* Text */}
          {contentData.text &&
            contentData.text?.map((text) => {
              return <p className="p-0">{translatedBlock(text)}</p>
            })}

          {/* Points */}
          {contentData.points && (
            <ul className={"list-decimal py-2 pl-8"}>
              {contentData.points.map((pointContent, index) =>
                mapPoint(index, pointContent, 1)
              )}
            </ul>
          )}

          {/* Points footer */}
          {contentData.points &&
            contentData.pointsFooter &&
            contentData.pointsFooter.map((text) => {
              return <p className="p-0 pl-4">{translatedBlock(text)}</p>
            })}
        </div>
      )
    },
    [mapPoint, translatedBlock]
  )

  const mapSection = useCallback(
    (sectionData: Section, level: number = 1) => {
      return (
        <div>
          {/* Section title */}
          {sectionData.title && (
            <div className={`pb-${6 - (level - 1)} pt-12`}>
              <div className="flex font-semibold">
                <div className={`flex-none`} />
                <div className={`lg:text-[${32 - (level - 1) * 8}px]`}>
                  {translatedBlock(sectionData.title)}
                </div>
              </div>
            </div>
          )}

          {/* Section content */}
          {sectionData.content &&
            sectionData.content.map((sectionContent) =>
              mapContent(sectionContent, level)
            )}

          {/* Subsections */}
          {sectionData.subsections &&
            sectionData.subsections.map((section) =>
              mapSection(section, level + 1)
            )}
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
          <p className={"pb-8"}>{t(content.date)}</p>

          {/* Content */}
          {content.content.map((contentData) => mapContent(contentData, 1))}

          {/* Sections */}
          {content.sections.map((sectionData) => mapSection(sectionData, 1))}
        </div>
      </div>
    </div>
  )
}

export default NestedList
