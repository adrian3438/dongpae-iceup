import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Guide from "../iceup/Guide";
import { useTranslation } from "react-i18next";
interface Props {
    language : any
}

export default function GuidePage({language} : Props) {
    const guide = [
        { id: 1, title: language.header_9, url: '/guide/guide01' },
        { id: 2, title: language.header_10, url: '/guide/guide02' },
        { id: 3, title: language.header_11, url: '/guide/guide03' },
        { id: 4, title: language.header_12, url: '/guide/guide04' }
    ];
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            {/* ========== main content ========== */}
            <div className="container">
                <div className="row">
                    <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                        <Sidebar title={language.header_8} sidebarList={guide}/>
                    </aside>
                    <div className="col-lg-9 mt-8">
                        <Guide language={language}/>
                    </div>
                </div>
            </div>

            {/* ========== footer section ========== */}
            <Footer language={language}/>
        </Fragment>
    );
}
