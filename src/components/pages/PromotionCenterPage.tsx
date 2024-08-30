'use client'
import { Fragment, useEffect } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import PromotionCenter from "../iceup/PromotionCenter";
import { useTranslation } from "react-i18next";
import api from "lib/api";

export default function PromotionCenterPage() {
    const {t} = useTranslation()
    const promotions = [
        { id: 1, title: t("header_5"), url: '/promotion-center/catalogue'},
        { id: 2, title: t("header_6"), url: '/promotion-center/promotion-videos'},
        { id: 3, title: t("header_7"), url: '/promotion-center/blog'},
    ];
    async function getList () {
        const response = await api.get(`/user/promotion/getContentsList.php?contentType=${1}&userLang=${'KR'}`)
    }
    useEffect(()=>{
        getList()
    }, [])
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
