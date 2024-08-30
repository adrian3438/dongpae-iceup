import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Brands from "../iceup/Brands";
import { useTranslation } from "react-i18next";
const brands = [
    { id: 1, title: 'ICEUP', url: '/brand/brand01'}
];
interface Props {
    language : any
}
export default function BrandPage({language} : Props) {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                            <Sidebar title={language.header_1} sidebarList={brands} />
                        </aside>
                        <div className="col-lg-9 mt-8">
                            <Brands language={language}/>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer language={language}/>
        </Fragment>
    );
}
