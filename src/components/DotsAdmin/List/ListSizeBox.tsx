'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    page? : any,
    size? : any,
    keyword? : any,
    column? : any,
    order? : any,
    contentsType? : any
    inquiryType? : any
    replyStatus? : any
}
export default function ListSizeBox ({
    size
} : Props) {
    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function sizeChange (e:React.ChangeEvent<HTMLSelectElement>) {
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('size', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <div className="selectBox">
        <select onChange={(e)=>sizeChange(e)} name="" id="" value={size} className="selectBox">
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
        </select>
        </div>
    )
}
