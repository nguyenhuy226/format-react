import { currency } from '@/utils'
import moment from 'moment'
import React from 'react'
import { Skeleton } from '../Skeleton'
import { withListLoading } from '@/utils/withListLoading'

const OrderCard = ({total_price,status,code,created_at}) => {
    return (
        <div className="col-xl-6 col-12 order__item-wrapt">
            <div className="order__item">
                <div className="order__item-top">
                    <p className="order__item-title">Đơn hàng {code}</p>
                    <p className="order__item-date">Ngày đặt hàng: {moment(created_at).format('DD/MM/YYYY')}</p>
                </div>
                <div className="order__item-main">
                    <p className="order__item-des">Tổng tiền: {currency(total_price)}</p>
                    <p className="order__item-status">Trạng thái: {status}</p>
                </div>
            </div>
        </div>
    )
}

const OrderCardLoading = () => {
    return (
        <div className="col-xl-6 col-12 order__item-wrapt">
            <div className="order__item">
                <div className="order__item-top">
                    <p className="order__item-title"><Skeleton height={22} width={100}/></p>
                    <p className="order__item-date"><Skeleton height={22} width={100}/></p>
                </div>
                <div className="order__item-main">
                    <p className="order__item-des"><Skeleton height={22} width={100}/></p>
                    <p className="order__item-status"><Skeleton height={22} width={100}/></p>
                </div>
            </div>
        </div>
    )
}


export const OrderCardList = withListLoading(OrderCard,OrderCardLoading)