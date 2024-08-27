'use client'
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SitemapPage() {
    const {t} = useTranslation()
    return (
        <Fragment>
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            {/* ========== main content ========== */}
            <main className="content-wrapper py-20">
                <div className="container">
                    <div className="row sitemap">
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">{t("header_1")}</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/brand/brand01" className="fs-18">- {t("header_2")}</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">{t("header_3")}</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/product/product01" className="fs-18">- ICEUP</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">{t("header_4")}</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/promotion-center/catalogue" className="fs-18">- {t("header_5")}</Link></li>
                                        <li><Link href="/promotion-center/promotion-videos" className="fs-18">- {t("header_6")}</Link></li>
                                        <li><Link href="/promotion-center/blog" className="fs-18">- {t("header_7")}</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">{t("header_8")}</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/guide/guide01" className="fs-18">- {t("header_9")}</Link></li>
                                        <li><Link href="/guide/guide02" className="fs-18">- {t("header_10")}</Link></li>
                                        <li><Link href="/guide/guide03" className="fs-18">- {t("header_11")}</Link></li>
                                        <li><Link href="/guide/guide04" className="fs-18">- {t("header_12")}</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">{t("header_13")}</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/customer/faq" className="fs-18">- {t("header_14")}</Link></li>
                                        <li><Link href="/customer/inquiry" className="fs-18">- {t("header_15")}</Link></li>
                                        <li><Link href="/customer/buy" className="fs-18">- {t("header_16")}</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
