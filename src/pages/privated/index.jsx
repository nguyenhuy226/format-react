import { Skeleton } from '@/components/Skeleton';
import { PATH } from '@/config'
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@/hooks/useQuery';
import { addressService } from '@/services/address';
import React, { useEffect, useState } from 'react'
import { generatePath, Link, NavLink, useOutletContext } from 'react-router-dom'

export const Profile = () => {
    const { user } = useAuth();
    const { setPopoverAccountMobile } = useOutletContext();
    const { data, loading } = useQuery({
        queryFn: () => addressService.getAddress(),
    })
    const addressDefault = data?.data?.find(e => e.default === 1)
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
        fetch(`https://esgoo.net/api-tinhthanh/2/${addressDefault?.province}.htm`)
            .then((res) => res.json())
            .then((data_district) => {
                if (data_district.error === 0) {
                    setDistricts(data_district.data);
                }
            });
        fetch(`https://esgoo.net/api-tinhthanh/3/${addressDefault?.district}.htm`)
            .then((res) => res.json())
            .then((data_ward) => {
                if (data_ward.error === 0) {
                    setWards(data_ward.data);
                }
            });

    }, [addressDefault])



    return (
        <div className="account__panel">
            <p className="account__panel-title"><img  onClick={() =>setPopoverAccountMobile(true)} className="btn-open-nav" src="./images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" />tài
                khoản của tôi</p>
            <div className="account__panel-info">
                <div className="info__item">
                    <p className="info__item-title">thông tin cá nhân</p>
                    <div className="info__item-content">
                        {
                            loading ? <Skeleton height={22} width={250} /> : <p className="info__item-name">{user.name}</p>
                        }
                        {/* <p className="info__item-name">{user.name}</p> */}
                        <p className="info__item-item"><img src="/images/call_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="call" />
                            {
                                loading ? <Skeleton height={22} width={200} /> : user.phone
                            }
                        </p>
                        <p className="info__item-item private"><img src="/images/mail_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                            {
                                loading ? <Skeleton height={22} width={350} /> : user.email
                            }
                        </p>
                        <div className="info__item-tool private">
                            <div className="info__item-edit" id="account-edit">
                                <img src="/images/edit_note_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="edit" />
                                <NavLink to={PATH.Profile.Info} state={false} className="edit-text">chỉnh sữa</NavLink>
                            </div>
                            <div className="info__item-password" id="account-password">
                                <img src="/images/lock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="lock" />
                                <Link
                                    to={PATH.Profile.Info} state={true} className="password-text">đổi mật khẩu</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info__item">
                    <p className="info__item-title">địa chỉ nhận hàng</p>
                    <div className="info__item-content">
                        <p className="info__item-name">
                            {
                                loading ? <Skeleton height={23} width={250} /> : addressDefault?.name
                            }
                        </p>
                        <p className="info__item-item"><img src="/images/call_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                            {
                                loading ? <Skeleton height={23} width={20} /> : addressDefault?.phone
                            }
                        </p>
                        <p className="info__item-item">
                            <img src="/images/location.png" alt="local" />
                            {
                                loading ? <Skeleton height={23} width={350} /> : `${addressDefault?.address},
                                ${wards?.find(e => e.id === addressDefault?.ward)?.full_name},
                                ${districts?.find(e => e.id === addressDefault?.district)?.full_name},
                                ${provinces?.find(e => e.id === addressDefault?.province)?.full_name}`
                            }

                        </p>
                        <div className="info__item-tool">
                            <Link to={addressDefault ? generatePath(PATH.Profile.AddressEdit, { id: addressDefault?.id }) : "#"} className="info__item-edit" id="address-edit">
                                <img src="./images/edit_note_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="true" />
                                <p className="edit-text">chỉnh sữa</p>
                            </Link>
                            <Link to={PATH.Profile.AddressList} className="info__item-list" id="address-list">
                                <img src="./images/location.png" alt="local" />
                                <p className="password-text">danh sách địa chỉ</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
