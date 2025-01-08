'use client'

import { useState } from 'react';
import {LoadScript } from '@react-google-maps/api';
import {GoogleMaps} from "./google-map"; // 패키지에서 필요한 컴포넌트 임포트



export default function Map() {
    const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
    return (
        <>
            <LoadScript
                googleMapsApiKey="AIzaSyC087DFe7YereRkKUwqUIXnQrMUf_1yA7M" // 여기에 실제 API 키를 넣으세요
                onLoad={() => setGoogleMapsLoaded(true)} // 로드 완료 후 상태 변경
            >
                {googleMapsLoaded ? (
                    <div style={{width: '100%', height: '100vh'}}>
                        <GoogleMaps address="" google={null}/>
                    </div>
                    ) : (
                    <div>Loading Map...</div>
                )}
            </LoadScript>
        </>
    );
}
