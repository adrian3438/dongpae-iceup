import Link from "next/link";
import FigureImage from "../reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import {useEffect, useState} from "react";
import api from "../../lib/api";
interface Props {
    language: any
}

interface Catalog {
    thumnailFile: string
    promSubject: string
    attachedFile: string
}

export default function Catalog({language} : Props) {
    const [catalogList, setCatalogList] = useState<Catalog[]>([]);
    async function getCatalogList() {
        try {
            const response = await api.get(`/user/promotion/getContentsList.php`, {
                params: {
                    contentType: 2,
                    userLang: language.lang === 'ko' ? 'KR' : 'EN',
                    page: 1,
                    size: 10,
                    keyword: '',
                    sortColumn: 'date',
                    sortOrder: 'desc'
                }
            });
            if(response?.data?.result === true) {
                setCatalogList(response?.data?.List);
            } else {
                alert(response?.data?.resultMsg);
            }
        }catch{
            alert('Server Error')
        }
    }
    useEffect(() => {
        getCatalogList();
    }, []);

    return (
        <>
            {catalogList.length > 0 && (
                <section className="row mb-10">
                    {catalogList.map((item, index) => (
                        <article className="item post col-md-4 mb-5" key={index}>
                            <div className="card">
                                <figure className="card-img-top overlay overlay-1 hover-scale">
                                    <Link href={item.attachedFile} target={"_blank"}>
                                        <FigureImage width={560} height={350} src={item?.thumnailFile}/>
                                        <span className="bg"/>
                                    </Link>

                                    <figcaption>
                                        <h5 className="from-top mb-0">Read More</h5>
                                    </figcaption>
                                </figure>

                                <div className="card-body py-4">
                                    <div className="post-header">
                                        <h2 className="post-title h3 mt-3 mb-3 text-center">
                                            <NextLink title={item.promSubject} className="link-dark" href="#"/>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}

                </section>
            )}
        </>
    )
}
