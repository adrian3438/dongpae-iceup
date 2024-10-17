'use client'

export default function AdminHeader () {
    function handleLogout () {
        
    }
    return(
        <>
        <div className="dotsHeader">
            <div className="header">
                <div>
                    <div>
                        <div>
                            <span>관리자</span>
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