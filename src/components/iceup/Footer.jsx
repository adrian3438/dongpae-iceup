// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";

export default function Footer() {
    return (
        <footer className="bg-dark text-inverse">
            <div className="container pt-8">
                <div className="row">
                    <div className="row justify-content-between align-content-center">
                        <div className="col-md-auto">
                            <div className="row mt-2">
                                <div className="col-md-auto lh-1">
                                    <NextLink title="개인정보처리방침" href="#"/>
                                </div>
                                <div className="col-md-auto border-start lh-1">
                                    <NextLink title="이용약관" href="#"/>
                                </div>
                                <div className="col-md-auto border-start lh-1">
                                    <NextLink title="제품구매안내" href="#"/>
                                </div>
                                <div className="col-md-auto border-start lh-1">
                                    <NextLink title="문의하기" href="#"/>
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
                                대표이사: 장성환 <br className="d-none d-lg-block"/>
                                10049 경기도 김포시 얀촌읍 황금로 324번길 38<br className="d-none d-lg-block"/>
                                이메일: ice@dongpae.co.kr<br className="d-none d-lg-block"/>
                                전화번호: 070-4700-0111
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
