'use client'
import {Fragment} from "react";
import Navbar from "../../../../components/iceup/Navbar";
import Sidebar from "../../../../components/iceup/Sidebar";
import Footer from "../../../../components/iceup/Footer";
import { useTranslation } from "react-i18next";

export default function BlogDetail3() {
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
                                    <h2 className="text-black fw-600">Is filtered water healthier than tap water?</h2>
                                    <p className="fs-16 fw-500">2024-08-09</p>
                                    <hr className="mt-5 mb-8"/>
                                    <article className="mb-8">
                                    Table-top filters can remove contaminants from tap water – but are they really necessary, and could they cause unintentional harm?

If she can help it, Shima Chin-See avoids drinking water straight from the tap. Her refrigerator at home in Northwich, UK, where she lives with her young family, comes with an in-door water dispenser that's linked to a filter. And when she's out and about, she keeps her trusty self-cleaning bottle handy – one that sterilises water via an ultraviolet chip embedded in its cap.
"Filtered water just tastes better," says Chin-See. "I can smell the chemicals in tap water and taste them too."
Some people find her odd for saying that – including her husband who once performed a blind taste test on her (it turns out she could tell the difference between filtered and unfiltered tap water). But as it turns out, Chin-See is far from alone in her thinking. When the non-profit Environmental Working Group polled 2,800 people living across the US, half said their tap water was unsafe to drink, with nearly 35% filtering their water.
Similarly, according to a 2023 survey of more than 500 people in the UK by the Swedish filter company Tappwater, 42% "don't trust or like the taste of tap water". A quarter of respondents believed their tap water wasn't clean, with contaminants, chemicals, and bacteria their top concerns. As a result, more than half of Londoners (54%) said they use a water filter.
source : https://www.bbc.com/future/article/20240417-is-filtered-water-healthier-than-tap-water
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
