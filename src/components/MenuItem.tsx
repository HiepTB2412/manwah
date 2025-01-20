import { ReactNode } from "react";

interface MenuItemProps {
    icon?: ReactNode;
    title: string;
    isSelected: boolean;  // Prop kiểm tra xem item có được chọn không
    onClick: () => void;
}

const MenuItem = ({ icon, title, isSelected, onClick }: MenuItemProps) => {
    return (
        <h4
            className={`menuItem ${isSelected ? "active" : ""}`}  // Áp dụng class active khi item được chọn
            onClick={onClick}  // Gọi hàm khi nhấp vào
        >
            {title}
            {icon}
        </h4>
    );
};

export default MenuItem;
