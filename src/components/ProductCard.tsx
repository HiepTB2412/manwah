interface ProductCardProps {
    img: string,
    name: string,
    price: string
}

const ProductCard = ({ img, name, price }: ProductCardProps) => {
    return (
        <div style={{ display: "inline-block", width: "33.33%", textAlign: "center", marginBottom: "20px" }}>
            <img
                style={{ width: "289px", height: "230px", borderRadius: "10px" }}
                src={img}
                alt=""
            />
            <div style={{ textAlign: "center", paddingTop: "10px" }}>
                <p style={{ fontSize: "18px", paddingBottom: "10px" }}>{name}</p>
                <span style={{ color: "#a8a8a8" }}>{price}</span>
            </div>
        </div>
    )
}

export default ProductCard