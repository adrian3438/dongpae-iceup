'use client'

import {usePathname} from "next/navigation";
export default function Product() {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/product/product01' && (<div className="mb-15">
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-01.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">UV 살균 LED</h2>
                        <p className="lead fs-lg pe-lg-5">내부를 UV 살균하여 항상 깨끗 물과 얼음을 공급합니다.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-03.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">LCD 디스플레이</h2>
                        <p className="lead fs-lg pe-lg-5">LCD 디스플레이 화면은 시스템의 필터 및 상태와 연결되어 알림을 줍니다.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-04.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">직관적인 UX</h2>
                        <p className="lead fs-lg pe-lg-5">터치 버튼으로 손쉬운 조작이 가능하며 직관적인 디자인으로 기능을 쉽게 파악할 수 있습니다.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-md-5">
                        <img src="/img/iceup/product-01-05.png" alt="ICEUP" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-6 mb-3">파란색 조명</h2>
                        <p className="lead fs-lg pe-lg-5">터치 버튼으로 손쉬운 조작이 가능하며 직관적인 디자인으로 기능을 쉽게 파악할 수 있습니다.</p>
                    </div>
                </div>
                <div className="row mb-12">
                    <p><strong>사용자 편의성</strong>: 정전식 터치 아이콘이 직관적이고 손쉬운 디스펜싱을 제공합니다.</p>
                    <p><strong>첨단 기술</strong>: 내부 마이크로프로세서가 시스템 기능을 제어하고 모니터링합니다.</p>
                    <p><strong>똑독한 관리</strong>: LCD 스마트 화면은 메시지, 시스템 상태 및 서비스 알림을 표시합니다.</p>
                    <p><strong>선명한 조명</strong>: 디스펜서에 설치된 파란색 조명은 시각적으로 맛있어 보이는 효과를 줍니다.</p>
                    <p><strong>여과 기술</strong>: 고급 역삼투압과 다단계 탄소 여과가 신선하고 깨끗한 음용수를 지속적으로 공급합니다.</p>
                    <p><strong>깨끗한 내부</strong>: 탱크 내 LED UV 기술, 항균 표면, 비접촉 필터 교체가 시스템 내부와 외부를 깨끗하게 유지합니다.</p>
                </div>
                <div className="row">
                    <h3>이렇게 즐기세요</h3>
                    <p>아이들을 위한 시원하고 맛있는 음료를 만들어 보세요.<br/>크기가 작아 아이들이 먹기에 좋아요.</p>
                    <p>어른들을 위한 위스키, 칵테일에도 좋아요. 얼음이 많이 들어가 더 시원하며, 오래먹을 수 있어요.</p>
                    <p>아이스커피에도 잘 어울려요.
                        작은 얼음은 음료를 빠르게 냉각시켜서 얼음이 녹는 속도가 느립니다.
                        음료의 맛을 오랫동안 유지할 수 있어요.</p>
                    <p></p>
                </div>
            </div>)}
        </>
    );
}
