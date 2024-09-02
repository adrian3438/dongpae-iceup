import api from "lib/api";
import PromotionCenterPage from "../../../components/pages/PromotionCenterPage";
import { fetchLanguage } from "utils/fetchLang";
import { cookies } from "next/headers";

export default async function PromotionCenter({params, searchParams : {id, lang}} : string | any) {
    const language = await fetchLanguage(lang)
    const cookie = cookies()
    const cookieLang : any = cookie.get('LANG') || 'kr'
    const langValue = lang || cookieLang?.value
    let contentType;
    switch (id) {
        case 'catalogue':
            contentType = '2';
            break;
        case 'blog':
            contentType = '1';
            break;
        case 'promotion-videos':
            contentType = '3';
            break;
        default:
            contentType = '1'; // Default to '1' if id is not matched
            break;
    }

    // Make the API request with the determined contentType
    const response = await api.get(`/user/promotion/getContentsList.php`, {
        params: {
            contentType,
            userLang: langValue,
            page: 1,
            size: 10,
            keyword: '',
            sortColumn: 'date',
            sortOrder: 'desc'
        }
        
    });
    console.log(contentType)
    const data = response?.data?.result === true ? response?.data : null
    return (
        <>
            <PromotionCenterPage data={data} language={language}/>
        </>
    );
}
