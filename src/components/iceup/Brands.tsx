'use client'

import {usePathname} from "next/navigation";

interface Props {
    language : any
}

const images = [
    {
        id: 1,
        className: "col-md-4 offset-md-2 align-self-end",
        image: { "1x": "/img/photos/g1.jpg", "2x": "/img/photos/g1@2x.jpg 2x" }
    },
    {
        id: 2,
        className: "col-md-6 align-self-end",
        image: { "1x": "/img/photos/g2.jpg", "2x": "/img/photos/g2@2x.jpg 2x" }
    },
    {
        id: 3,
        className: "col-md-6 offset-md-1",
        image: { "1x": "/img/photos/g3.jpg", "2x": "/img/photos/g3@2x.jpg 2x" }
    },
    {
        id: 4,
        className: "col-md-4 align-self-start",
        image: { "1x": "/img/photos/g4.jpg", "2x": "/img/photos/g4@2x.jpg 2x" }
    }
];

export default function Brands({language} : Props) {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/brand/brand01' && (<>
                {/*<div className="row align-items-center mb-12">
                    <div className="col-md-7">
                        <h2>{language.brand_1}</h2>
                        <p>{language.brand_2}</p>
                        <p>{language.brand_3}</p>
                        <p>{language.brand_4}</p>
                        <p>{language.brand_5}</p>
                    </div>
                    <div className="col-md-5">
                        <img src="/img/iceup/brand-01-01.gif" alt="" className="w-100"/>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/brand-01-02.gif" alt="" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2>{language.brand_6}</h2>
                        <p>{language.brand_7}</p>
                        <p>{language.brand_8}</p>
                        <p>{language.brand_9}</p>
                        <p>{language.brand_10}</p>
                    </div>

                </div>*/}
                <div className="row gx-lg-8 gy-8 mt-5 mt-md-12 mt-lg-0 mb-18 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="row gx-md-5 gy-5">
                            {images.map(({id, className, image}) => (
                                <div className={className} key={id}>
                                    <figure className="rounded">
                                        <img src={image["1x"]} srcSet={image["2x"]} alt=""/>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="display-6 mb-3">iceup 제빙기에 대한 착각<br/> (먹어도 되는 얼음이 맞나 ?)</h2>
                        <p className="lead fs-md mb-8 pe-xxl-2">
                            대부분의 사람들은 투명하고 차가운 얼음 속 진실에 큰 관심이 없습니다. 일상에서 사용되는 얼음 관리가 인간의 건강에 영향을 줄 수 있을 거라는 생각하기 쉽지 않습니다
                        </p>

                        <div className="row gx-xl-10 gy-6">
                            <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="d-flex flex-row">
                                    <div>
                                        <div className="icon btn btn-circle btn-lg btn-sky pe-none me-5"><i style={{background: 'url(/img/iceup/ice.png', width:"23px", height:"23px"}}></i></div>
                                    </div>
                                    <div><h4 className="mb-1">냉동실 얼음틀</h4><p className="mb-0">음식물의 냄새와 세균감염에 노출</p></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="d-flex flex-row">
                                    <div>
                                        <div className="icon btn btn-circle btn-lg btn-sky pe-none me-5"><i style={{background: 'url(/img/iceup/ice.png', width:"23px", height:"23px"}}></i></div>
                                    </div>
                                    <div><h4 className="mb-1">얼음정수기</h4><p className="mb-0">얼음저장고 관리 부실과 중금속 검출 문제 대두</p></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="d-flex flex-row">
                                    <div>
                                        <div className="icon btn btn-circle btn-lg btn-sky pe-none me-5"><i style={{background: 'url(/img/iceup/ice.png', width:"23px", height:"23px"}}></i></div>
                                    </div>
                                    <div><h4 className="mb-1">물순환 반복에 의한 오염 취약</h4><p className="mb-0">음식물의 냄새와 세균감염에 노출</p></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="d-flex flex-row">
                                    <div>
                                        <div className="icon btn btn-circle btn-lg btn-sky pe-none me-5"><i style={{background: 'url(/img/iceup/ice.png', width:"23px", height:"23px"}}></i></div>
                                    </div>
                                    <div><h4 className="mb-1">공통문제점</h4><p className="mb-0">얼음 탈빙시 핫가스 또는 히팅으로 인해 소비전력 증대 및 불량발생</p></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12 col-xl-6">
                                <div className="d-flex flex-row">
                                    <div>
                                        <div className="icon btn btn-circle btn-lg btn-sky pe-none me-5"><i style={{background: 'url(/img/iceup/ice.png', width:"23px", height:"23px"}}></i></div>
                                    </div>
                                    <div><h4 className="mb-1">상업용 제빙기</h4><p className="mb-0">얼음을 빼기 위해 저장고내 손이 들어감 : 위생상 치명적 문제점</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-18">
                    <h2 className="display-4 mb-3">iceup 제빙기의 탄생 배경</h2>
                    <p className="lead fs-lg mb-8">
                        북극의 얼음처럼 깨끗하고 신성한 얼음을 공급하기 위해 ICEUP 제빙기는 뷸렛 타입 얼음 제조 방식을 과감히 버리고 너겟 타입 얼음 제조 방식을 채택했습니다.
                    </p>

                    <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
                        <div className="col-md-6 col-lg-3">
                            <span className={`icon btn btn-circle btn-lg pe-none mb-4 btn-soft-primary`}>
                                <span className="number">&nbsp;</span>
                            </span>
                            <h4 className="mb-1">너겟 타입 얼음 제조 방식 채택</h4>
                            <p>북극의 얼음처럼 깨끗하고 신성한 얼음을 공급하기 위해 ICEUP 제빙기는 뷸렛 타입 얼음 제조 방식을 과감히 버리고 너겟 타입 얼음 제조 방식을 채택했습니다.</p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <span className={`icon btn btn-circle btn-lg pe-none mb-4 btn-soft-primary`}>
                                <span className="number">&nbsp;</span>
                            </span>
                            <h4 className="mb-1">오랜 시간 지속되는 얼음 만들기</h4>
                            <p>속이 꽉찬 얼음 생산으로 사용시간이 길게 지속됩니다.</p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <span className={`icon btn btn-circle btn-lg pe-none mb-4 btn-soft-primary`}>
                                <span className="number">&nbsp;</span>
                            </span>
                            <h4 className="mb-1">얼음 생산 속도 향상</h4>
                            <p>5명이 연속 사용하면 얼음 생산 시간을 기다려야 하는 가정용 정수기에 비에 얼음 생산 속도가 훨등히 빠르기 때문에 대기 시간이 필요 없습니다.</p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <span className={`icon btn btn-circle btn-lg pe-none mb-4 btn-soft-primary`}>
                                <span className="number">&nbsp;</span>
                            </span>
                            <h4 className="mb-1">제빙기 노후 방지</h4>
                            <p>뷸렛 타입 얼음은 주변에서 가장 많이 사용하는 얼음입니다. 뷸렛 타입 얼음을 제조하기 위해서는 노즐을 통해 물을 보내고 급랭시켜 얼음을 적당히 키운 후, 얼음을 노즐과 분리하기 위해 가열합니다. 이러한 방식은 제빙기의 노후를 촉진시킵니다.</p>
                        </div>
                    </div>
                </div>

                <section className="wrapper image-wrapper bg-image bg-overlay text-white mb-17" style={{backgroundImage: 'url(/img/iceup/ice-cube.jpg'}}>
                    <div className="container py-14 py-md-17 text-center">
                        <div className="row">
                            <div className="col-xl-10 col-xxl-8 mx-auto text-center">
                                <h2 className="display-4 text-white mt-2 mb-7">건강한 삶을 위한 iceup 제빙기란?</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row gy-10 gx-lg-8 gx-xl-12 align-items-center mb-17">
                    <div className="col-lg-7 position-relative">
                        <div className="shape bg-dot primary rellax w-18 h-18" style={{top: "0px", left: "-1.4rem", zIndex: 0}}></div>
                        <div className="row gx-md-5 gy-5">
                            <div className="col-md-6">
                                <figure className="rounded mt-md-10 position-relative"><img src="/img/photos/g5.jpg" srcSet="/img/photos/g5@2x.jpg 2x" alt=""/></figure>
                            </div>
                            <div className="col-md-6">
                                <div className="row gx-md-5 gy-5">
                                    <div className="col-md-12 order-md-2">
                                        <figure className="rounded"><img src="/img/photos/g6.jpg" srcSet="/img/photos/g6@2x.jpg 2x" alt=""/></figure>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card bg-pale-primary text-center">
                                            <div className="card-body py-11 counter-wrapper"><h3 className="counter text-nowrap"><span>1,000+</span></h3><p className="mb-0">고객 만족 실현</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5"><h2 className="display-4 mb-3">iceup 브랜드와의 소통</h2>
                        <p className="lead fs-lg">iceup 제빙기는 국,내외적으로 검증된 제품이며, 많은 고객으로부터 문의를 받고 있습니다.</p>
                        <p>iceup 임직원은 고객의 소리에 귀담아 들을 준비가 되어 있으며 사람의 건강을 위한 제빙기 개발을 위해 많은 노력을 기울이고 있습니다.</p>
                        <p>iceup 24시간 온라인을 통해 고객 문의가 가능합니다. 언제든지 연락주시기 바랍니다.</p>
                        <a className="btn btn-primary rounded-pill mt-2" href="/customer/inquiry">연락하기</a>
                    </div>
                </div>
            </>)}
        </>
    );
}
