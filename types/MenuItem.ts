import React from "react"

export interface MenuItem {
  id: number
  title: string
  subMenuItems: SubMenuItem[]
  ref: React.MutableRefObject<any>
}

export interface SubMenuItem {
  id: number
  title: string
  link: string
  isExternal: boolean
}
