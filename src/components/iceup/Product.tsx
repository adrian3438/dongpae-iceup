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
            {pathName === '/product/product01' && (
                <div className="mb-15">
                    <div>
                        <img src="/img/iceup/product-1-1.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="position-relative">
                        <img src="/img/iceup/product-1-2.png" alt="ICEUP" className="w-100"/>
                        <div className="position-absolute end-0 top-50 pe-15">
                            <h2 className="fs-20">{language.product_5}</h2>
                            <p className="fs-20">{language.product_6}<br/>{language.product_6_2}<br/>{language.product_6_3}</p>
                        </div>
                    </div>
                    <div className="position-relative">
                        <img src="/img/iceup/product-1-3.png" alt="ICEUP" className="w-100"/>
                        <div className="position-absolute end-0 top-50 pe-10">
                            <h2 className="fs-20">{language.product_7}</h2>
                            <p className="fs-20">{language.product_8}<br/>{language.product_8_2}<br/>{language.product_8_3}</p>
                        </div>
                    </div>
                    <div>
                        <img src="/img/iceup/product-1-4.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div>
                        <img src="/img/iceup/product-1-5.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="position-relative">
                        <img src="/img/iceup/product-1-6.png" alt="ICEUP" className="w-100"/>
                        <div className="position-absolute end-0 top-50 pe-20">
                            <h2 className="fs-20">{language.product_11}</h2>
                            <p className="fs-20">{language.product_12}<br/>{language.product_12_2}</p>
                        </div>
                    </div>
                    <div>
                        <img src="/img/iceup/product-1-7.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div>
                        <img src="/img/iceup/product-1-8.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="container">
                        <div className="row mt-12 mb-12">
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
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}
