import { Contact } from '@/components/Contact';
import { Service } from '@/components/Service';
import { PATH } from '@/config';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { logoutAction } from '@/stories/auth';
import { cn } from '@/utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

export const ProfileLayout = () => {
    useScrollToTop()
    const dispatch = useDispatch();
    const [popoverAccountMobile, setPopoverAccountMobile] = useState(false)
    return (
        <main className="mainwrapper accountpage">
            <div className="account__container">
                <div className="breadcrumbs">
                    <div className="container">
                        <p className="breadcrumbs-item">Trang chủ</p>
                        <p className="breadcrumbs-item">Tài khoản</p>
                    </div>
                </div>
                <section className="account pd">
                    <div className={cn("account__nav", { "!block": popoverAccountMobile })}>
                        <div className="account__top">
                            <img className="account__top-icon" onClick={() => setPopoverAccountMobile(false)} src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="cart" />
                            <p className="account__top-close">
                                <img onClick={() => setPopoverAccountMobile(false)} src="/images/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="close" />
                            </p>
                        </div>
                        <div className="account__nav-item">
                            <p className="account__nav-title">thông tin cá nhân</p>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)} end to={PATH.Profile.Index}><img src="/images/person.png" alt="true" />Tài khoản của tôi</NavLink>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)} to={PATH.Profile.Info}><img src="/images/contact_emergency_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />Thông
                                tin cá nhân</NavLink>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)} to={PATH.Profile.AddressList}><img src="/images/map_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />Địa chỉ nhận hàng</NavLink>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)}  to={PATH.Profile.Offer}><img src="/images/featured_seasonal_and_gifts_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />Ưu đãi của tôi</NavLink>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)} to={PATH.Profile.NewsLetter}><img src="/images/local_post_office_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />Đăng
                                ký nhận bản tin</NavLink>
                        </div>
                        <div className="account__nav-item">
                            <p className="account__nav-title">đơn hàng của tôi</p>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)} to={PATH.Profile.Order}><img src="/images/filter_none_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />Lịch sử đơn hàng</NavLink>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)} to={PATH.Profile.Comment}><img src="/images/comment_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />Đánh giá của tôi</NavLink>
                        </div>
                        <div className="account__nav-item">
                            <p className="account__nav-title">yêu thích</p>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)} to={PATH.Profile.Wishlist}><img src="/images/favorite.png" alt="true" />Sản phẩm yêu thích</NavLink>
                            <NavLink className="nav-item" onClick={() => setPopoverAccountMobile(false)} to={PATH.Profile.Watched}><img src="/images/style_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />Sản phẩm đã xem</NavLink>
                        </div>
                        <button onClick={() => {
                            dispatch(logoutAction());
                        }} className="white">đăng xuất</button>
                    </div>
                    <div className="account__panels">
                        <Outlet context={{ setPopoverAccountMobile }} />
                    </div>
                </section>
            </div>
            <Service />
            <Contact />
        </main>
    )
}
