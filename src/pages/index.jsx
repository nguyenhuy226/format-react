import { Contact } from '@/components/Contact';
import { ListProductCard } from '@/components/ProductCard';
import { Service } from '@/components/Service';
import { Slider } from '@/components/Slider';
import { useQuery } from '@/hooks/useQuery';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useSearch } from '@/hooks/useSearch';
import { productService } from '@/services/product';
import queryString from 'query-string';
import React from 'react'


export const HomePage = () => {
  useScrollToTop()
  const [search] = useSearch({
    soft: 'asc',
    page: 1,
  });
  const qs = queryString.stringify({
    page: search.page,
    soft: search.soft,
  })
  const { data, loading } = useQuery({
    queryKey: [qs],
    queryFn: ({ signal }) => productService.getProduct(`?${qs}`, signal),
    // deleteAsyncFuncion: true,
    keepPrevousData: true,
  })
  return (
    <main className="mainwrapper homepage">
      <section className="slider">
        <Slider className="slider__item-wrap">
          <div className="slider__item">
            <a href="#"><img src="./images/1920x823-vang.png" alt className="slider__item-img" /></a>
            <div className="slider__item-text">
              <p className="slider__collection">bộ sưu tập mới</p>
              <p className="slider__collection-name">no.2 the essence of summer</p>
              <p className="slider__discover">khám phá ngay</p>
            </div>
          </div>
          <div className="slider__item">
            <a><img src="./images/87-1920x823_c_text.png" alt className="slider__item-img" /></a>
            <div className="slider__item-text">
              <p className="slider__collection">bộ sưu tập mới</p>
              <p className="slider__collection-name">no.3 the awakening</p>
              <p className="slider__discover">khám phá ngay</p>
            </div>
          </div>
          <div className="slider__item ">
            <a><img src="./images/d-premium-silk_1.png" alt className="slider__item-img" /></a>
            <div className="slider__item-text">
              <p className="slider__collection">bộ sưu tập mới</p>
              <p className="slider__collection-name">peimum silk by format</p>
              <p className="slider__discover">khám phá ngay</p>
            </div>
          </div>
          <div className="slider__item ">
            <a><img src="./images/Xu_n-Ca-1920x823.png" alt className="slider__item-img" /></a>
            <div className="slider__item-text">
              <p className="slider__collection">bộ sưu tập mới</p>
              <p className="slider__collection-name">áo dài xuân ca 2025 </p>
              <p className="slider__discover">khám phá ngay</p>
            </div>
          </div>
        </Slider>
      </section>
      <section className="collection pd">
        <div className="container">
          <h3 className="title">bộ sưu tập mới</h3>
          <div className="collection__img">
            <a>
              <img src="./images/collection01.webp" alt="collection" />
            </a>
          </div>
          <div className="collection__description">
            <p className="collection__description-title">timeless beauty</p>
            <p className="collection__description-content">Cập nhật những thiết kế được yêu thích nhất</p>
            <p className="collection__description-discover"><a href="#">khám phá ngay</a></p>
          </div>
          <div className="collection__posters row">
            <div className="collection__poster col-12 col-xl-6 "><a>
              <img src="./images/collection_poster01.webp" alt="collection" />
            </a>
              <p className="collection__poster-text">first class</p>
            </div>
            <div className="collection__poster col-xl-6 col-12"><a>
              <img src="./images/collection_poster02.webp" alt="collection" />
            </a>
              <p className="collection__poster-text">premium silk</p>
            </div>
          </div>
        </div>
      </section>
      <section className="products pd">
        <div className="container">
          <h3 className="title">khuyến mãi</h3>
          <div className="product__wrapt row">
            <div className="product__item col-xl-4 col-12">
              <div className="product">
                <div className="product__img">
                  <a>
                    <img src="./images/products/product01.webp" alt="product" />
                  </a>
                </div>
                <p className="product__status"><span>new</span></p>
                <p className="product__category">
                  <a href="#">mới nhất</a>
                </p>
              </div>
            </div>
            <div className="product__item col-xl-4 col-12">
              <div className="product">
                <div className="product__img">
                  <a>
                    <img src="./images/products/product02.webp" alt="product" />
                  </a>
                </div>
                <p className="product__status"><span>best seller</span></p>
                <p className="product__category">
                  <a href="#">thời thượng</a>
                </p>
              </div>
            </div>
            <div className="product__item col-xl-4 col-12">
              <div className="product">
                <div className="product__img">
                  <a>
                    <img src="./images/products/product03.webp" alt="product" />
                  </a>
                </div>
                <p className="product__status"><span>sales</span></p>
                <p className="product__category">
                  <a href="#">ưu đại</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trending pd">
        <div className="container">
          <h3 className="title">danh mục thịnh hành</h3>
          <div className="trending__wrapt row">
            <div className="trending__item col-xl-4 col-6">
              <div className="trending__item-img">
                <a>
                  <img src="./images/categories/category01.webp" alt="product" />
                </a>
              </div>
              <p className="trending__item-category">
                <a href="#">đầm &amp; chân váy</a>
              </p>
            </div>
            <div className="trending__item col-xl-4 col-6">
              <div className="trending__item-img">
                <a>
                  <img src="./images/categories/category02.webp" alt="product" />
                </a>
              </div>
              <p className="trending__item-category">
                <a href="#">đầm &amp; chân váy</a>
              </p>
            </div>
            <div className="trending__item col-xl-4 col-6">
              <div className="trending__item-img">
                <a>
                  <img src="./images/categories/category03.webp" alt="product" />
                </a>
              </div>
              <p className="trending__item-category">
                <a href="#">đầm &amp; chân váy</a>
              </p>
            </div>
            <div className="trending__item col-xl-4 col-6">
              <div className="trending__item-img">
                <a>
                  <img src="./images/categories/category04.webp" alt="product" />
                </a>
              </div>
              <p className="trending__item-category">
                <a href="#">đầm &amp; chân váy</a>
              </p>
            </div>
            <div className="trending__item col-xl-4 col-6">
              <div className="trending__item-img">
                <a>
                  <img src="./images/categories/category05.webp" alt="product" />
                </a>
              </div>
              <p className="trending__item-category">
                <a href="#">đầm &amp; chân váy</a>
              </p>
            </div>
            <div className="trending__item col-xl-4 col-6">
              <div className="trending__item-img">
                <a>
                  <img src="./images/categories/category06.webp" alt="product" />
                </a>
              </div>
              <p className="trending__item-category">
                <a href="#">đầm &amp; chân váy</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="outstanding pd">
        <div className="container">
          <h3 className="title">xu hướng nổi bật</h3>
          <div className="outstanding-wrapt row">
            <ListProductCard
              loadingCount={12}
              loading={loading}
              data={data?.data}
              className="product__item col-6 col-xl-3"
            />
            <div className="product__item col-6 col-xl-3">
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
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop
                </p><p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-6 col-xl-3">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product05.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop
                </p><p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-6 col-xl-3">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product06.webp" alt="product" />
                </a>
              </div>
              <p className="product__item-content">
              </p><div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop
                </p><p className="product__item-price">1.100.000 đ</p>
              </div>
              <p />
            </div>
            <div className="product__item col-6 col-xl-3">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product07.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop
                </p><p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-6 col-xl-3">
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
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop
                </p><p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-6 col-xl-3">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product05.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop
                </p><p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
            <div className="product__item col-6 col-xl-3">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product06.webp" alt="product" />
                </a>
              </div>
              <p className="product__item-content">
              </p><div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop
                </p><p className="product__item-price">1.100.000 đ</p>
              </div>
              <p />
            </div>
            <div className="product__item col-6 col-xl-3">
              <div className="product__item-img">
                <a>
                  <img src="./images/products/product07.webp" alt="product" />
                </a>
              </div>
              <div className="product__item-info">
                <span className="product__item-brand"><img src="./images/logo-category.webp" /></span>
                <span className="product__item-code">10000788</span>
              </div>
              <div className="product__item-detail">
                <p className="product__item-name">Áo chống nắng sst cooling dáng dài sunstop
                </p><p className="product__item-price">1.100.000 đ</p>
              </div>
            </div>
          </div>
          <div className="uotstanding__button">
            <div className="outstanding__button-wrapt">
              <p className="uotstanding__button-text">xem tất cả</p>
              <p className="uotstanding__button-img"><img src="./images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" /></p>
            </div>
          </div>
        </div>
      </section>
      <section className="store pd">
        <div className="container">
          <div className="store__wrapt">
            <div className="store__img">
              <img src="./images/homepage-cat13-new_1.webp" alt="store" />
              <img src="./images/homepage-cat13-new-mobile.jpg" alt="store" />
            </div>
            <div className="store__info">
              <div className="store__info-title">hệ thống cửa hàng toàn quốc</div>
              <p>Giờ mở cửa: 8h30 - 22:00</p>
              <p>Tất cả các ngày trong tuần</p>
              <div className="store__info-button">tìm cửa hàng gần nhất</div>
            </div>
          </div>
        </div>
      </section>
      <Service />
      <Contact />
    </main>
  )
}
