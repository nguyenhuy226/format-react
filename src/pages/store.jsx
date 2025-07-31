import { Contact } from '@/components/Contact'
import { Service } from '@/components/Service'
import React from 'react'
import { Helmet } from 'react-helmet'

export const StotePage = () => {
  return (
    <main className="mainwrapper storepage">
      <Helmet>
        <title>Cửa hàng</title>
      </Helmet>
      <div className="containt__store">
        <div className="breadcrumbs">
          <div className="container">
            <p className="breadcrumbs-item">Trang chủ</p>
            <p className="breadcrumbs-item">Hệ thống cửa hàng</p>
          </div>
        </div>
        <section className="store pd">
          <h1 className="title">hệ thống cửa hàng</h1>
          <div className="store__find">
            <div className="store__find-city">
              <select id="city" name="city">
                <option value>Chọn Tỉnh/Thành phố</option>
                <option value="hà nội">Thành phố Hà Nội</option>
                <option value="đà nẵng">Thành Phố Đà Nẵng</option>
                <option value="bắc giang">Tỉnh Bắc Giang</option>
                <option value="bắc ninh">Tỉnh Bắc Ninh</option>
                <option value="hải dương">Tỉnh Hải dương</option>
                <option value="nam định">Tỉnh Nam Định</option>
                <option value="hải phòng">Thành Phố Hải Phòng</option>
              </select>
              <p className="store__find-icon"><img src="./images/keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="down" /></p>
            </div>
            <div className="store__find-district">
              <select id="district" name="district">
                <option value>Chọn Quận/Huyện</option>
                <option value="hà nội">Quận Hoàn Kiếm</option>
                <option value="đà nẵng">Quận Ba đình</option>
              </select>
              <p className="store__find-icon"><img src="./images/keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="down" /></p>
            </div>
            <button>tìm cửa hàng</button>
          </div>
          <div className="store__main">
            <div className="store__list">
              <div className="store__list-title">Tìm thấy 20 cửa hàng</div>
              <div className="store__items">
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
                <div className="store__item">
                  <div className="store__item-img">
                    <img src="./images/TRAN_DUY_HUNG.webp" alt />
                  </div>
                  <div className="store__item-content">
                    <p className="store__item-name">Format Trần Duy Hưng</p>
                    <p className="store__item-address"><span><img src="./images/location.png" alt /></span>Trần Duy Hưng - TP.Hà Nội, Phường Trung Hoà, Quận Cầu
                      Giấy, Thành phố Hà Nộ</p>
                    <p className="store__item-time"><span><img src="./images/schedule_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>08:30 - 22:00</p>
                    <p className="store__item-phone"><span><img src="./images/phone_iphone_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt /></span>0982298127</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="store__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.121824626015!2d106.63100128250261!3d10.801980461883872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292b0b0356b7%3A0xed73d87393368c58!2zNTgxLzE5IMSQLiBUcsaw4budbmcgQ2hpbmgsIFBoxrDhu51uZyAxNCwgVMOibiBQaMO6LCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1745052750647!5m2!1svi!2s" width="100%" height={600} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>
      </div>
      <Service />
      <Contact />
    </main>

  )
}
