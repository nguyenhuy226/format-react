import { ListAddressCard } from '@/components/AddressCard'
import { PATH } from '@/config'
import { useQuery } from '@/hooks/useQuery'
import { addressService } from '@/services/address'
import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'



export const AddressList = () => {
    const { setPopoverAccountMobile } = useOutletContext();
    const { loading, data ,reFetch } = useQuery({
        queryFn: () => addressService.getAddress(),
        onSuccess: (res) => {
            res.data.sort(e => e.default ? -1 :0)
        }
    })

    return (<div className="account__panel">
        <div className="address__panel-list">
            <div className="address__panel-top">
                <p className="account__panel-title"><img className="btn-open-nav" onClick={() =>setPopoverAccountMobile(true)}  src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" />Danh sách địa chỉ nhận hàng</p>
                <button className="btn-add-address"><Link to={PATH.Profile.AddressAdd}>+ thêm địa chỉ nhận hàng</Link></button>
            </div>
            <ListAddressCard
                loading={loading}
                data={data?.data}
                onChangeAddressDefault={reFetch}
                onDeleteAddress={reFetch}   
            />
        </div>
    </div>
    )
}
