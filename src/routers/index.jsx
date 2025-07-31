import PrivateRouter from "@/components/PrivateRouter";
import { PATH } from "@/config";
import { Homelayout } from "@/layouts/HomeLayout";
import { Mainlayout } from "@/layouts/Mainlayout";
import { HomePage } from "@/pages";
import { Page404 } from "@/pages/404";
import { ProductDetailPage } from "@/pages/[slug]";
import { ProductPage } from "@/pages/product";
import { privated } from "./privated";
import GuestRouter from "@/components/GuestRouter";
import { LoginPage } from "@/pages/login";
import React from "react";
import { RegisterPage } from "@/pages/register";
import { CollectionPage } from "@/pages/collection";
import { CollectionDetailPage } from "@/pages/collection-detail";
import { StotePage } from "@/pages/store";
import { CartPage } from "@/pages/cart";
import { CheckoutLayout } from "@/layouts/CheckoutLayout";
import { CheckoutPage } from "@/pages/checkout";
import { Paymentpage } from "@/pages/payment";
import { OrderComplete } from "@/pages/orderComplete";


export const routes = [
    {
        element: <Homelayout />,
        children: [
            {
                element: <HomePage />,
                path: PATH.Home,
            },
        ]
    },
    {
        element: <CheckoutLayout />,
        children: [
            {
                element: <CheckoutPage />,
                path: PATH.Checkout,
            },
            {
                element: <Paymentpage />,
                path: PATH.Payment,
            },
        ]
    },
    {
        element: <Mainlayout />,
        children: [
            {
                element: <ProductPage />,
                path: PATH.Product,
            },
            {
                element: <OrderComplete />,
                path: PATH.OrderComplete,
            },
            {
                element: <CollectionPage />,
                path: PATH.Collection,
            },
            {
                element:<CollectionDetailPage />,
                path: PATH.CollectionDetail,
            },
            {
                element:<StotePage/>,
                path: PATH.Store,
            },
            {
                element: <ProductDetailPage />,
                path: PATH.ProductDetail,
            },
            {
                element: <CartPage />,
                path: PATH.Cart,
            },
            {
                element: <PrivateRouter redirect={PATH.Account} />,
                children: privated,
            },
            {
                element: <GuestRouter redirect={PATH.Profile.Index} />,
                children: [
                    {
                        element: <LoginPage />,
                        path: PATH.Login,
                    },
                    {
                        element: <RegisterPage/>,
                        path: PATH.Register
                    }

                ]
            },
            {
                element: <Page404 />,
                path: "*",
            }

        ]
    }
]
