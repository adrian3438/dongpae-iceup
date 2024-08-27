import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "../../components/iceup/Navbar";
import Footer from "../iceup/Footer";
import MainBanner from "../iceup/MainBanner";
import NextLink from "../reuseable/links/NextLink";
import Link from "next/link";
import Image from "next/image";

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
                <MainBanner/>

                <div className="wrapper dots-bg-color1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 border-start">
                                &nbsp;<br/>
                                &nbsp;
                            </div>
                            <div className="col-md-6 border-start border-end">
                                &nbsp;<br/>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <hr className="m-0"/>
                    <div className="container">
                        <div className="row">
                            <div className="py-3 col-md-6 border-start">
                                <p className="text-white fs-35 fw-bold">Finger</p>
                                <p className="text-white mb-0">Cooling and Heating method</p>
                            </div>
                            <div className="py-3 col-md-6 border-start border-end">
                                <p className="text-white fs-35 fw-bold">Iceup</p>
                                <p className="text-white mb-0">24hours cooling, longer life span ice maker</p>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0"/>
                    <div className="container">
                        <div className="row">
                            <div className="py-6 col-md-6 border-start text-center">
                                <img src="/img/iceup/main-finger.png" alt="Finger"/>
                            </div>
                            <div className="py-6 col-md-6 border-start border-end text-center">
                                <img src="/img/iceup/main-iceup.png" alt="Iceup"/>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 border-start">
                                &nbsp;<br/>
                                &nbsp;
                            </div>
                            <div className="col-md-6 border-start border-end">
                                &nbsp;<br/>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper bg-pale-ash py-5">
                    <div className="container">
                        <div className="row gx-lg-8 gy-8 py-10 align-items-center justify-content-between">
                            <div className="col-lg-5 order-lg-2">
                                <div className="row gx-md-5 gy-5">
                                    <div className="col-md-6 align-content-center">
                                        <div className="bg-white border rounded p-5 pb-16"
                                             style={{background: 'url(/img/iceup/cube.png) no-repeat 90% 90%'}}
                                        >
                                            <p className="fw-bold">Full Cube</p>
                                            <p className="mb-0 fs-16">가장 일반적인 형태로<br/>얼음이 녹는 속도가 느림</p>
                                        </div>
                                        <div className="bg-white border rounded p-5 pb-16 mt-5"
                                             style={{background: 'url(/img/iceup/cube.png) no-repeat 90% 90%'}}
                                        >
                                            <p className="fw-bold">Nugget</p>
                                            <p className="mb-0 fs-16">얼음 형태에 대한 설명<br/>두 줄 간단하게</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 align-content-center">
                                        <div className="bg-white border rounded p-5 pb-16"
                                             style={{background: 'url(/img/iceup/cube.png) no-repeat 90% 90%'}}
                                        >
                                            <p className="fw-bold">Half Cube</p>
                                            <p className="mb-0 fs-16">만들어지는 데 소요되는 시간이<br/>다른 형태에 비해 가장 짧음</p>
                                        </div>
                                        <div className="bg-white border rounded p-5 pb-16 mt-5"
                                             style={{background: 'url(/img/iceup/cube.png) no-repeat 90% 90%'}}
                                        >
                                            <p className="fw-bold">Flake</p>
                                            <p className="mb-0 fs-16">얼음 형태에 대한 설명<br/>두 줄 간단하게</p>
                                        </div>
                                        <div className="bg-white border rounded p-5 pb-16 mt-5"
                                             style={{background: 'url(/img/iceup/cube.png) no-repeat 90% 90%'}}
                                        >
                                            <p>Crescent</p>
                                            <p className="mb-0 fs-16">얼음 형태에 대한 설명<br/>두 줄 간단하게</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h2 className="display-4 mb-3">얼음 형태에 따른 특징 알아보기</h2>
                                <p className="lead fs-lg mb-8 pe-xxl-2">
                                    제빙기는 다양한 목적으로 얼음을 생산하도록 설계된 장치로, 냉장과정을 통해 물을 각얼음이나 으깬 얼음으로 얼려서 작동합니다.
                                    이렇게 만들어진 얼음은 형태에 따라 사용 용도가 달라져 제빙기를 구매하시기 전에 형태에 따른 특징을 잘 파악해야 합니다.
                                </p>
                                <Link href="/" className="btn btn-primary">더 자세히 보기 <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper my-10">
                    <div className="container">
                        <h2 className="mb-6">보관방식</h2>
                        <div className="row">
                            <div className="col-md-5 bg-blue rounded px-5 py-10"
                                 style={{background: 'url(/img/iceup/icebox.png) no-repeat 90% 100%'}}
                            >
                                <h3 className="text-white">아이스박스</h3>
                                <p className="text-white">얼음 보관방식에 대한 설명<br/>두 줄 간단하게 적어주세요</p>
                                <Link href="/" className="btn btn-primary">더 자세히 보기 <i className="uil uil-arrow-right"></i></Link>
                            </div>
                            <div className="col-md-3 rounded border ms-md-1 px-5 py-10">
                                <h3>호텔용 ice bin</h3>
                                <p>얼음 보관방식에 대한 설명<br/>두 줄 간단하게 적어주세요</p>
                                <Link href="/" className="btn btn-primary">더 자세히 보기 <i className="uil uil-arrow-right"></i></Link>
                            </div>
                            <div className="col-md-3 rounded border ms-md-1 px-5 py-10">
                                <h3>비닐팩</h3>
                                <p>얼음 보관방식에 대한 설명<br/>두 줄 간단하게 적어주세요</p>
                                <Link href="/" className="btn btn-primary">더 자세히 보기 <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <h2 className="mb-6">아이스업 제품</h2>
                            <div className="blog grid grid-view">
                                <div className="row isotope gx-md-8 gy-8 mb-8">
                                    <div className="col-md-3">
                                        <article>
                                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                                <Link href="#">
                                                    <Image src="/img/iceup/product-01.png" alt="test" width={560} height={350} className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </Link>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="post-header">
                                                <h2 className="post-title h3 mb-3">
                                                    <NextLink title="제빙기 블랙타입" className="link-dark" href="#"/>
                                                </h2>
                                            </div>

                                            <div className="post-footer">
                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <span>제품 간단 설명</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-3">
                                        <article>
                                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                                <Link href="#">
                                                    <Image src="/img/iceup/product-02.png" alt="test" width={560} height={350} className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </Link>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="post-header">
                                                <h2 className="post-title h3 mb-3">
                                                    <NextLink title="제빙기 화이트타입" className="link-dark" href="#"/>
                                                </h2>
                                            </div>

                                            <div className="post-footer">
                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <span>제품 간단 설명</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-3">
                                        <article>
                                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                                <Link href="#">
                                                    <Image src="/img/iceup/product-04.png" alt="test" width={560} height={350} className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </Link>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="post-header">
                                                <h2 className="post-title h3 mb-3">
                                                    <NextLink title="제빙기 물받침대 (단품)" className="link-dark" href="#"/>
                                                </h2>
                                            </div>

                                            <div className="post-footer">
                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <span>제품 간단 설명</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-3">
                                        <article>
                                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                                <Link href="#">
                                                    <Image src="/img/iceup/product-03.png" alt="test" width={560} height={350} className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </Link>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="post-header">
                                                <h2 className="post-title h3 mb-3">
                                                    <NextLink title="제빙기 전면 패널 (단품)" className="link-dark" href="#"/>
                                                </h2>
                                            </div>

                                            <div className="post-footer">
                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <span>제품 간단 설명</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper my-10">
                    <div className="container py-10 bg-pale-ash rounded">
                        <div className="row text-center">
                            <p>Not only do we have a large selection of commercial ice cube makers to buy or rent,<br/>
                            <strong>but we also specialize in keeping ice machines in peak performance year-round.</strong>
                            </p>
                            <div>
                                <Link href="/" className="btn btn-outline-primary">더 자세히 보기 <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </Fragment>
    );
}
