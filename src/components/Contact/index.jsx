import React from 'react'

export const Contact = () => {
    return (
        <section className="contact pd">
            <div className="container">
                <div className="contact__wrapt">
                    <div className="contact__item">
                        <p className="contact__item-title">đăng ký nhận thông tin
                        </p>
                        <p className="contact__item-des">Đăng ký nhận thông tin qua email để nhận được tin tức từ những bộ
                            sưu tập và sản phẩm mới nhất.</p>
                        <form>
                            <div className="form-group">
                                <label className="label">Đối tượng *</label>
                                <div>
                                    <input type="radio" id="male" name="gender" defaultValue="male" hidden />
                                    <label htmlFor="male">Nam</label>
                                </div>
                                <div>
                                    <input type="radio" id="female" name="gender" defaultValue="female" hidden />
                                    <label htmlFor="female">Nữ</label>
                                </div>
                                <div>
                                    <input type="radio" id="unisex" name="gender" defaultValue="unisex" hidden />
                                    <label htmlFor="unisex">Unisex</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="label">Email *</label>
                                <div className="email">
                                    <p><img src="/images/mail_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" /></p>
                                    <input className="input-email" type="text" id="email" name="email" placeholder="Nhập Email của quý khách" />
                                </div>
                            </div>
                            <button>xác nhận</button>
                        </form>
                    </div>
                    <div className="contact__item">
                        <p className="contact__item-title">ưu đãi độc quyền trên app
                        </p>
                        <p className="contact__item-des">Cập nhật các chương trình khuyến mãi một cách nhanh nhất</p>
                        <div className="contact__item-qr">
                            <img src="/images/QR.webp" alt />
                        </div>
                        <button className="btn-dowloadapp">tải app ngay</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
