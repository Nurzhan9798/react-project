import {classNames} from "shared/lib/classnames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    classname?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {classname} = props;

    return (
        <div className={classNames(cls.Navbar, {},[classname])}>
            <div className={classNames(cls.links)}>
                <AppLink to={"about"}>About page</AppLink>
                <AppLink to={"/"}>Home page</AppLink>
            </div>
        </div>
    );
};
