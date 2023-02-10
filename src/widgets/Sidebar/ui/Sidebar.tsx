import {classNames} from "shared/lib/classnames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LanguageSwitcher} from "shared/ui/LanguageSwitcher";

interface SidebarProps {
    classname?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const {classname, ...otherProps} = props;

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapse = () => setCollapsed((collapsed) => !collapsed)

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed},[classname])}>
            <Button onClick={toggleCollapse}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
