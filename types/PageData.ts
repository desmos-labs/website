export interface Subpoint {
  readonly content: JSX.Element | string
}

export interface Point {
  readonly content: JSX.Element | string
  readonly subpoints?: Subpoint[]
}

export interface Subsection {
  readonly content?: JSX.Element | string
  readonly points?: Point[]
  readonly pointsHeader?: JSX.Element | string
  readonly pointsFooter?: JSX.Element | string
}

export interface Section {
  readonly title: string
  readonly description?: JSX.Element | string
  readonly subsections?: Subsection[]
}

export interface PageData {
  readonly title: string
  readonly date: string
  readonly description: JSX.Element | string
  readonly sections: Section[]
}
