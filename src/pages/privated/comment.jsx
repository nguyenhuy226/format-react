import React from 'react'
import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';


export const Comment = () => {
    const { setPopoverAccountMobile } = useOutletContext();
    return (<div className="account__panel">
        <Helmet>
            <title>Đánh giá</title>
        </Helmet>
        <p className="account__panel-title"><img className="btn-open-nav" onClick={() => setPopoverAccountMobile(true)} src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" />đánh giá của tôi</p>
        <div className="reviewer__empty">
            <img src="/images/my-review-empty.png" alt="upcoming" />
            <p className="odder__empty-title">Quý khách hiện chưa có đánh giá sản phẩm</p>
        </div>
    </div>
    )
}
