import { PATH } from '@/config'
import React from 'react'
import { Helmet } from 'react-helmet';
import { Link, useOutletContext } from 'react-router-dom'


export const Watched = () => {
    const { setPopoverAccountMobile } = useOutletContext();
    return (<div className="account__panel">
        <Helmet>
            <title>Sản phẩm đã xem</title>
        </Helmet>
        <p className="account__panel-title"><img className="btn-open-nav" onClick={() => setPopoverAccountMobile(true)} src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" />sản phẩm đã xem</p>
        <div className="odder__empty">
            <img src="/images/upcoming.svg" alt="upcoming" />
            <p className="odder__empty-title">Quý khách hiện chưa xem qua sản phẩm nào</p>
            <Link to={PATH.Product}>
                <button>mua sắm ngay</button>
            </Link>
        </div>
    </div>
    )
}
