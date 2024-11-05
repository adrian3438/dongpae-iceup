'use client';

import ListContentsTypeBox from "components/DotsAdmin/List/ListContentsTypeBox";
import AdminListFilter from "components/DotsAdmin/List/ListFilter";
import AdminListSearchBox from "components/DotsAdmin/List/ListSearchBox";;
import AdminListSizeBox from "components/DotsAdmin/List/ListSizeBox";
import Paginate from "components/DotsAdmin/Paginate/paginate";
import useCalCulateIndex from "components/useCalculate";
import axios from "lib/api";

import { useEffect, useState } from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function PromotionVideoList () {
    const router = useRouter();
    const searchParams = useSearchParams();

    const contentsType = searchParams.get('c') || 0;
    const page = searchParams.get('page') || '1';
    const size = searchParams.get('size') || '25';
    const keyword = searchParams.get('keyword') || '';
    const order = searchParams.get('order') || 'desc';
    const column = searchParams.get('column') || 'videoMdate';

    const [data, setData] = useState<any>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    function handlePage (pageNumber:number) {
        const currentPath = window.location.pathname;
        router.push(`${currentPath}?page=${pageNumber}&size=${size}&keyword=${keyword}&sortColumn=${column}&sortOrder=${order}`);
    }
    async function getList () {
        const res = await axios.get(
            // contentsType 이 빠져있었음
            `/admin/contents/getPromotionVideoList.php?page=${page}&size=${size}&keyword=${keyword}&sortColumn=${column}&sortOrder=${order}`
        )

        if(res.data.result === true) {
            setData(res.data.List);
            setTotalCount(res.data.totalCnt);
        }

    }

    async function handleChangeStatus (id : any, status : string) {
        const formData = new FormData()
        formData.append('videoId', id)
        formData.append('videoActiveStatus', status === 'Y' ? 'N' : 'Y')
        const res = await axios.post(`/admin/contents/updPromotionVideoActiveStatus.php`, formData)
        if(res.data.result === true) getList()
    }

    useEffect(() => {
        getList()
    }, [contentsType, page, size, keyword, column, order])

    return(
        <>
            <div className="contentBox prVideo_management">
                <h3>PR Video</h3>
                <div className="flexBox">
                    <div>
                        <h4>홍보영상 리스트</h4>
                    </div>
                </div>

                <div className="toolBox">
                    <div className="left">

                        <AdminListSizeBox
                            page={page}
                            size={size}
                            keyword={keyword}
                            order={order}
                            column={column}
                            contentsType={contentsType}
                        />

                        <div>
                            <ListContentsTypeBox
                                page={page}
                                size={size}
                                keyword={keyword}
                                column={column}
                                order={order}
                                contentsType={contentsType}
                            />

                            <AdminListSearchBox
                                page={page}
                                size={size}
                                keyword={keyword}
                                column={column}
                                order={order}
                                contentsType={contentsType}
                            />

                        </div>
                    </div>

                    <div className="right">
                        <div className="btnBox">
                            <button className="blueBtn" onClick={()=>router.push(`/admin/pr-video/promotion-video?t=regist`)}>신규등록</button>
                        </div>
                    </div>
                </div>

                <div className="tableWrap">
                    <div className="tableType_a thumb">
                        <table>
                            {/*<AdminListFilter
                                page={page}
                                size={size}
                                keyword={keyword}
                                column={column}
                                order={order}
                                contentsType={contentsType}
                            />*/}
                            <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">홍보영상 유형</th>
                                <th scope="col">제목</th>
                                <th scope="col">영상주소</th>
                                <th scope="col">게시일자</th>
                                <th scope="col">등록일자</th>
                                <th scope="col">공개여부</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data?.map((list:any, index:number) => (
                                <tr key={list?.videoId}>
                                    <td onClick={()=>router.push(`/admin/pr-video/promotion-video?t=${list?.videoId}`)}>
                                        <span className="readOnly">{useCalCulateIndex(page, size, totalCount, index)}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/admin/pr-video/promotion-video?t=${list?.videoId}`)}>
                                        <span className="readOnly">{list?.videoTypeName}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/admin/pr-video/promotion-video?t=${list?.videoId}`)}>
                                        <span className="readOnly">{list?.videoNameKr}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly"><a href={list?.videoUrlKr} target="_blank"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a></span>
                                    </td>
                                    <td onClick={()=>router.push(`/admin/pr-video/promotion-video?t=${list?.videoId}`)}>
                                        <span className="readOnly">{list?.videoPublishDate}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/admin/pr-video/promotion-video?t=${list?.videoId}`)}>
                                        <span className="readOnly">{list?.videoMdate}</span>
                                    </td>
                                    <td>
                                        <div className="toggleSwitchBox">
                                        <span className="toggleSwitch">
                                            <input
                                                type="checkbox"
                                                id={`video_${list?.videoId}`}
                                                className="toggleIpt"
                                                checked={list?.videoActiveStatus === 'Y'}
                                                onChange={()=>handleChangeStatus(list?.videoId, list?.videoActiveStatus)}
                                                hidden
                                            />
                                            <label htmlFor={`video_${list?.videoId}`} className="toggleSwitch">
                                                <span className="toggleButton"></span>
                                            </label>
                                        </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="pagerBox">
                    <p>Showing 1 to 10 of 98 entries</p>
                    <Paginate
                        page={page}
                        size={size}
                        totalCount={totalCount}
                        onPage={handlePage}
                    />
                </div>
            </div>
        </>
    )
}
