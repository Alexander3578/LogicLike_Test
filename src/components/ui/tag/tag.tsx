import {memo, ReactNode} from 'react';
import s from './tag.module.scss'
import {Typography} from '@/components/ui/typography';

export type TagProps = {
    children: ReactNode
    className?: string
}

export const Tag = memo(({children, className}:TagProps) => {
 return <div className={`${s.tag} ${className}`}>
     <Typography as={'div'} className={s.tagsText}>
         {children}
     </Typography>
 </div>
})

