'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useAppSelector } from "store/hooks"
interface Props {
    contentsType : string
}
export default function ListContentsTypeBox ({contentsType} : Props) {
    console.log(contentsType)
    const contentTypeList = useAppSelector((state) => (state.contentTypeData.contentType.contentType))
    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function typeChange (e:React.ChangeEvent<HTMLSelectElement>) {
        const newParams : string | any = new URLSearchParams(query.toString())
        newParams.set('contentsType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select onChange={typeChange} value={contentsType} name="" id="">
                <option value="0">전체 카테고리</option>
                {contentTypeList?.map((list:any, index:number)=>(
                    <option key={index} value={list?.codeId}>{list?.codeName}</option>
                ))}
            </select>
        </div>
        </>
    )
}