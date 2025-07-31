import { withListLoading } from '@/utils/withListLoading'
import { useContext, useEffect, useState } from 'react'
import { Skeleton } from '../Skeleton'
import { ContextRadio, Radio } from '@/components/Radio'


const AddressCardCheckout = ({ id, name, phone, province, district, ward, address, default: addressDefault}) => {

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    useEffect(() => {
        fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
            .then((res) => res.json())
            .then((data_province) => {
                if (data_province.error === 0) {
                    setProvinces(data_province.data);
                }
            });
        fetch(`https://esgoo.net/api-tinhthanh/2/${province}.htm`)
            .then((res) => res.json())
            .then((data_district) => {
                if (data_district.error === 0) {
                    setDistricts(data_district.data);
                }
            });


        fetch(`https://esgoo.net/api-tinhthanh/3/${district}.htm`)
            .then((res) => res.json())
            .then((data_ward) => {
                if (data_ward.error === 0) {
                    setWards(data_ward.data);
                }
            });

    }, [])
    const { value : valueRadio} = useContext(ContextRadio);
    return (
        <Radio.Toggle value={id} address={(id === valueRadio)}>
            <div className="receive__ddress-item cursor-pointer" >
                <div className="receive__ddress-border">
                    <div className="receive__address-dot">
                        {
                            id == valueRadio && <div className="dot" />
                        }
                        
                    </div>
                    <div className="receive__address-text">
                        <p className="receive__address-main">{name} - {phone} {addressDefault && <span className="address-default">Mặc định</span>} </p>
                        <p className="receive__address-sub">{address},   {wards.find(e => e.id === ward)?.full_name || "Không xác định"},
                            {districts.find(e => e.id === district)?.full_name || "Không xác định"},
                            {provinces.find(e => e.id === province)?.full_name || "Không xác định"}</p>
                    </div>
                </div>
            </div>
        </Radio.Toggle>
        //     <div className="receive__ddress-item">
        //     <div className="receive__ddress-border">
        //         <div className="receive__address-dot">
        //             <input className="dot" type="radio"/>
        //         </div>
        //         <div className="receive__address-text">
        //             <p className="receive__address-main">{name} - {phone} {addressDefault    && <span className="address-default">Mặc định</span>} </p>
        //             <p className="receive__address-sub">{address},   {wards.find(e => e.id === ward)?.full_name || "Không xác định"},
        //                 {districts.find(e => e.id === district)?.full_name || "Không xác định"},
        //                 {provinces.find(e => e.id === province)?.full_name || "Không xác định"}</p>
        //         </div>
        //     </div>
        // </div>
    )
}

const AddressCardCheckoutLoading = () => {
    return (
        <div className="receive__ddress-item" >
            <div className="receive__ddress-border">
                <div className="receive__address-dot">
                    <div className="dot" />
                </div>
                <div className="receive__address-text">
                    <p className="receive__address-main"><Skeleton width={300} height={22} /></p>
                    <p className="receive__address-sub"><Skeleton width={600} height={22} /></p>
                </div>
            </div>
        </div>
    )
}

// export default withLoading(AddressCard, AddressCardLoading)

export const ListAddressCardCheckout = withListLoading(AddressCardCheckout, AddressCardCheckoutLoading);
