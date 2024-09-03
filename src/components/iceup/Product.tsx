'use client'

import {usePathname} from "next/navigation";
import { useTranslation } from "react-i18next";
import {serviceList6} from "../../data/service";
import {ServiceCard3} from "../reuseable/service-cards";

interface Props {
    language : any
}
export default function Product({language} : Props) {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/product/product01' && (<>
                {/*
                <div className="mb-15">
                    <div className="row align-items-center mb-12">
                        <div className="col-md-5">
                            <img src="/img/iceup/product-01-01.png" alt="ICEUP" className="w-100"/>
                        </div>
                        <div className="col-md-7">
                            <h2 className="display-6 mb-3">{language.product_1}</h2>
                            <p className="lead fs-lg pe-lg-5">{language.product_2}</p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-12">
                        <div className="col-md-5">
                            <img src="/img/iceup/product-01-03.png" alt="ICEUP" className="w-100"/>
                        </div>
                        <div className="col-md-7">
                            <h2 className="display-6 mb-3">{language.product_3}</h2>
                            <p className="lead fs-lg pe-lg-5">{language.product_4}</p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-12">
                        <div className="col-md-5">
                            <img src="/img/iceup/product-01-04.png" alt="ICEUP" className="w-100"/>
                        </div>
                        <div className="col-md-7">
                            <h2 className="display-6 mb-3">{language.product_5}</h2>
                            <p className="lead fs-lg pe-lg-5">{language.product_6}</p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-md-5">
                            <img src="/img/iceup/product-01-05.png" alt="ICEUP" className="w-100"/>
                        </div>
                        <div className="col-md-7">
                            <h2 className="display-6 mb-3">{language.product_7}</h2>
                            <p className="lead fs-lg pe-lg-5">{language.product_8}</p>
                        </div>
                    </div>
                    <div className="row mb-12">
                        <p><strong>{language.product_9}</strong>: {language.product_10}</p>
                        <p><strong>{language.product_11}</strong>: {language.product_12}</p>
                        <p><strong>{language.product_13}</strong>: {language.product_14}</p>
                        <p><strong>{language.product_15}</strong>: {language.product_16}</p>
                        <p><strong>{language.product_17}</strong>: {language.product_18}</p>
                        <p><strong>{language.product_19}</strong>: {language.product_20}</p>
                    </div>
                    <div className="row">
                        <h3>{language.product_21}</h3>
                        <p>{language.product_22}<br/>{language.product_23}</p>
                        <p>{language.product_24}</p>
                        <p>{language.product_25}
                            {language.product_26}
                            {language.product_27}</p>
                        <p></p>
                    </div>
                </div>
                */}
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <h3 className="display-4 text-center mb-10">“가족의 건강을 위한 첫걸음, 깨끗한 얼음을 만드는 제빙기”</h3>
                    <div className="col-lg-7">
                        <figure>
                            <img className="w-auto" src="/img/illustrations/i3.png" srcSet="/img/illustrations/i3@2x.png 2x" alt=""/>
                        </figure>
                    </div>

                    <div className="col-lg-5">
                        <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Iceup 제빙기의 특장점</h2>
                        <h3 className="display-6 mb-7 pe-xxl-5">건강한 물, 깨끗한 얼음, 완벽한 선택</h3>

                        <div className="d-flex flex-row mb-4 align-items-center">
                            <div><i className="uil uil-sun fs-30"></i></div>
                            <div className="ms-2"><h4 className="mb-1">UV 살균 LED</h4></div>
                        </div>

                        <div className="d-flex flex-row mb-4 align-items-center">
                            <div><i className="uil uil-processor fs-30"></i></div>
                            <div className="ms-2"><h4 className="mb-1">LCD 디스플레이</h4></div>
                        </div>

                        <div className="d-flex flex-row mb-4 align-items-center">
                            <div><i className="uil uil-table fs-30"></i></div>
                            <div className="ms-2"><h4 className="mb-1">직관적인 UX</h4></div>
                        </div>

                        <div className="d-flex flex-row mb-4 align-items-center">
                            <div><i className="uil uil-lightbulb-alt fs-30"></i></div>
                            <div className="ms-2"><h4 className="mb-1">파란색 조명</h4></div>
                        </div>
                    </div>
                </div>
                <section className="wrapper bg-gray mb-17">
                    <div className="container py-10 py-md-12 px-10">
                        <div className="row gx-lg-8 gx-xl-12 gy-8">
                            <div className="col-md-6 col-lg-4">
                                <div className="d-flex flex-row">
                                    <div>
                                        <h4 className="mb-3">무료배송</h4>
                                        <p className="mb-0">지금 구매하시면 무료배송 혜택! 빠르고 안전하게 집까지 배송해 드립니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="d-flex flex-row">
                                    <div>
                                        <h4 className="mb-3">철저한 A/S</h4>
                                        <p className="mb-0">안심하고 사용하세요, 산속하고 믿을 수 있는 A/S를 약속합니다. 고장 걱정은 NO, 소비자의 건강을 위한 빠르고 정확한 A/S를 iceup이 책임집니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="d-flex flex-row">
                                    <div>
                                        <h4 className="mb-3">3년간 제품 보증</h4>
                                        <p className="mb-0">제빙기는 최고 품질을 보장하며, 구입 후 3년간 무상 수리를 제공합니다. 사용 중 문제가 발생할 경우, 신속한 A/S를 통해 최상의 상태로 복구해 드립니다. 믿을 수 있는 품질과 철저한 사후 관리로 고객 만족을 최우선으로 합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row text-center mt-xl-12 mb-12">
                    <div className="text-center">
                        <h2 className="fs-15 text-uppercase text-muted mb-3">PRODUCT FEATURES</h2>
                        <h3 className="display-4">
                            “가족의 건강을 위한 첫걸음, 깨끗한 얼음을 만드는 제빙기”
                        </h3>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-8 mb-14 mb-md-17">
                    <div className="col-md-6 col-lg-4 mt-11">
                        <div className="d-flex flex-row">
                            <div></div>
                            <div>
                                <h4 className="mb-1">사용자 편리성</h4>
                                <p className="mb-0">정전식 터치 아이콘이 직관적이고 손쉬운 디스펜싱을 제공합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-11">
                        <div className="d-flex flex-row">
                            <div></div>
                            <div>
                                <h4 className="mb-1">첨단 기술</h4>
                                <p className="mb-0">내부 마이크로프로세서가 시스템 기능을 제어하고 모니터링합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-11">
                        <div className="d-flex flex-row">
                            <div></div>
                            <div>
                                <h4 className="mb-1">똑똑한 관리</h4>
                                <p className="mb-0">LCD 스마트 화면은 메시지, 시스템 상태 및 서비스 알림을 표시합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-11">
                        <div className="d-flex flex-row">
                            <div></div>
                            <div>
                                <h4 className="mb-1">선명한 조명</h4>
                                <p className="mb-0">디스펜서에 설치된 파란색 조명은 시각적으로 맛있어 보이는 효과를 줍니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-11">
                        <div className="d-flex flex-row">
                            <div></div>
                            <div>
                                <h4 className="mb-1">여과 기술</h4>
                                <p className="mb-0">고급 역삼투압과 다단계 탄소 여과가 신선하고 깨끗한 음용수를 지속적으로 공급합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-11">
                        <div className="d-flex flex-row">
                            <div></div>
                            <div>
                                <h4 className="mb-1">깨끗한 내부</h4>
                                <p className="mb-0">탱크 내 LED UV 기술, 항균 표면, 비접촉 필터 교체가 시스템 내부와 외부를 깨끗하게 유지합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center mt-xl-12 mb-12">
                    <div className="text-center">
                        <h2 className="fs-15 text-uppercase text-muted mb-3">HOW TO ENJOY</h2>
                        <h3 className="display-4">
                            “즐거운 순간을 이렇게 더해보세요.”
                        </h3>
                    </div>
                </div>

                <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-20">
                    <div className="col-md-8 col-lg-6 position-relative">
                        <figure className="rounded"><img src="/img/iceup/shape01.svg" alt=""/></figure>
                    </div>
                    <div className="col-lg-5 col-xl-4 offset-lg-1">
                        <div className="d-flex flex-row">
                            <div><p className="mb-0">아이들을 위한 시원하고 맛있는 음료를 만들어 보세요. 크기가 작아 아이들이 먹기에 좋아요.
                                어른들을 위한 위스키, 칵테일에도 좋아요. 얼음이 많이 들어가 더 시원하며, 오래먹을 수 있어요.
                                아이스커피에도 잘 어울려요.작은 얼음은 음료를 빠르게 냉각시켜서 얼음이 녹는 속도가 느립니다.음료의 맛을 오랫동안 유지할 수 있어요.</p></div>
                        </div>
                    </div>
                </div>
            </>)}
        </>
    );
}
