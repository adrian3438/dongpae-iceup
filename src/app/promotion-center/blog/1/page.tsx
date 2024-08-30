import {Fragment} from "react";
import Navbar from "../../../../components/iceup/Navbar";
import Sidebar from "../../../../components/iceup/Sidebar";
import Footer from "../../../../components/iceup/Footer";
import { useTranslation } from "react-i18next";
import { fetchLanguage } from "utils/fetchLang";
import BlogDetailPage from "components/pages/blogDetail";
export default async function BlogDetail1({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang)
    
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <BlogDetailPage
                language={language}
            />

            {/* ========== footer section ========== */}
            <Footer language={language}/>
        </Fragment>
    );
}
