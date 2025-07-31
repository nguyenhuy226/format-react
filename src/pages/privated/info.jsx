import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { useAuth } from '@/hooks/useAuth'
import { useForm } from '@/hooks/useForm'
import { useQuery } from '@/hooks/useQuery'
import { userService } from '@/services/user'
import { setUserAction } from '@/stories/auth'
import { confirm, handleError, minMax, required, validate } from '@/utils'
import { DatePicker, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import _ from 'lodash'
import { object } from '@/utils/object'
import { Radio } from '@/components/Radio'
import { PATH } from '@/config'
import { Helmet } from 'react-helmet'
const rules = {
    name: [required()],
    password: [
        (value, forms) => {
            if (forms.repassword) {
                const errorObj = validate({
                    password: [
                        required()
                    ]
                }, forms)
                return errorObj.password
            }
        },
        minMax(6, 32)
    ],
    repassword: [confirm('password')],

}

export const Info = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { setPopoverAccountMobile } = useOutletContext();
    const userData = location.state || false;
    const navigate = useNavigate();
    const [isChangePass, setIsChangePass] = useState(userData);
    const { user } = useAuth();
    const form = useForm(rules, { initialValues: user });

    const handleCheckboxChange = (e) => {
        setIsChangePass(e.target.checked); // Cập nhật trạng thái khi checkbox thay đổi
    };
    const { loading, reFetch: updateUserService } = useQuery({
        enable: false,
        queryFn: ({ params }) => userService.updateUser(...params)
    })

    const onSubmit = async () => {
        if (!form.values.password && object.isEqual(user, form.values, "name", "gender")) {
            message.warning("Vui lòng nhập thông tin để thay đôi")
            return
        }

        if (form.validate()) {
            try {
                const res = await updateUserService(form.values);
                dispatch(setUserAction(res.user));
                message.success("Cập nhật thông tin tài khoản thành công")
            } catch (error) {
                handleError(error)
            }
        } else {
            message.error("Vui lòng nhập đúng các trường")
        }
    }

    return (<div className="account__panel">
        <Helmet>
            <title>Thông tin chi tiết</title>
        </Helmet>
        <p className="account__panel-title"><img onClick={() => setPopoverAccountMobile(true)} className="btn-open-nav" src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" />thông tin cá nhân</p>
        <div className="account__form">
            <Field
                {...form.register('name')}
                label="Họ và tên *"
                className="form-group"
                name="name"
            />
            <Field
                {...form.register('email')}
                label="Email"
                className="form-group"
                name="email"
                disabled
                style={{ backgroundColor: '#dfdfdf' }}
            />
            <div className="row">
                <Field
                    {...form.register('phone')}
                    label="Số điện thoại"
                    className="form-group col-xl-6 col-12"
                    name="phone"
                    disabled
                    style={{ backgroundColor: '#dfdfdf' }}
                    note="Nếu cần đổi số điện thoại quý khách vui lòng liên hệ CSKH"
                />
                <Field
                    {...form.register('birthday')}
                    label="Sinh nhật"
                    className="form-group col-xl-6 col-12"
                    name="birthday"
                    disabled
                    type="date"
                    style={{ backgroundColor: '#dfdfdf' }}
                    note="Để thay đổi thông tin, Quý khách vui lòng liện hệ bộ phận CSKH"
                />
            </div>
            <Field
                {...form.register('gender')}
                note="Để thay đổi thông tin quý khách vui lòng liên hệ bộ phận CSKH"
                className="form-group"
                renderField={(props) => <div className="form-group">
                    <p className="label">Đối tượng *</p>
                    <Radio.Group onChange={value => props?.onChange?.(value)} value={props?.value} name={props.name} toogle>
                        <Radio.Toggle value="male">Nam</Radio.Toggle>
                        <Radio.Toggle value="female">Nữ</Radio.Toggle>
                        <Radio.Toggle value="unisex">Unisex</Radio.Toggle>
                    </Radio.Group></div>}
            />
            <Field
                label="Đổi mật khẩu"
                className="form-check"
                name="changepass"
                type="checkbox"
                onClick={handleCheckboxChange}
                checked={isChangePass}
            />
            <div className="password-contant" style={{ display: isChangePass ? 'block' : 'none' }}>
                <Field
                    label="Mật khẩu mới *"
                    className="form-group password"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    {...form.register('password')}
                />
                <Field
                    label="Nhập lại mật khẩu mới *"
                    className="form-group password"
                    name="repassword"
                    type="password"
                    autoComplete="new-password"
                    {...form.register('repassword')}
                />
            </div>
            <div className="button">
                <Button onClick={() => navigate(PATH.Profile.Index)} className="white col-xl-6 col-12">hủy bỏ</Button>
                <Button onClick={onSubmit} loading={loading} className="col-xl-6 col-12">lưu lại</Button>
            </div>
        </div>
    </div>
    )
}
