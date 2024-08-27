'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import FigureImage from "../../components/reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import Pagination from "../reuseable/Pagination";
import CodeHighlight from "../reuseable/CodeHighlight";
import { useTranslation } from "react-i18next";

export default function Customer() {
    const {t} = useTranslation()
    const pathName = usePathname();
    return (
        <>
            {pathName === '/customer/faq' && (<>
                <section id="snippet-1" className="wrapper mb-15">
                    <h2 className="mb-3">{t("faq_1")}</h2>
                    <p>6건</p>
                    <div className="accordion accordion-wrapper">
                        <div className="card accordion-item">
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
                        <div className="card accordion-item">
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
                        <div className="card accordion-item">
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
                        <div className="card accordion-item">
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
                        <div className="card accordion-item">
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
                        <div className="card accordion-item">
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
                <div className="container">
                    <h2 className="display-5 text-center">{t("faq_2")}</h2>
                    <section className="row my-10 justify-content-center">
                        <div className="row col-md-11">
                            <form className="contact-form needs-validation" method="post">
                                <div className="messages"></div>
                                <div className="row gx-4">
                                    <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">1</span> 문의하시는 고객님의 정보를 기입해 주세요. <span className="text-red">*</span></h3>
                                    <div className="col-md-4">
                                        <div className="form-floating mb-4">
                                            <input required type="text" name="name" id="company_name" placeholder={t("faq_3")} className="form-control"/>
                                            <label htmlFor="company_name">{t("faq_3")} *</label>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-floating mb-4">
                                            <input required type="text" name="name" id="customer_name" placeholder={t("faq_4")} className="form-control"/>
                                            <label htmlFor="customer_name">{t("faq_4")} *</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-floating mb-4">
                                            <input required type="text" name="name" id="rank_name" placeholder={t("faq_5")} className="form-control"/>
                                            <label htmlFor="rank_name">{t("faq_5")} *</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-floating mb-4">
                                            <input required type="text" name="name" id="email" placeholder={t("faq_6")} className="form-control"/>
                                            <label htmlFor="rank_name">{t("faq_6")} *</label>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-floating mb-4">
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="form_email"
                                                className="form-control"
                                                placeholder={t("faq_7")}
                                            />
                                            <label htmlFor="form_email">{t("faq_7")} *</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-4 mt-8">
                                    <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">2</span> {t("faq_8")} <span className="text-red">*</span></h3>
                                    <div className="dots-dongpae-form2">
                                        <div><input type="radio" id="questionType01" name="questionType"/><label htmlFor="questionType01" className="form-control text-center p-0">{t("faq_9")}</label></div>
                                        <div><input type="radio" id="questionType02" name="questionType"/><label htmlFor="questionType02" className="form-control text-center p-0">{t("faq_10")}</label></div>
                                        <div><input type="radio" id="questionType03" name="questionType"/><label htmlFor="questionType03" className="form-control text-center p-0">{t("faq_11")}</label></div>
                                        <div><input type="radio" id="questionType04" name="questionType"/><label htmlFor="questionType04" className="form-control text-center p-0">{t("faq_12")}</label></div>
                                        <div><input type="radio" id="questionType05" name="questionType"/><label htmlFor="questionType05" className="form-control text-center p-0">{t("faq_13")}</label></div>
                                    </div>
                                </div>

                                <div className="row gx-4 mt-8">
                                    <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">3</span> {t("faq_14")} <span className="text-red">*</span></h3>
                                    <div className="col-12">
                                        <div className="form-floating mb-4">
                                    <textarea
                                        required
                                        name="message"
                                        id="form_message"
                                        className="form-control"
                                        placeholder="Your message"
                                        style={{height: 300}}
                                    />
                                            <label htmlFor="form_message">Message *</label>
                                            <div className="valid-feedback"> Looks good!</div>
                                            <div className="invalid-feedback"> Please enter your messsage.</div>
                                        </div>
                                    </div>


                                </div>

                                <div className="row gx-4 mt-8">
                                    <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">4</span> {t("faq_15")} <span className="text-red">*</span></h3>
                                    <div className="col-md-4">
                                        <input required type="file" name="name" id="file_upload" className="form-control"/>

                                    </div>
                                </div>

                                <div className="col-12 text-center mt-10">
                                    <div className="form-check">
                                        <div className="d-inline-block m-auto mb-5">
                                            <label className="form-check-label" htmlFor="flexCheck">
                                            {t("faq_16")}
                                            </label>
                                            <input className="form-check-input" type="checkbox" id="flexCheck"/>
                                        </div>
                                    </div>
                                    <input type="submit" value={t("faq_17")} className="btn btn-primary rounded btn-send mb-3"/>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </>)}

            {pathName === '/customer/buy' && (<div className="min-vh-70">
                내용 추가 예정
            </div>)}
        </>
    );
}
