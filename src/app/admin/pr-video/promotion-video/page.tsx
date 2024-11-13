'use client';
import axios from "lib/api";
import { useEffect, useState } from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function PromotionVideo() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isRouterReady, setIsRouterReady] = useState(false);
    const [data, setData] = useState<any>({
        videoType: '',
        videoNameKr: '',
        videoNameEn: '',
        videoUrlKr: '',
        videoUrlEn: '',
        videoPublishDate: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0], // 기본 날짜 설정
    });
    const [videoType, setVideoType] = useState<any>([]);

    const type: any = searchParams.get('t');

    // 라우터가 준비되었는지 확인
    useEffect(() => {
        // type 값이 있을 경우에만 특정 작업 수행
        if (type && type !== 'regist') {
            getDetail();
        }
    }, [type]);



    function handleChange(e: any) {
        const { name, value } = e.target;
        setData((prev: any) => ({ ...prev, [name]: value }));
    }

    async function getDetail() {
        const res = await axios.get(`/admin/contents/getPromotionVideoDetail.php?videoId=${type}`);
        if (res.data.Result === true) {
            const result = res.data.List[0];
            if (result) {
                setData((prev: any) => ({
                    ...prev,
                    videoType: 3,
                    videoNameKr: result.videoNameKr,
                    videoNameEn: result.videoNameEn,
                    videoUrlKr: result.videoUrlKr,
                    videoUrlEn: result.videoUrlEn,
                    videoPublishDate: result.videoPublishDate,
                }));
            }
        }
    }

    /*async function getPromotionType() {
        const res = await axios.get(`/admin/contents/setup/getPromotionVideoTypeList2.php?page=1&size=999&keyword=&sortColumn=idx&sortOrder=asc`);
        if (res.data.result === true) {
            setVideoType(res.data.list);
        }
    }*/

    async function handleSave() {
        const formData = new FormData();
        if (data?.videoType === '') {
            alert('유형을 선택해주세요.');
            return;
        }
        if (type !== 'regist') {
            formData.append('ID', type);
        }
        Object.keys(data).forEach((key: any) => {
            formData.append(key, data[key]);
        });
        const url = type === 'regist' ? '/admin/contents/setPromotionVideo.php' : '/admin/contents/updPromotionVideo.php';
        const res = await axios.post(url, formData);
        if (res.data.result === true) {
            alert(type === 'regist' ? "등록이 완료되었습니다." : "수정이 완료되었습니다.");
            // 수정된 부분: router.push()와 router.back()의 사용

            if (type === 'regist') {
                router.push('/admin/pr-video/promotion-video-list');
            } else {
                router.back(); // 이전 페이지로 이동
            }
        } else {
            alert(type === 'regist' ? '등록 중 오류가 발생했습니다.' : '수정 중 오류가 발생했습니다.');
        }
    }

    useEffect(() => {
        if (isRouterReady && type && type !== 'regist') {
            getDetail();
        }
    }, [isRouterReady, type]);

    /*useEffect(() => {
        getPromotionType();
    }, []);*/

    return (
        <>
            <div className="contentBox add">
                <h3>PR Video</h3>
                <div className="flexBox">
                    <div>
                        <h4>홍보영상 {type === 'regist' ? '등록' : '수정'}</h4>
                    </div>
                    <div className="btnBox">
                        <button className="blackBtn" onClick={() => router.back()}>목록으로</button>
                        <button className="blueBtn" onClick={handleSave}>저장하기</button>
                    </div>
                </div>

                <div className="input_tableWrap">
                    <table>
                        <tbody>
                        <tr>
                            <th>영상 유형 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                            <select name="videoType" id="videoType" onChange={handleChange} value={data.videoType}>
                                                <option value={''} disabled className="videoType">유형을 선택해 주세요.</option>
                                                <option value={3}>홍보영상</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>제목(KR) <span className="star">*</span></th>
                            <td>
                                <div className="inputBox">
                                    <input type="text" value={data.videoNameKr} onChange={handleChange} name="videoNameKr" id="videoNameKr" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>제목(EN) <span className="star">*</span></th>
                            <td>
                                <div className="inputBox">
                                    <input type="text" value={data.videoNameEn} onChange={handleChange} name="videoNameEn" id="videoNameEn" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>영상 링크(KR) <span className="star">*</span></th>
                            <td>
                                <div className="inputBox">
                                    <input type="text" value={data.videoUrlKr} onChange={handleChange} name="videoUrlKr" id="videoUrlKr" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>영상 링크(EN) <span className="star">*</span></th>
                            <td>
                                <div className="inputBox">
                                    <input type="text" value={data.videoUrlEn} onChange={handleChange} name="videoUrlEn" id="videoUrlEn" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>보도일자 <span className="star">*</span></th>
                            <td>
                                <div className="dateBox">
                                    <input type="date" value={data.videoPublishDate} onChange={handleChange} name="videoPublishDate" id="date" />
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
