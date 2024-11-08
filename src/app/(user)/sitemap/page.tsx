import { fetchLanguage } from "utils/fetchLang";
import SitemapPage from "../../components/pages/SitemapPage";

export default async function PromotionCenter({searchParams : {lang}} : any) {
  const language = await fetchLanguage(lang)
    return (
        <>
            <SitemapPage language={language}/>
        </>
    );
}
