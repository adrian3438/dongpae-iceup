'use client'
import Sidebar from "components/iceup/Sidebar";
import api from "lib/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {data : any, language : any}
export default function BlogDetailPage ({data , language} : Props) {
    const promotions = [
        { id: 1, title: language.header_5, url: '/promotion-center/catalogue'},
        { id: 2, title: language.header_6, url: '/promotion-center/promotion-videos'},
        { id: 3, title: language.header_7, url: '/promotion-center/blog'},
    ];
    const {List, prev , next} = data;
    const router = useRouter()
    function page (e : any, url : string) {
        e.preventDefault()
        router.push(``)
    }
    useEffect(()=>{
        async function fetchCountView () {
            if(List[0]?.ID) {
                const formData = new FormData()
                formData.append('ID', List[0]?.ID)
                const response = await api.post(`/user/promotion/updContentsViewCnt.php`, formData)
            }
        }
        fetchCountView()
    }, [data])
    return(
        <>
        <main className="content-wrapper">
            <div className="container">
                <div className="row">
                    <aside className="col-lg-3 sidebar mt-8 mt-lg-6">
                        <Sidebar title={language.header_4} sidebarList={promotions} />
                    </aside>
                    <div className="col-lg-9 mt-8">
                        <section className="row my-10 justify-content-center">
                            <div className="col-md-12">
                                <p className="fs-18 fw-600">{language.header_7}</p>
                                <h2 className="text-black fw-600">{List[0]?.promSubject}</h2>
                                <p className="fs-16 fw-500">{List[0]?.createDate}</p>
                                <hr className="mt-5 mb-8"/>
                                <article className="mb-8"
                                    dangerouslySetInnerHTML={{
                                        __html : List[0]?.description
                                    }}
                                >
                                
                                </article>
                                <div className="mt-4 border-bottom">
                                {prev?.length > 0 ? 
                                    <>
                                        {prev[0]?.prevUrl ? 
                                        <div className="py-4 px-5 border-top">
                                            <i className="bi bi-chevron-compact-up me-3"></i>
                                            <span className="text-black fw-bold me-4">이전글</span>
                                            <a href="#" onClick={(e)=>page(e, prev[0]?.prevUrl)} className="text-medium-gray fw-bold">{prev[0]?.prevSubject}</a>
                                        </div>
                                        :''
                                        }
                                    </>
                                    : ''
                                    }
                                    {next?.length > 0 ?
                                    <>
                                        {next[0]?.nextUrl ? 
                                        <div className="py-4 px-5 border-top">
                                            <i className="bi bi-chevron-compact-down me-3"></i>
                                            <span className="text-black fw-bold me-4">다음글</span>
                                            <a href="#" onClick={(e)=>page(e, next[0]?.nextUrl)} className="text-medium-gray fw-bold">{next[0]?.nextSubject}</a>
                                        </div>
                                        :''
                                        }
                                    </>
                                    :''
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}