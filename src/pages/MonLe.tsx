import { useSelector } from "react-redux"
import { menuSelector, MenuState } from "../redux/reducers/menuReducer"
import ProductCard from "../components/ProductCard";

const listMonLe = [
    {
        key: 1,
        children: [
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/2/6/26_2.jpg",
                name: "Lẩu Đài Bắc Ngọc Thạch 1/2 nồi",
                price: "169.000 ₫"
            },
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/l/a/lau-hong-ngoc_1.jpg",
                name: "Lẩu Mala Hồng Ngọc 1/2 nồi",
                price: "169.000 ₫"
            },
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60001665-lau-dai-bac_1_2.jpg",
                name: "Lẩu Đài Bắc 1/2 nồi",
                price: "89.000 ₫"
            },
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60001017-lau-kim-chi_1_2.jpg",
                name: "Lẩu Kim chi 1/4 nồi",
                price: "49.000 ₫"
            },
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60001565-lau-ca-chua_1_2.jpg",
                name: "Lẩu Cà chua 1/2 nồi",
                price: "89.000 ₫"
            },
        ]
    },
    {
        key: 2,
        children: [
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/b/a/bachicuu.jpg",
                name: "Ba chỉ cừu",
                price: "169.000 ₫"
            },
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/m/_/m_heo.png",
                name: "Má heo",
                price: "169.000 ₫"
            },
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/b/_/b_p_heo_my_cu_n.jpg",
                name: "Bắp heo Mỹ cuộn",
                price: "89.000 ₫"
            },
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60001584-ba-chi-heo-iberico_2_1.jpg",
                name: "Ba chỉ heo Iberico",
                price: "49.000 ₫"
            },
            {
                img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/3/1/31_1.jpg",
                name: "Nạc vai heo Iberico",
                price: "89.000 ₫"
            },
        ]
    }
]


const MonLe = () => {

    const menu: MenuState = useSelector(menuSelector)

    console.log("menu1", menu.selectedKey);
    console.log("menu2", menu.selectedKey2);
    console.log("menu3", menu.isCloseBuffetItem);

    const selectedMonLe = listMonLe.find(item => item.key === menu.selectedKey);

    console.log(selectedMonLe);


    return (
        <div style={{ marginLeft: "120px" }}>
            {selectedMonLe && selectedMonLe.children.map((item) => (
                <ProductCard
                    key={item.name} // Hoặc sử dụng item.key nếu muốn đảm bảo tính duy nhất
                    img={item.img}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default MonLe