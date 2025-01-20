import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretRight, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import MenuItem2 from "./MenuItem2";
import { menuSelector, MenuState, setIsCloseBuffetItem, setSelectedKey, setSelectedKey2 } from "../redux/reducers/menuReducer";
import { useDispatch, useSelector } from "react-redux";

const listMonLe = [
    { key: 1, title: "Lẩu" },
    { key: 2, title: "Heo - Cừu" },
    { key: 3, title: "Bò" },
    { key: 4, title: "Nội tạng" },
    { key: 5, title: "Hải sản" },
    { key: 6, title: "Đậu hũ & Đồ viên" },
    { key: 7, title: "Há cảo & Sủi cảo" },
    { key: 8, title: "Rau & Nấm" },
    { key: 9, title: "Mỳ" },
]

const listBuffet = [
    {
        key: 10,
        title: "Buffet Linh Vân Các 229K",
        children: [
            { key: "nuoclau", title: "Nước lẩu" },
            { key: "heocuu1", title: "Heo - Cừu" },
            { key: "bo1", title: "Bò" },
            { key: "haisann1", title: "Hải sản" },
            { key: "noitang1", title: "Nội tạng" },
            { key: "dauhu1", title: "Đậu hũ - Đồ viên" },
            { key: "raunam1", title: "Rau - Nấm" },
            { key: "my1", title: "Mỳ" },
            { key: "ankem1", title: "Ăn kèm" },
        ],
    },
    {
        key: 11,
        title: "Buffet Phúc Khả Vương 319K",
        children: [
            { key: "nuoclau", title: "Nước lẩu" },
            { key: "heo2", title: "Heo" },
            { key: "bo2", title: "Bò" },
            { key: "noitang2", title: "Nội tạng" },
            { key: "haisann2", title: "Hải sản" },
            { key: "dauhu2", title: "Đậu hũ - Đồ viên" },
            { key: "raunam2", title: "Rau - Nấm" },
            { key: "my2", title: "Mỳ" },
            { key: "ankem2", title: "Ăn kèm" },
        ],
    },
    {
        key: 12,
        title: "Buffet Bách Giai Vị 419K",
        children: [
            { key: "nuoclau", title: "Nước lẩu" },
            { key: "heocuu3", title: "Heo - Cừu" },
            { key: "bo3", title: "Bò" },
            { key: "haisann3", title: "Hải sản" },
            { key: "noitang3", title: "Nội tạng" },
            { key: "dauhu3", title: "Đậu hũ - Đồ viên" },
            { key: "raunam3", title: "Rau - Nấm" },
            { key: "my3", title: "Mỳ" },
            { key: "ankem3", title: "Ăn kèm" },
        ],
    },
];



const SideMenu = () => {
    const menu: MenuState = useSelector(menuSelector)
    const dispatch = useDispatch();
    const [isCloseMonLe, setIsCloseMonLe] = useState(false)
    const [isCloseBuffet, setIsCloseBuffet] = useState(true)

    useEffect(() => {
        const url = window.location.pathname;
        const segments = url.split('/');
        const id = segments[2];
        // console.log("id", id);


        if (id === "mon-le") {
            setIsCloseMonLe(false)
            setIsCloseBuffet(true)
        } else if (id === "buffet") {
            setIsCloseMonLe(true)
            setIsCloseBuffet(false)
        }
    }, [])


    const handleMenuItemClick = (key: string | number) => {
        dispatch(setSelectedKey(key)); // Thay đổi state khi phần tử được nhấp
        dispatch(setIsCloseBuffetItem(key))
        dispatch(setSelectedKey2('nuoclau'))
    };

    const handleMenuItem2Click = (key: string | number) => {
        dispatch(setSelectedKey2(key)); // Thay đổi state khi phần tử được nhấp
    };

    const handleClickMonLe = () => {
        setIsCloseMonLe(false)
        setIsCloseBuffet(true)
        dispatch(setSelectedKey(null))
        dispatch(setSelectedKey2(null))
        dispatch(setSelectedKey(1))
        dispatch(setIsCloseBuffetItem(null))
    }

    const handleClickBuffet = () => {
        setIsCloseMonLe(true)
        setIsCloseBuffet(false)
    }

    return (
        <aside>
            <div>
                <div onClick={handleClickMonLe}>
                    <Menu to="/menu/mon-le" title="Món lẻ" icon={isCloseMonLe ? <AiFillCaretRight /> : <AiFillCaretDown />} />
                </div>
                {
                    !isCloseMonLe &&
                    <div style={{ marginLeft: "16px" }}>
                        {listMonLe.map((monLe) => (
                            <MenuItem
                                key={monLe.key}
                                title={monLe.title}
                                isSelected={menu.selectedKey === monLe.key} // Truyền trạng thái isSelected để thay đổi màu
                                onClick={() => handleMenuItemClick(monLe.key)} // Xử lý sự kiện khi nhấp vào item
                            />
                        ))}
                    </div>
                }
            </div>

            <div>
                <div onClick={handleClickBuffet}>
                    <Menu to="/menu/buffet" title="Buffet" icon={isCloseBuffet ? <AiFillCaretRight /> : <AiFillCaretDown />} />
                </div>
                {
                    !isCloseBuffet &&
                    <div style={{ marginLeft: "16px" }}>
                        {listBuffet.map((buffet) => (
                            <div key={buffet.key}>
                                <MenuItem
                                    key={buffet.key}
                                    title={buffet.title}
                                    icon={menu.isCloseBuffetItem === buffet.key ? <AiOutlineMinus style={{ marginRight: "10px" }} /> : <AiOutlinePlus style={{ marginRight: "10px" }} />}
                                    isSelected={menu.selectedKey === buffet.key} // Truyền trạng thái isSelected để thay đổi màu
                                    onClick={() => handleMenuItemClick(buffet.key)} />
                                <div style={{ marginLeft: "24px" }}>
                                    {menu.isCloseBuffetItem === buffet.key && buffet.children.map((buffetChildren) => (
                                        <MenuItem2
                                            key={buffetChildren.key}
                                            title={buffetChildren.title}
                                            isSelected={menu.selectedKey2 === buffetChildren.key} // Truyền trạng thái isSelected để thay đổi màu
                                            onClick={() => handleMenuItem2Click(buffetChildren.key)} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </aside>
    );
};

export default SideMenu;
