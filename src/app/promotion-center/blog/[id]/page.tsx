'use client'
import {Fragment} from "react";
import Navbar from "../../../../components/iceup/Navbar";
import Sidebar from "../../../../components/iceup/Sidebar";
import Footer from "../../../../components/iceup/Footer";
import { useTranslation } from "react-i18next";

export default function BlogDetail1() {
    const {t} = useTranslation()
    const promotions = [
        { id: 1, title: t("header_5"), url: '/promotion-center/catalogue'},
        { id: 2, title: t("header_6"), url: '/promotion-center/promotion-videos'},
        { id: 3, title: t("header_7"), url: '/promotion-center/blog'},
    ];
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                            <Sidebar title={t("header_4")} sidebarList={promotions} />
                        </aside>
                        <div className="col-lg-9 mt-8">
                            <section className="row my-10 justify-content-center">
                                <div className="col-md-12">
                                    <p className="fs-18 fw-600">{t("header_7")}</p>
                                    <h2 className="text-black fw-600">Best Pureit water purifier</h2>
                                    <p className="fs-16 fw-500">2024-08-09</p>
                                    <hr className="mt-5 mb-8"/>
                                    <article className="mb-8">
                                    A water purifier ensures safe drinking water by removing contaminants. So, check out this list of the best Pureit water purifiers.
                                    <br/>
                                    <br/>
                                    When it comes to ensuring the safety and health of your family, it is crucial to keep a check on their water intake as contaminated water may lead to water-borne infections. So, investing in reliable and the best water purifier brands like Pureit may be a good choice. With its advanced purification technology, Pureit water purifiers promise to provide clean and safe drinking water. This water purifier is designed to meet different needs and water supply, including municipal water, borewells and tap water. The best Pureit RO water purifier claims to remove harmful bacteria, viruses and other contaminants from the water while retaining essential minerals for health benefits. So, if you are planning to include the best water purifier for your home in your kitchen, check out this list of the best Pureit water purifiers in India.
                                    <br/>
                                    <br/>
                                    source : https://www.healthshots.com/recommends/best-pureit-water-purifier/
                                    </article>
                                    {/* <div className="mt-4 border-bottom">
                                        <div className="py-4 px-5 border-top">
                                            <i className="uil uil-angle-up fs-22 me-4"></i>
                                            <span className="text-black fw-bold me-4">이전글</span>
                                            <a href="#" className="text-medium-gray fw-bold">이전글 타이틀 입니다.</a>
                                        </div>
                                        <div className="py-4 px-5 border-top">
                                            <i className="uil uil-angle-down fs-22 me-4"></i>
                                            <span className="text-black fw-bold me-4">다음글</span>
                                            <a href="#" className="text-medium-gray fw-bold">다음글 타이틀 입니다.</a>
                                        </div>
                                    </div> */}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
