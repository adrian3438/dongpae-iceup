import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Brands from "../iceup/Brands";
import { useTranslation } from "react-i18next";
import Carousel3 from "../iceup/Carousel3";
import Image from "next/image";
import Link from "next/link";
const brands = [
    { id: 1, title: 'ICEUP', url: '/brand/brand01'}
];
interface Props {
    language : any
}
export default function BrandPage({language} : Props) {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            <section className="wrapper bg-dark">
                <div className="swiper-container swiper-thumbs-container swiper-fullscreen nav-dark">
                    <Carousel3/>
                </div>
            </section>

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container pb-20">
                    <div className="row py-8">
                        <p className="fw-bold fs-45 text-center" style={{color: "#4B4B4B"}}>What does ICEUP mean?</p>
                        <p className="text-center">The name ICEUP was born from a vision to redefine the way we think about ice-making—efficiency, innovation, and reliability packed into one bold identity.</p>
                    </div>
                    <div className="brand-bg-area01">
                        <p className="fs-150 fw-bold" style={{color: "#4B4B4B"}}>ICE</p>
                        <p>At the core of our brand is ice—the product that defines our purpose.<br/>
                            The word represents clarity, purity, and essential cooling,<br/>
                            values that resonate with our commitment to delivering top-quality ice-making solutions.</p>
                    </div>
                    <div className="brand-bg-area02">
                        <p className="fs-150 fw-bold" style={{color: "#4B4B4B"}}>UP</p>
                        <p>The word “UP” symbolizes elevation, growth, and improvement.<br/>
                            It reflects our dedication to pushing boundaries, innovating, and constantly improving the
                            standards of ice-making technology.</p>
                    </div>
                    <div className="row pt-10">
                        <p className="fw-bold fs-45" style={{color: "#4B4B4B"}}>The Meaning Behind the Name</p>
                        <p>Together, ICEUP represents a call to "rise up" to new heights in ice production technology. It’s about creating more ice, faster, and better, while ensuring reliability and health safety.
                            The name embodies our mission to provide scalable ice-making solutions for every environment—from homes to factories—while staying true to sustainability and efficiency.</p>
                    </div>

                    <div className="row pt-17 pb-10">
                        <p className="fw-bold fs-45 text-center" style={{color: "#4B4B4B"}}>How it works?</p>
                        <p className="text-center">ICEUP is pioneering ice maker market and it's working mechanism is exteamly advanced than lagecy type of products.</p>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-6">
                            <p className="mb-1"><Image src="/img/iceup/brand-01.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                            <p className="mb-1"><Image src="/img/iceup/brand-02.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                            <p className="mb-1"><Image src="/img/iceup/brand-03.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                            <p className="mb-1"><Image src="/img/iceup/brand-04.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                            <p className="mb-0"><Image src="/img/iceup/brand-05.png" alt="" width={728} height={408} style={{width: "100%", height:"auto"}}/></p>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-14">
                                <h4 className="mb-9">| ICE FORMATION PROCESS</h4>
                                <p>Once the refrigeration system is activated, ice is formed in the shape of long sticks.<br/>
                                    These sticks of ice are produced in a series of tubes, where cold refrigerant flows around
                                    them, rapidly freezing the water into solid ice.
                                </p>
                                <p>ICEUP’s system is designed for precise temperature control and time management,
                                    ensuring that the ice formed is of uniform size and high purity. The automated system
                                    ensures that ice is produced rapidly and continuously, meeting high demand.<br/>
                                    Unlike traditional ice-makers, ICEUP’s system is capable of creating large quantities of ice
                                    in a shorter amount of time, without sacrificing quality.</p>
                            </div>
                            <div className="mb-14">
                                <h4 className="mb-9">| ICE BREAKING MECHANISM</h4>
                                <p>A standout feature of ICEUP is its automatic ice-breaking mechanism.<br/>
                                    After the ice is produced in stick form, it is essential for the system to break the ice
                                    into smaller, more usable pieces. This is accomplished by utilizing the natural fracture
                                    lines and micro-cracks within the ice. The system activates a mechanical process that
                                    efficiently breaks the ice into smaller chunks without the need for manual intervention.
                                </p>
                                <p><span className="fw-bold">Ice Sticks are Automatically Ejected:</span><br/>
                                    As the ice sticks are formed, they are automatically ejected from the ice-making chamber
                                    and are prepared for the breaking process.</p>
                                <p><span className="fw-bold">Smart Ice Breaking:</span><br/>
                                    Utilizing the inherent microfractures in the ice, the breaking system quickly and efficiently
                                    separates the ice into small, nugget-sized pieces. This process ensures that the ice can be
                                    used immediately without any further effort from the user.</p>
                                <p><span className="fw-bold">Ice Flows into Storage:</span><br/>
                                    Once the ice is broken, it flows into the storage container where it is kept at an optimal
                                    temperature for immediate use.</p>
                            </div>
                            <div className="mb-14">
                                <h4 className="mb-9">| ICE STORAGE AND MANGEMENT SYSTEM</h4>
                                <p>The ice produced by ICEUP is stored in an automated ice storage system that preserves
                                    the ice at an ideal temperature. As the broken ice flows into storage, the system ensures
                                    that the ice remains fresh and ready for use. The storage system is designed with precise
                                    temperature regulation to prevent the ice from melting or degrading, ensuring that it
                                    remains in the best possible condition for as long as possible.
                                </p>
                                <p>ICEUP also features a smart ice management system. When the ice level in the storage
                                    container drops below a certain threshold, the system automatically triggers the
                                    production of more ice. This ensures a continuous supply of ice, maintaining the system's
                                    efficiency and availability.</p>
                            </div>
                            <div className="mb-6">
                                <h4 className="mb-9">| ENERGY-EFFICIENT AND ECO-FRIENDLY DESIGN</h4>
                                <p>ICEUP is designed with a focus on energy efficiency and environmental sustainability.<br/>
                                    The system utilizes the Recipro Compressor, known for its minimal energy consumption
                                    and maximum efficiency, which reduces both operational costs and environmental impact.
                                </p>
                                <p>Additionally, ICEUP employs eco-friendly refrigerants that comply with global standards.<br/>
                                    The entire system is engineered to minimize energy waste while still maintaining high ice
                                    production capacity. By optimizing the energy usage throughout the ice-making process,
                                    ICEUP offers a solution that is not only cost-effective but also eco-friendly, making it a
                                    sustainable choice for modern ice production.</p>
                            </div>
                            <div className="go-link mt-0">
                                <Link href="/promotion-center/promotion-videos" className="shadow d-inline-block me-7">WATCH VIDEOS <Image src="/img/iceup/arrow.png" alt="" width={44} height={19}/></Link>
                                <Link href="/customer/inquiry" className="shadow d-inline-block">Contact Us <Image src="/img/iceup/arrow.png" alt="" width={44} height={19}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer language={language}/>
        </Fragment>
    );
}
