import api from "lib/api";
import PromotionCenterPage from "../../../components/pages/PromotionCenterPage";
import { fetchLanguage } from "utils/fetchLang";

export default async function PromotionCenter({params, searchParams : {id, lang}} : string | any) {
    const language = await fetchLanguage(lang)
    // async function fetchContentsList (contentsType : string) {
    //     const response = await api.get(`/user/promotion/getContentsList.php?contentType=${contentsType}&userLang=${'KR'}`)
    // }
    // switch(id) {
    //     case 'catalogue' : fetchContentsList('1');
    // }
    // const response = await api.get(`https://marineplaza.org/iceup-api/controller/user/promotion/getContentsList.php?contentsType=${1}&userLang=${'KR'}`)
    return (
        <>
            <PromotionCenterPage language={language}/>
        </>
    );
}
