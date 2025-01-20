import '../styles/review.css'

interface Props {
    img: string,
    content: string,
    name: string,
    job: string
}

const Review = (props: Props) => {

    const { img, content, name, job } = props

    return (
        <div className="review" style={{ border: "1px solid rgb(211, 211, 211)", borderRadius: "20px", padding: "20px", minHeight: "250px", width: "474px" }}>
            <p>{content}</p>
            <div className="" style={{ display: "flex", alignItems: "center" }}>
                <span><img src={img} alt="" /></span>
                <div style={{ paddingLeft: "20px" }}>
                    <h3>{name}</h3>
                    <span>{job}</span>
                </div>
            </div>
        </div>
    )
}

export default Review