import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import PromotionCenter from "../iceup/PromotionCenter";

const brands = [
    { id: 1, title: 'ICEUP제빙기', url: '#' }
];

export default function ProductsPage() {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                            <Sidebar title="브랜드 소개" sidebarList={brands} />
                        </aside>
                        <div className="col-lg-8 mt-8">
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
