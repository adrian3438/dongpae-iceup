'use client'

import {usePathname} from "next/navigation";
import { useTranslation } from "react-i18next";
interface Props {
    language : any
}
export default function Product({language} : Props) {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/product/product01' && (<div className="mb-15">
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-01.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">{language.product_1}</h2>
                        <p className="lead fs-lg pe-lg-5">{language.product_2}</p>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-03.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">{language.product_3}</h2>
                        <p className="lead fs-lg pe-lg-5">{language.product_4}</p>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-04.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">{language.product_5}</h2>
                        <p className="lead fs-lg pe-lg-5">{language.product_6}</p>
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-05.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">{language.product_7}</h2>
                        <p className="lead fs-lg pe-lg-5">{language.product_8}</p>
                    </div>
                </div>
                <div className="row mb-12">
                    <p><strong>{language.product_9}</strong>: {language.product_10}</p>
                    <p><strong>{language.product_11}</strong>: {language.product_12}</p>
                    <p><strong>{language.product_13}</strong>: {language.product_14}</p>
                    <p><strong>{language.product_15}</strong>: {language.product_16}</p>
                    <p><strong>{language.product_17}</strong>: {language.product_18}</p>
                    <p><strong>{language.product_19}</strong>: {language.product_20}</p>
                </div>
                <div className="row">
                    <h3>{language.product_21}</h3>
                    <p>{language.product_22}<br/>{language.product_23}</p>
                    <p>{language.product_24}</p>
                    <p>{language.product_25}
                    {language.product_26}
                    {language.product_27}</p>
                    <p></p>
                </div>
            </div>)}
        </>
    );
}
