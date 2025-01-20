import Review from "../components/Review"
import Slider1 from "react-slick";



const reviews = [
    {
        img: "https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/07/Fb3-900x900-1.png",
        content: "Mọi người cũng nên thử màn múa rượu cực kỳ hayyyyy ở đây. Mèn đét ơi múa tung trời mà rượu đổ vào cốc bốc khói cứ gọi là há hốc mồm luônnnnnn.",
        name: "Phương Anh",
        job: "Sinh viên"
    },
    {
        img: "https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/07/Fb2-900x900-1.png",
        content: "Lần nào ăn lẩu nhà mình cũng tụ họp ở Manwah. Ông bà thích lắm vì được ăn lẩu nấm thanh ngọt đúng sở trường, còn Mí, Mochi thì chỉ lẩu cà chua yummy. Xin tặng lời khen cho người chồng tâm lý vì luôn chịu trách nhiệm “đi chợ” - chọn món nhúng đúng sở thích của cả nhà giữa gần trăm món tươi ngon. Mí đam mê quầy kem đủ loại và các món chiên, trà sữa lắm nên được ông chiều chuộng đưa đi lấy liên tục, háo hức mang về cho cả bố mẹ.",
        name: "Thu Trang",
        job: "Giáo viên"
    },
    {
        img: "https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/07/Fb4-900x900-1.jpeg",
        content: "Quây quần ăn lẩu nhiều lắm rồi, nhưng em chưa thấy chỗ nào có cả món ăn kèm ngon như Manwah, phải ăn chân gà ngâm, uống trà sữa, ăn kem ở đây thì mới thấm thía huhu…em còn tính điếm điếm bỏ bịch chân gà mang về nhưng lương tâm ko cho phép :)) Bữa rồi ăn hết 3 đĩa chân gà, 2 ly kem, 3 ly trà sữa là hiểu…",
        name: "Thu Thảo",
        job: "Nhân viên"
    },
    {
        img: "https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/07/Fb3-900x900-1.png",
        content: "Mọi người cũng nên thử màn múa rượu cực kỳ hayyyyy ở đây. Mèn đét ơi múa tung trời mà rượu đổ vào cốc bốc khói cứ gọi là há hốc mồm luônnnnnn.",
        name: "Phương Anh",
        job: "Sinh viên"
    },
    {
        img: "https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/07/Fb2-900x900-1.png",
        content: "Lần nào ăn lẩu nhà mình cũng tụ họp ở Manwah. Ông bà thích lắm vì được ăn lẩu nấm thanh ngọt đúng sở trường, còn Mí, Mochi thì chỉ lẩu cà chua yummy. Xin tặng lời khen cho người chồng tâm lý vì luôn chịu trách nhiệm “đi chợ” - chọn món nhúng đúng sở thích của cả nhà giữa gần trăm món tươi ngon. Mí đam mê quầy kem đủ loại và các món chiên, trà sữa lắm nên được ông chiều chuộng đưa đi lấy liên tục, háo hức mang về cho cả bố mẹ.",
        name: "Thu Trang",
        job: "Giáo viên"
    },
    {
        img: "https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/07/Fb4-900x900-1.jpeg",
        content: "Quây quần ăn lẩu nhiều lắm rồi, nhưng em chưa thấy chỗ nào có cả món ăn kèm ngon như Manwah, phải ăn chân gà ngâm, uống trà sữa, ăn kem ở đây thì mới thấm thía huhu…em còn tính điếm điếm bỏ bịch chân gà mang về nhưng lương tâm ko cho phép :)) Bữa rồi ăn hết 3 đĩa chân gà, 2 ly kem, 3 ly trà sữa là hiểu…",
        name: "Thu Thảo",
        job: "Nhân viên"
    },
]


const Sale = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
    };

    return (
        <div>
            <div style={{ textAlign: "center", marginTop: "180px", marginBottom: "40px" }}>Hiện tại không có chương trình ưu đãi nào.</div>

            <div style={{ maxWidth: "972px", marginLeft: "auto", marginRight: "auto", marginBottom: "50px" }}>
                <Slider1 {...settings}>
                    {reviews.map((review) => (
                        <div>
                            <Review
                                content={review.content}
                                img={review.img}
                                name={review.name}
                                job={review.job}
                            />
                        </div>
                    ))}
                </Slider1>
            </div>
        </div>
    )
}

export default Sale