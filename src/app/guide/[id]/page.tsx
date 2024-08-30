import { fetchLanguage } from "utils/fetchLang";
import GuidePage from "../../../components/pages/GuidePage";

export default async function Guides({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang)
    return (
        <>
            <GuidePage language={language}/>
        </>
    );
}
