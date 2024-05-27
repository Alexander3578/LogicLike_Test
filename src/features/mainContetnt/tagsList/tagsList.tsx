import {Tag} from '@/components/ui/tag';
import {memo, useEffect, useMemo, useState} from 'react';
import {v1} from 'uuid'
import s from './tagsList.module.scss'
import {Tags} from '@/services/types';

type TagsListProps = {
    onChangeCourses: (theme: Tags) => void
    tagsTheme: Tags
}

export const TagsList = memo(({onChangeCourses, tagsTheme}:TagsListProps) => {

    const tagsTitles = useMemo(() => [
        "Головоломки",
        "Шахматы",
        "Логика и мышление",
        "Окружающий мир",
        "Загадки",
        "Страны и столицы",
        "Все темы"
    ], []);


    const [tagItems, setTagItems] = useState<{ id: string, title: string }[]>([]);

    useEffect(() => {
        const itemsWithId = tagsTitles.map(titel => ({
            id: v1(),
            title: titel
        })).sort(
            (a, b) => a.title.localeCompare(b.title));

        setTagItems(itemsWithId);
    }, []);

    return (
        <ul className={s.tagsList}>
            {tagItems.map(item =>
                <li key={item.id} onClick={() => onChangeCourses(item.title as Tags)}>
                    <Tag currentTag={tagsTheme === item.title}>
                        {item.title}
                    </Tag>
                </li>
            )}
        </ul>
    );
});

