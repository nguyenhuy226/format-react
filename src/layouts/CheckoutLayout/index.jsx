import { Header } from '@/components/Header'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { Outlet } from 'react-router-dom'

export const CheckoutLayout = () => {
    useScrollToTop()
    return (
        <>
            <div className="header__payment">
                <Header />
            </div>
            <Outlet />
            <div className="shipping-footer">
                <footer>
                    <div className="container-fluid">
                        <div className="footer-bottom">@ Bản quyền thuộc về FORMAT</div>
                    </div>
                </footer>
            </div>

        </>
    )
}
