import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import '../styles/sideMenu.css'

interface MenuProps {
    to: string
    icon: ReactNode;
    title: string;
}

const Menu = (props: MenuProps) => {
    const { to, icon, title } = props
    return (
        <NavLink className={"menu"} to={to}>
            <span>{title}</span>
            {icon}
        </NavLink>
    )
}

export default Menu