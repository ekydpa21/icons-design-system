import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatAlignLeftIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatAlignLeftIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatAlignLeftIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 15.3832H4C3.45 15.3832 3 15.8332 3 16.3832C3 16.9332 3.45 17.3832 4 17.3832H14C14.55 17.3832 15 16.9332 15 16.3832C15 15.8332 14.55 15.3832 14 15.3832ZM14 7.38318H4C3.45 7.38318 3 7.83318 3 8.38318C3 8.93318 3.45 9.38318 4 9.38318H14C14.55 9.38318 15 8.93318 15 8.38318C15 7.83318 14.55 7.38318 14 7.38318ZM4 13.3832H20C20.55 13.3832 21 12.9332 21 12.3832C21 11.8332 20.55 11.3832 20 11.3832H4C3.45 11.3832 3 11.8332 3 12.3832C3 12.9332 3.45 13.3832 4 13.3832ZM4 21.3832H20C20.55 21.3832 21 20.9332 21 20.3832C21 19.8332 20.55 19.3832 20 19.3832H4C3.45 19.3832 3 19.8332 3 20.3832C3 20.9332 3.45 21.3832 4 21.3832ZM3 4.38318C3 4.93318 3.45 5.38318 4 5.38318H20C20.55 5.38318 21 4.93318 21 4.38318C21 3.83318 20.55 3.38318 20 3.38318H4C3.45 3.38318 3 3.83318 3 4.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
