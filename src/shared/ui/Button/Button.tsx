import {classNames} from "shared/lib/classnames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme{
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    classname?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        classname,
        children,
        theme = ButtonTheme.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {},[classname, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
