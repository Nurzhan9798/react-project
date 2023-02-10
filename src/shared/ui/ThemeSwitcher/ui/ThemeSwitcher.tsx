import cls from './ThemeSwitcher.module.scss'
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import {Theme, useTheme} from "app/provider/ThemeProvider"

interface ThemeSwitcherProps {
    classname?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const {classname, ...otherProps} = props;

    return (
        <Button
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
