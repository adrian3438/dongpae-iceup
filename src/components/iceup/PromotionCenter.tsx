'use client'

import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import FigureImage from "../../components/reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import {useEffect, useState} from "react";
import api from "../../lib/api";
import PromotionVideoList from "./PromotionVideoList";

interface Props {
    data : any, language : any
}
export default function PromotionCenter({data, language} : Props) {
    const pathName = usePathname();
    const router = useRouter()
    // console.log(data)
    const {List, totalCnt} = data;


    return (
        <>
            {pathName === '/promotion-center/catalogue' && (<>
                <section className="row mb-10">
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/catalog_example_1.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"Countertop Ice Maker"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/catalog_example_2.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"Silonn Ice Maker Countertop"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/catalog_example_3.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"La Nouvelle Ice Maker"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item post col-md-4 mb-5">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/catalog_example_4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={"E-Macht 2 In 1 Countertop Ice Maker"} className="link-dark" href="#"/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                {/* <Pagination className="justify-content-center mb-10"/> */}
            </>)}

            {pathName === '/promotion-center/promotion-videos' && (
                <PromotionVideoList language={language}/>
            )}

            {pathName === '/promotion-center/blog' && (<>
                <section className="row mb-10">
                    {List?.map((list:any) => (
                    <article className="item post col-md-4 mb-5" key={list.ID} onClick={()=>router.push(`/promotion-center/blog/${list?.ID}`)}>
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href={`/promotion-center/blog/${list.ID}`}>
                                    <FigureImage width={560} height={350} src={list.thumnailFile}/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body py-4">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-3 mb-3 text-center">
                                        <NextLink title={list?.promSubject} className="link-dark" href={`/promotion-center/blog/${list?.ID}`}/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    ))}
                </section>
                {/* <Pagination className="justify-content-center mb-10"/> */}
            </>)}
        </>
    );
}
