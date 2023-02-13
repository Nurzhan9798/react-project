import { classNames } from 'shared/lib/classnames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    classname,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props

  console.log(otherProps)

  return (
    <button
      className={classNames(cls.Button, { [cls[theme]]: true }, [classname])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
