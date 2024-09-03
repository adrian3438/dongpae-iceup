import {Fragment} from "react";
import Navbar from "../../../../../components/iceup/Navbar";
import Sidebar from "../../../../../components/iceup/Sidebar";
import Footer from "../../../../../components/iceup/Footer";
import { useTranslation } from "react-i18next";
import { fetchLanguage } from "utils/fetchLang";
import BlogDetailPage from "components/pages/blogDetail";
import { cookies } from "next/headers";
import api from "lib/api";
export default async function BlogDetail1({params, searchParams : {id, lang}} : any) {
    const language = await fetchLanguage(lang)
    const cookie = cookies()
    const cookieLang : any = cookie.get('LANG') || 'kr'
    const langValue = lang || cookieLang?.value
    const response = await api.get(`/user/promotion/getContentDetail.php?ID=${params.id}&contentType=${1}&userLang=${langValue}`)
    const data = response?.data?.result === true ? response?.data : null;
    console.log(data)
    return (
        <Fragment>
            {/* ========== header ========== */}
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />

            {/* ========== main content ========== */}
            <BlogDetailPage
                data={data}
                language={language}
            />

            {/* ========== footer section ========== */}
            <Footer language={language}/>
        </Fragment>
    );
}
