import {TagsList} from '@/features/mainContetnt/tagsList/tagsList';
import {CoursesList} from '@/features/mainContetnt/coursesList/coursesList';
import {Tags} from '@/services/types';
import {memo} from 'react';
import s from './mainContent.module.scss'

type MainContentProps = {
    onChangeCourses: (theme: Tags) => void
    tagsTheme: Tags
}

export const MainContent = memo(
    ({ onChangeCourses, tagsTheme }: MainContentProps) => {

    return (
        <div className={s.mainContentWrapper}>
            <TagsList onChangeCourses={onChangeCourses}
                      tagsTheme={tagsTheme}/>
            <CoursesList />
        </div>
    );
});

