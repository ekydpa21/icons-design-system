import React from "react"
import { Meta, Story } from "@storybook/react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

import SignalCellularConnectedNoInternet4BarIcon from "./SignalCellularConnectedNoInternet4BarIcon"

export default {
  title: "BRIBrain/SignalCellularConnectedNoInternet4BarIcon",
  component: SignalCellularConnectedNoInternet4BarIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      defaultValue: 24,
      description: "Size Icon",
    },
    rotate: {
      defaultValue: 0,
      description: "Rotate Icon",
    },
    color: {
      options: Object.keys(colorDatas).map((item: string) => item),
      control: { type: "select" },
      description: "Color Icon",
    },
  },
} as Meta<typeof SignalCellularConnectedNoInternet4BarIcon>

const size: number = 24
const rotate: number = 0
const color: Color = "grey-100"
const Template: Story<typeof SignalCellularConnectedNoInternet4BarIcon> = (args) => <SignalCellularConnectedNoInternet4BarIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: size,
  rotate: rotate,
  color: color,
}
