import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Brands from "../iceup/Brands";
import { useTranslation } from "react-i18next";
import Carousel3 from "../iceup/Carousel3";
import Image from "next/image";
import Link from "next/link";
const brands = [
    { id: 1, title: 'ICEUP', url: '/brand/brand01'}
];
interface Props {
    language : any
}
export default function BrandPage({language} : Props) {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            <section className="wrapper bg-dark">
                <div className="swiper-container swiper-thumbs-container swiper-fullscreen nav-dark">
                    <Carousel3 language={language}/>
                </div>
            </section>

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container pb-20">
                    <div className="row py-8">
                        <p className="fw-bold fs-45 text-center" style={{color: "#4B4B4B"}}>{language.brand_11}</p>
                        <p className="text-center">{language.brand_12}</p>
                    </div>
                    <div className="brand-bg-area01">
                        <p className="fs-150 fw-bold" style={{color: "#4B4B4B"}}>{language.brand_13}</p>
                        <p>{language.brand_14}<br/>
                           {language.brand_15}<br/>
                           {language.brand_16}</p>
                    </div>
                    <div className="brand-bg-area02">
                        <p className="fs-150 fw-bold" style={{color: "#4B4B4B"}}>{language.brand_17}</p>
                        <p>{language.brand_18}<br/>
                           {language.brand_19}</p>
                    </div>
                    <div className="row pt-10">
                        <p className="fw-bold fs-45" style={{color: "#4B4B4B"}}>{language.brand_20}</p>
                        <p>{language.brand_21}</p>
                    </div>

                    <div className="row pt-17 pb-10">
                        <p className="fw-bold fs-45 text-center" style={{color: "#4B4B4B"}}>{language.brand_22}</p>
                        <p className="text-center">{language.brand_23}</p>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-6">
                            <p className="mb-1"><Image src="/img/iceup/brand-01.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                            <p className="mb-1"><Image src="/img/iceup/brand-02.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                            <p className="mb-1"><Image src="/img/iceup/brand-03.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                            <p className="mb-1"><Image src="/img/iceup/brand-04.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                            <p className="mb-0"><Image src="/img/iceup/brand-05.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-14">
                                <h4 className="mb-9">{language.brand_24}</h4>
                                <p>{language.brand_25}<br/>
                                {language.brand_25_01}
                                </p>
                                <p>{language.brand_26}<br/>
                                    {language.brand_27}</p>
                            </div>
                            <div className="mb-14">
                                <h4 className="mb-9">{language.brand_28}</h4>
                                <p>{language.brand_29}<br/>
                                {language.brand_30}
                                </p>
                                <p><span className="fw-bold">{language.brand_31}</span><br/>
                                {language.brand_32}</p>
                                <p><span className="fw-bold">{language.brand_33}</span><br/>
                                {language.brand_34}</p>
                                <p><span className="fw-bold">{language.brand_35}</span><br/>
                                {language.brand_36}</p>
                            </div>
                            <div className="mb-14">
                                <h4 className="mb-9">{language.brand_37}</h4>
                                <p>{language.brand_38}
                                </p>
                                <p>{language.brand_39}</p>
                            </div>
                            <div className="mb-6">
                                <h4 className="mb-9">{language.brand_40}</h4>
                                <p>{language.brand_41}<br/>
                                {language.brand_42}
                                </p>
                                <p>{language.brand_43}<br/>
                                {language.brand_44}</p>
                            </div>
                            <div className="go-link mt-0">
                                <Link href="/promotion-center/promotion-videos" className="shadow d-inline-block me-7">{language.brand_45} <Image src="/img/iceup/arrow.png" alt="" width={44} height={19}/></Link>
                                <Link href="/customer/inquiry" className="shadow d-inline-block">{language.brand_46} <Image src="/img/iceup/arrow.png" alt="" width={44} height={19}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer language={language}/>
        </Fragment>
    );
}
