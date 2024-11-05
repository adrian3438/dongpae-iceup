import axios from "lib/api"
import { useEffect, useState } from "react"

interface Props {
    id : any,
    refetch : Function
    onClose : Function
}
export default function PromotionVideoTypePopup ({id, refetch, onClose} : Props) {

    const [data, setData] = useState<any>({
        codeNameKr : '', codeNameEn : ''
    })

    async function getDetail () {
        const res = await axios.get(`/admin/contents/setup/getPromotionVideoTypeDetail.php?codeId=${id}`)
        if(res.data.result === true) {
            const result = res.data.list[0]
            setData((prev:any) => ({...prev, codeNameKr : result.codeNameKr, codeNameEn : result.codeNameEn}))
        }
    }

    async function handleSave () {
        const formData = new FormData()
        if(id !== 0) {formData.append('codeId', id)}
        formData.append('codeNameKr' , data?.codeNameKr)
        formData.append('codeNameEn' , data?.codeNameEn)
        if(id === 0) {
            const res = await axios.post(`/admin/contents/setup/setPromotionVideoType.php`, formData)
            if(res.data.result === true) onClose(); refetch();
        }else{
            const res = await axios.post(`/admin/contents/setup/updPromotionVideoType.php`, formData)
            if(res.data.result === true) onClose(); refetch();
        }
    }

    useEffect(()=>{
        if(id && id !== 0) getDetail()
    }, [id])

    return(
        <>
        <div className="popUpBox active">
            <div className="common">
                <div className="flexBox">
                    <h3>영상 유형</h3>
                </div>

                <div className="input_tableWrap">
                    <table>
                        <tbody>
                            <tr>
                                <th>홍보영상 유형(KR)</th>
                                <td>
                                    <div className="inputBox">
                                        <input type="text" value={data?.codeNameKr} onChange={(e)=>setData((prev:any)=>({...prev, codeNameKr : e.target.value}))} name="codeNameKr" id="codeNameKr"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>홍보영상 유형(EN)</th>
                                <td>
                                    <div className="inputBox">
                                        <input type="text" value={data?.codeNameEn} onChange={(e)=>setData((prev:any)=>({...prev, codeNameEn : e.target.value}))} name="codeNameEn" id="codeNameEn"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="btnBox right">
                    <button className="grayBtn" onClick={()=>onClose()}>닫기</button>
                    <button className="blueBtn" onClick={handleSave}>저장</button>
                </div>
            </div>
        </div>
        </>
    )
}
