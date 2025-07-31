import { Empty } from 'antd';
import { PATH, URL_IMAGE_PRODUCT } from '@/config';
import { productService } from '@/services/product';
import { currency } from '@/utils';
import { Drawer } from 'antd'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '../Skeleton';
import { useQuery } from '@/hooks/useQuery';
import { useDebounce } from '@/hooks/useDebounce';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

export const SearchDrawer = ({ open, onClose }) => {
    const [filteredData, setFilteredData] = useState(null);
    const [displayValue, setDisplayValue] = useState('');
    const [value, setValue] = useDebounce(displayValue);
    const { data, loading, reFetch: searchService } = useQuery({
        queryKey: [value],
        queryFn: ({ signal }) => productService.getProduct(`?limit=5&name=${value}`, signal),
        enable: !!value,
    })
    useEffect(() => {
        setValue(displayValue);
        if (!value.trim()) {
            setFilteredData(null); // Xóa dữ liệu khi value rỗng
        } else {
            setFilteredData(data); // Cập nhật dữ liệu khi có giá trị
        }
    }, [value,data, displayValue]);

    
    const onSearch = async () => {
        if (value.trim()) {
            searchService()
        }
    }
    const qs = queryString.stringify({
        name: value,
    })
    
    const handleLinkClick = () => {
        onClose(); // Đóng Drawer
        setDisplayValue(''); 
        setValue(''); // Đặt lại value về rỗng
    };
    
    const linkViewAll = filteredData?.data.length == 0 ? PATH.Product : PATH.Product + `?${qs}`;
    return (
        <Drawer open={open} onClose={onClose} headerStyle={{ display: 'none' }} bodyStyle={{ padding: '8px 0px 12px' }}>
            {/* <div className="popup__search-mobile">   */}
            <div className="search__mobile-top">    
                <img className="search__mobile-close" onClick={handleLinkClick} src="images/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="close" />
                <p className="title-search">tìm kiếm</p>
            </div>
            <div className="search">
                <button><img src="images/search.png" onClick={onSearch} /></button>
                <input type="text" placeholder="TÌM KIẾM" onChange={(ev) => setDisplayValue(ev.target.value)} value={displayValue}/>
            </div>
            <div className="popup__cart-wrap" style={{ maxHeight: '100%',height:'auto' }}>
                <div className="cart__items" style={{ maxHeight: '100%',height:'auto' }}>
                    {
                        !loading && !filteredData &&  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    }
                    {
                        loading ? Array.from(Array(3)).map((_, i) => <SearchItemLoading key={i} />) : (
                            filteredData?.data.length == 0 ?
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                                filteredData?.data?.map(e => <SearchItem key={e.id} {...e} />)
                        )
                    }
                </div>
            </div>
            <Link className="search__mobile-top" to={linkViewAll} onClick={handleLinkClick}>
                <p className="title-search">tất cả sản phẩm</p>
            </Link>
        </Drawer>

    )
}


const SearchItem = ({ name, price, image }) => {
    return <div className="cart__item">
        <div className="cart__item-img">
            <img src={`${URL_IMAGE_PRODUCT}${image}`} alt="cart" />
        </div>
        <div className="cart__item-text">
            <p className="cart__item-name">{name}</p>
            <p className="cart__item-sku">SKU: 2100041900081</p>
            {/* <span className="cart__item-origin">1.290.000 đ</span> */}
            <span className="cart__item-price">{currency(price)}</span>
        </div>
    </div>
}

const SearchItemLoading = () => {
    return <div className="cart__item">
        <div className="cart__item-img">
            <Skeleton width={90} height={120} />
        </div>
        <div className="cart__item-text">
            <p className="cart__item-name">
                <Skeleton width={'100%'} height={20} />
            </p>
            <p className="cart__item-sku"><Skeleton width={'50%'} height={36} /></p>
            {/* <span className="cart__item-origin">1.290.000 đ</span> */}
            <span className="cart__item-price">
                <Skeleton width={'80%'} height={16} />
            </span>
        </div>
    </div>
}