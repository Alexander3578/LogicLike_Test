import {memo, ReactNode} from 'react';
import s from './tag.module.scss'
import {Typography} from '@/components/ui/typography';

export type TagProps = {
    children: ReactNode
    currentTag: boolean
}

export const Tag = memo(({children, currentTag}:TagProps) => {
 return <div className={`${s.tag} ${currentTag && s.selectedTag}`}>
     <Typography as={'div'} className={s.tagsText}>
         {children}
     </Typography>
 </div>
})

