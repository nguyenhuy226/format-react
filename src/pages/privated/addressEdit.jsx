import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { PATH } from '@/config'
import { useForm } from '@/hooks/useForm'
import { useQuery } from '@/hooks/useQuery'
import { addressService } from '@/services/address'
import { handleError, regex, required } from '@/utils'
import { object } from '@/utils/object'
import { message, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom'

const rules = {
    name: [required()],
    phone: [required(), regex('phone')],
    province: [required()],
    district: [required()],
    ward: [required()],
    address: [required()]
}

export const AddressEdit = () => {
    const location = useLocation();
    const { setPopoverAccountMobile } = useOutletContext();
    const { id } = useParams()
    const navigate = useNavigate()
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const { data, loading: getAddressLoading } = useQuery({
        enable: !!id,
        queryFn: () => addressService.getAddressDetail(id),
        onError: () => {
            message.error('Địa chỉ không tồn tại')
            navigate(PATH.Profile.AddressList)
        }
    })

    const { loading: updateAddressLoading, reFetch: updateAddressService } = useQuery({
        enable: false,
        queryFn: () => addressService.updateAddress(form.values, id),
    })

    const form = useForm(rules, { initialValues: data?.data })

    useEffect(() => {
        fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
            .then((res) => res.json())
            .then((data_province) => {
                if (data_province.error === 0) {
                    setProvinces(data_province.data);
                }
            });
    }, []);
    useEffect(() => {
        if (form.values.province) {
            fetch(`https://esgoo.net/api-tinhthanh/2/${form.values.province}.htm`)
                .then((res) => res.json())
                .then((data_district) => {
                    if (data_district.error === 0) {
                        setDistricts(data_district.data);
                    }
                });
        }
    }, [form.values.province]);
    useEffect(() => {
        if (form.values.district) {
            fetch(`https://esgoo.net/api-tinhthanh/3/${form.values.district}.htm`)
                .then((res) => res.json())
                .then((data_ward) => {
                    if (data_ward.error === 0) {
                        setWards(data_ward.data);
                    }
                });
        }
    }, [form.values.district]);
    const redirectBackTo = location.state?.redirectBackTo || PATH.Profile.AddressList;
    const onSubmit = async () => {
        if (!form.values.password && object.isEqual(data?.data, form.values,)) {
            message.warning("Vui lòng nhập thông tin để thay đôi")
            return
        }
        try {
            if (form.validate()) {
                console.log(form.values)
                await updateAddressService()
                message.success('Cập nhật địa chỉ thành công')
                navigate(redirectBackTo)
            }
        } catch (err) {
            handleError(err)
        }
    }
    return (
        <Spin spinning={getAddressLoading} tip="Đang cập nhật địa chỉ...">
            <Helmet>
                <title>Chỉnh sửa địa chỉ</title>
            </Helmet>
            <div className="account__panel">
                <div className="address__panel-edit">
                    <p className="account__panel-title">
                        <img className="btn-open-nav" onClick={() => setPopoverAccountMobile(false)} src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" />
                        <Link to={PATH.Profile.AddressList}> <img className="back-img-address" src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="arrow" style={{ transform: 'rotate(180deg)', width: 31 }} /></Link>
                        sữa địa chỉ nhận hàng</p>
                    <div className="account__form">
                        <Field
                            label="Họ và tên *"
                            name="name"
                            className="form-group"
                            {...form.register('name')}
                        />
                        <Field
                            label="Số điện thoại *"
                            name="phone"
                            className="form-group"
                            {...form.register('phone')}
                        />
                        <div className="row">
                            <Field
                                {...form.register('province')}
                                name="province"
                                className="form-group col-xl-4 col-12"
                                renderField={(props) => <>
                                    <label htmlFor="province">Tỉnh/Thành phố *</label>
                                    <select name="province" value={props.value} onChange={(e) => props.onChange(e.target.value)} className="province" >
                                        <option>Chọn Tỉnh/Thành phố</option>
                                        {provinces.map((province) => (
                                            <option key={province.id} value={province.id}>
                                                {province.full_name}
                                            </option>
                                        ))}
                                    </select>
                                </>
                                }
                            />
                            <Field
                                {...form.register('district')}
                                name="district"
                                className="form-group col-xl-4 col-12"
                                renderField={(props) => <>
                                    <label htmlFor="district">Quận/Huyện *</label>
                                    <select name="district" value={props.value} onChange={(e) => props.onChange(e.target.value)} className="district">
                                        <option>Chọn Quận/Huyện</option>
                                        {districts.map((district) => (
                                            <option key={district.id} value={district.id}>
                                                {district.full_name}
                                            </option>
                                        ))}
                                    </select>
                                </>
                                }
                            />
                            <Field
                                {...form.register('ward')}

                                className="form-group col-xl-4 col-12"
                                renderField={(props) => <>
                                    <label htmlFor="ward">Phường/Xã *</label>
                                    <select name="ward" value={props.value} onChange={(e) => props.onChange(e.target.value)} className="ward">
                                        <option>Chọn Phường/Xã</option>
                                        {wards.map((ward) => (
                                            <option key={ward.id} value={ward.id}>
                                                {ward.full_name}
                                            </option>
                                        ))}
                                    </select>
                                </>
                                }
                            />
                        </div>
                        <Field
                            {...form.register('address')}
                            label="Đia chỉ chi tiết *"
                            className="form-group"
                            name="addess"
                        />
                        {
                            data?.data?.default ? <div className="default-notification">Đó là địa chỉ vận chuyện mặc định</div> : <Field
                                label="Đặt làm địa chỉ mặc định"
                                className="form-check"
                                name="default"
                                type="checkbox"
                                {...form.register('default')}
                            // onClick={handleCheckboxChange}
                            // checked={isChangePass}
                            />
                        }


                        <div className="button">
                            <Button onClick={() => navigate(redirectBackTo)} className="white col-xl-6 col-12">hủy bỏ</Button>
                            <Button className="col-xl-6 col-12" loading={updateAddressLoading} onClick={onSubmit}>lưu lại</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Spin>

    )
}
