import { Contact } from '@/components/Contact'
import { Paginate } from '@/components/Paginate'
import { ListProductCard } from '@/components/ProductCard'
import { Service } from '@/components/Service'
import { Skeleton } from '@/components/Skeleton'
import { useCategories } from '@/hooks/useCategories'
import { useQuery } from '@/hooks/useQuery'
import { useSearch } from '@/hooks/useSearch'
import { productService } from '@/services/product'
import { cn } from '@/utils'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const ProductPage = () => {
    const [popoverFilter ,setpopoverFilter] = useState(false)

    const [search, setSearch] = useSearch({
        soft: 'asc',
        page: 1,
    });
    const navigate = useNavigate();
    const { pathname } = useLocation()

    const newSearch = new URLSearchParams(search);
    const { data: categories, loading: categoryLoading } = useCategories();

    const [selectedFilters, setSelectedFilters] = useState(() => {
        let gia = {}
        if (search.maxPrice == 3000000) {
            gia = {
                id: 2,
                name: "2.500.000 ₫ - 3.000.000 ₫",
                minPrice: 2500000,
                maxPrice: 3000000
            }
        } else if (search.maxPrice == 2500000) {
            gia = {
                id: 1,
                name: "2.000.000 ₫ - 2.500.000 ₫",
                minPrice: 2000000,
                maxPrice: 2500000
            }
        } else {
            gia = null
        }
        return {
            danhMuc: categories?.some(e => e.id == search.category),
            gia: gia,
        }
    });

    useEffect(() => {
        if (categories && search.category) {
            const matchedCategory = categories.find((e) => e.id === parseInt(search.category));
            setSelectedFilters((prev) => ({
                ...prev,
                danhMuc: matchedCategory || null, // Gán danh mục nếu tìm thấy, nếu không thì null
            }));
        }
    }, [categories, search.category]);

    const qs = queryString.stringify({
        page: search.page,
        category: search.category,
        minPrice: search.minPrice,
        maxPrice: search.maxPrice,
        name: search.name,
        soft: search.soft,
    })
    const { data, loading } = useQuery({
        queryKey: [qs],
        queryFn: ({ signal }) => productService.getProduct(`?${qs}`, signal),
        // deleteAsyncFuncion: true,
        keepPrevousData: true,
    })



    const deleteFilter = (event, item, group) => {
        const isChecked = event.target.checked;
        setSelectedFilters((prev) => ({
            ...prev,
            [group]: isChecked ? item : null, // Cập nhật id của checkbox được chọn trong nhóm
        }));
        const newSearch = new URLSearchParams(search);
        if (isChecked) {
            if (group == 'danhMuc') {
                newSearch.set('category', item.id); // Thêm category vào URL
            }
            if (group == "gia") {
                newSearch.set('minPrice', item.minPrice)
                newSearch.set('maxPrice', item.maxPrice)
            }
        } else {
            if (group == 'danhMuc') {
                newSearch.delete('category'); // Xóa category khỏi URL nếu bỏ chọn
            }
            if (group == 'gia') {
                newSearch.delete('minPrice'); // Xóa category khỏi URL nếu bỏ chọn
                newSearch.delete('maxPrice'); // Xóa category khỏi URL nếu bỏ chọn
            }
        }
        navigate(`${pathname}?${newSearch.toString()}`); // Thực hiện điều hướng
    }
    const handleLinkClick = (event, item, group) => {
        event.preventDefault(); // Ngăn điều hướng mặc định
        const isChecked = selectedFilters[group]?.id !== item.id; // Kiểm tra trạng thái hiện tại
        setSelectedFilters((prev) => ({
            ...prev,
            [group]: isChecked ? item : null, // Cập nhật trạng thái checkbox
        }));
        const newSearch = new URLSearchParams(search);
        if (isChecked) {
            if (group == 'danhMuc') {
                newSearch.set('category', item.id); // Thêm category vào URL
            }
            if (group == "gia") {
                newSearch.set('minPrice', item.minPrice)
                newSearch.set('maxPrice', item.maxPrice)
            }
        } else {
            if (group == 'danhMuc') {
                newSearch.delete('category'); // Xóa category khỏi URL nếu bỏ chọn
            }
            if (group == 'gia') {
                newSearch.delete('minPrice'); // Xóa category khỏi URL nếu bỏ chọn
                newSearch.delete('maxPrice'); // Xóa category khỏi URL nếu bỏ chọn
            }
        }
        navigate(`${pathname}?${newSearch.toString()}`); // Thực hiện điều hướng
    };
    return (
        <main className="mainwrapper productpage">
            <div className="breadcrumbs">
                <div className="container">
                    <p className="breadcrumbs-item">Trang chủ</p>
                    <p className="breadcrumbs-item">Thời trang cao cấp</p>
                    {
                        search.category && <p className="breadcrumbs-item">{categories?.find(e => e.id == search.category)?.name}</p>
                    }
                    <p className="breadcrumbs-item">Quần</p>
                    <p className="breadcrumbs-item">Âu</p>
                </div>
            </div>
            <section className="product">
                <div className="container">
                    <div className={cn("product__filter", {active : popoverFilter})}>
                        <div className="product__filter-title">
                            lọc sản phẩm
                            <img className="btn-filter-close" onClick={() => setpopoverFilter(false)} src="images/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="close" /></div>
                        <div className="product__filter-items">
                            <ul className="product__filter-list">
                                {Object.entries(selectedFilters).map(([group, filter]) => {
                                    if (filter) {
                                        return (
                                            <li key={filter.id}>
                                                <img
                                                    className="filter__item-close"
                                                    src="./images/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png"
                                                    alt=""
                                                    onClick={() => deleteFilter({ target: { checked: false } }, filter, group)}
                                                />
                                                <span className="filter__item-name">{group.toUpperCase()}:</span>
                                                <span className="filter__item-content">{filter.name}</span>
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                            <div className="product__button-close" onClick={() => {
                                setpopoverFilter(false)
                                setSelectedFilters({
                                    danhMuc: null,
                                    gia: null,
                                })
                                const newSearch = new URLSearchParams(search);
                                newSearch.delete('category'); // Xóa category khỏi URL nếu bỏ chọn
                                newSearch.delete('maxPrice'); // Xóa category khỏi URL nếu bỏ chọn
                                newSearch.delete('minPrice'); // Xóa category khỏi URL nếu bỏ chọn
                                navigate(`${pathname}?${newSearch.toString()}`);
                            }}>Xóa tất cả</div>
                            <form className="product__accordion-filter">
                                <div className="accordion__item">
                                    <div className="accordion__item-title">danh mục<p className="accordion__item-icon" /></div>
                                    <div className="accordion__item-panels">
                                        {
                                            categoryLoading ? Array.from(Array(5)).map((_, i) => (
                                                <div className="panle__item" key={i}>
                                                    <Skeleton width={320} height={25} />
                                                </div>
                                            )) : categories?.map(e => {
                                                const newSearch = new URLSearchParams(search); // Tạo một bản sao của search
                                                newSearch.set('category', e.id);
                                                return (
                                                    <Link key={e.id} className="panle__item"
                                                        to={`${pathname}?${newSearch.toString()}`}
                                                        onClick={(event) => { 
                                                            setpopoverFilter(false)
                                                            handleLinkClick(event, e, 'danhMuc')}}
                                                    >
                                                        <input type="checkbox" name={e.name} id={e.name}
                                                            checked={selectedFilters?.danhMuc?.id === e.id}
                                                            readOnly
                                                        />
                                                        <label htmlFor={e.name}>{e.name}</label>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="accordion__item">
                                    <div className="accordion__item-title">giá<p className="accordion__item-icon" /></div>
                                    <div className="accordion__item-panels">
                                        <Link className="panle__item"
                                            to={`${pathname}?${newSearch.toString()}`}
                                            onClick={(event) => {
                                                setpopoverFilter(false)
                                                handleLinkClick(event, { id: 1, minPrice: 2000000, maxPrice: 2500000, name: "2.000.000 ₫ - 2.500.000 ₫" }, 'gia')}}
                                        >
                                            <input type="checkbox" name="gia1" id="gia1"
                                                checked={selectedFilters?.gia?.id === 1}
                                                readOnly
                                            />
                                            <label htmlFor="gia1">2.000.000 ₫ - 2.500.000 ₫</label>
                                        </Link>
                                        <Link className="panle__item"
                                            to={`${pathname}?${newSearch.toString()}`}
                                            onClick={(event) => {
                                                setpopoverFilter(false)
                                                handleLinkClick(event, { id: 2, minPrice: 2500000, maxPrice: 3000000, name: "2.500.000 ₫ - 3.000.000 ₫" }, 'gia')}}
                                        >
                                            <input type="checkbox" name="gia2" id="gia2"
                                                checked={selectedFilters?.gia?.id === 2}
                                                readOnly
                                            />
                                            <label htmlFor="gia2">2.500.000 ₫ - 3.000.000 ₫</label>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="product__list">
                        <div className="product__list-top">
                            <h2 className="title">ÂU</h2>
                            <button className="white btn-filter-mobile" onClick={() => setpopoverFilter(true)}><img src="./images/filter_list_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="filterlist" /> bộ lọc</button>
                            <div className="arrange">
                                <span className="arrange__title">Sắp xếp theo</span>
                                <select value={search.soft} onChange={ev => {
                                    setSearch({
                                        soft: ev.target.value,
                                        page: 1
                                    })
                                }} className="arrange__select">
                                    <option value="asc">Giá thấp đến cao</option>
                                    <option value="desc">Giá cao đến thấp</option>
                                </select>
                                <p className="arrange__icon"><img src="/images/keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="down" /></p>
                            </div>
                        </div>
                        <div className="product-wrapt row">
                            <ListProductCard
                                loadingCount={12}
                                loading={loading}
                                data={data?.data}
                                className="product__item col-6 col-xl-3"
                            />
                        </div>
                        {
                            data?.last_page > 1 && <Paginate totalPage={data.last_page} />
                        }
                    </div>
                </div>
            </section>
            <Service />
            <Contact />
        </main>

    )
}
