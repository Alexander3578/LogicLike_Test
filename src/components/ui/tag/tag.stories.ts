import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './'

const meta = {
    argTypes: {
        currentTag: {
            control: 'boolean',
        },
        children: {
            control: 'text',
        },
    },
        component: Tag,
    //для создания Docs с общей страницей
    tags: ['autodocs'],
    //для красоты чтоб было все названо слева в уголке
    title: 'Components/Tag',
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const UsualTag: Story = {
    args: {
        children: 'Шахматы',
        currentTag: false
    },
}

export const SelectedTag: Story = {
    args: {
        children: 'Шахматы',
        currentTag: true
    },
}


