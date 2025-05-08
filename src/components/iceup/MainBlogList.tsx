

import Link from "next/link";
import api from "../../lib/api";
import FigureImage from "../reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";

interface Props {
    language: any
}

export default async function MainBlogList({language}: Props) {
    console.log(language.lang)
    const response = await api.get(`/user/promotion/getContentsList.php`, {
        params: {
            contentType: 1,
            userLang: language.lang === 'ko' ? 'KR' : 'EN',
            page: 1,
            size: 3,
            keyword: '',
            sortColumn: 'date',
            sortOrder: 'desc'
        }
    });
    const data = response?.data?.result === true ? response?.data : null

    return (
        <div className="wrapper my-10">
            <div className="container">
                <div className="row">
                    <h2 className="mb-6 text-center">{language.main_44}</h2>
                    <section className="row mb-10">
                        {data?.List?.map((list: any) => (
                            <article className="item post col-md-4 mb-5" key={list.ID}>
                                <div className="card">
                                    <figure className="card-img-top overlay overlay-1 hover-scale">
                                        <Link href={`/promotion-center/blog/${list.ID}`}>
                                            <FigureImage width={560} height={350} src={list.thumnailFile}/>
                                            <span className="bg"/>
                                        </Link>

                                        <figcaption>
                                            <h5 className="from-top mb-0">Read More</h5>
                                        </figcaption>
                                    </figure>

                                    <div className="card-body py-4">
                                        <div className="post-header">
                                            <h2 className="post-title h3 mt-3 mb-3 text-center">
                                                <NextLink title={list?.promSubject} className="link-dark" href={`/promotion-center/blog/${list?.ID}`}/>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}
