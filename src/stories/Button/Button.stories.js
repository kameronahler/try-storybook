import React from 'react'
import { Button, BUTTON_TYPES } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Default Button',
  ariaLabel: 'Example of a default button',
}

export const Primary = Template.bind({})
Primary.args = {
  ariaLabel: 'Example of a primary button',
  text: 'Primary Button',
  type: BUTTON_TYPES.primary,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ariaLabel: 'Example of secondary button',
  type: BUTTON_TYPES.secondary,
  text: 'Secondary Button',
}
