'use client'

import ChipInputBox from "components/DotsAdmin/ChipInput/chipInput"
import ImageUploadBox from "components/DotsAdmin/Element/ImageUploadBox"
import TextAreaBox from "components/DotsAdmin/Element/TextAreaBox"
import TextBox from "components/DotsAdmin/Element/TextBox"
import Summernote from "components/DotsAdmin/Editor/Summernote"

interface Props {
    id : any
    data : any
    setData : Function
    previewImage : any
    setPreviewImage : Function
}
export default function BlogForm ({
    id, data , setData , previewImage , setPreviewImage
} : Props) {

    return(
        <>
        <ImageUploadBox
            title={'썸네일 이미지'}
            name={'thumnailImage'}
            imgUrl={previewImage?.thumnailImage}
            setData={setData}
            setPreview={setPreviewImage}
        />
        <TextBox
            title={'제목'}
            name={'subject'}
            value={data?.subject}
            setData={setData}
        />
        <TextBox
            title={'페이스북 링크'}
            name={'facebook'}
            value={data?.facebook}
            setData={setData}
        />
        <TextBox
            title={'링크드인 링크'}
            name={'linkedIn'}
            value={data?.linkedIn}
            setData={setData}
        />
        <TextBox
            title={'유튜브 링크'}
            name={'youtube'}
            value={data?.youtube}
            setData={setData}
        />
        <TextBox
            title={'X 링크'}
            name={'twitter'}
            value={data?.twitter}
            setData={setData}
        />
        <tr>
            <th>보도일자 <span className="star">*</span></th>
            <td>
                <div className="dateBox">
                    <input type="date" value={data?.date} name="date" id="date"/>
                </div>
            </td>
        </tr>
        <tr>
            <th>검색 키워드 <span className="star">*</span></th>
            <td>
                <ChipInputBox
                    data={data}
                    setData={setData}
                />
                <p className="infoTxt">검색 키워드는 디케이락 회원이 등록된 컨텐츠을 검색할 경우 사용됩니다. 개별 키워드 입력 후 엔터키로 등록하시면 됩니다.</p>
            </td>
        </tr>
        <TextAreaBox
            title={'발췌'}
            name={'excerpt'}
            value={data?.excerpt}
            description={'발췌 글은 컨텐츠의 요약 내용으로 반드시 입력되어야 합니다.'}
            setData={setData}
        />
        <tr>
            <th>내용 <span className="star">*</span></th>
            <td>
                {id && data?.description ?
                <Summernote
                    initData={data?.description}
                    setData={setData}
                    name={'description'}
                /> : ''
                }
                {!id && 
                <Summernote
                    initData={data?.description}
                    setData={setData}
                    name={'description'}
                />
                }
            </td>
        </tr>
        </>
    )
}