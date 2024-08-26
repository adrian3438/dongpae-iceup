'use client'

import {usePathname} from "next/navigation";
export default function Guide() {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/guide/guide01' && (<div className="mb-15">
                <h2 className="mb-10">설치 가이드</h2>
                <p>설치 시 세트와 5 cm 이상 사이를 두고 바닥이 튼튼하고 평평한 곳에 설치하세요.<br/>
                    설치할 곳 바닥면의 수평을 확인 후 기울지 않은 곳에 설치하세요.<br/>
                    임의로 정수기를 상하 또는 좌우로 연결 시 분해 및 조립에 따른 파손 및 상해 위험이 있습니다.
                </p>
                <p>정수기 설치 시 바닥이 고르지 않으면 진동과 소음 발생 및 수평이 맞지 않는 원인이 되며 정수기가 넘어져 다칠 수 있습니다.</p>
                <p>설치 시 교류 220 V / 60 Hz / 정격 15 A 이상의 단독 전원 사용 필요하며 멀티탭 적용시는 접지 단자가 있는 단독 멀티탭 1구 사용해 주세요.<br/>
                    멀티탭이나 다른 기기와 병행하여 사용하는 경우 차단기가 떨어지거나 감전, 화재의 원인이 됩니다.
                </p>
                <p>반드시 상수원(식수) 냉수 배관에 연결하고 다음의 수압, 수질 범위에서 사용하세요.</p>
                <p>- 수압 : 1.5 kgf/cm² ~ 8.4 kgf/cm²</p>
                <p>- 수도꼭지를 틀어서 1회용 종이컵(200 cc)에 10초 이내 물이 차면 됩니다.</p>
                <p>설치는 설치공간에 따라 직렬 및 병렬로 설치할 수 있습니다.<br/>
                    - 메인 파우셋은 본체로부터 1.5 m이내, 서브 파우셋은 8.0 m 이내로 설치를 합니다.
                </p>
                <p>
                    - 파우셋 설치 시 싱크대 또는 싱크볼 상판 타공이 필요합니다.(메인 파우셋 : 타공 25 Φ (지름25 mm) , 서브 파우셋 : 타공15 Φ (지름15 mm))
                </p>
            </div>)}

            {pathName === '/guide/guide02' && (<div className="min-vh-70">
                내용 추가 예정
            </div>)}

            {pathName === '/guide/guide03' && (<div className="min-vh-70">
                내용 추가 예정
            </div>)}

            {pathName === '/guide/guide04' && (<div className="min-vh-70">
                내용 추가 예정
            </div>)}
        </>
    );
}
