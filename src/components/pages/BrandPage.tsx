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
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/iceup/ice-maker-1.jpg)"}}>
                <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
                    <div className="row">
                        <div className="mx-auto">
                            <h1 className="display-1 text-white mb-3">Brand Introduction</h1>
                            <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                                iceup 제빙기
                            </p>
                            <p className="lead fs-lg">
                                동패 인터내셔널은 세상에 없었던 맑고 깨끗한 어름을 만들어 갑니다.<br/>
                                눈에 보이지 않는 세균과 곰팡이까지 생각하는 신념으로 세상에서 가장 깨끗한 얼음을 만드려고<br/>
                                10년간의 연구 결과를 만들게 되었습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-2 sidebar mt-8 mt-lg-6">
                            <Sidebar title={language.header_1} sidebarList={brands}/>
                        </aside>
                        <div className="col-lg-10 mt-13">
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
