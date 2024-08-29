'use client'
import {Fragment} from "react";
import Navbar from "../../../../components/iceup/Navbar";
import Sidebar from "../../../../components/iceup/Sidebar";
import Footer from "../../../../components/iceup/Footer";
import { useTranslation } from "react-i18next";

export default function BlogDetail3() {
    const {t} = useTranslation()
    const promotions = [
        { id: 1, title: t("header_5"), url: '/promotion-center/catalogue'},
        { id: 2, title: t("header_6"), url: '/promotion-center/promotion-videos'},
        { id: 3, title: t("header_7"), url: '/promotion-center/blog'},
    ];
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                            <Sidebar title={t("header_4")} sidebarList={promotions} />
                        </aside>
                        <div className="col-lg-9 mt-8">
                            <section className="row my-10 justify-content-center">
                                <div className="col-md-12">
                                    <p className="fs-18 fw-600">{t("header_7")}</p>
                                    <h2 className="text-black fw-600">Barista water purifiers gain traction in Korea</h2>
                                    <p className="fs-16 fw-500">2024-08-09</p>
                                    <hr className="mt-5 mb-8"/>
                                    <article className="mb-8">
                                    Korean companies such as Cuckoo Homesys Co. and ChungHo Nais Co. are launching models that combine water purifier and coffee machine features, catering to the country’s growing number of home café enthusiasts seeking their unique taste preferences as well as South Korea’s growing coffee market. These products are especially popular among single and two-person households and newlyweds.
                                    <br/>
                                    <br/>
Cuckoo Homesys is at the forefront, with the company’s ‘Inspure Steam 100 Barista Water Purifier’ gaining popularity and seeing a monthly sales increase of 30 percent since its launch in October 2023. “It is receiving a lot of attention from consumers, reminiscent of when we first launched the industry’s first 100 degrees Celsius boiling water purifier in 2020,” a Cuckoo Homesys official said.
<br/>
<br/>

The barista water purifier is the first boiled water purifier in Korea with a coffee maker function, allowing users to create nine recipes according to their personal preferences. With three dedicated buttons for coffee brewing, users can select three levels of concentration, temperature, and volume to experience a variety of coffee flavors. It is possible to adjust the water temperature in three stages from 100 degrees Celsius to 85 degrees Celsius, allowing for output at the preferred water temperature. Users can also adjust the brewing conditions, including the number of extractions, to tailor the coffee’s strength and depth of flavor to their taste.
<br/>
<br/>

The barista water purifier is also equipped with an automatic drip module that automatically controls the flow rate and speed. This module evenly adjusts the strength and range of the water output to create a special coffee that matches individual preferences and recipes. It also offers a choice between a wide and narrow stream of water to provide various forms of coffee options, including hand drip and drip bag.
<br/>
<br/>

The barista water purifier also features a steam sterilization function that can manage the interior and exterior of the water outlet with steam at about 100 degrees Celsius, protecting against fine dust, various bacteria, and water scale. The direct water and cold water lines undergo automatic electrolysis sterilization, ensuring the water moves through hygienic conduits from the purifier to the cup.
<br/>
<br/>

The moving cork, which can move up and down by 50 millimeters (mm) and back and forth by 20mm, can be adjusted according to the size and position of the container. A touch slide bar allows for adjustment of the water output from 120 milliliters (ml) to 1,500ml in nine steps.
<br/>
<br/>

“Cuckoo Homesys Barista Water Purifier, with both brewing and purifying functions, will be a reasonable choice for consumers,” the official said.
                                    
<br/>
<br/>
source : https://pulse.mk.co.kr/news/english/10935269
</article>
                                    {/* <div className="mt-4 border-bottom">
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
                                    </div> */}
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
