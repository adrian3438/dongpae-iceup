import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/iceup/Navbar";
import Footer from "components/iceup/Footer";
import Sidebar from "../iceup/Sidebar";
import Product from "../iceup/Product";
import { useTranslation } from "react-i18next";
import Product2 from "../iceup/Product2";

interface Props {
    language : any
    id: any;
    view: string;
}
export default function ProductsPage({language, id, view} : Props) {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>

            {/* ========== main content ========== */}
            <div className="mt-8 container">
                {id === 'product01' && <Product language={language} modelId={id} view={view}/>}
                {id === 'product02' && <Product2 language={language} modelId={id} view={view}/>}
            </div>

            {/* ========== footer section ========== */}
            <Footer language={language}/>
        </Fragment>
    );
}
