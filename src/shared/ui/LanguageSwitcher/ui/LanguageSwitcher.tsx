import {classNames} from "shared/lib/classnames/classNames";
import cls from './LanguageSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
    classname?: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const {classname, ...otherProps} = props;

    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en');
    }

    console.log("Language switcher", classNames(cls.LanguageSwitcher, {},[classname]));

    return (
        <Button
            classname={classNames(cls.LanguageSwitcher, {},[classname])}
            onClick={toggleLanguage}
            theme={ButtonTheme.CLEAR}
        >
             {t('Language')}
        </Button>

    );
};
