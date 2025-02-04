import React, { ReactNode } from "react";
import Header from "../Header";

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
