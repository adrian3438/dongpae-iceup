import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "../../components/iceup/Navbar";
import MainBanner from "../iceup/MainBanner";
import NextLink from "../reuseable/links/NextLink";
import Link from "next/link";
import Image from "next/image";
import Footer from "components/iceup/Footer";
import MainBlogList from "../iceup/MainBlogList";
interface Props {
    language?:any
}
export default function Main({language} : Props) {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <header className="wrapper bg-soft-primary">
                <Navbar
                    logoAlt="logo-light"
                    navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-dark"
                    lang={language}
                />
            </header>

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <MainBanner/>
                <div className="wrapper py-12">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-5  lh-xxs mb-6 text-navy"><h3 className="fs-45">{language?.main_25_01}</h3></div>
                            <div className="col-md-6">{language?.main_27}</div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="container">
                        <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1046292226?h=4647f51639&autoplay=1&loop=1&muted=1&controls=0" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="wrapper my-15">
                    <div className="container">
                        <div className="bg-soft-blue rounded-4">
                            <div className="row align-items-stretch justify-content-center">
                                <div className="col-md-6 p-5">
                                    <div className="bg-soft-ash text-center d-flex align-items-center justify-content-center h-100 shadow rounded-4">
                                        <Image src="/img/iceup/dongpae_international_logo_color.png" alt="DONGPAE International" width={502} height={127}/>
                                    </div>
                                </div>
                                <div className="col-md-6 p-5">
                                    <h3 className="fs-45">{language?.main_22}</h3>
                                    <p>{language?.main_23}</p>
                                    <p>{language?.main_24}</p>
                                    <p className="go-link">
                                        <Link href="https://dongpae.co.kr/" className="shadow">{language?.main_25}<Image src="/img/iceup/arrow.png" alt="" width={44} height={19}/></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper my-15">
                    <div className="container">
                        <h3 className="text-center display-4 mb-8">{language?.main_26}</h3>
                        <p className="text-center mb-10">
                            {language?.main_27}<br/>
                            {language?.main_28}
                        </p>
                        <div className="row justify-content-between">
                            <div className="col-md-5">
                                <Image src="/img/iceup/dongpae-iceup-features-ice.jpg" alt="" width={720} height={481} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-10">{language?.main_29}</h4>
                                <p>{language?.main_30}</p>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-md-5">
                                <Image src="/img/iceup/dongpae-iceup-features-ice_1.png" alt="" width={720} height={481} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-10">{language?.main_31}</h4>
                                <p>{language?.main_32}</p>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-md-5">
                                <Image src="/img/iceup/dongpae-iceup-features-ice_2.jpg" alt="" width={720} height={481} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-10">{language?.main_33}</h4>
                                <p>{language?.main_34}</p>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-md-5">
                                <Image src="/img/iceup/dongpae-iceup-features-ice_3.png" alt="" width={720} height={481} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-10">{language?.main_35}</h4>
                                <p>{language?.main_36}</p>
                                <p>{language?.main_37}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper my-10">
                    <div className="container">
                        <div className="row">
                            <h2 className="mb-6 text-center">{language.main_13}</h2>
                            <div className="blog grid grid-view">
                                <div className="row justify-content-center isotope gx-md-8 gy-8 mb-8">
                                    <div className="col-md-6">
                                        <article>
                                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                                <Link href="/product/product01">
                                                    <Image src="/img/iceup/product-01.png" alt="test" width={560} height={350} className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </Link>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="post-header">
                                                <h2 className="post-title h3 mb-3">
                                                    <Link className="link-dark" href="/product/product01">{language.main_21}</Link>
                                                </h2>
                                            </div>

                                            <div className="post-footer">
                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <span>{language.main_38}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-6">
                                        <article>
                                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                                <Link href="/product/product01#section07">
                                                    <Image src="/img/iceup/product-02.png" alt="test" width={560} height={350} className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </Link>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="post-header">
                                                <h2 className="post-title h3 mb-3">
                                                    <Link className="link-dark" href="/product/product01#section07">{language.main_14}</Link>
                                                </h2>
                                            </div>

                                            <div className="post-footer">
                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <span>{language.main_39}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                    {/* <div className="col-md-3">
                                        <article>
                                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                                <Link href="/product/product01#section04">
                                                    <Image src="/img/iceup/product-04.png" alt="test" width={560} height={350} className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </Link>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="post-header">
                                                <h2 className="post-title h3 mb-3">
                                                    <Link className="link-dark" href="/product/product01#section04">{language.main_15}</Link>
                                                </h2>
                                            </div>

                                            <div className="post-footer">
                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <span>{language.main_40}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div> */}
                                    {/* <div className="col-md-3">
                                        <article>
                                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                                <Link href="/product/product01#section08">
                                                    <Image src="/img/iceup/product-03.png" alt="test" width={560} height={350} className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </Link>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="post-header">
                                                <h2 className="post-title h3 mb-3">
                                                    <Link className="link-dark" href="/product/product01#section08">{language.main_16}</Link>
                                                </h2>
                                            </div>

                                            <div className="post-footer">
                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <span>{language.main_41}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MainBlogList language={language}/>

                <div className="wrapper my-10">
                    <div className="container py-10 bg-soft-blue rounded">
                        <div className="row text-center">
                            <p>{language?.main_42}<br/>
                                <strong>{language?.main_43}</strong>
                            </p>
                            <div>
                                <Link href="/customer/inquiry" className="btn btn-outline-primary">{language.main_10} <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer language={language}/>
        </Fragment>
    );
}
