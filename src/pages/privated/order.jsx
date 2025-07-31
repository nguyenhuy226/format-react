import { OrderCardList } from '@/components/OrderCard'
import { Paginate } from '@/components/Paginate'
import { useQuery } from '@/hooks/useQuery'
import { useSearch } from '@/hooks/useSearch'
import { orderService } from '@/services/order'
import React from 'react'
import { useOutletContext } from 'react-router-dom'


export const Order = () => {
    const { setPopoverAccountMobile } = useOutletContext();

    const [search] = useSearch({
        page: 1,
    });
    const { loading, data } = useQuery({
        queryKey: `order-${search.page}`,
        queryFn: () => orderService.getOrder(`?page=${search.page}`)
    })
    return (<div className="account__panel">
        <p className="account__panel-title"><img className="btn-open-nav" onClick={()=>setPopoverAccountMobile(true)} src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" />lịch sử đơn hàng</p>
        <div className="order__panel row">
            <OrderCardList
                loading={loading}
                data={data?.data?.data}
                loadingCount={6}
                empty={<div className="odder__empty">
                    <img src="./images/upcoming.svg" alt="upcoming" />
                    <p className="odder__empty-title">Quý khách hiện chưa có đơn hàng nào</p>
                    <button>mua sắm ngay</button>
                </div>}
            />
        </div>
        <Paginate totalPage={data?.data?.last_page} />
    </div>
    )
}
