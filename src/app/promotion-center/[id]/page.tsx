import api from "lib/api";
import PromotionCenterPage from "../../../components/pages/PromotionCenterPage";

export default async function PromotionCenter() {
    // const response = await api.get(`/user/promotion/getContentsList.php?contentType=${'1'}&userLang=${'KR'}`)
    return (
        <>
            <PromotionCenterPage />
        </>
    );
}
