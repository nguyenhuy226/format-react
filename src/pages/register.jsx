import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { PATH } from '@/config'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '@/hooks/useForm'
import { confirm, handleError, regex, required } from '@/utils'
import { useQuery } from '@/hooks/useQuery'
import { userService } from '@/services/user'
import { DatePicker, message } from 'antd'
import { Radio } from '@/components/Radio'
import { Contact } from '@/components/Contact'
import { Service } from '@/components/Service'


export const RegisterPage = () => {

    useScrollToTop()
    const navigate = useNavigate()
    const { loading, reFetch: registerService } = useQuery({
        enable: false,
        queryFn: () => userService.register(form.values),
        limitDuration: 1000,
    })
    const form = useForm({
        phone: [
            required()
        ],
        name: [
            required()
        ],
        password: [
            required()
        ],
        repassword: [
            required(),
            confirm('password')
        ],
        email: [
            required(),
            regex('email')
        ],
        birthday: [
            required()
        ]
    }, {
        dependencies: {
            password: ['repassword'],
        }
    })

    const onRegister = async () => {
        if (form.validate()) {
            try {
                const res = await registerService()
                message.success(res.message)
                navigate(PATH.Login)
            } catch (error) {
                handleError(error)
            }
        }
    }
    return (
        <main className="mainwrapper loginpage">
            <section className="containt__login">
                <h2 className="title">đăng ký tài khoản</h2>
                <p className="login__des">Vui lòng nhập đầy đủ thông tin</p>
                <div className="account__form">
                    <Field label="Số điện thoại"
                        placeholder="Nhập số điện thoại của Quý khách"
                        type="text" name="phone"
                        className="form-group"
                        {...form.register('phone')} />
                    <Field label="Họ và tên *"
                        type="text" name="name" placeholder="Nhập họ và tên của Quý khách"
                        className="form-group"
                        {...form.register('name')} />
                    <Field label="Sinh nhật *"
                        className="form-group"
                        {...form.register('birthday')}
                        type="date" name="birthday" placeholder="Ngày / Tháng / Năm" />
                    <Field
                        {...form.register('gender')}
                        note="Để thay đổi thông tin quý khách vui lòng liên hệ bộ phận CSKH"
                        className="form-group"
                        renderField={(props) => <div
                            className="form-group"
                        >
                            <p className="label">Đối tượng *</p>
                            <Radio.Group onChange={value => props?.onChange?.(value)} value={props?.value} toogle defaultValue="male">
                                <Radio.Toggle value="male">Nam</Radio.Toggle>
                                <Radio.Toggle value="female">Nữ</Radio.Toggle>
                                <Radio.Toggle value="unisex">Unisex</Radio.Toggle>
                            </Radio.Group></div>}
                    />
                    <Field label="Mật khẩu *"
                        type="password" name="password"
                        className="form-group"
                        {...form.register('password')} />
                    <Field label="Nhập lại mật khẩu *"
                        type="password" name="repassword"
                        className="form-group"
                        {...form.register('repassword')} />
                    <Field label="Email"
                        type="text" name="email" placeholder="Nhập email của Quý khách"
                        className="form-group"
                        {...form.register('email')} />
                    <div className="form-group">
                        <label htmlFor="job">Nghề nghiệp</label>
                        <select name="job" id="job">
                            <option>Văn phòng</option>
                            <option>Tự do</option>
                            <option>Thu Ngân</option>
                            <option>Marketing</option>
                            <option>Vận tải</option>
                            <option>Báo chí</option>
                            <option>Nghệ thuật</option>
                            <option>Bảo vệ</option>
                            <option>CNTT</option>
                            <option>Xuất khẩu lao động</option>
                            <option>Phát thanh viên</option>
                            <option>Nghề nghiệp khác</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="isagree" id="isagree" />
                        <label htmlFor="isagree"> Tôi đồng ý Điều kiện - Điều khoản &amp; Chính sách bảo mật của FORMAT</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="isaccept" id="isaccept" />
                        <label htmlFor="isaccept"> Nhận thông tin và khuyến mãi mới nhất từ FORMAT</label>
                    </div>
                    <Button loading={loading} className="full" onClick={onRegister}>đăng ký ngay</Button>
                    <div className="form-tools">
                        <div className="form__login">
                            <p className="form__login-text">Quý khách đã có tài khoản?</p>
                            <Link to={PATH.Login} className="form__login-link">Đăng nhập ngay</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Service />
            <Contact />
        </main>

    )
}
