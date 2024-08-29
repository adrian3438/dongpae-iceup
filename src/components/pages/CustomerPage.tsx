'use client'
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Customer from "../iceup/Customer";
import { useTranslation } from "react-i18next";


export default function CustomerPage() {
    const {t} = useTranslation()
    const customer = [
        { id: 1, title: t("header_14"), url: '/customer/faq' },
        { id: 2, title: t("header_15"), url: '/customer/inquiry' },
        { id: 3, title: t("header_16"), url: '/customer/buy' }
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
                            <Sidebar title={t("header_13")} sidebarList={customer}/>
                        </aside>
                        <div className="col-lg-9 mt-8">
                            <Customer/>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
