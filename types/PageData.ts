export interface Content {
  /**
   * Paragraphs representing the text of the content.
   */
  readonly text?: string[]

  /**
   * List of numbered points.
   */
  readonly points?: Content[]

  /**
   * Footer displayed after the points.
   * This is only used when a list of points is provided as well.
   */
  readonly pointsFooter?: string[]
}

export interface Section {
  /**
   * Title of the section
   */
  readonly title: string

  /**
   * Content of this section.
   */
  readonly content?: Content[]

  /**
   * Subsections of this section.
   */
  readonly subsections?: Section[]
}

export interface PageData {
  readonly title: string
  readonly date: string

  /**
   * Paragraphs to be displayed before the sections
   */
  readonly content: Content[]

  /**
   * Sections to be displayed
   */
  readonly sections: Section[]
}
