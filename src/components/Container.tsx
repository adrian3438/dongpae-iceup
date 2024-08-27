'use client'
import { usePathname, useRouter } from "next/navigation"
import AdminSideBar from "./DotsAdmin/SideBar"
import { useCookies } from "react-cookie"
import { useEffect } from "react"
import i18n from '../locale/i18n';
import { I18nextProvider } from "react-i18next"
import Providers from "../redux/provider"

export default function Container ({children} : any) {
    const pathname = usePathname()
    const splitPath = pathname.split('/')
    const [cookie, setCookie] = useCookies(['LANG'])
    useEffect(() => {
        if(cookie.LANG === undefined){
            setCookie('LANG', 'kr', {path : '/'})
            i18n.changeLanguage('kr')
        }else{
            i18n.changeLanguage(cookie?.LANG)
        }
    }, [cookie?.LANG, setCookie])
    return(
        <>
        {splitPath[1] === 'admin' ?
        <Providers>
            <div className="admin_wrap">

                {splitPath[2] ? <AdminSideBar/> : ''}

                <div className="dotsContentWrap">
                    {children}
                </div>
                
            </div>
        </Providers>

        :

        <div>
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </div>
        
        }
        </>
    )
}