import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "../../components/iceup/Navbar";
import { Blog5 } from "../../components/blocks/blog";
import { About24 } from "../../components/blocks/about";
import Footer from "../iceup/Footer";
import { Banner5 } from "../../components/blocks/banner";
import { Services26 } from "../../components/blocks/services";
import { CTA9 } from "../../components/blocks/call-to-action";
import { Portfolio4 } from "../../components/blocks/portfolio";
import { Testimonial18 } from "../../components/blocks/testimonial";
import MainBanner from "../iceup/MainBanner";
import NextLink from "../reuseable/links/NextLink";

export default function Main() {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <header className="wrapper bg-soft-primary">
                <Navbar
                    logoAlt="logo-light"
                    navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-dark"
                />
            </header>

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                {/* ========== hero section ========== */}
                <MainBanner />

                {/* ========== service section ========== */}
                <Services26 />

                {/* ========== testimonial section ========== */}
                <Testimonial18 />

                {/* ========== banner section ========== */}
                <Banner5 />

                {/* ========== portfolio section ========== */}
                <Portfolio4 />

                {/* ========== call to action section ========== */}
                <CTA9 />

                {/* ========== about us section ========== */}
                <About24 />

                {/* ========== blog section ========== */}
                <Blog5 />
            </main>

            {/* ========== footer section ========== */}
            <Footer />
        </Fragment>
    );
}