import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Customer from "../iceup/Customer";

const customer = [
    { id: 1, title: '자주 찾는 질문', url: '/customer/faq' },
    { id: 2, title: '문의하기', url: '/customer/inquiry' },
    { id: 3, title: '구매방법', url: '/customer/buy' }
];

export default function CustomerPage() {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                            <Sidebar title="브랜드 소개" sidebarList={customer}/>
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
