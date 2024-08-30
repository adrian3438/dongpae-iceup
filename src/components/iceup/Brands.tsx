'use client'

import {usePathname} from "next/navigation";
import { useTranslation } from "react-i18next";
interface Props {
    language : any
}
export default function Brands({language} : Props) {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/brand/brand01' && (<>
                <div className="row align-items-center mb-12">
                    <div className="col-md-7">
                        <h2>{language.brand_1}</h2>
                        <p>{language.brand_2}</p>
                        <p>{language.brand_3}</p>
                        <p>{language.brand_4}</p>
                        <p>{language.brand_5}</p>
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
                        <h2>{language.brand_6}</h2>
                        <p>{language.brand_7}</p>
                        <p>{language.brand_8}</p>
                        <p>{language.brand_9}</p>
                        <p>{language.brand_10}</p>
                    </div>

                </div>
            </>)}
        </>
    );
}
