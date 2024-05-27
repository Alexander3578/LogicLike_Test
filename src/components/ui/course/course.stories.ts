import type { Meta, StoryObj } from '@storybook/react'

import { Course } from './'

const meta = {
    argTypes: {
        //для переключения варианта
    },
        component: Course,
    //для создания Docs с общей страницей
    tags: ['autodocs'],
    //для красоты чтоб было все названо слева в уголке
    title: 'Components/Course',
} satisfies Meta<typeof Course>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
    args: {
        img: 'https://spleten.net/wp-content/uploads/2023/09/scale_1200_ready86-3.jpg',
        text: 'Example'
    },
}


