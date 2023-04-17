export interface Subpoint {
  readonly content: string
}

export interface Point {
  readonly content: string
  readonly subpoints?: Subpoint[]
}

export interface Subsection {
  readonly content: string
  readonly points?: Point[]
  readonly pointsHeader?: string
  readonly pointsFooter?: string
}

export interface Section {
  readonly title: string
  readonly description?: string
  readonly subsections: Subsection[]
}

export interface PageData {
  readonly title: string
  readonly date: string
  readonly description: string
  readonly sections: Section[]
}
