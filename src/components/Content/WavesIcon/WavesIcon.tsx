import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IWavesIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function WavesIcon({ size = 24, rotate = 0, color = "black" }: IWavesIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 17.3733C15.65 17.3733 14.8 17.7933 14.05 18.1733C13.4 18.5033 12.87 18.7733 12 18.7733C11.1 18.7733 10.6 18.5233 9.95 18.1733C9.2 17.7933 8.38 17.3733 7 17.3733C5.62 17.3733 4.8 17.7933 4.05 18.1733C3.62 18.3933 3.24 18.5833 2.78 18.6933C2.33 18.7933 2 19.1533 2 19.6033V19.7033C2 20.3033 2.56 20.7333 3.14 20.6133C3.88 20.4633 4.44 20.1833 4.95 19.9233C5.6 19.5933 6.12 19.3233 7 19.3233C7.88 19.3233 8.4 19.5733 9.05 19.9233C9.8 20.3033 10.62 20.7233 12 20.7233C13.38 20.7233 14.2 20.3033 14.95 19.9233C15.6 19.5933 16.13 19.3233 17 19.3233C17.9 19.3233 18.4 19.5733 19.05 19.9233C19.57 20.1833 20.13 20.4733 20.88 20.6233C21.46 20.7333 22 20.2933 22 19.7133V19.6233C22 19.1633 21.66 18.8033 21.21 18.7033C20.75 18.6033 20.38 18.4133 19.95 18.1833C19.2 17.7933 18.35 17.3733 17 17.3733ZM17 12.9233C15.65 12.9233 14.8 13.3533 14.05 13.7233C13.4 14.0433 12.87 14.3233 12 14.3233C11.1 14.3233 10.6 14.0733 9.95 13.7233C9.2 13.3433 8.38 12.9233 7 12.9233C5.62 12.9233 4.8 13.3533 4.05 13.7233C3.62 13.9333 3.24 14.1333 2.77 14.2433C2.33 14.3433 2 14.7033 2 15.1533V15.2533C2 15.8433 2.54 16.2833 3.12 16.1633C3.87 16.0133 4.43 15.7233 4.95 15.4733C5.6 15.1233 6.1 14.8733 7 14.8733C7.9 14.8733 8.4 15.1233 9.05 15.4733C9.8 15.8533 10.62 16.2733 12 16.2733C13.38 16.2733 14.2 15.8433 14.95 15.4733C15.6 15.1233 16.1 14.8733 17 14.8733C17.9 14.8733 18.4 15.1233 19.05 15.4733C19.57 15.7333 20.13 16.0233 20.88 16.1733C21.46 16.2833 22 15.8433 22 15.2533V15.1633C22 14.7033 21.66 14.3433 21.21 14.2433C20.75 14.1433 20.38 13.9533 19.95 13.7233C19.2 13.3433 18.35 12.9233 17 12.9233ZM19.95 4.84333C19.2 4.46333 18.37 4.04333 17 4.04333C15.63 4.04333 14.8 4.46333 14.05 4.84333C13.4 5.16333 12.87 5.44333 12 5.44333C11.1 5.44333 10.6 5.19333 9.95 4.84333C9.2 4.47333 8.38 4.04333 7 4.04333C5.62 4.04333 4.8 4.46333 4.05 4.84333C3.62 5.06333 3.24 5.25333 2.78 5.36333C2.33 5.46333 2 5.82333 2 6.27333V6.34333C2 6.94334 2.54 7.38333 3.12 7.26333C3.87 7.11333 4.43 6.82333 4.95 6.57333C5.6 6.24334 6.12 5.97334 7 5.97334C7.88 5.97334 8.4 6.22334 9.05 6.57333C9.8 6.95333 10.62 7.37333 12 7.37333C13.38 7.37333 14.2 6.94334 14.95 6.57333C15.6 6.25333 16.13 5.97334 17 5.97334C17.9 5.97334 18.4 6.22334 19.05 6.57333C19.57 6.83333 20.13 7.12333 20.88 7.27333C21.46 7.38333 22 6.94333 22 6.35333V6.26333C22 5.80333 21.66 5.44333 21.21 5.34333C20.75 5.24333 20.38 5.06333 19.95 4.84333ZM17 8.47334C15.65 8.47334 14.8 8.90334 14.05 9.27334C13.4 9.62334 12.9 9.87333 12 9.87333C11.1 9.87333 10.6 9.62334 9.95 9.27334C9.2 8.89334 8.38 8.47334 7 8.47334C5.62 8.47334 4.8 8.90334 4.05 9.27334C3.62 9.50334 3.25 9.69334 2.79 9.79333C2.34 9.89333 2 10.2533 2 10.7133V10.8033C2 11.3933 2.54 11.8333 3.12 11.7133C3.87 11.5633 4.43 11.2733 4.95 11.0233C5.6 10.7033 6.13 10.4233 7 10.4233C7.87 10.4233 8.4 10.6733 9.05 11.0233C9.8 11.4033 10.62 11.8233 12 11.8233C13.38 11.8233 14.2 11.3933 14.95 11.0233C15.6 10.7033 16.13 10.4233 17 10.4233C17.9 10.4233 18.4 10.6733 19.05 11.0233C19.57 11.2833 20.13 11.5733 20.88 11.7233C21.46 11.8333 22 11.3933 22 10.8133V10.7233C22 10.2633 21.66 9.90334 21.21 9.80334C20.75 9.70334 20.38 9.51333 19.95 9.28333C19.2 8.89333 18.35 8.47334 17 8.47334Z"
        fill={colorCode}
      />
    </svg>
  )
}