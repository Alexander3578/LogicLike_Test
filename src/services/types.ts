export type CustomStore = {
    state: Course[] | null,
    fetchFilteredCourses: (tag: Tags) => Promise<void>
}

export type Course = {
    name: string;
    id: string;
    image: string;
    bgColor: string;
    tags: Tags[];
}

export type Tags =
    'Головоломки'
    | 'Шахматы'
    | 'Логика и мышление'
    | 'Окружающий мир'
    | 'Загадки'
    | 'Страны и столицы'
    | 'Все темы';