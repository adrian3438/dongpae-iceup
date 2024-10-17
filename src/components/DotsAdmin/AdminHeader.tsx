'use client'

import { useRouter } from "next/navigation";
import { useAppSelector } from "../../store/hooks"
import Cookies from 'js-cookie'

export default function AdminHeader () {
    const userInfo : any = useAppSelector((state) => state.userData.users.users);
    const router = useRouter()
    console.log(userInfo)
    function handleLogout () {
        Cookies.remove('dissid');
        location.href = '/admin'
    }
    return(
        <>
        <div className="dotsHeader">
            <div className="header">
                <div>
                    <div>
                        <div>
                            <span>관리자 : {userInfo?.managerName}</span>
                            <i className="fa-regular fa-chevron-down"></i>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>handleLogout()}>로그아웃</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}