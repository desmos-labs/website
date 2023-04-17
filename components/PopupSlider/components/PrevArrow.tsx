import React from "react"

export interface PrevArrowProps {
  readonly className?: string
  readonly style?: React.CSSProperties
  readonly onClick?: any
}

const PrevArrow = (props: PrevArrowProps) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  )
}

export default PrevArrow
