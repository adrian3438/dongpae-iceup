'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import FigureImage from "../../components/reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import Pagination from "../reuseable/Pagination";
import CodeHighlight from "../reuseable/CodeHighlight";
import { useTranslation } from "react-i18next";
import ContactUsForm from "./ContactusForm";
interface Props {
    language : any
}
export default function Customer({language} : Props) {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/customer/faq' && (<>
                <section className="wrapper mb-15">
                    <h2 className="mb-3">{language.faq_1}</h2>
                    <div className="mb-10">
                        <h4>{language.faq_18}</h4>
                        <p>{language.faq_19}</p>
                        <p>{language.faq_20}</p>
                        <p>{language.faq_21}</p>
                    </div>
                    <div className="mb-10">
                        <h4>{language.faq_22}</h4>
                        <p>{language.faq_23}</p>
                        <p>{language.faq_24}</p>
                    </div>
                    <div className="mb-10">
                        <h4>{language.faq_25}</h4>
                        <p>{language.faq_26}</p>
                        <p>{language.faq_27}</p>
                    </div>
                    <div className="mb-10">
                        <h4>{language.faq_28}</h4>
                        <p>{language.faq_29}</p>
                        <p>{language.faq_30}</p>
                    </div>
                    <div className="mb-10">
                        <h4>{language.faq_31}</h4>
                        <p>{language.faq_32}</p>
                    </div>
                    <div className="mb-10">
                        <h4>{language.faq_33}</h4>
                        <p>{language.faq_34}</p>
                        <p>{language.faq_35}</p>
                        <p>{language.faq_36}</p>
                        <p>{language.faq_37}</p>
                        <p>{language.faq_38}</p>
                    </div>
                </section>
            </>)}

            {pathName === '/customer/inquiry' && (<>
                <ContactUsForm language={language}/>
            </>)}

            {pathName === '/customer/buy' && (<div className="min-vh-70">
                <section className="wrapper mb-15">
                    <h2 className="mb-3">{language.faq_39}</h2>
                    <div className="mb-10">
                        <h4>{language.faq_40}</h4>
                        <p>{language.faq_41}</p>
                        <p>{language.faq_42}</p>
                        <p>{language.faq_43}</p>
                        <p>{language.faq_44}</p>
                        <p>{language.faq_45}</p>
                        <p>{language.faq_46}</p>
                    </div>
                </section>
            </div>)}
        </>
    );
}
