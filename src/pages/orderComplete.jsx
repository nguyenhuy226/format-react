import { Button } from '@/components/Button'
import { Contact } from '@/components/Contact'
import { Service } from '@/components/Service'
import { PATH } from '@/config'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const OrderComplete = () => {
    const {state} =useLocation()
    const navigate= useNavigate()
    useEffect(()=>{
        if(!state?.order_code) {
            navigate(PATH.Product)
        }
    },[state])
    return (
        <main className="mainwrapper completepage">
            <section className="complete">
                <div className="container">
                    <div className="complete__wrapt">
                        <div className="complete__img">
                            <img className="complete__img-main" src="./images/local_mall_75dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.png" alt="complete" />
                            <img className="complete__img-tick" src="./images/check_circle_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" alt="tick" />
                        </div>
                        <p className="complete__title">đặt hàng thành công</p>
                        <p className="complete__thas">Cảm ơn Quý khách đã lựa chọn FORMAT</p>
                        <p className="complete__des">Đơn hàng {state?.order_code} của Quý khách sẽ được xử lý và vận chuyển trong thời
                            gian sớm nhất</p>
                        <Link to={PATH.Product}>
                        <Button>tiếp tục mua sắm</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <Service />
            <Contact />
        </main>

    )
}
