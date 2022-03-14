import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatIndentIncreaseIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatIndentIncreaseIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatIndentIncreaseIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 21.3832H20C20.55 21.3832 21 20.9332 21 20.3832C21 19.8332 20.55 19.3832 20 19.3832H4C3.45 19.3832 3 19.8332 3 20.3832C3 20.9332 3.45 21.3832 4 21.3832ZM3 9.59318V15.1832C3 15.6332 3.54 15.8532 3.85 15.5332L6.64 12.7432C6.84 12.5432 6.84 12.2332 6.64 12.0332L3.85 9.23318C3.54 8.92318 3 9.14318 3 9.59318ZM12 17.3832H20C20.55 17.3832 21 16.9332 21 16.3832C21 15.8332 20.55 15.3832 20 15.3832H12C11.45 15.3832 11 15.8332 11 16.3832C11 16.9332 11.45 17.3832 12 17.3832ZM3 4.38318C3 4.93318 3.45 5.38318 4 5.38318H20C20.55 5.38318 21 4.93318 21 4.38318C21 3.83318 20.55 3.38318 20 3.38318H4C3.45 3.38318 3 3.83318 3 4.38318ZM12 9.38318H20C20.55 9.38318 21 8.93318 21 8.38318C21 7.83318 20.55 7.38318 20 7.38318H12C11.45 7.38318 11 7.83318 11 8.38318C11 8.93318 11.45 9.38318 12 9.38318ZM12 13.3832H20C20.55 13.3832 21 12.9332 21 12.3832C21 11.8332 20.55 11.3832 20 11.3832H12C11.45 11.3832 11 11.8332 11 12.3832C11 12.9332 11.45 13.3832 12 13.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}