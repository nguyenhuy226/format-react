import { Contact } from '@/components/Contact'
import { Service } from '@/components/Service'
import React from 'react'

export const CollectionDetailPage = () => {
  return (
    <main className="mainwrapper collectiondetailpage">
      <div className="breadcrumbs">
        <div className="container">
          <p className="breadcrumbs-item">Trang chủ</p>
          <p className="breadcrumbs-item">Bộ sưu tập</p>
          <p className="breadcrumbs-item">First Class</p>
        </div>
      </div>
      <section className="collectiondetail pd">
        <div className="collectiondetail__img">
          <img src="./images/collection/artboard_1_copy_3.webp" alt="collection" />
        </div>
        <div className="collectiondetail__des">
          <p className="collectiondetail__des-title">first class</p>
          <p className="collectiondetail__des-content">Đại diện cho sức hút thanh lịch vô tận và tinh thần phái nữ
            hiện đại, các thiết kế mới nhất của
            FirstClass đang từng ngày tái định nghĩa về chuẩn mực của phong cách quiet luxury - vẻ đẹp đẳng cấp
            đầy
            “thầm lặng” và trường tồn với thời gian.</p>
          <p className="collectiondetail__des-content">
            Điều mà FirstClass luôn mang đến chính là sự sang trọng tinh tế, qua từng thiết kế tưởng chừng đơn
            giản nhưng trong đó là sự tỉ mỉ, chỉn chu mọi chi tiết. Cùng với kỹ thuật may đo thượng cấp và sự kỹ
            lưỡng trong lựa chọn chất liệu, tất cả đã tạo nên những bản phối đầy thời thượng, trên nền form dáng
            cổ điển được chú ý tinh chỉnh để tôn lên vóc sắc và thần thái của quý cô. Gam màu đen trắng trung
            tính được lấy làm chủ đạo, trên nền chất liệu gấm cao cấp nổi bật hoạ tiết in chìm tạo điểm nhấn đắt
            giá cho BST.</p>
        </div>
        <div className="container">
          <div className="container__collection row">
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-xl-3 col-6">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product04.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop</p>
                <p className="product__item-collection">first class</p>
                <p className="product__item-price-origin">1.100.000 đ</p>
                <p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Service />
      <Contact />
    </main>

  )
}
