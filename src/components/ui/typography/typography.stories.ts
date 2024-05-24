import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    //для переключения варианта
  },
  component: Typography,
  //для создания Docs с общей страницей
  tags: ['autodocs'],
  //для красоты чтоб было все названо слева в уголке
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children: 'Шахматы',
  },
}


