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
                            <div className="col-md-5 fs-45 lh-xxs mb-6 text-navy">{language?.main_26}</div>
                            <div className="col-md-6">{language?.main_27}</div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="container">
                        <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1003088041?h=4647f51639&autoplay=1&loop=1&muted=1&controls=0" allowFullScreen></iframe>
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
                                    <h3 className="fs-45">The Pioneer of Nugget Type Ice Maker Technology.</h3>
                                    <p>At Dongpae International, we are at the forefront of innovation in the ice maker
                                        industry, specializing in nugget type ice technology. Our mission is to deliver the
                                        highest quality nugget ice solutions that enhance the experiences of both
                                        residential and commercial customers worldwide.</p>
                                    <p>With years of expertise and a commitment to excellence, Dongpae International
                                        designs and manufactures state-of-the-art ice makers that are renowned for
                                        their reliability, efficiency, and superior ice quality. Our nugget ice machines are
                                        perfect for a variety of settings, including restaurants, cafes, healthcare facilities,
                                        and home kitchens, providing the perfect blend of functionality and style.</p>
                                    <p className="go-link">
                                        <Link href="#" className="shadow">Go to Dongpae International <Image src="/img/iceup/arrow.png" alt="" width={44} height={19}/></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper my-15">
                    <div className="container">
                        <h3 className="text-center display-4 mb-8">Features</h3>
                        <p className="text-center mb-10">
                            ICEUP is the most innovative ice maker you’ve ever met, designed to revolutionize the way you think about ice production.<br/>
                            With cutting-edge technology and a commitment to quality, ICEUP delivers consistent, high-performance results that cater to homes, shops, and factories alike.
                        </p>
                        <div className="row justify-content-between">
                            <div className="col-md-5">
                                <Image src="/img/iceup/dongpae-iceup-features-ice.png" alt="" width={720} height={481} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-10">| A LOT OF ICE</h4>
                                <p>ICEUP produces ice at an impressive speed, ensuring you always have plenty of ice on
                                    hand. Whether it’s for a busy café, a restaurant, or an event, ICEUP keeps up with high
                                    demand effortlessly.</p>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-md-5">
                                <Image src="/img/iceup/dongpae-iceup-features-ice_1.png" alt="" width={720} height={481} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-10">| SAVE TIME</h4>
                                <p>Thanks to its rapid ice-making technology, ICEUP drastically reduces waiting times.
                                    Forget the delays and keep your operations running smoothly with a steady supply of ice,
                                    exactly when you need it.</p>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-md-5">
                                <Image src="/img/iceup/dongpae-iceup-features-ice_2.png" alt="" width={720} height={481} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-10">| MANY PEOPLE</h4>
                                <p>Designed to meet the needs of large gatherings and high-traffic environments,
                                    ICEUP ensures that everyone gets their ice without any shortages. Perfect for
                                    accommodating crowds, it’s a must-have for places that serve many people daily.</p>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-md-5">
                                <Image src="/img/iceup/dongpae-iceup-features-ice_3.png" alt="" width={720} height={481} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-10">| SAFE FOR HEALTH</h4>
                                <p>ICEUP eliminates the need for scooping ice by hand, reducing the risk of contamination.
                                    With its hygienic design, you can trust ICEUP to deliver clean and safe ice, every single time.</p>
                                <p>Choose ICEUP for its speed, efficiency, and commitment to quality and hygiene.
                                    It’s the perfect solution for all your ice-making needs!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper my-10">
                    <div className="container">
                        <div className="row">
                            <h2 className="mb-6 text-center">{language.main_13}</h2>
                            <div className="blog grid grid-view">
                                <div className="row isotope gx-md-8 gy-8 mb-8">
                                    <div className="col-md-3">
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
                                                        <span>{language.main_22}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-3">
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
                                                        <span>{language.main_23}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-3">
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
                                                        <span>{language.main_24}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-3">
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
                                                        <span>{language.main_25}</span>
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

                <MainBlogList language={language}/>

                <div className="wrapper my-10">
                    <div className="container py-10 bg-soft-blue rounded">
                        <div className="row text-center">
                            <p>Not only do we have a large selection of commercial ice cube makers to buy or rent,<br/>
                                <strong>but we also specialize in keeping ice machines in peak performance year-round.</strong>
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
