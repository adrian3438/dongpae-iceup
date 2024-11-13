'use client';

import {useEffect, useState} from "react";
import api from "../../lib/api";

interface Props {
    language : any
}

interface Video {
    videoNameKr: string
    videoNameEn: string
    videoUrlKr: string
    videoUrlEn: string
}

export default function PromotionVideoList({language}: Props) {
    const [videoData, setVideoData] = useState<Video[]>([]);
    async function getVideoList() {
        try {
            const response = await api.get(`/user/promotion/getPrVideoList.php`)
            if(response?.data?.Result === true) {
                setVideoData(response?.data?.List);
            } else {
                alert(response?.data?.resultMsg);
            }
        }catch{
            alert('Server Error')
        }
    }
    useEffect(() => {
        getVideoList();
    }, []);

    return (
        <>
            {videoData?.length > 0 && (
                <section className="row mb-12 justify-content-center rounded">
                    <div className="dots-main-video dots-main-video2 rounded col-md-10">
                        <iframe src={`${language.lang === 'ko' ? videoData[0].videoUrlKr : videoData[0].videoUrlEn}?badge=0&autopause=0`} title={language.lang === 'ko' ? videoData[0]?.videoNameKr : videoData[0]?.videoNameEn} allowFullScreen>
                        </iframe>
                    </div>
                </section>
            )}

            {videoData?.length > 1 && (
                <section className="row justify-content-center mb-10">
                    <div className="col-md-10">
                        <h3>{language.example_1}</h3>
                        <hr className="mt-5 mb-10"/>
                        <div className="row">
                            {videoData.map((video: Video, index) => (
                                index !== 0 && (
                                <div className="col-md-6 mb-6" key={index}>
                                    <div className="dots-main-video rounded">
                                        <iframe src={`${language.lang === 'ko' ? video.videoUrlKr : video.videoUrlEn}`} title={language.lang === 'ko' ? video?.videoNameKr : video?.videoNameEn}>
                                        </iframe>
                                    </div>
                                </div>
                                )
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/*<section className="row justify-content-center mb-10">
                <div className="col-md-10">
                    <h3>{language.example_1}</h3>
                    <hr className="mt-5 mb-10"/>
                    <div className="row">
                        <div className="col-md-6 mb-6">
                            <div className="dots-main-video rounded">
                            <iframe src="https://player.vimeo.com/video/1003088041?badge=0&autopause=0&player_id=0&app_id=5847958479" title="ICEUP-ICEMAKER-compare" allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="dots-main-video rounded">
                                <iframe src="https://player.vimeo.com/video/1003088016?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" title="ICEUP ICEMAKER-music" allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
        </>
    )
}
