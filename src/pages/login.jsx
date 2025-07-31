import { Button } from '@/components/Button'
import { Contact } from '@/components/Contact'
import { Field } from '@/components/Field'
import { Service } from '@/components/Service'
import { PATH } from '@/config'
import { useAuth } from '@/hooks/useAuth'
import { useForm } from '@/hooks/useForm'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { loginAction } from '@/stories/auth'
import { handleError, regex, required } from '@/utils'
import { coppyToClipboard } from '@/utils/copyToClipBoard'
import { message } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    useScrollToTop()
    const dispatch = useDispatch()
    const { loginLoading } = useAuth()

    const form = useForm({
        email: [
            required(),
            regex('email')
        ],
        password: [
            required(),
        ]
    })
    const onLogin = async () => {
        if (form.validate()) {
            try {
                dispatch(loginAction(form.values));
                message.success('Đăng nhập thành công');
            } catch (error) {
                handleError(error);
            }
        }
    }

    const _coppyToClipboard = (data) => {
        coppyToClipboard(data)
    }
    return (
        <main className="mainwrapper loginpage">
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <section className="containt__login">
                <h2 className="title">đăng nhập</h2>
                <p className="login__des">Vui lòng nhập thông tin và tận hưởng trải nghiệm cá nhân hóa cùng Format</p>
                <div className="account__form">
                    <Field label="Email"
                        type="text" name="email"
                        className="form-group"
                        placeholder="Nhập email hoặc số điện thoại của Quý khách"
                        {...form.register('email')}
                    />
                    <Field label="Mật khẩu *"
                        type="password" name="password"
                        className="form-group"
                        {...form.register('password')}
                    />
                    <Field label=" Nhớ thông tin đăng nhập của tôi"
                        type="checkbox" name="isRemember"
                        className="form-check"
                        {...form.register('isRemember')}
                    />
                    <div className="form-tools">
                        <div className="form__register">
                            <p className="form__register-text">Quý khách chưa có tài khoản?</p>
                            <Link to={PATH.Register} className="form__register-link">Đăng ký</Link>
                        </div>
                        <div className="form__forgot">
                            <a href="./forgot-password.html" className="form__forgot-link">Quên mật khẩu</a>
                        </div>
                    </div>
                    <p className="login__des">Tài khoản demo: <span onClick={(ev) => _coppyToClipboard(ev.target.innerText)}>demo@gmail.com</span>/<span onClick={(ev) => _coppyToClipboard(ev.target.innerText)}>demo123456</span></p>
                    <Button className="full" onClick={onLogin} loading={loginLoading}>đăng nhập</Button>
                </div>
            </section>
            <Service />
            <Contact />
        </main>

    )
}
