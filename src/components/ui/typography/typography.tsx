import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Typography = forwardRef<ElementRef<ElementType>, TypographyProps<ElementType>>(
  (
    {
      as: Component = 'span',
      children,
      className,
      ...restProps
    },
    ref
  ) => {

    return (
      <Component className={`${className} ${s.default}`} ref={ref} {...restProps}>
        {children}
      </Component>
    )
  }
)
