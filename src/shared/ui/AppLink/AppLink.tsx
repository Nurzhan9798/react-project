import { classNames } from 'shared/lib/classnames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import React, { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  classname?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    classname,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [classname, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
