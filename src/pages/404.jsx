import { Button } from '@/components/Button'
import { PATH } from '@/config'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Service } from '@/components/Service';
import { Contact } from '@/components/Contact';

export const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(PATH.Home);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  return (
    <main className="mainwrapper page404">
      <section className="page404_main">
        <div className="page404_main-wrap">
          <img className="page404-img" src="/images/404-page_1.png" alt />
          <p className="page404_main-title">404</p>
          <p className="page404_main-des">Xin lỗi! Không thể tìm thấy trang này.</p>
          <p className="page404_main-des">Quý khách sẽ được tự động chuyển hướng về trang chủ sau 5 giây.</p>
          <Link to={PATH.Home}>
            <Button>trở lại trang chủ <img className="icon-btn-404" src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" /></Button>
          </Link>
        </div>
      </section>
      <Service />
      <Contact />
    </main>
  )
}
