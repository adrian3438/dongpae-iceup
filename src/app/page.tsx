import { fetchLanguage } from "utils/fetchLang";
import Main from "../components/pages/Main";

export default async function Home({searchParams : {lang}} : any) {
  const language = await fetchLanguage(lang)
  return (
      <>
        <Main language={language}/>
      </>
  );
}
