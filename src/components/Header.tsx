import { Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp, IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import '../styles/header.css'
import flagVN from '../assets/flag.svg'
import { IoLocationSharp, IoMenu } from 'react-icons/io5';
import { Modal, Radio, Select } from 'antd';
import { useState } from 'react';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [city, setCity] = useState("Hà Nội");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu
    const [isDetailMenuOpen, setIsDetailMenuOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSelected = (value: string) => {
        setIsModalOpen(false);
        setCity(value);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Chuyển đổi trạng thái menu
    };

    return (
        <div className="header">
            <div style={{ borderBottom: "1px solid rgba(229, 231, 235, 1)" }}>
                <div className="menu-row">
                    <div className='language' onClick={showModal}>
                        <img src={flagVN} alt="" />
                        <IoMdArrowDropdown />
                    </div>
                    <Link to={"/tro-giup"}>Trợ giúp</Link>
                    <Link to={"/login"}>Đăng nhập</Link>
                    <div className='address' onClick={showModal}>Vị trí của bạn <IoLocationSharp /> {city}</div>
                </div>
            </div>

            <div>
                <div className="menu-nav">
                    <Link to={"/"}><img src="https://manwah.com.vn/images/logo/manwah.svg" alt="" /></Link>

                    <ul style={{ display: "flex" }}>
                        <Link to={"/sale"}><h2>Ưu đãi</h2></Link>
                        <Link to={"/menu"}><h2>Thực đơn</h2></Link>
                        <Link to={"/set-table"}><h2>Đặt bàn</h2></Link>
                    </ul>

                    <div onClick={toggleMenu}>
                        <IoMenu />
                    </div>
                </div>
            </div>

            {/* Lớp phủ mờ */}
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

            {/* Menu khi mở */}
            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <div style={{ textAlign: "end", paddingRight: "80px", paddingTop: "50px", paddingBottom: "20px", borderBottom: "1px solid rgba(229, 231, 235, 1)" }}>
                    <IoMdClose onClick={toggleMenu} style={{ fontSize: "30px", color: "rgba(123, 121, 121,1)" }} />
                </div>
                <ul>
                    <li>
                        <div onClick={() => setIsDetailMenuOpen(!isDetailMenuOpen)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "50%", marginLeft: "37px" }}>
                            <h2 className='menu-detail' style={{ cursor: "pointer", fontSize: "20px" }}>Thực đơn</h2>
                            {
                                isDetailMenuOpen ? < IoIosArrowUp /> : <IoIosArrowDown />
                            }
                        </div>
                        {
                            isDetailMenuOpen && <div>
                                <li style={{ marginLeft: "30px" }} onClick={toggleMenu}><Link to={"/"}><h2>Món lẻ</h2></Link></li>
                                <li style={{ marginLeft: "30px" }} onClick={toggleMenu}><Link to={"/buffet"}><h2>Buffet</h2></Link></li>
                                <li style={{ marginLeft: "30px" }} onClick={toggleMenu}><Link to={"/"}><h2>Combo</h2></Link></li>
                            </div>
                        }
                    </li>
                    <li onClick={toggleMenu}><Link to={"/set-table"}><h2>Đặt bàn</h2></Link></li>
                    <li onClick={toggleMenu}><Link to={"/sale"}><h2>Ưu đãi</h2></Link></li>
                    <li onClick={toggleMenu}><Link to={"/"}><h2>Giao hàng</h2></Link></li>
                    <li onClick={toggleMenu}><Link to={"/"}><h2>Về chúng tôi</h2></Link></li>
                    <li onClick={toggleMenu}><Link to={"/"}><h2>Tin tức</h2></Link></li>

                </ul>
                <div className='side-menu-button'>
                    <button>Tải app</button>
                    <button>Đặt bàn</button>
                </div>
            </div>

            <Modal title="Vị trí và ngôn ngữ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='modal-address'>
                    <p>Chọn vị trí của bạn</p>
                    <Select
                        defaultValue="Hà Nội"
                        style={{ width: 200, border: "none" }}
                        onChange={handleSelected}
                        prefix={<IoLocationSharp />}
                        size='middle'
                        options={[
                            { value: 'Hà Nội', label: 'Hà Nội' },
                            { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
                            { value: 'Đã Nẵng', label: 'Đã Nẵng' },
                            { value: 'Nha Trang', label: 'Nha Trang' },
                        ]}
                    />
                </div>

                <div className='modal-language'>
                    <p>Chọn ngôn ngữ</p>
                    <Radio.Group name="radiogroup" defaultValue={"Tiếng Việt"}>
                        <Radio value={"Tiếng Việt"}>Tiếng Việt</Radio>
                        <Radio value={"Tiếng Anh"}>Tiếng Anh</Radio>
                    </Radio.Group>
                </div>
            </Modal>
        </div >
    );
};

export default Header;
