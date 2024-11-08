import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    inquiryType : string
}
export default function ListInquiryTypeBox ({inquiryType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('inquiryType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={inquiryType} name="" id="" onChange={search}>
                <option value="ALL" selected>전체</option>
                <option value="C" selected>기업용 제빙기</option>
                <option value="D" selected>대리점 모집</option>
                <option value="E" selected>해외수출</option>
                <option value="I" selected>투자문의</option>
                <option value="O" selected>기타문의</option>
            </select>
        </div>
        </>
    )
}
