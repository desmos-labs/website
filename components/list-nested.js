import { Trans } from "next-i18next"

export default function NestedList({ content, t }) {
  const translatedBlock = (key) => {
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
  }

  return (
    <div className="xl:px-[240px] lg:pl-[90px] lg:pr-[168px] lg:py-[160px] md:pl-[40px] md:pt-[80px] md:pb-[7px] pt-[70px] pb-[20px] pl-[24px] text-desmos-black-light box-border">
      <div className="grid grid-cols-1 md:justify-items-center lg:justify-items-start">
        <h2 className="text-[20px] md:text-[32px] lg:text-[48px] font-semibold">
          {t(content.title)}
        </h2>
        <div className="text-[12px] md:text-[16px] lg:leading-[29px] md:leading-[22px] tracking-[0.005em] md:pt-[80px] pt-[35px] md:pr-[104px] pr-[79px]">
          <p>{t(content.date)}</p>
          <br />
          <div className="pb-16">{translatedBlock(content.description)}</div>
          <div>
            <div className="[counter-reset:section]">
              {content.sections.map((section) => {
                return (
                  section.title && (
                    <div className="pb-8 md:pb-16">
                      <div className="flex text-base md:text-2xl font-semibold leading-6 md:leading-9 tracking-[0.001em] md:tracking-[0.0015em]">
                        <div className="flex-none w-8 md:w-12 before:[counter-increment:section] before:content-[counter(section)'.']" />
                        <div>{translatedBlock(section.title)}</div>
                      </div>
                      {section.description && (
                        <div className="pt-6 text-base md:text-xl font-normal leading-6 md:leading-9 tracking-[0.001em] md:tracking-[0.0015em]">
                          {translatedBlock(section.description)}
                        </div>
                      )}
                      {section.subsections && (
                        <div className="[counter-reset:subsection]">
                          {section.subsections.map((subsection) => {
                            return (
                              (subsection.content || subsection.points) && (
                                <div className="pt-6">
                                  {subsection.content && (
                                    <div className="flex text-xs md:text-base font-normal leading-5 md:leading-[22px] tracking-[-0.018em] md:tracking-[0.005em]">
                                      <div className="flex-none w-8 md:w-12 before:[counter-increment:subsection] before:content-[counter(section)'.'counter(subsection)'.']" />
                                      <div>
                                        {translatedBlock(subsection.content)}
                                      </div>
                                    </div>
                                  )}
                                  {subsection.pointsHeader && (
                                    <div className="pl-8 md:pl-12">
                                      {translatedBlock(subsection.pointsHeader)}
                                    </div>
                                  )}
                                  {subsection.points && (
                                    <div className="[counter-reset:points] pl-8 md:pl-12">
                                      {subsection.points.map((point) => {
                                        return (
                                          point.content && (
                                            <div className="pt-4">
                                              <div className="flex text-xs md:text-base font-normal leading-5 md:leading-[22px] tracking-[-0.018em] md:tracking-[0.005em]">
                                                <div className="flex-none w-8 md:w-12 before:[counter-increment:points] before:content-['('counter(points,lower-alpha)')']" />
                                                <div>
                                                  {translatedBlock(
                                                    point.content
                                                  )}
                                                </div>
                                              </div>
                                              {point.subpoints && (
                                                <div className="[counter-reset:subpoints] pl-8 md:pl-12">
                                                  {point.subpoints.map(
                                                    (subpoint) => {
                                                      return (
                                                        subpoint.content && (
                                                          <div className="flex pt-4 text-xs md:text-base font-normal leading-5 md:leading-[22px] tracking-[-0.018em] md:tracking-[0.005em]">
                                                            <div className="flex-none w-8 md:w-12 before:[counter-increment:subpoints] before:content-['('counter(subpoints,lower-roman)')']" />
                                                            <div>
                                                              {translatedBlock(
                                                                subpoint.content
                                                              )}
                                                            </div>
                                                          </div>
                                                        )
                                                      )
                                                    }
                                                  )}
                                                </div>
                                              )}
                                            </div>
                                          )
                                        )
                                      })}
                                    </div>
                                  )}
                                  {subsection.pointsFooter && (
                                    <div className="pl-8 md:pl-12 pt-4">
                                      {translatedBlock(subsection.pointsFooter)}
                                    </div>
                                  )}
                                </div>
                              )
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
