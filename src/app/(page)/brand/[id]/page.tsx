import { fetchLanguage } from "utils/fetchLang";
import BrandPage from "../../../../components/pages/BrandPage";

export default async function Brand({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang)
    return (
        <>
            <BrandPage language={language}/>
        </>
    );
}
