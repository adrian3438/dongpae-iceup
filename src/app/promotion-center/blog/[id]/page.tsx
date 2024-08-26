import {Fragment} from "react";
import Navbar from "../../../../components/iceup/Navbar";
import Sidebar from "../../../../components/iceup/Sidebar";
import Footer from "../../../../components/iceup/Footer";
const promotions = [
    { id: 1, title: '카탈로그', url: '/promotion-center/catalogue'},
    { id: 2, title: '영상', url: '/promotion-center/promotion-videos'},
    { id: 3, title: '블로그', url: '/promotion-center/blog'},
];

export default function BlogDetail() {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                            <Sidebar title="홍보센터" sidebarList={promotions} />
                        </aside>
                        <div className="col-lg-9 mt-8">
                            <section className="row my-10 justify-content-center">
                                <div className="col-md-12">
                                    <p className="fs-18 fw-600">블로그</p>
                                    <h2 className="text-black fw-600">타이틀이 들어갑니다.</h2>
                                    <p className="fs-16 fw-500">2024-08-09</p>
                                    <hr className="mt-5 mb-8"/>
                                    <article className="mb-8">
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                        에디터 영역이 들어갑니다.
                                    </article>
                                    <div className="mt-4 border-bottom">
                                        <div className="py-4 px-5 border-top">
                                            <i className="uil uil-angle-up fs-22 me-4"></i>
                                            <span className="text-black fw-bold me-4">이전글</span>
                                            <a href="#" className="text-medium-gray fw-bold">이전글 타이틀 입니다.</a>
                                        </div>
                                        <div className="py-4 px-5 border-top">
                                            <i className="uil uil-angle-down fs-22 me-4"></i>
                                            <span className="text-black fw-bold me-4">다음글</span>
                                            <a href="#" className="text-medium-gray fw-bold">다음글 타이틀 입니다.</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
}
