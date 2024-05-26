import {Typography} from '@/components/ui/typography';
import s from './course.module.scss'
import {memo} from 'react';

type CourseProps = {
    img: string,
    text: string
    bgColor: string
}

export const Course = memo((props: CourseProps) => {

    const {img, text, bgColor} = props

    return (
        <div className={s.courseWrapper}>
            <img src={img}
                 alt={'Course picture'}
                 className={s.courseImg}
                 style={{backgroundColor: bgColor}}/>
            <Typography className={s.courseTitle}>{text}</Typography>
        </div>
    )
})