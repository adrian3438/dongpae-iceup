'use client'
import { usePathname, useRouter } from "next/navigation"
import AdminSideBar from "./DotsAdmin/SideBar"
import { useCookies } from "react-cookie"
import { useEffect } from "react"
import i18n from '../locale/i18n';
import { I18nextProvider } from "react-i18next"
import AdminHeader from "./DotsAdmin/AdminHeader"
import api from "lib/api"
import { useAppDispatch } from "store/hooks"
import Providers from "redux/provider"
import { Provider } from "react-redux"
import { store } from "store/store"
interface Props {
    ssid : string
}
export default function Container ({children , ssid} : any) {
    const pathname = usePathname()
    const splitPath = pathname.split('/')
    const [cookie, setCookie] = useCookies(['LANG'])
    const dispathch = useAppDispatch()
    async function getAdminInfo () {
        const response = await api.get(`/admin/manager/getManagerInfo.php?managerUuid=${ssid}`)
    }    
    useEffect(() => {
        if(cookie.LANG === undefined){
            setCookie('LANG', 'kr', {path : '/'})
            i18n.changeLanguage('kr')
        }else{
            i18n.changeLanguage(cookie?.LANG)
        }
    }, [cookie?.LANG, setCookie])
    
    useEffect(() => {
        if(splitPath[1] === 'admin'){
            getAdminInfo()
        }
    }, [dispathch , splitPath])
    return(
        <>
        {splitPath[1] === 'admin' ?
            <div className="admin_wrap">
                {splitPath[2] ? <AdminHeader/> : ''}
                {splitPath[2] ? <AdminSideBar/> : ''}

                <div className="dotsContentWrap">
                
                    {children}
                </div>
                
            </div>
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