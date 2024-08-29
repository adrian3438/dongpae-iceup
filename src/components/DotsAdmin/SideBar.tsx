'use client'

import api from "lib/api"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAppDispatch } from "store/hooks"
import { setContentType } from "store/Slices/contentsTypeSlice"

export default function AdminSideBar () {
    const pathname = usePathname()
    const splitPath = pathname?.split('/')
    const router = useRouter()
    const dispatch = useAppDispatch()
    async function getContentsLTypeList () {
        const response = await api.get(`/admin/code/getContentsTypeList.php`)
        if(response?.data?.result === true) {
            dispatch(setContentType({contentType : response?.data?.List}))
        }
    }
    useEffect(()=> {getContentsLTypeList()}, [])
    return(
        <>
        {/* members. product. content. pr_video. certificate. inquiry. settings */}
        <aside>
            <h2>
                <img src="/img/iceup/logo-light.svg" alt="smilelab"/>
            </h2>
            <ul className="mainMenu">

                <li className={splitPath[2] === 'common-code-management' ? 'content active' : 'content'}>
                    <span onClick={()=>router.push(`/admin/common-code-management/common-code-list/`)}>공용코드 관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3]==='common-code-list'? 'active' : ''} onClick={()=>router.push(`/admin/common-code-management/common-code-list/`)}>
                            <span>공용코드</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'contents-management' ? 'content active' : 'content'}>
                    <span onClick={()=>router.push(`/admin/contents-management/contents-list/`)}>콘텐츠 관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3]==='contents-list' || splitPath[3]==='contents'? 'active' : ''} onClick={()=>router.push(`/admin/contents-management/contents-list/`)}>
                            <span>콘텐츠</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'inquiry-management' ? 'inquiry active' : 'inquiry'}>
                    <span onClick={()=>router.push(`/admin/inquiry-management/inquiry-list/`)}>문의관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3]==='inquiry-list'? 'active' : ''} onClick={()=>router.push(`/admin/inquiry-management/inquiry-list/`)}>
                            <span>문의접수</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'admin-account-management' ? 'settings active' : 'settings'}>
                    <span onClick={()=>router.push(`/admin/admin-account-management/admin-account-list/`)}>관리자 계정관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3]==='admin-account-list'? 'active' : ''} onClick={()=>router.push(`/admin/admin-account-management/admin-account-list/`)}>
                            <span>관리자 계정</span>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </aside>
        </>
    )
}