import React from "react"

export interface CenteredContentLayoutProps {
  readonly children: React.ReactNode
}

const CenteredContentLayout = (props: CenteredContentLayoutProps) => {
  const { children } = props
  return (
    <div className="grid grid-cols-1 w-full h-full place-content-center">
      {children}
    </div>
  )
}

export default CenteredContentLayout
