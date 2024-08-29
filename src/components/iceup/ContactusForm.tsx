'use client'

import api from "lib/api"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useTranslation } from "react-i18next"

export default function ContactUsForm () {
    const {t} = useTranslation()
    const [cookie, setCookie] = useCookies()
    const [data, setData] = useState({
        company : "", // 회사명
        name: "", // 이름
        position : "", // 직급
        email: "", // 이메일
        number: "", // 연락처
        type : "S", // 문의 유형
        message: "", // 문의내용
        attachedFile : null, // 첨부파일
        agreeTerms: false, // 필수동의
        adagree : false // 선택광고동의
    });
    const [fileName, setFileName] = useState<string>('')
    function handleChange (e : any) {
        const {name , type, value, files} = e.target
        if(type === 'file'){
            const reader = new FileReader()
            if(files[0]){reader.readAsDataURL(files[0])}
            reader.onload = () =>{
              setData((prev) => ({...prev, [name] : files[0]}))
              setFileName(files[0].name)
            }
          }else{
            setData((prev) => ({...prev, [name] : value}))
          }
    }
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;
        if(checked) {setData((prev) => ({...prev, [name] : true}))}
        else {setData((prev) => ({...prev, [name] : false}))}
    };

    async function handleSubmit (e: React.FormEvent) {
        // e.preventDefault()
        const formData : any = new FormData()
        formData.append('inquiryCompanyName', data?.company)
        formData.append('inquiryName', data?.name)
        formData.append('inquiryPosition', data?.position)
        formData.append('inquiryEmail', data?.email)
        formData.append('inquiryPhone', data?.number)
        formData.append('inquiryType', data?.type)
        formData.append('inquiryContent' , data?.message)
        if(cookie?.LANG === 'kr'){formData.append('inquiryLang', 'KR')}
        if(cookie?.LANG === 'en'){formData.append('inquiryLang', 'EN')}
        if(data?.attachedFile)formData.append('files_length', data?.attachedFile)
        formData.append('advertiseAgree', data?.adagree ? 'Y' : 'N')
        try {
          const response = await api.post(`/user/inquiry/setInquiry.php`, formData)
          if(response?.data?.result === true) {
            alert(response?.data?.resultMsg)
          }else{
            alert(response?.data?.resultMsg)
          }
        }catch {alert('Server Error')}
        // router.refresh()
      };
    return( 
        <>
        <div className="container">
            <h2 className="display-5 text-center">{t("faq_2")}</h2>
            <section className="row my-10 justify-content-center">
                <div className="row col-md-11">
                    <form className="contact-form needs-validation" method="post">
                        <div className="messages"></div>
                        <div className="row gx-4">
                            <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">1</span> {t("faq_2_1")} <span className="text-red">*</span></h3>
                            <div className="col-md-4">
                                <div className="form-floating mb-4">
                                    <input required type="text" name="company" onChange={handleChange} id="company_name" placeholder={t("faq_3")} className="form-control"/>
                                    <label htmlFor="company_name">{t("faq_3")} *</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating mb-4">
                                    <input required type="text" name="name" onChange={handleChange} id="customer_name" placeholder={t("faq_4")} className="form-control"/>
                                    <label htmlFor="customer_name">{t("faq_4")} *</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-floating mb-4">
                                    <input required type="text" name="position" onChange={handleChange} id="rank_name" placeholder={t("faq_5")} className="form-control"/>
                                    <label htmlFor="rank_name">{t("faq_5")} *</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-floating mb-4">
                                    <input required type="text" name="number" onChange={handleChange} id="email" placeholder={t("faq_6")} className="form-control"/>
                                    <label htmlFor="rank_name">{t("faq_6")} *</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating mb-4">
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        onChange={handleChange} 
                                        id="form_email"
                                        className="form-control"
                                        placeholder={t("faq_7")}
                                    />
                                    <label htmlFor="form_email">{t("faq_7")} *</label>
                                </div>
                            </div>
                        </div>

                        <div className="row gx-4 mt-8">
                            <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">2</span> {t("faq_8")} <span className="text-red">*</span></h3>
                            <div className="dots-dongpae-form2">
                                <div><input type="radio" id="questionType01" name="questionType"/><label htmlFor="questionType01" className="form-control text-center p-0">{t("faq_9")}</label></div>
                                <div><input type="radio" id="questionType02" name="questionType"/><label htmlFor="questionType02" className="form-control text-center p-0">{t("faq_10")}</label></div>
                                <div><input type="radio" id="questionType03" name="questionType"/><label htmlFor="questionType03" className="form-control text-center p-0">{t("faq_11")}</label></div>
                                <div><input type="radio" id="questionType04" name="questionType"/><label htmlFor="questionType04" className="form-control text-center p-0">{t("faq_12")}</label></div>
                                <div><input type="radio" id="questionType05" name="questionType"/><label htmlFor="questionType05" className="form-control text-center p-0">{t("faq_13")}</label></div>
                            </div>
                        </div>

                        <div className="row gx-4 mt-8">
                            <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">3</span> {t("faq_14")} <span className="text-red">*</span></h3>
                            <div className="col-12">
                                <div className="form-floating mb-4">
                            <textarea
                                required
                                name="message"
                                id="form_message"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Your message"
                                style={{height: 300}}
                            />
                                    <label htmlFor="form_message">Message *</label>
                                    <div className="valid-feedback"> Looks good!</div>
                                    <div className="invalid-feedback"> Please enter your messsage.</div>
                                </div>
                            </div>


                        </div>

                        <div className="row gx-4 mt-8">
                            <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">4</span> 
                            {t("faq_15")} 
                            <span className="text-red">*</span></h3>
                            <div className="col-md-4">
                                <input required type="file" name="attachedFile" id="file_upload" onChange={handleChange} className="form-control"/>
                            </div>
                        </div>

                        <div className="col-12 text-center mt-10">
                            <div className="form-check">
                                <div className="d-inline-block m-auto mb-5">
                                    <label className="form-check-label" htmlFor="flexCheck1">
                                    {t("faq_16")}
                                    </label>
                                    <input className="form-check-input" onChange={handleCheckboxChange} name="agreeTerms" type="checkbox" id="flexCheck1"/>
                                </div>
                                
                            </div>
                            <div className="form-check">
                                <div className="d-inline-block m-auto mb-5">
                                    <label className="form-check-label" htmlFor="flexCheck2">
                                    {t("faq_16_1")}
                                    </label>
                                    <input className="form-check-input" onChange={handleCheckboxChange} name="adagree" type="checkbox" id="flexCheck2"/>
                                </div>
                                
                            </div>
                            <input type="submit" onClick={handleSubmit} value={t("faq_17")} className="btn btn-primary rounded btn-send mb-3"/>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        </>
    )
}