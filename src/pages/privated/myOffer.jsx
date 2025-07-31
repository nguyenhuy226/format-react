import React from 'react'
import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';

export const MyOffer = () => {
    const { setPopoverAccountMobile } = useOutletContext();

    return (<div className="account__panel">
        <Helmet>
            <title>Khuyến mãi</title>
        </Helmet>
        <p className="account__panel-title"><img className="btn-open-nav" onClick={() => setPopoverAccountMobile(true)} src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" /> ưu đãi của tôi</p>
        <div className="endow__panel row">
            <div className="col-xl-6 col-12">
                <div className="endow__item">
                    <div className="endow__item-top">
                        <div className="endow__item-name">
                            <img className="endow__img" src="/images/redeem_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                            <p className="endow__name">THANKYOU</p>
                            <img className="endow__coppy" src="/images/content_copy_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                        </div>
                        <div className="endow__apply">
                            <p className="endow__text">Áp dụng tại:</p>
                            <p className="endow__value">online</p>
                        </div>
                    </div>
                    <div className="endow__item-main">
                        Chương trình Golive - Giảm giá cho khách hàng lần đầu tiên mua hàng tại FORMAT
                    </div>
                    <div className="endow__item-bottom">
                        <div className="endow__expiry">
                            <p className="endow__text">Hạn sử dụng</p>
                            <p className="endow__value">31/12/2025</p>
                        </div>
                        <div className="endow__clause">
                            Điều khoản sử dụng
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-12">
                <div className="endow__item">
                    <div className="endow__item-top">
                        <div className="endow__item-name">
                            <img className="endow__img" src="/images/redeem_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                            <p className="endow__name">ECCOMBO540</p>
                            <img className="endow__coppy" src="/images/content_copy_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                        </div>
                        <div className="endow__apply">
                            <p className="endow__text">Áp dụng tại:</p>
                            <p className="endow__value">online</p>
                        </div>
                    </div>
                    <div className="endow__item-main">
                        Combo 5 đồ lót bất kỳ giảm 40%
                    </div>
                    <div className="endow__item-bottom">
                        <div className="endow__expiry">
                            <p className="endow__text">Hạn sử dụng</p>
                            <p className="endow__value">31/12/2025</p>
                        </div>
                        <div className="endow__clause">
                            Điều khoản sử dụng
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-12">
                <div className="endow__item">
                    <div className="endow__item-top">
                        <div className="endow__item-name">
                            <img className="endow__img" src="/images/redeem_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                            <p className="endow__name">ECCOMBO330</p>
                            <img className="endow__coppy" src="/images/content_copy_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                        </div>
                        <div className="endow__apply">
                            <p className="endow__text">Áp dụng tại:</p>
                            <p className="endow__value">online</p>
                        </div>
                    </div>
                    <div className="endow__item-main">
                        Combo 3 đồ lót bất kỳ giảm 30%
                    </div>
                    <div className="endow__item-bottom">
                        <div className="endow__expiry">
                            <p className="endow__text">Hạn sử dụng</p>
                            <p className="endow__value">31/12/2025</p>
                        </div>
                        <div className="endow__clause">
                            Điều khoản sử dụng
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
