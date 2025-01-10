import { Link } from 'react-router-dom'
import '../styles/home.css'
import { FaArrowRightLong, FaFacebook } from 'react-icons/fa6'
import { FaInstagramSquare } from 'react-icons/fa'
import appStore from '../assets/appstore.svg'
import ggPlay from '../assets/ggplay.svg'

const Home = () => {
    return (
        <div>
            <div className="banner">
                <img src="https://brand-pcms.ggg.systems/media/so/homecmsdata/banners/TGS_news_Feature.png" alt="" />
            </div>

            <div className='clear-both'>
                <div>
                    <Link to={"/buffet"}>
                        <img src="https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2024/11/Banner-web-MW-scaled.jpg" alt="" />
                    </Link>
                </div>

                <div className='banner-1'>
                    <div className='banner-1-text'>
                        <div className='banner-1-text-content'>
                            <h3>Lẩu Đài Loan</h3>
                            <div>
                                Sau hàng trăm năm tồn tại trong cuộc sống người Đài, lẩu Đài Loan không chỉ đơn thuần là sự kết hợp của các nguyên liệu quen thuộc, mà liên tục được cải tiến và hoàn thiện, từ thế hệ này sang thế hệ khác. Thực khách đến Manwah sẽ được tự mình khám phá hành trình ẩm thực đặc sắc với nước lẩu ngọt vị tự nhiên, kết hợp hầm cùng các loại gia vị dậy mùi thơm đặc trưng của Đài Loan. Nét đặc sắc không chỉ đến từ nước lẩu, mà còn đến từ cả những món nhúng kiểu Đài – bạn sẽ tìm thấy nhiều hơn là chỉ thịt bò và các loại rau thơm. Chính sự kết hợp các nguyên liệu, món ăn hài hoà sẽ tạo nên hương vị lẩu Đài Loan tỉ mỉ và tinh tế.
                            </div>
                            <p>
                                <Link to={"/menu"}>Xem thực đơn</Link>
                                <FaArrowRightLong style={{ color: "rgba(248, 149, 32, 1)" }} />
                            </p>
                        </div>
                    </div>

                    <div className='banner-1-img'>
                        <div>
                            <img src="https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/06/manwah-lau-dai-loan-home-1-scaled.jpeg" alt="" />
                        </div>
                        <div>
                            <img src="https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/06/manwah-lau-dai-loan-home-2-scaled.jpeg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='banner-1'>
                    <div className='banner-1-text'>
                        <div className='banner-1-text-content'>
                            <h3>Hành trình vạn dặm – Manwah đến Lê Thái Tổ</h3>
                            <div>
                                Đặt phép tương phản trong mọi yếu tố thiết kế - từ màu sắc tới họa tiết hay ánh sáng... Manwah Lê Thái Tổ mang đậm âm hưởng Đài Loan truyền thống nhưng cũng thật phóng khoáng, vừa trang nhã lại không kém phần mỹ lệ, thân thuộc và cũng đầy khác biệt.
                            </div>
                            <p>
                                <Link to={"/menu"}>Xem thêm</Link>
                                <FaArrowRightLong style={{ color: "rgba(248, 149, 32, 1)" }} />
                            </p>
                        </div>
                    </div>

                    <div className='banner-2-img'>
                        <div>
                            <img src="https://cmsbrandwebsites.ggg.com.vn/wp-content/uploads/2022/10/manwah-hanh-trinh-van-dam-hn.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='banner-1'>
                    <div className='banner-1-text'>
                        <div className='banner-1-text-content'>
                            <h3>The New Manwah - New Identity</h3>
                            <div>
                                🎴Là lẩu Đài nguyên bản, nhưng không kém phần trẻ trung và hội nhập! Không tự giới hạn mình trong phạm vi ẩm thực, Manwah luôn muốn đan cài các yếu tố văn hóa vào thương hiệu. Lần “dịch chuyển” này, Manwah xích lại gần đời sống của khách hàng hơn! Bạn có thể thấy những màu sắc, hoa văn, nguồn cảm hứng rất gần gũi, mà bạn đã gặp ở đâu đó trong các bộ phim Đài Loan tuổi thơ hay những hình ảnh đặc trưng của đất nước này. Một hành trình mới nhưng tâm ý không đổi, hi vọng rằng bạn sẽ luôn cảm thấy mình trong Manwah nhé!
                            </div>
                            <p>
                                <Link to={"/menu"}>Xem video</Link>
                                <FaArrowRightLong style={{ color: "rgba(248, 149, 32, 1)" }} />
                            </p>
                        </div>
                    </div>

                    <div className='banner-2-img'>
                        <div>
                            <iframe style={{ width: "100%", height: "325px" }} src="https://www.youtube.com/embed/tsvpW_-oxm8?si=KKLKZYLEkM3xOw76" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-brands'>
                <div className='home-brand-content'>
                    <div className='content'>
                        <div className='content-1'>
                            <label className='brand-name'>HOTPOT</label>
                            <div className='brand-list'>
                                <ul>
                                    <li>
                                        <Link to={"https://ashima.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/hotpot_ashima.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://kichi.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/hotpot_kichi.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://manwah.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/manwah-list.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://hutong.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/hotpot_hutong.svg' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='content-1'>
                            <label className='brand-name'>BBQ</label>
                            <div className='brand-list'>
                                <ul>
                                    <li>
                                        <Link to={"https://sumoyakiniku.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/bbq_sumo.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://gogi.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/gogi-list.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://gogisteak.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/bbq_gogisteak.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://kpub.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/kpub-list.jpg' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='content-1'>
                            <label className='brand-name'>JAPANESE</label>
                            <div className='brand-list'>
                                <ul>
                                    <li>
                                        <Link to={"https://isushi.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/japan_isushi.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://shogun.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/japan_shogun.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://daruma.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/japan_daruma.svg' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='content-1'>
                            <label className='brand-name'>STEAKHOUSE</label>
                            <div className='brand-list'>
                                <ul>
                                    <li>
                                        <Link to={"https://woomastervn.com/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/woomaster.svg' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='content-1'>
                            <label className='brand-name'>WESTERN</label>
                            <div className='brand-list'>
                                <ul>
                                    <li>
                                        <Link to={"https://cowboyjacks.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/wester_cowboy_jack.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://vuvuzela.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/vuvu.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/unionpizzavn"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/union_pizza.svg' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='content-1'>
                            <label className='brand-name'>DELIVERY</label>
                            <div className='brand-list'>
                                <ul>
                                    <li>
                                        <Link to={"https://icook.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/other_icook.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://gdeli.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/gdeli.svg' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='content-1'>
                            <label className='brand-name'>OTHERS</label>
                            <div className='brand-list'>
                                <ul>
                                    <li>
                                        <Link to={"https://37street.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/other_37_street.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/hangcuon.bypho37"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/hangcuon.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/cloudpot"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/cloudpot.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/ipho.vietnam/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/ipho.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/sungquan.hanoi"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/sungquan.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://crystaljade.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/other_crystal.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://chixmax.com.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/chixmax.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/CitiBeerStation"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/citibeer_station.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/makmak.thaikitchen"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/makmak.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/makmak.thaikitchen"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/other_the_coffee.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://yutang.vn/"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/other_yutang.svg' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://www.facebook.com/universaltea.utea"}>
                                            <img className='img-brand' src='https://manwah.com.vn/images/brand_logo/white/universal_tea.svg' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-brand-dowload'>
                    <div className='download-app'>
                        <div className='download-content'>
                            <h4>Tải App Golden SpoonS</h4>
                            <div className='content-img'>
                                <Link to={"https://goldenspoons.com.vn/?pid=Website%20Brand&c=Website_Brand_Manwah&af_adset=Manwah&af_ad=Banner%20Footer"}>
                                    <img src={appStore} alt="" />
                                </Link>
                                <Link to={"https://goldenspoons.com.vn/?pid=Website%20Brand&c=Website_Brand_Manwah&af_adset=Manwah&af_ad=Banner%20Footer"}>
                                    <img src={ggPlay} alt="" />
                                </Link>
                            </div>
                            <p>Golden SpoonS – Siêu ứng dụng cho tín đồ ẩm thực.</p>
                            <p>Tải App Hôm Nay Chạm Ngay Ưu Đãi.</p>
                            <ul style={{ display: "flex", justifyContent: 'center', listStyle: "none" }}>
                                <li>
                                    <span>
                                        <Link to={"https://www.facebook.com/Manwah.Taiwanese.Hotpot.GoldenGateGroup"}>
                                            <FaFacebook />
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Link to={"https://www.instagram.com/manwah.taiwanesehotpot/#"}>
                                            <FaInstagramSquare />
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home