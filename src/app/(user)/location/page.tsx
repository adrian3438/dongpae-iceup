import { fetchLanguage } from "utils/fetchLang";
import Map from "../../../components/iceup/map/map";
import Navbar from "../../../components/iceup/Navbar";
import Footer from "../../../components/iceup/Footer";


export default async function PromotionCenter({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang)
    return (
        <>
            <Navbar lang={language} navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"/>
            <div className="location">
                <Map/>
            </div>
            <Footer language={language}/>
        </>
    );
}
