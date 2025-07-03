import { fetchLanguage } from "utils/fetchLang";
import ProductsPage from "components/pages/ProductsPage";

export default async function PromotionCenter({ params, searchParams }: { params: { id: string }, searchParams: { lang: string, view: string } }) {
    const language = await fetchLanguage(searchParams.lang);

    return (
        <>
            <ProductsPage language={language} id={params.id} view={searchParams.view}/>
        </>
    );
}
