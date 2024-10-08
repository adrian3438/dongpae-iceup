'use client'

import ChipInputBox from "components/DotsAdmin/ChipInput/chipInput"
import Summernote from "components/DotsAdmin/Editor/Summernote"
import ImageUploadBox from "components/DotsAdmin/Element/ImageUploadBox"
import TextAreaBox from "components/DotsAdmin/Element/TextAreaBox"
import TextBox from "components/DotsAdmin/Element/TextBox"
import api from "lib/api"
import { useAppSelector } from "store/hooks"
import Head from "next/head"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import BlogForm from "components/DotsAdmin/Contents/CotentsTypeForm/BlogForm"
import CatalogueForm from "components/DotsAdmin/Contents/CotentsTypeForm/CatalogueForm"
import VideosForm from "components/DotsAdmin/Contents/CotentsTypeForm/VideosForm"
interface Props {
    id : any
    lang : any
}
export default function ContentsPage ({
    id, lang
} : Props) {
    const router = useRouter()
    const query = useSearchParams()
    const managerInfo = useAppSelector((state) => state.userData.users.users)
    const contentTypeList = useAppSelector((state) => (state.contentTypeData.contentType.contentType))
    const [data, setData] = useState<any>({
        // 컨텐츠 유형 , 우선공지 , 공지상단 , 검색키워드 , 제목
        contentType : '1', prirorityNews : 'N', noticePrirority : 'N', searchKeyword : [], subject : '',
        // 보도자료 언론사 , 보도자료URL , 페이스북 , 링크드인 , 유튜브 , 트위터
        pressCenter : '', pressUrl : '', facebook : '', linkedIn : '', youtube : '', twitter : '', 
        // 전시기간 , 전시장소 , 전시 사업분야 , 전시 웹사이트 , 발췌내용
        exhibitionTerm : '', exhibitionPlace : '', exhibitionDivision : '', exhibitionWebsite  : '', excerpt : '',
        // 컨텐츠 내용 , 썸네일 이미지 , 첨부 파일 , 보도일자
        description : '', thumnailImage : null, attachedFile : null, date : ''
    })
    const [previewImage, setPreviewImage] = useState<any>({thumnailImage : null})
    async function detail () {
        try{
            const response = await api.get(`/admin/contents/getContentDetail.php?contentDetailId=${id}&lang=${lang}`)
            if(response?.data?.result == true) {
                const data = response?.data?.list[0];
                const fomatSearchKeyword = data?.searchKeywords?.split(',')
                setData((prev:any) => ({...prev, contentType : data?.contentType, subject : data?.contentName,
                    facebook : data?.facebookUrl, linkedIn : data?.linkedinUrl, youtube : data?.youtubeUrl, twitter : data?.twitterUrl,
                    searchKeyword : fomatSearchKeyword, excerpt : data?.promExcerpt, description : data?.promDescription
                }))
                setPreviewImage((prev:any) => ({...prev, thumnailImage : data?.thumnailImage}))
            }else {
                alert(response?.data?.resultMsg)
            }
        }catch {alert('Server Error')}
    }
    async function save () {
        try {
            if(!data?.description) {alert('컨텐츠 내용은 필수 입력입니다.'); return;}
            const formData = new FormData()
            if(id){
                formData.append('contentDetailId', id)
                formData.append('lang', lang) 
            }
            formData.append('managerId', managerInfo?.ID || 1);
            formData.append('contentType' , data?.contentType)
            formData.append('prirorityNews', data?.prirorityNews ? data?.prirorityNews : 'N')
            if(data?.thumnailImage){
                formData.append('thumnailImage', data?.thumnailImage);
            }
            formData.append('subject', data?.subject ? data?.subject : '');
            formData.append('searchKeywords', data?.searchKeyword ? data?.searchKeyword : '');
            formData.append('excerpt', data?.excerpt ? data?.excerpt : '');
            formData.append('description', data?.description ? data?.description :'');
            formData.append('exhibitionTerm', data?.exhibitionTerm ? data?.exhibitionTerm : '');
            formData.append('exhibitionPlace', data?.exhibitionPlace ? data?.exhibitionPlace : '');
            formData.append('exhibitionDivision', data?.exhibitionDivision ? data?.exhibitionDivision : '');
            formData.append('exhibitionWebsite', data?.exhibitionWebsite ? data?.exhibitionWebsite :'');
            formData.append('pressCenter', data?.pressCenter ? data?.pressCenter :'');
            formData.append('pressUrl', data?.pressUrl ? data?.pressUrl : '');
            formData.append('facebookUrl', data?.facebook ? data?.facebook : '');
            formData.append('linkedInUrl', data?.linkedIn ? data?.linkedIn : '');
            formData.append('youtubeUrl', data?.youtube ? data?.youtube  :'');
            formData.append('twitterUrl', data?.twitter ? data?.twitter : '');
            if(id) {
                const response = await api.post(`/admin/contents/updContent.php`, formData)
                if(response?.data?.result === true) {
                    alert(response?.data?.resultMsg); router.back()
                }else{
                    alert(response?.data?.resultMsg);
                }
            }else{
                const response = await api.post(`/admin/contents/setContent.php`, formData)
                if(response?.data?.result === true) {
                    alert(response?.data?.resultMsg); router.push(`/admin/contents-management/contents-list/`)
                }else{
                    alert(response?.data?.resultMsg);
                }
            }
        }catch{
            alert('Server Error')
        }
    }
    useEffect(() => {
        async function fetchDetail () {
            if(id && lang) {
                try{
                    const response = await api.get(`/admin/contents/getContentDetail.php?contentDetailId=${id}&lang=${lang}`)
                    if(response?.data?.result == true) {
                        const data = response?.data?.list[0];
                        const fomatSearchKeyword = data?.searchKeywords?.split(',')
                        setData((prev:any) => ({...prev, contentType : data?.contentType, subject : data?.contentName,
                            facebook : data?.facebookUrl, linkedIn : data?.linkedinUrl, youtube : data?.youtubeUrl, twitter : data?.twitterUrl,
                            searchKeyword : fomatSearchKeyword, excerpt : data?.promExcerpt, description : data?.promDescription
                        }))
                        setPreviewImage((prev:any) => ({...prev, thumnailImage : data?.thumnailImage}))
                    }else {
                        alert(response?.data?.resultMsg)
                    }
                }catch {alert('Server Error')}
            }
        }
        fetchDetail()
    }, [id, lang])
    useEffect(() => {
        const links = [
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
            },
            {
                rel: "stylesheet",
                href: "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css"
            }
        ];

        links.forEach(({ rel, href }) => {
            const link = document.createElement("link");
            link.rel = rel;
            link.href = href;
            document.head.appendChild(link);
        });

        // Cleanup function to remove the links when the component is unmounted or updated
        return () => {
            links.forEach(({ href }) => {
                const link = document.querySelector(`link[href="${href}"]`);
                if (link) {
                    document.head.removeChild(link);
                }
            });
        };
    }, []);
    return(
        <>
        
        <div className="contentBox add">
            <h3>Contents</h3>
            <div className="flexBox">
                <div>
                    <h4>콘텐츠</h4>
                </div>
                <div className="btnBox">
                    <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                    <button className="blueBtn" onClick={()=>save()}>{id ? '수정하기' : '저장하기'}</button>
                </div>
            </div>

            <div className="input_tableWrap">
                <table>
                    <tbody>
                        <tr>
                            <th>컨텐츠 유형 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                        <select value={data?.contentType} onChange={(e)=>setData((prev:any)=>({...prev, contentType : e.target.value}))} name="" id="">
                                            {contentTypeList?.map((list:any)=>(
                                                <option value={list?.codeId}>{list?.codeName}</option>
                                            ))}
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {data?.contentType === '1' &&
                        <BlogForm
                            id={id}
                            data={data}
                            setData={setData}
                            previewImage={previewImage}
                            setPreviewImage={setPreviewImage}
                        />}
                        {data?.contentType === '2' &&
                        <CatalogueForm

                        />}
                        {data?.cotentType === '3' &&
                        <VideosForm
                        
                        />}
                    </tbody>
                </table>
            </div>
            
        </div>
        </>
    )
}