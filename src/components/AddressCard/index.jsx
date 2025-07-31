import React, { useEffect, useState } from 'react'
import { generatePath, Link } from 'react-router-dom'
import { PATH } from '@/config'
import { Skeleton } from '../Skeleton'
import { withListLoading } from '@/utils/withListLoading'
import { handleError } from '@/utils'
import { message } from 'antd'
import { addressService } from '@/services/address'


const AddressCard = ({onDeleteAddress, onChangeAddressDefault,id, name, phone, province, district, ward, address, default: addressDefault }) => {

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    useEffect(() => {
        fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
            .then((res) => res.json())
            .then((data_province) => {
                if (data_province.error === 0) {
                    setProvinces(data_province.data);
                }
            });
        fetch(`https://esgoo.net/api-tinhthanh/2/${province}.htm`)
            .then((res) => res.json())
            .then((data_district) => {
                if (data_district.error === 0) {
                    setDistricts(data_district.data);
                }
            });


        fetch(`https://esgoo.net/api-tinhthanh/3/${district}.htm`)
            .then((res) => res.json())
            .then((data_ward) => {
                if (data_ward.error === 0) {
                    setWards(data_ward.data);
                }
            });

    }, [])

    const _onDeleteAddress = async (id) => {
        if (addressDefault) {
            return;
        }
        const key = 'delete-address'
        try {
            message.loading({ content: 'Đang xáo địa chỉ địa chỉ', key });
            await addressService.deleteAddress(id)
            onDeleteAddress?.()
            message.success({ content: 'Xóa địa chỉ thành công', key });
        } catch (er) {
            handleError(er, key);
        }
    }
    const _onChangeDefaultAddress = async () => {
        const key = 'change-address-default'
        try {
            message.loading({ content: 'Đang cập nhật địa chỉ mặc định', key });
            await addressService.updateAddress({
                default: true,
                name,
                phone,
                province,
                district,
                ward,
                address
            }, id)
            onChangeAddressDefault?.()
            message.success({ content: 'Cập nhật địa chỉ mặc định thành công', key });
        } catch (er) {
            handleError(er, key);
        }
    }
    return (
        <div className="address__panel-main">
            <div className="address__content">
                <div className="name__address">
                    <p className="name__address-text">{name} - {phone}</p>
                    {
                        addressDefault ? <p className="address__default">Mặc định</p> : null
                    }
                </div>
                <div className="address__text">
                    {address},
                    {wards.find(e => e.id === ward)?.full_name || "Không xác định"},
                    {districts.find(e => e.id === district)?.full_name || "Không xác định"},
                    {provinces.find(e => e.id === province)?.full_name || "Không xác định"}
                </div>
            </div>
            <div className="address__tool">
                <div className="address__tool-top">
                    <Link to={id ? generatePath(PATH.Profile.AddressEdit, { id }) : "#"} className="button__address-edit">
                        <img src="/images/edit_note_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="edit" />
                        <span>chỉnh sữa</span>
                    </Link>
                    <div className={addressDefault ? "button__address-delete-default" : "button__address-delete"} onClick={() => _onDeleteAddress(id)}>
                        <img src="/images/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="delete" />
                        <span>xóa</span>
                        {
                            addressDefault ? <span className="tooltip-text">Để xóa địa chỉ mặc định này vui lòng chọn lại một địa
                                chỉ mặc định khác trước khi xóa</span> : null
                        }

                    </div>
                </div>
                {
                    addressDefault ? null : <div className="button__address-default" onClick={_onChangeDefaultAddress}>
                        <span>Đặt làm địa chỉ mặc định</span>
                    </div>
                }

            </div>
        </div>
    )
}

const AddressCardLoading = () => {
    return (
        <div className="address__panel-main">
            <div className="address__content">
                <div className="name__address">
                    <Skeleton height={22} width={300} />
                </div>
                <div className="address__text">
                    <Skeleton height={22} width={500} />
                </div>
            </div>
            <div className="address__tool">
                <Skeleton height={22} width={100} />

                <div className="button__address-delete">
                    <Skeleton height={22} width={100} />

                </div>
            </div>
        </div>
    )
}

// export default withLoading(AddressCard, AddressCardLoading)

export const ListAddressCard = withListLoading(AddressCard, AddressCardLoading);
