'use client'
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Product from "../iceup/Product";
import { useTranslation } from "react-i18next";


const ProductList = [
    { id: 1, title: 'ICEUP', url: '/product/product01' },
];

export default function ProductsPage() {
    const {t} = useTranslation()
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            {/* ========== main content ========== */}
            <div className="container">
                <div className="row">
                    <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                        <Sidebar title={t("header_3")} sidebarList={ProductList}/>
                    </aside>
                    <div className="col-lg-9 mt-8">
                        <Product/>
                    </div>
                </div>
            </div>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
