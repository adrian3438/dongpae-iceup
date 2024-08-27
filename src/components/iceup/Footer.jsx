// GLOBAL CUSTOM COMPONENTS
'use client'
import NextLink from "components/reuseable/links/NextLink";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const {t} = useTranslation()
    return (
        <footer className="bg-dark text-inverse">
            <div className="container pt-8">
                <div className="row">
                    <div className="row justify-content-between align-content-center">
                        <div className="col-md-auto">
                            <div className="row mt-2">
                                <div className="col-md-auto lh-1">
                                    <NextLink title={t("footer_1")} href="#"/>
                                </div>
                                <div className="col-md-auto border-start lh-1">
                                    <NextLink title={t("footer_2")} href="#"/>
                                </div>
                                <div className="col-md-auto border-start lh-1">
                                    <NextLink title={t("footer_3")} href="#"/>
                                </div>
                                <div className="col-md-auto border-start lh-1">
                                    <NextLink title={t("footer_4")} href="#"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <nav className="nav social social-white">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <i className="uil uil-facebook-f"/>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer">
                                    <i className="uil uil-instagram"/>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer">
                                    <i className="uil uil-twitter"/>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-8 mb-0"/>
            <div className="container py-10 py-md-10">
                <div className="row gy-6 gy-lg-0">

                    <div className="col-lg-4">
                        <div className="widget">
                            <p className="text-white fw-bold fs-30">ICEUP</p>

                            <p className="mb-4">
                            {t("footer_5")} <br className="d-none d-lg-block"/>
                            {t("footer_6")}<br className="d-none d-lg-block"/>
                            {t("footer_7")}<br className="d-none d-lg-block"/>
                            {t("footer_8")}
                            </p>

                            {/*<SocialLinks className="nav social social-white"/>*/}
                            <p className="text-white">&copy; Dongpae International Co., Ltd All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
