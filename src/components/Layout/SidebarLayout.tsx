import { ReactNode } from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";

interface SidebarLayoutProps {
    children: ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div style={{ display: "flex", marginTop: "120px" }}>
                <div style={{ width: "260px" }}><SideMenu /></div>
                <div style={{ width: "80%" }}>{children}</div>
            </div>
        </div>
    )
}

export default SidebarLayout