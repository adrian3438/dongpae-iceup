'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useTranslation } from "react-i18next"

export default function LangBox () {
    const router = useRouter()
    const query = useSearchParams()
    const currentRoute = usePathname()
    const [cookie , setCookie] = useCookies(['LANG'])
    const [lang , setLang] = useState<any>(null)
    const {t, i18n} = useTranslation()
    function handleLang (e : any, lang : string) {
        e.preventDefault()
        setCookie('LANG', lang, {path : '/'})
        i18n.changeLanguage(lang)
        // 언어 변경 시 , url 변경
        const newParams = new URLSearchParams(query.toString())
        newParams.set('lang', lang)
        router.push(`${currentRoute}?${newParams?.toString()}`)
    }
    
    useEffect(()=>{setLang(cookie.LANG)} , [setCookie, cookie])
    return (
        <>
        <li className="nav-item dropdown language-select">
            <a
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                className="nav-link dropdown-item dropdown-toggle">
            {lang === 'kr' && 'KO'}
            {lang === 'en' && 'EN'}
            </a>
            <ul className="dropdown-menu">
            <li className="nav-item">
                <button className="dropdown-item" onClick={(e)=>handleLang(e,'kr')}>
                Ko
                </button>
            </li>
            <li className="nav-item">
                <button className="dropdown-item" onClick={(e)=>handleLang(e,'en')}>
                En
                </button>
            </li>
            </ul>
        </li>
        </>
    )
}