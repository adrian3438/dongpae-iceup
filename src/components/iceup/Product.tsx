'use client'

import {usePathname} from "next/navigation";
import { useTranslation } from "react-i18next";
export default function Product() {
    const pathName = usePathname();
    const {t} = useTranslation()
    return (
        <>
            {pathName === '/product/product01' && (<div className="mb-15">
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-01.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">{t("product_1")}</h2>
                        <p className="lead fs-lg pe-lg-5">{t("product_2")}</p>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-03.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">{t("product_3")}</h2>
                        <p className="lead fs-lg pe-lg-5">{t("product_4")}</p>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-04.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">{t("product_5")}</h2>
                        <p className="lead fs-lg pe-lg-5">{t("product_6")}</p>
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-05.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">{t("product_7")}</h2>
                        <p className="lead fs-lg pe-lg-5">{t("product_8")}</p>
                    </div>
                </div>
                <div className="row mb-12">
                    <p><strong>{t("product_9")}</strong>: {t("product_10")}</p>
                    <p><strong>{t("product_11")}</strong>: {t("product_12")}</p>
                    <p><strong>{t("product_13")}</strong>: {t("product_14")}</p>
                    <p><strong>{t("product_15")}</strong>: {t("product_16")}</p>
                    <p><strong>{t("product_17")}</strong>: {t("product_18")}</p>
                    <p><strong>{t("product_19")}</strong>: {t("product_20")}</p>
                </div>
                <div className="row">
                    <h3>{t("product_21")}</h3>
                    <p>{t("product_22")}<br/>{t("product_23")}</p>
                    <p>{t("product_24")}</p>
                    <p>{t("product_25")}
                    {t("product_26")}
                    {t("product_27")}</p>
                    <p></p>
                </div>
            </div>)}
        </>
    );
}
