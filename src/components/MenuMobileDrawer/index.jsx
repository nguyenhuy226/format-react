import { PATH } from '@/config'
import { Drawer } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const MenuMobileDrawer = ({open , onClose}) => {
    return (
        <Drawer open={open} onClose={onClose} headerStyle={{ display: 'none' }} bodyStyle={{ padding: '8px 16px 12px' }}>
            {/* <div className="popup__menu-mobile"> */}
                <p className="menu__mobile-close">
                    <img className="menu__mobile-close-img" src="/images/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="close" onClick={onClose}/>
                </p>
                <ul className="popup__menu-main">
                    <li className="menu-item female"><Link className="text__menu-mobile w-full block" onClick={onClose} to={PATH.Product}>NỮ</Link></li>
                    <li className="menu-item male"><Link className="text__menu-mobile w-full block" onClick={onClose} to={PATH.Product}>NAM</Link></li>
                    <li className="menu-item"><Link className="text__menu-mobile w-full block" onClick={onClose} to={PATH.Collection}>BỘ SƯU TẬP</Link></li>
                    <li className="menu-item"><Link className="text__menu-mobile w-full block" onClick={onClose} to={PATH.Profile.Offer}>ƯU ĐÃI</Link></li>
                    <li className="menu-item"><Link className="text__menu-mobile w-full block" onClick={onClose} to={PATH.Store}>CỬA HÀNG</Link></li>
                </ul>
                <div className="popup__sub-menu">
                    <li className="menu-item"><Link className="text__menu-mobile w-full block" onClick={onClose} to={PATH.Profile.Index}><img src="/images/person.png" />Tài khoản</Link></li>
                    <li className="menu-item"><Link className="text__menu-mobile w-full block" onClick={onClose} to={PATH.Profile.Wishlist}><img src="/images/favorite.png" />
                        Sản phẩm yêu thích</Link></li>
                    <li className="menu-item"><Link className="text__menu-mobile w-full block" onClick={onClose} to={PATH.Store}><img src="/images/location.png" />Danh sách cửa hàng</Link></li>
                    <li className="sub-menu-cart menu-item"><a className="text__menu-mobile w-full block" onClick={onClose} href="#"><img src="/images/shopping.png" />Hỗ trợ khách hàng</a></li>
                </div>
            {/* </div>   */}
        </Drawer>

    )
}
