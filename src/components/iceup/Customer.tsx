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
                <section id="snippet-1" className="wrapper mb-15">
                    <h2 className="mb-3">{language.faq_1}</h2>
                    <p>6건</p>
                    <div className="accordion accordion-wrapper">
                        <div className="card accordion-item shadow">
                            <div className="card-header" id="faq-1">
                                <button
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-collapse-1"
                                    aria-expanded="false"
                                    aria-controls="faq-collapse-1">
                                    Question1
                                </button>
                            </div>

                            <div id="faq-collapse-1" className="accordion-collapse collapse" aria-labelledby="faq-1">
                                <div className="card-body">
                                    <p>
                                        Answer1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-wrapper">
                        <div className="card accordion-item shadow">
                            <div className="card-header" id="faq-2">
                                <button
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-collapse-2"
                                    aria-expanded="false"
                                    aria-controls="faq-collapse-2">
                                    Question2
                                </button>
                            </div>

                            <div id="faq-collapse-2" className="accordion-collapse collapse" aria-labelledby="faq-2">
                                <div className="card-body">
                                    <p>
                                        Answer2
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-wrapper">
                        <div className="card accordion-item shadow">
                            <div className="card-header" id="faq-3">
                                <button
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-collapse-3"
                                    aria-expanded="false"
                                    aria-controls="faq-collapse-3">
                                    Question3
                                </button>
                            </div>

                            <div id="faq-collapse-3" className="accordion-collapse collapse" aria-labelledby="faq-3">
                                <div className="card-body">
                                    <p>
                                        Answer3
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-wrapper">
                        <div className="card accordion-item shadow">
                            <div className="card-header" id="faq-4">
                                <button
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-collapse-4"
                                    aria-expanded="false"
                                    aria-controls="faq-collapse-4">
                                    Question4
                                </button>
                            </div>

                            <div id="faq-collapse-4" className="accordion-collapse collapse" aria-labelledby="faq-4">
                                <div className="card-body">
                                    <p>
                                        Answer4
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-wrapper">
                        <div className="card accordion-item shadow">
                            <div className="card-header" id="faq-5">
                                <button
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-collapse-5"
                                    aria-expanded="false"
                                    aria-controls="faq-collapse-5">
                                    Question5
                                </button>
                            </div>

                            <div id="faq-collapse-5" className="accordion-collapse collapse" aria-labelledby="faq-5">
                                <div className="card-body">
                                    <p>
                                        Answer5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-wrapper">
                        <div className="card accordion-item shadow">
                            <div className="card-header" id="faq-6">
                                <button
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-collapse-6"
                                    aria-expanded="false"
                                    aria-controls="faq-collapse-6">
                                    Question6
                                </button>
                            </div>

                            <div id="faq-collapse-6" className="accordion-collapse collapse" aria-labelledby="faq-6">
                                <div className="card-body">
                                    <p>
                                        Answer6
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>)}

            {pathName === '/customer/inquiry' && (<>
                <ContactUsForm language={language}/>
            </>)}

            {pathName === '/customer/buy' && (<div className="min-vh-70">
                내용 추가 예정
            </div>)}
        </>
    );
}
