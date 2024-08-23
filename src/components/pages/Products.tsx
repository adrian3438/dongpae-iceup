import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";

export default function Products() {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <aside className="col-xl-2 sidebar doc-sidebar mt-md-0 py-16 d-none d-xl-block">
                            <div className="widget pb-3">
                                <h6 className="widget-title fs-17 mb-2">test</h6>
                                <nav>
                                    <ul className="list-unstyled fs-sm lh-sm text-reset">
                                        <li><a href="#"></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
