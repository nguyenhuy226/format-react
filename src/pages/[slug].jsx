import { Button } from '@/components/Button';
import { Contact } from '@/components/Contact';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Popconfirm } from '@/components/Popconfirm';
import { ProductCard, ProductCardLoading } from '@/components/ProductCard';
import { Service } from '@/components/Service';
import { Skeleton } from '@/components/Skeleton';
import { Slider } from '@/components/Slider';
import { PATH, URL_IMAGE_PRODUCT } from '@/config';
import { useAction } from '@/hooks/useAction';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { useQuery } from '@/hooks/useQuery';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { productService } from '@/services/product';
import { addCartItemAction } from '@/stories/cart';
import { currency } from '@/utils';
import { Image, message } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


export const ProductDetailPage = () => {
  const { id } = useParams();

  useScrollToTop(id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useAuth()
  const [openImageModal, setOpenImageModal] = useState()
  const { loading: loadingCart } = useCart()
  const _addCartLoading = loadingCart[id]

  const { data, loading } = useQuery({
    queryKey: id,
    queryFn: () => productService.getProductDetail(`${id}`),
    // deleteAsyncFuncion: true,
    keepPrevousData: true,
    enable: !!id,
    onError: () => {
      message.error('Sản phẩm không tồn tại')
      navigate(PATH.Product)
    }
  })

  const { data: relateshipProduct, loading: relateshipLoading } = useQuery({
    queryKey: `${id}-repateship`,
    queryFn: () => productService.getRelateship(id),
    limitDuration: 200
  })
  useEffect(() => {
    const $carouselService = $('.product__service');
    function initFlickityIfMobile() {
      if ($(window).width() <= 768) {
        if (!$carouselService.hasClass('flickity-enabled')) {
          $carouselService.flickity({
            speed: 700,
            cellAlign: 'left',
            prevNextButtons: false,
          });
        }
      } else {
        if ($carouselService.hasClass('flickity-enabled')) {
          $carouselService.flickity('destroy');
        }
      }
    }

    initFlickityIfMobile();
    const resizeHandler = () => initFlickityIfMobile();
    $(window).on('resize', resizeHandler);

    return () => {
      if ($carouselService.hasClass('flickity-enabled')) {
        $carouselService.flickity('destroy');
      }
      $(window).off('resize', resizeHandler);
    };
  }, []);


  const product = data?.product
  const onAddWishlist = useAction({
    service: () => productService.addWishlist({ product_id: product?.id }),
    loadingMessage: `Đang thêm sản phẩm "${product?.name}" vào yêu thích`,
    successMessage: `Thêm sản phẩm "${product?.name}" vào yêu thích thành công`,
  })

  const onAddCartItem = () => {
    if (user.user) {
      dispatch(addCartItemAction({
        product_id: product?.id,
        showPopover: true
      }))
    } else {
      navigate(PATH.Login)
    }
  }

  const onBuy = () => {
    if (user.user) {
      dispatch(addCartItemAction({
        product_id: product?.id,
      }))
      navigate(PATH.Cart, {
        state: { cartItemSelected: product?.id }
      })
    } else {
      navigate(PATH.Login)
    }
  }

  return (
    loading ? <main className="mainwrapper productdetailpage">
      <div className="containt__product-detail">
        <div className="breadcrumbs">
          <Skeleton height={22} width={400} />
        </div>
        <section className="product">
          <div className="product__img">
            <div className="product__img-sub">
              <Skeleton height={142} width={107} />
              <Skeleton height={142} width={107} />
            </div>
            <div className="product__img-main">
              <Skeleton height={970} width={728} />
              <div className="img__text">
                <Skeleton height={22} width={100} />
                <Skeleton height={22} width={100} />
              </div>
            </div>
          </div>
          <div className="product__content" style={{ flex: 1 }}>
            <Skeleton height={26} width={500} />
            <p className="product__price">
              <Skeleton height={30} width={300} />

            </p>
            <p className="product__color">
              <Skeleton height={22} width={200} />

            </p>
            <p className="product__size">
              <Skeleton height={22} width={200} />
            </p>
            <form>
              <div className="product__choose-size">
                <div className="form-group flex gap-2">
                  <div>
                    <Skeleton height={35} width={90} />
                  </div>
                  <div>
                    <Skeleton height={35} width={90} />
                  </div>
                </div>
              </div>
            </form>
            <Button loading={_addCartLoading} onClick={onAddCartItem}>thêm vào giỏ hàng</Button>
            <Button onClick={onBuy} className="white">mua ngay</Button>
            <div className="product__tool">
              <div className="product__tool-store">
                <Skeleton height={24} width={300} />
              </div>
              <div className="product__tool-wishlist" onClick={user.user ? onAddWishlist : undefined}>
              <Skeleton height={24} width={110} />
              </div>
              <div className="product__tool-share">
              <Skeleton height={24} width={110} />
              </div>
            </div>
            <div className="product__endow">
              <div className="product__endow-title">
                <p>ưu đãi giành riêng cho bạn</p>
                <p>xem tất cả</p>
              </div>
              <div className="product__endow-main">
                <img src="/images/icon-hot.webp" alt="hot" />
                <p> Nhập mã
                  <span>THANKYOU</span>
                  giảm 5% (tối đa 150K) cho đơn từ 1 triệu - Dành riêng cho KH mới
                </p>
              </div>
            </div>
            <div className="product__service">
              <div className="service__item">
                <img src="/images/local_shipping_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="shipping" />
                <p className="service-title">miễn phí giao hàng</p>
                <p className="service-des">miễn phí giao hàng</p>
              </div>
              <div className="service__item">
                <img src="/images/local_shipping_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="shipping" />
                <p className="service-title">ship toàn quốc</p>
                <p className="service-des">đồng giá 30k</p>
              </div>
              <div className="service__item">
                <img src="/images/history_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="return" />
                <p className="service-title">đổi trả hàng</p>
                <p className="service-des">15 ngày với sản phẩm nguyên giá</p>
              </div>
            </div>
            <div className="product__characteristic">
              <div className="product__characteristic-title">
                đặc điểm nổi bật<p className="characteristic__item-icon" />
              </div>
              <div className="product__characteristic-des">
                <p>Số đo người mẫu<span>Size S - Chiều cao: 170 cm - Vòng eo: 59 cm - Vòng hông: 87 cm -
                  Vòng ngực: 78 cm</span></p>
                <p>Nhãn hiệu<span>Format</span></p>
                <p>Đối tượng<span>Nữ</span></p>
                <p>Thời trang<span>Xuân hè</span></p>
                <p>Mã kỹ thuật<span>B929-802P</span></p>
                <p>Bộ sưu tập<span>MODESTY</span></p>
              </div>
            </div>
          </div>
        </section>
        <section className="info">
          <ul className="info__nav">
            <li className="active">mô tả</li>
            <li>đặc quyền thành viên</li>
            <li>đánh giá</li>
          </ul>
          <div className="info__content">
          <Skeleton height={400} width={1200} />
          </div>
        </section>
      </div>
    </main> : <main className="mainwrapper productdetailpage">
      <div className="containt__product-detail">
        <div className="breadcrumbs">
          <div className="container">
            <p className="breadcrumbs-item">Trang chủ</p>
            <p className="breadcrumbs-item">Âu</p>
            <p className="breadcrumbs-item">{product?.name}</p>
          </div>
        </div>
        <section className="product">
          <div className="product__img">
            <div className="product__img-sub">
              <img src={`${URL_IMAGE_PRODUCT}${product?.image}`} alt="product" />
              <img src={`${URL_IMAGE_PRODUCT}${product?.image}`} alt="product" />
            </div>
            <div className="product__img-main">
              <img onClick={() => setOpenImageModal(true)} className="img__main" src={`${URL_IMAGE_PRODUCT}${product?.image}`} alt="product" />
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible: openImageModal, onVisibleChange: vis => setOpenImageModal(vis) }}>
                  <Image src={`${URL_IMAGE_PRODUCT}${product?.image}`} />
                  <Image src={`${URL_IMAGE_PRODUCT}${product?.image}`} />
                  <Image src={`${URL_IMAGE_PRODUCT}${product?.image}`} />
                </Image.PreviewGroup>
              </div>
              <div className="img__text">
                <img src="/images/logo-category.webp" alt="category" />
                <p className="img__text-wrapt">
                  <span className="product__code">10000618</span>
                  <span className="product__object">nữ</span>
                </p>
              </div>
            </div>
          </div>
          <div className="product__content" style={{ flex: 1 }}>
            <p className="product__name">{product?.name}</p>
            <p className="product__price">
              <span className="product__price-current">{currency(product?.price)}</span><span className="product__price-real">1.490.00
                đ</span>
            </p>
            <p className="product__color">
              <span className="product__color-title">màu sắc:</span>
              <span className="product__color-content">trắng kem</span>
            </p>
            <p className="product__size">
              <span className="product__size-title">kich cỡ:</span>
              <span className="product__size-content">size xl</span>
            </p>
            <form>
              <div className="product__choose-size">
                <div className="form-group">
                  <div>
                    <input type="radio" id="xl" name="size" defaultValue="xl" hidden />
                    <label htmlFor="xl">size xl</label>
                  </div>
                  <div>
                    <input type="radio" id="l" name="size" defaultValue="l" hidden />
                    <label htmlFor="l">size l</label>
                  </div>
                </div>
              </div>
            </form>
            <Button loading={_addCartLoading} onClick={onAddCartItem}>thêm vào giỏ hàng</Button>
            <Button onClick={onBuy} className="white">mua ngay</Button>
            <div className="product__tool">
              <div className="product__tool-store">
                <img src="/images/location.png" alt="local" />
                <span>kiêm tra cửa hàng còn không</span>
              </div>
              {
                <Popconfirm
                  disabled={!!user.user}
                  title="Thông báo"
                  description="Vui lòng đăng nhập trước khi đưa sản phẩm vào vui thích"
                  onConfirm={() => navigate(PATH.Login)}
                  okText="Đăng nhập"
                // showCancel={false}
                >
                  <div className="product__tool-wishlist" onClick={user.user ? onAddWishlist : undefined}>
                    <img src="/images/favorite.png" alt="wishlist" />
                    <span>yêu thích</span>
                  </div>
                </Popconfirm>
              }
              <div className="product__tool-share">
                <img src="/images/ios_share_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="share" />
                <span>chia sẻ</span>
              </div>
            </div>
            <div className="product__endow">
              <div className="product__endow-title">
                <p>ưu đãi giành riêng cho bạn</p>
                <p>xem tất cả</p>
              </div>
              <div className="product__endow-main">
                <img src="/images/icon-hot.webp" alt="hot" />
                <p> Nhập mã
                  <span>THANKYOU</span>
                  giảm 5% (tối đa 150K) cho đơn từ 1 triệu - Dành riêng cho KH mới
                </p>
              </div>
            </div>
            <div className="product__service">
              <div className="service__item">
                <img src="/images/local_shipping_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="shipping" />
                <p className="service-title">miễn phí giao hàng</p>
                <p className="service-des">miễn phí giao hàng</p>
              </div>
              <div className="service__item">
                <img src="/images/local_shipping_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="shipping" />
                <p className="service-title">ship toàn quốc</p>
                <p className="service-des">đồng giá 30k</p>
              </div>
              <div className="service__item">
                <img src="/images/history_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="return" />
                <p className="service-title">đổi trả hàng</p>
                <p className="service-des">15 ngày với sản phẩm nguyên giá</p>
              </div>
            </div>
            <div className="product__characteristic">
              <div className="product__characteristic-title">
                đặc điểm nổi bật<p className="characteristic__item-icon" />
              </div>
              <div className="product__characteristic-des">
                <p>Số đo người mẫu<span>Size S - Chiều cao: 170 cm - Vòng eo: 59 cm - Vòng hông: 87 cm -
                  Vòng ngực: 78 cm</span></p>
                <p>Nhãn hiệu<span>Format</span></p>
                <p>Đối tượng<span>Nữ</span></p>
                <p>Thời trang<span>Xuân hè</span></p>
                <p>Mã kỹ thuật<span>B929-802P</span></p>
                <p>Bộ sưu tập<span>MODESTY</span></p>
              </div>
            </div>
          </div>
        </section>
        <section className="info">
          <ul className="info__nav">
            <li className="active">mô tả</li>
            <li>đặc quyền thành viên</li>
            <li>đánh giá</li>
          </ul>
          <div className="info__content">
            <div className="info__item active">
              <p className="info__item-title">Đặc điểm nổi bật</p>
              <ul className="info__item-contents">
                <li className="info__item-content">Quần 10004386 thuộc bst No.3 The Awakening</li>
                <li className="info__item-content">Quần âu 1 lớp dáng ống côn dài, cạp rời, khóa trước, cúc, móc, túi chéo. Với phom dáng
                  ôm nhẹ, tôn lên đường nét đôi chân nhưng vẫn đảm bảo sự thoải mái khi di chuyển, chiếc
                  quần này dễ dàng kết hợp cùng sơ mi, blazer hay áo kiểu, tạo nên vẻ ngoài chuyên nghiệp
                  và thời thượng.</li>
                <li className="info__item-content">Bộ trang phục dễ dàng kết hợp sandals, giày cao gót và các loại túi khác nhau để đi làm
                  hoặc đi chơi gặp bạn bè.</li>
              </ul>
              <p className="info__item-title">Thông số người mẫu: size M</p>
              <ul className="info__item-contents">
                <li className="info__item-content">Chiều cao: 172 cm</li>
                <li className="info__item-content">Vòng eo: 62 cm</li>
                <li className="info__item-content">Vòng hông: 92 cm</li>
                <li className="info__item-content">Vòng ngực: 82 cm</li>
              </ul>
              <p className="info__item-title">Bảo quản:</p>
              <ul className="info__item-contents">
                <li className="info__item-content">Giặt tay nước mát</li>
                <li className="info__item-content">Không dùng thuốc tẩy</li>
                <li className="info__item-content">Không sấy khô</li>
                <li className="info__item-content">Phơi trong bóng mát</li>
                <li className="info__item-content">Là ở nhiệt độ thấp</li>
              </ul>
            </div>
            <div className="info__item member">
              <img className="info-member-img" src="/images/_ang_do_copy.webp" alt="member" />
            </div>
            <div className="info__item star ">
              <img className="info-star-img" src="/images/star.png" alt="star" />
              <p className="info-star-text">Sản phẩm hiện chưa được đánh giá</p>
            </div>
          </div>
        </section>
        <section className="can-you-like pd">
          <p className="title">có thể bạn cũng thích</p>
          <Slider slidesPerView={4}
            spaceBetween={30}
            className="product-wrapt-relateship"
          >
            {
              relateshipLoading
                ? Array.from(Array(4)).map((_, i) => (
                  <ProductCardLoading loading key={i} />
                ))
                : relateshipProduct?.related_products.length > 0
                  ? relateshipProduct?.related_products.map((e) => (
                    <ErrorBoundary>
                      <ProductCard key={e._id} {...e} />
                    </ErrorBoundary>
                  ))
                  : (
                    <div className="col-12">
                      <p className="text-xl border p-5 text-center w-full mb-5">
                        không tìm thấy dữ liệu 😞
                      </p>
                    </div>
                  )
              // relateshipLoading
              //   ? Array.from(Array(4)).map((_, i) => (
              //     <ProductCardLoading loading key={i} />
              //   ))
              //   : relateshipProduct?.related_products.map((e) => (
              //     <ErrorBoundary>
              //       <ProductCard key={e._id} {...e} />
              //     </ErrorBoundary>
              //   ))
            }
          </Slider>
        </section>
      </div>
      <Service />
      <Contact />
    </main>
  )
}
