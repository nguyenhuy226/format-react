import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Homelayout = () => {
    useScrollToTop()
    return (
        <>
            <div className="header-home">
                <Header />
            </div>
            <Outlet />
            <Footer />
        </>
    )
}
