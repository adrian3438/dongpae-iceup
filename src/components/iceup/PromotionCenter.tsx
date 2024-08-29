'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import FigureImage from "../../components/reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import Pagination from "../reuseable/Pagination";

export default function PromotionCenter() {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/promotion-center/catalogue' && (<>
                <section className="row mb-10">
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"카탈로그 타이틀"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"카탈로그 타이틀"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"카탈로그 타이틀"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"카탈로그 타이틀"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"카탈로그 타이틀"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"카탈로그 타이틀"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <Pagination className="justify-content-center mb-10"/>
            </>)}

            {pathName === '/promotion-center/promotion-videos' && (<>
                <section className="row mb-12 justify-content-center rounded">
                    <div className="dots-main-video dots-main-video2 rounded col-md-10">
                        <iframe src="https://player.vimeo.com/video/1003081314?badge=0&autopause=0&player_id=0&app_id=58479" title="DONPER-company-introduction" allowFullScreen>
                        </iframe>
                    </div>
                </section>

                <section className="row justify-content-center mb-10">
                    <div className="col-md-10">
                        <h3>회사소개</h3>
                        <hr className="mt-5 mb-10"/>
                        <div className="row">
                            <div className="col-md-6 mb-6">
                                <div className="dots-main-video rounded">
                                    <iframe src="https://player.vimeo.com/video/1003088041?badge=0&autopause=0&player_id=0&app_id=5847958479" title="ICEUP-ICEMAKER-compare" allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="dots-main-video rounded">
                                    <iframe src="https://player.vimeo.com/video/1003088016?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" title="ICEUP ICEMAKER-music" allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>)}

            {pathName === '/promotion-center/blog' && (<>
                <section className="row mb-10">
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="/promotion-center/blog/1">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"블로그 타이틀"} className="link-dark" href="/promotion-center/blog/1"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="/promotion-center/blog/1">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"블로그 타이틀"} className="link-dark" href="/promotion-center/blog/1"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="/promotion-center/blog/1">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"블로그 타이틀"} className="link-dark" href="/promotion-center/blog/1"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="/promotion-center/blog/1">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"블로그 타이틀"} className="link-dark" href="/promotion-center/blog/1"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="/promotion-center/blog/1">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"블로그 타이틀"} className="link-dark" href="/promotion-center/blog/1"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="/promotion-center/blog/1">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"블로그 타이틀"} className="link-dark" href="/promotion-center/blog/1"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <Pagination className="justify-content-center mb-10"/>
            </>)}
        </>
    );
}
