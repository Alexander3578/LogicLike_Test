import {customStore} from '@/services/store';
import {Course} from '@/components/ui/course';
import s from './coursesList.module.scss';

export const CoursesList = () => {
    return (
        <ul className={s.coursesListWrapper}>
            {customStore.state?.map(course =>
                <li key={course.id}>
                    <Course img={course.image} text={course.name} bgColor={course.bgColor}/>
                </li>
            )}
        </ul>
    );
};

