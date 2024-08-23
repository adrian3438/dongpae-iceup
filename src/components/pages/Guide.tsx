import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";

export default function Guide() {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="pt-10">test</div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
