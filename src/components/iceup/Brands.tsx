'use client'

import {usePathname} from "next/navigation";
import { useTranslation } from "react-i18next";
export default function Brands() {
    const pathName = usePathname();
    const {t} = useTranslation()
    return (
        <>
            {pathName === '/brand/brand01' && (<>
                <div className="row align-items-center mb-12">
                    <div className="col-md-7">
                        <h2>{t("brand_1")}</h2>
                        <p>{t("brand_2")}</p>
                        <p>{t("brand_3")}</p>
                        <p>{t("brand_4")}</p>
                        <p>{t("brand_5")}</p>
                    </div>
                    <div className="col-md-5">
                        <img src="/img/iceup/brand-01-01.gif" alt="" className="w-100"/>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/brand-01-02.gif" alt="" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2>{t("brand_6")}</h2>
                        <p>{t("brand_7")}</p>
                        <p>{t("brand_8")}</p>
                        <p>{t("brand_9")}</p>
                        <p>{t("brand_10")}</p>
                    </div>

                </div>
            </>)}
        </>
    );
}
