import { useSelector } from "react-redux";
import { menuSelector, MenuState } from "../redux/reducers/menuReducer";

const Buffet = () => {
    const menu: MenuState = useSelector(menuSelector)

    console.log("menu1", menu.selectedKey);
    console.log("menu2", menu.selectedKey2);
    console.log("menu3", menu.isCloseBuffetItem);
    return (
        <div>Buffet</div>
    )
}

export default Buffet