import React, { useEffect, useState } from 'react'
import { CartDrawer } from '../CartDrawer'
import { SearchDrawer } from '../SearchDrawer'
import { MenuMobileDrawer } from '../MenuMobileDrawer'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { PATH } from '@/config'
import { useCart } from '@/hooks/useCart'
import { Popover } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import { Button } from '../Button'
import { cartActions } from '@/stories/cart'
import { useDispatch } from 'react-redux'


export const Header = () => {
    useEffect(() => {
        let header = document.querySelector('.header-home');
        const handleScroll = () => {
            const scrollY = window.pageYOffset;
            if (scrollY > 0) {
                header?.classList.add('active');
            } else {
                header?.classList.remove('active');
            }
        };
        window.addEventListener('scroll', handleScroll);

        $('.menu-item').hover(
            function () {
                header?.classList.add('active');
            },
            function () {
                if (scrollY > 0) {
                    header?.classList.add('active');
                } else {
                    header?.classList.remove('active');
                }
            }
        );

        $('.male').hover(
            function () {
                document.querySelector('.submenu-nam').classList.add('active')
            },
            function () {
                document.querySelector('.submenu-nam').classList.remove('active')

            }
        );

        $('.female').hover(
            function () {
                document.querySelector('.submenu-nu').classList.add('active')
            },
            function () {
                document.querySelector('.submenu-nu').classList.remove('active')
            }
        );

        $('.submenu-nam').hover(
            function () {
                header?.classList.add('active');
            },
            function () {
                if (scrollY > 0) {
                    header?.classList.add('active'); // Sử dụng jQuery để thêm class
                } else {
                    header?.classList.remove('active'); // Sử dụng jQuery để xóa class
                }
            }
        )
        $('.submenu-nu').hover(
            function () {
                header?.classList.add('active');
            },
            function () {
                if (scrollY > 0) {
                    header?.classList.add('active'); // Sử dụng jQuery để thêm class
                } else {
                    header?.classList.remove('active'); // Sử dụng jQuery để xóa class
                }
            }
        )
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search] = useSearchParams()

    const newSearch = new URLSearchParams(search);

    const [cartDrawer, setCartDrawer] = useState(false)
    const [searchDrawer, setSearchDrawer] = useState(false)
    const [menuMobileDrawer, setMenuMobileDrawer] = useState(false)

    const onSearch = () => {
        if (searchValue.trim()) {
            newSearch.set('name', searchValue);
        } else {
            newSearch.delete('name');
        }
        navigate(`${PATH.Product}?${newSearch.toString()}`);
    }
    const { cart, openCartOver } = useCart()
    return (
        <header>
            <CartDrawer open={cartDrawer} onClose={() => setCartDrawer(false)} />
            <SearchDrawer open={searchDrawer} onClose={() => setSearchDrawer(false)} />
            <MenuMobileDrawer open={menuMobileDrawer} onClose={() => setMenuMobileDrawer(false)} />
            <div className="container-fluid">
                <div className="container">
                    {/* <div class="row"> */}
                    <div className="top">
                        <div className="top__tool">
                            <div className="search">
                                <button onClick={onSearch}><img src="/images/search.png" /></button>
                                <input type="text" placeholder="TÌM KIẾM"
                                    value={searchValue}
                                    onChange={(ev) => setSearchValue(ev.target.value)}
                                />
                            </div>
                            <div className="btn-menu-mobile">
                                <li onClick={() => { setMenuMobileDrawer(true) }}><a href="#"><img src="/images/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" />menu</a></li>
                            </div>
                            <div className="sub-menu">
                                <li><Link to={PATH.Store}><img src="/images/location.png" />CỬA HÀNG</Link></li>
                                <li><Link to={PATH.Profile.Wishlist}><img src="/images/favorite.png" />
                                    SẢN PHẨM YÊU THÍCH</Link></li>
                                <li className="sub-menu-cart" onClick={() => {
                                    setCartDrawer(true);
                                }}>
                                    <Popover onOpenChange={visible => {
                                        if (!visible) {
                                            dispatch(cartActions.tooglePopoer(false));
                                        }
                                    }} trigger={['click']} open={openCartOver} placement='bottomRight' content={
                                        <>
                                            <p className="mb-0 flex gap-2 items-center"><span className="text-green-500"><CheckCircleFilled /></span>Thêm sản phẩm vào giỏ hàng thành công</p>
                                            <Link to={PATH.Cart}>
                                                <Button className="full btn-xs mt-2" onClick={(e) => {
                                                    e.stopPropagation()
                                                    dispatch(cartActions.tooglePopoer(false));

                                                }}>
                                                    Xem giỏ hàng và thanh toán
                                                </Button>
                                            </Link>
                                        </>
                                    }>
                                        <a href="#"><img src="/images/shopping.png" />GIỎ HÀNG</a>
                                        {
                                            cart?.quantityTotal > 0 && <span className="quantity-cart">{cart?.quantityTotal}</span>
                                        }
                                    </Popover>
                                </li>
                                <li><Link to={PATH.Login}><img src="/images/person.png" />TÀI KHOẢN</Link></li>
                            </div>
                            <div className="sub-menu-mobile">
                                <li className="sub-menu-search" onClick={() => {
                                    setSearchDrawer(true);
                                }}><a href="#"><img src="/images/search.png" />tìm kiêm </a></li>
                                <li className="sub-menu-cart" onClick={() => {
                                    setCartDrawer(true);
                                }}><a href="#"><img src="/images/shopping.png" />GIỎ HÀNG
                                        {
                                            cart?.quantityTotal > 0 && <span className="quantity-cart">{cart?.quantityTotal}</span>
                                        }
                                    </a></li>
                            </div>
                        </div>
                        <div className="logo">
                            <Link to={PATH.Home}>
                                <img src="https://format.vn/media/logo/stores/1/logo-format-02.webp" alt="wooder" />
                                <h1 className="hidden">FORMAT</h1>
                            </Link>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <div className="bottom">
                    <ul className="menu">
                        <li className="menu-item female"><Link to={PATH.Product}>NỮ</Link></li>
                        <li className="menu-item male"><Link to={PATH.Product}>NAM</Link></li>
                        <li className="menu-item"><Link to={PATH.Collection}>BỘ SƯU TẬP</Link></li>
                        <li className="menu-item"><Link to={PATH.Profile.Offer}>ƯU ĐÃI</Link></li>
                        <li className="menu-item"><Link to={PATH.Store}>CỬA HÀNG</Link></li>
                    </ul>
                    <div className="submenu-nu">
                        <div className="row">
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">ĐẦM &amp; VÁY</div>
                                <ul>
                                    <li><a href="#slider">ĐẦM ƯU ĐÃI</a></li>
                                    <li><a href="#product">ĐẦM CAO CẤP</a></li>
                                    <li><a href="#videos">ĐẤM MỚI NHẤT</a></li>
                                    <li><a href="#about">ĐÀM BÁN CHẠY</a></li>
                                    <li><a href="#gallery">CHÂN VÁY</a></li>
                                </ul>
                            </div>
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">ÁO</div>
                                <ul>
                                    <li><a href="#slider">ÁO SƠ MI</a></li>
                                    <li><a href="#product">ÁO KIỂU</a></li>
                                    <li><a href="#videos">ÁO KÝ GIẢ </a></li>
                                    <li><a href="#about">ĐÀM THUN &amp; POLO</a></li>
                                    <li><a href="#gallery">ÁO GHI LÊ</a></li>
                                    <li><a href="#gallery">ÁO LEN &amp; CHUI ĐẦU</a></li>
                                    <li><a href="#gallery">ÁO GIỮ NHIỆT WARMMAX</a></li>
                                </ul>
                            </div>
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">ÁO KHOÁC</div>
                                <ul>
                                    <li><a href="#slider">ÁO CHỐNG NẮNG</a></li>
                                    <li><a href="#product">ÁO VEST</a></li>
                                    <li><a href="#videos">BLAZER</a></li>
                                    <li><a href="#about">ÁO LÔNG VŨ</a></li>
                                    <li><a href="#gallery">ÁO MĂNG TÔ</a></li>
                                    <li><a href="#gallery">ÁO KHOÁC KHÁC</a></li>
                                </ul>
                            </div>
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">ÁO DÀI</div>
                                <ul>
                                    <li><a href="#slider">XUÂN CA</a></li>
                                    <li><a href="#product">NGỌC HOA</a></li>
                                    <li><a href="#videos">THIÊN SẮC</a></li>
                                    <li><a href="#about">NAM DU</a></li>
                                    <li><a href="#gallery">NHÃ LIÊN</a></li>
                                    <li><a href="#gallery">QUẦN ÁO DÀI</a></li>
                                </ul>
                            </div>
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">QUẦN &amp; SET ĐỒ</div>
                                <ul>
                                    <li><a href="#slider">QUẦN KIỂU</a></li>
                                    <li><a href="#product">QUẦN ÂU</a></li>
                                    <li><a href="#videos">QUẦN JEAN</a></li>
                                    <li><a href="#about">QUẦN SHORT</a></li>
                                    <li><a href="#gallery">SET ĐỒ</a></li>
                                </ul>
                            </div>
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">PHỤ KIỆN</div>
                                <ul>
                                    <li><a href="#slider">GIÀY DÉP</a></li>
                                    <li><a href="#product">TÚI, VÍ, THẮT LƯNG</a></li>
                                    <li><a href="#videos">TẤT, GĂNG TAY, KHẨU TRANG</a></li>
                                    <li><a href="#about">KHĂN</a></li>
                                    <li><a href="#gallery">QUẦN TẤT</a></li>
                                    <li><a href="#gallery">ĐỒ LÓT</a></li>
                                    <li><a href="#gallery">NƯỚC HOA</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="submenu-nam">
                        <div className="row">
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">ÁO</div>
                                <ul>
                                    <li><a href="#slider">ÁO SƠ MI</a></li>
                                    <li><a href="#product">ÁO POLO</a></li>
                                    <li><a href="#videos">ÁO VEST</a></li>
                                    <li><a href="#about">ÁO THUN</a></li>
                                    <li><a href="#gallery">ÁO GIỮ NHIỆT</a></li>
                                </ul>
                            </div>
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">ÁO KHOÁC</div>
                                <ul>
                                    <li><a href="#slider">ÁO CHỐNG NẮNG</a></li>
                                    <li><a href="#product">ÁO KHOÁC DA</a></li>
                                    <li><a href="#videos">ÁO LÔNG VŨ</a></li>
                                    <li><a href="#about">ĐÀM MĂNG TÔ</a></li>
                                    <li><a href="#gallery">ÁO KHOÁC KHÁC</a></li>
                                </ul>
                            </div>
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">QUẦN</div>
                                <ul>
                                    <li><a href="#slider">QUẦN ÂU</a></li>
                                    <li><a href="#product">QUẦN KAKI</a></li>
                                    <li><a href="#videos">QUẦN SHORT</a></li>
                                </ul>
                            </div>
                            <div className="submenu__item col-2">
                                <div className="submenu__item-title">PHỤ KIỆN</div>
                                <ul>
                                    <li><a href="#slider">GIÀY DÉP</a></li>
                                    <li><a href="#product">CẶP, TÚI, VÍ, THẮT LƯNG</a></li>
                                    <li><a href="#gallery">ĐỒ LÓT</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
