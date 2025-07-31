import React from 'react'
import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';


export const NewsLetter = () => {
    const { setPopoverAccountMobile } = useOutletContext();


    return (<div className="account__panel">
        <Helmet>
            <title>Đăng ký bản tin</title>
        </Helmet>
        <p className="account__panel-title"><img className="btn-open-nav" onClick={() => setPopoverAccountMobile(true)} src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" /> đăng ký nhật bản tin</p>
        <p className="newsletter">Thiết lập bản tin của Quý khách để nhận tin tức và thông tin về xu
            hướng hàng tuần
        </p>
        <form className="account__form">
            <div className="form-check">
                <input type="checkbox" name="registeremail" id="registeremail" />
                <label htmlFor="registeremail">Đăng ký nhận tin</label>
            </div>
            <button className="full-mobile">chấp nhận</button>
        </form>
    </div>
    )
}
