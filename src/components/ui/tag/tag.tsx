import {ReactNode} from 'react';
import s from './tag.module.scss'
import {Typography} from '@/components/ui/typography';

export type TagProps = {
    children: ReactNode
}

export const Tag = ({children}:TagProps) => {
 return <div className={s.tag}>
     <Typography as={'div'} className={s.tagsText}>
         {children}
     </Typography>
 </div>
}

