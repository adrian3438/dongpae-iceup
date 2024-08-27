import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Link from "next/link";

export default function SitemapPage() {
    return (
        <Fragment>
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            {/* ========== main content ========== */}
            <main className="content-wrapper py-20">
                <div className="container">
                    <div className="row sitemap">
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">브랜드 소개</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/brand/brand01" className="fs-18">- ICEUP제빙기</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">제품소개</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/product/product01" className="fs-18">- ICEUP</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">홍보센터</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/promotion-center/catalogue" className="fs-18">- 카탈로그</Link></li>
                                        <li><Link href="/promotion-center/promotion-videos" className="fs-18">- 영상</Link></li>
                                        <li><Link href="/promotion-center/blog" className="fs-18">- 블로그</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">사용안내</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/guide/guide01" className="fs-18">- 설치 가이드</Link></li>
                                        <li><Link href="/guide/guide02" className="fs-18">- 유지보수 팁</Link></li>
                                        <li><Link href="/guide/guide03" className="fs-18">- 보증 및 서비스 정책</Link></li>
                                        <li><Link href="/guide/guide04" className="fs-18">- 안전 지침</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">고객지원</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/customer/faq" className="fs-18">- 자주 찾는 질문</Link></li>
                                        <li><Link href="/customer/inquiry" className="fs-18">- 문의하기</Link></li>
                                        <li><Link href="/customer/buy" className="fs-18">- 구매방법</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
