'use client'

import AdminListFilter from "components/DotsAdmin/List/ListFilter";
import AdminListSearchBox from "components/DotsAdmin/List/ListSearchBox";
import PromotionVideoTypePopup from "components/DotsAdmin/PromotionVideo/Popup/PromotionVideoTypePopup";
import useCalCulateIndex from "components/useCalculate";
import axios from "lib/api";
import {useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";

export default function PromotionVideoTypeList () {
    const searchParams= useSearchParams();

    const page : any = searchParams.get('page') || '1';
    const size : any = searchParams.get('size') || '25';
    const keyword : any = searchParams.get('keyword') || '';
    const order : any = searchParams.get('order') || 'desc';
    const column : any = searchParams.get('column') || 'videoTypeMdate';

    const [data, setData] = useState<any>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const [popup, setPopup] = useState<any>({isOpen : false, id : 0})
    async function getList () {
        const res = await axios.get(`/admin/contents/setup/getPromotionVideoTypeList.php?page=${page}&size=25&keyword=${keyword}&sortColumn=${column}&sortOrder=${order}`)
        if(res.data.result === true) setData(res.data.list); setTotalCount(res.data.totalCnt)
    }

    async function handleChangeStatus (id : any , status : string) {
        const formData = new FormData()
        formData.append('codeId', id)
        formData.append('codeActiveStatus', status === 'Y' ? 'N' : 'Y')
        const res = await axios.post(`/admin/contents/setup/updPromotionVideoTypeActiveStatus.php`, formData)
        if(res.data.result === true) getList();
    }
    function handleOpen (id : any) {
        setPopup((prev:any) => ({...prev, isOpen : true, id : id}))
    }
    function handleClose () {
        setPopup((prev:any) => ({...prev, isOpen : false, id : 0}))
    }
    useEffect(() => {
        getList()
    }, [keyword])
    return(
        <>
            <div className="contentBox prVideo_type">
                <h3>PR Video</h3>
                <div className="flexBox">
                    <div>
                        <h4>홍보영상 유형 리스트</h4>
                    </div>
                </div>
                {/* <!-- 제목, 버튼 영역 Fin --> */}

                <div className="toolBox">
                    <div className="left">
                        <AdminListSearchBox
                            page={page}
                            size={size}
                            keyword={keyword}
                            order={order}
                            column={column}
                        />
                    </div>
                    {/* <!-- left Fin --> */}

                    <div className="right">
                        <div className="btnBox">
                            <button className="blueBtn" onClick={()=>handleOpen(0)}>신규등록</button>
                        </div>
                    </div>
                    {/* <!-- right Fin --> */}
                </div>
                {/* <!-- toolBox Fin --> */}

                <div className="tableWrap">
                    <div className="tableType_a hover">
                        <table>
                            <AdminListFilter
                                page={page}
                                size={size}
                                keyword={keyword}
                                order={order}
                                column={column}
                            />
                            <tbody>
                            {data?.map((list:any, index:number) => (
                                <tr>
                                    <td>
                                        <span className="readOnly">{useCalCulateIndex(page, size, totalCount, index)}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly">{list?.codeName}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly">{list?.codeMdate}</span>
                                    </td>
                                    <td>
                                        <div className="toggleSwitchBox">
                                        <span className="toggleSwitch">
                                            {/* <!-- id값과 for 값은 고유값으로 한쌍씩 같아야 토글애니메이션 작동합니다. --> */}
                                            <input
                                                type="checkbox"
                                                id={`videoType_${list?.codeId}`}
                                                className="toggleIpt"
                                                checked={list?.codeActiveStatus === 'Y'}
                                                onChange={()=>handleChangeStatus(list?.codeId, list?.codeActiveStatus)}
                                                hidden
                                            />
                                            <label htmlFor={`videoType_${list?.codeId}`} className="toggleSwitch">
                                                <span className="toggleButton"></span>
                                            </label>
                                        </span>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="editBtn" onClick={()=>handleOpen(list?.codeId)}></button>
                                    </td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <!-- table Fin --> */}
            </div>
            {popup?.isOpen &&
                <PromotionVideoTypePopup
                    id={popup?.id}
                    refetch={getList}
                    onClose={handleClose}
                />
            }
        </>
    )
}
