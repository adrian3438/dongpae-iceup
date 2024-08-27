import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Guide from "../iceup/Guide";

const guide = [
    { id: 1, title: '설치 가이드', url: '/guide/guide01' },
    { id: 2, title: '유지보수 팁', url: '/guide/guide02' },
    { id: 3, title: '보증 및 서비스 정책', url: '/guide/guide03' },
    { id: 4, title: '안전 지침', url: '/guide/guide04' }
];

export default function GuidePage() {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            {/* ========== main content ========== */}
            <div className="container">
                <div className="row">
                    <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                        <Sidebar title="사용안내" sidebarList={guide}/>
                    </aside>
                    <div className="col-lg-9 mt-8">
                        <Guide/>
                    </div>
                </div>
            </div>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
