import { PATH } from "@/config";
import { ProfileLayout } from "@/layouts/ProfileLayout";
import { Profile } from "@/pages/privated";
import { AddressAdd } from "@/pages/privated/addressAdd";
import { AddressEdit } from "@/pages/privated/addressEdit";
import { AddressList } from "@/pages/privated/addressList";
import { Comment } from "@/pages/privated/comment";
import { Info } from "@/pages/privated/info";
import { MyOffer } from "@/pages/privated/myOffer";
import { NewsLetter } from "@/pages/privated/newsletter";
import { Order } from "@/pages/privated/order";
import { Watched } from "@/pages/privated/watched";
import { Wishlist } from "@/pages/privated/wishlist";


export const privated  = [
    {
        element : <ProfileLayout/>,
        children: [
            {        
                element:<Profile/>,
                path:PATH.Profile.Index
            }, 
            {
                element: <AddressAdd/>,
                path: PATH.Profile.AddressAdd
            },
            {
                element: <AddressEdit/>,
                path: PATH.Profile.AddressEdit
            },
            {
                element: <AddressList/>,
                path: PATH.Profile.AddressList
            },
            {
                element: <Comment/>,
                path: PATH.Profile.Comment
            },
            {
                element: <Info/>,
                path: PATH.Profile.Info
            },
            {
                element: <MyOffer/>,
                path: PATH.Profile.Offer
            },
            {
                element: <NewsLetter/>,
                path: PATH.Profile.NewsLetter
            },
            {
                element: <Order/>,
                path: PATH.Profile.Order
            },
            {
                element: <Watched/>,
                path: PATH.Profile.Watched
            },
            {
                element: <Wishlist/>,
                path: PATH.Profile.Wishlist
            },
        ]
    }
]