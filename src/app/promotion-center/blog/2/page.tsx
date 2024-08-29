'use client'
import {Fragment} from "react";
import Navbar from "../../../../components/iceup/Navbar";
import Sidebar from "../../../../components/iceup/Sidebar";
import Footer from "../../../../components/iceup/Footer";
import { useTranslation } from "react-i18next";

export default function BlogDetail2() {
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
                                    <h2 className="text-black fw-600">Cuckoo Homesys gains attention with ice water purifiers</h2>
                                    <p className="fs-16 fw-500">2024-08-19</p>
                                    <hr className="mt-5 mb-8"/>
                                    <article className="mb-8">
                                    South Korea’s Cuckoo Homesys Co. is seeing significant growth, driven by the rising popularity of ice water purifiers.
<br/>
<br/>
According to the company on Wednesday, sales of its Zero 100 Slim Ice Water Purifier, launched in April, surged by 524 percent in May compared to the previous month.
<br/>
<br/>

This spike in sales is attributed to the home café trend amid extreme heat and high inflation. The product continued its upward trend in June, with sales increasing by more than 50 percent compared to May.
<br/>
<br/>

By June 2024, the cumulative sales of the ice water purifier line, which includes the Zero 100 Slim Ice Water Purifier and features a 100-degree boiling water function, surpassed 700,000 units.
<br/>
<br/>

The Zero 100 Slim Ice Water Purifier is a culmination of six years of Cuckoo Homesys’s technological advancements.
<br/>
<br/>

It boasts self-management features, a 100-degree boiling water function, and a barista module, all packed into the slimmest design in the industry. The product has been praised for maximizing consumer convenience by offering diverse functionalities in a single unit.
<br/>
<br/>

The integration of Cuckoo Homesys’s over 40 years of expertise in selling home appliances into the rental market has also played a significant role in this success.
                                    
                                    source : https://pulse.mk.co.kr/m/news/english/11088061
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
