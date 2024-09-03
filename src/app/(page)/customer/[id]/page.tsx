import { fetchLanguage } from "utils/fetchLang";
import CustomerPage from "../../../../components/pages/CustomerPage";

export default async function Customer({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang)
    return (
        <>
            <CustomerPage language={language}/>
        </>
    );
}
