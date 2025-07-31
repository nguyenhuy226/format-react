import React from 'react'

export const Service = () => {
    return (
        <section className="service pd">
            <div className="container">
                <div className="service__wrapt row">
                    <div className="service__item col-6 col-xl-3">
                        <div className="service__item-img">
                            <img src="/images/service/homepage-service01.webp" alt />
                        </div>
                        <p className="service__item-title">đặc quyền vip</p>
                        <p className="service__item-des">Tích điểm và nhận ưu đãi đến 35%</p>
                    </div>
                    <div className="service__item col-6 col-xl-3">
                        <div className="service__item-img">
                            <img src="/images/service/homepage-service02.webp" alt />
                        </div>
                        <p className="service__item-title">CÁ NHÂN HÓA TRẢI NGHIỆM</p>
                        <p className="service__item-des">Ghi dấu phong cách cùng Format</p>
                    </div>
                    <div className="service__item col-6 col-xl-3">
                        <div className="service__item-img">
                            <img src="/images/service/homepage-service03.webp" alt />
                        </div>
                        <p className="service__item-title">BẢO HÀNH VÀ BẢO TRÌ</p>
                        <p className="service__item-des">Bền đẹp cùng năm tháng</p>
                    </div>
                    <div className="service__item col-6 col-xl-3">
                        <div className="service__item-img">
                            <img src="/images/service/homepage-service04.webp" alt />
                        </div>
                        <p className="service__item-title">VỪA VẶN NHƯ MAY ĐO RIÊNG</p>
                        <p className="service__item-des">Cá nhân hóa đến từng chi tiết</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
