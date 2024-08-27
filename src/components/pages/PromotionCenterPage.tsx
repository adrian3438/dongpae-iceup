'use client'
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import PromotionCenter from "../iceup/PromotionCenter";
import { useTranslation } from "react-i18next";
const promotions = [
    { id: 1, title: '카탈로그', url: '/promotion-center/catalogue'},
    { id: 2, title: '영상', url: '/promotion-center/promotion-videos'},
    { id: 3, title: '블로그', url: '/promotion-center/blog'},
];

export default function PromotionCenterPage() {
    const {t} = useTranslation()
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
                            <PromotionCenter />
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
