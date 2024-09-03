import { fetchLanguage } from "utils/fetchLang";
import ProductsPage from "../../../../components/pages/ProductsPage";

export default async function PromotionCenter({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang)
    return (
        <>
            <ProductsPage language={language}/>
        </>
    );
}
