import React, { useEffect } from 'react'

export const Footer = () => {
    useEffect(() => {
        let backtotop = document.querySelector('.totop');
        const handleScroll = () => {
          let scrollY = window.pageYOffset;
          if (scrollY > 30) {
              backtotop.classList.add('active')
          } else {
              backtotop.classList.remove('active')
          }
        };
        window.addEventListener('scroll', handleScroll);
        backtotop.addEventListener('click', function () {
            window.scrollTo({
                top: 0
            })
        })
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
      },[])
    return (
        <>
            <div>
                <footer>
                    <div className="container">
                        <div className="footer__wrapt row">
                            <div className="footer__items col-xl-3 col-12">
                                <div className="footer__item">
                                    <h4 className="footer__item-title">công ty cổ phần staaar</h4>
                                    <p>Tàng 6, sô 96 Thái Hà P. Trung Liệt, Q. Đống Đa, TP. Hà Nội</p>
                                    <p>Mã số thuế: 0109749326</p>
                                    <p>Ngày cấp ĐKKD 29/02/2021</p>
                                    <p>Nơi cấp: Sở kế hoạch và đầu từ Hà Nội</p>
                                </div>
                                <div className="footer__item">
                                    <h4 className="footer__item-title">dịch vụ khách hàng</h4>
                                    <p>Hotline: 1800 6163</p>
                                    <p>Email: cskh@format.vn</p>
                                </div>
                                <div className="footer__item">
                                    <h4 className="footer__item-title">hỗ trợ mua hàng online</h4>
                                    <p>Hotline: 0247 306 2882</p>
                                    <p>Email: contact@format.vn</p>
                                </div>
                            </div>
                            <div className="footer__items col-xl-3 col-12">
                                <h4 className="footer__item-title">về format</h4>
                                <ul>
                                    <li><a href="#">giới thiệu</a></li>
                                    <li><a href="#">hướng dẫn mua hàng</a></li>
                                    <li><a href="#">hướng dẫn chọn size</a></li>
                                    <li><a href="#">hướng dẫn thanh toán</a></li>
                                    <li><a href="#">tra cứu đơn hàng</a></li>
                                    <li><a href="#">liên hệ</a></li>
                                </ul>
                            </div>
                            <div className="footer__items col-xl-3 col-12">
                                <h4 className="footer__item-title">chính sách</h4>
                                <ul>
                                    <li><a href="#">chính sách khách hàng</a></li>
                                    <li><a href="#">chính sách thanh toán</a></li>
                                    <li><a href="#">chính sách vận chuyển</a></li>
                                    <li><a href="#">chính sách đổi trả</a></li>
                                    <li><a href="#">chính sách xử lý khiếu nại</a></li>
                                    <li><a href="#">chính sách bảo hành</a></li>
                                    <li><a href="#">diều khoản sử dụng</a></li>
                                    <li><a href="#">chính sách bảo mật thông tin</a></li>
                                </ul>
                            </div>
                            <div className="footer__items col-xl-3 col-12">
                                <div className="footer__item">
                                    <h4 className="footer__item-title">chấp nhận thanh toán</h4>
                                    <img src="/images/list-pay.webp" alt="list-pay" />
                                </div>
                                <div className="footer__item">
                                    <h4 className="footer__item-title">thoi dõi chúng tôi trên</h4>
                                    <div className="footer__item-follow">
                                        <a>
                                            <img src="/images/facebook.webp" alt="facebook" />
                                        </a>
                                        <a>
                                            <img src="/images/instagram.webp" alt="instagram" />
                                        </a>
                                        <a>
                                            <img src="/images/tiktok.webp" alt="tiktok" />
                                        </a>
                                        <a>
                                            <img src="/images/youtube.webp" alt="youtube" />
                                        </a>
                                    </div>
                                </div>
                                <div className="footer__item">
                                    <img className="btc-img" src="/images/btc.webp" alt="bct" />
                                    <img className="protected-img" src="/images/dmca_protected_sml_120y.png" alt="protected" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="footer-bottom">@ Bản quyền thuộc về FORMAT</div>
                    </div>
                </footer>
                <div className="totop">
                    <img src="/images/arrow_upward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="top-top" />
                </div>
            </div>

        </>
    )
}
