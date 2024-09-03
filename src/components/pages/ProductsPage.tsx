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
interface Props {
    language : any
}
export default function ProductsPage({language} : Props) {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/iceup/main-banner.png)"}}>
                <div className="container text-center min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="mx-auto">
                            <h1 className="display-1 text-white mb-3">Product Introduction</h1>
                            <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                                맑고 깨끗한 얼음, 순수함을 담아내는 제빙기
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== main content ========== */}
            <div className="container">
                <div className="row">
                    <aside className="col-lg-2 sidebar mt-8 mt-lg-6">
                        <Sidebar title={language.header_3} sidebarList={ProductList}/>
                    </aside>
                    <div className="col-lg-10 mt-16">
                        <Product language={language}/>
                    </div>
                </div>
            </div>

            {/* ========== footer section ========== */}
            <Footer language={language}/>
        </Fragment>
    );
}
