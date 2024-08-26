'use client'

import {usePathname} from "next/navigation";
export default function Brands() {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/brand/brand01' && (<>
                <div className="row align-items-center mb-12">
                    <div className="col-md-7">
                        <h2>ICEUP 제빙기</h2>
                        <p>투명하고 차가운 얼음이 깨끗함을 의미하지는 않지만, 대부분의 사람들은 이 사실을 쉽게 간과합니다.</p>
                        <p>아이스커피에 있는 얼음을 퍼올릴 때, 얼음 위로 떨어지는 세균과 제빙기 안에서 증식하는 세균이 내 입에 들어올 수 있다는 사실을 모르고 음료를 즐깁니다. 제빙기가 오염에 쉽게 노출된다는 것을 알면, 아마도 차가운 음료는 멀리하게 될지도 모릅니다.</p>
                        <p>일부 제빙기는 녹은 물을 재사용하여 얼음을 만듭니다. 구조적인 문제로 인해 급수 및 배수 호스에 곰팡이가 생기기도 합니다.</p>
                        <p>주 1회 제빙기 내부를 살균하고, 월 1회 부품을 분해해 세척 및 살균할 것을 권장하지만, 영업 중인 상태에서 제빙기를 분해 청소하는 것은 쉽지 않습니다. 특히 1인 영업장에서는 거의 불가능한 일입니다.</p>
                    </div>
                    <div className="col-md-5">
                        <img src="/img/iceup/brand-01-01.gif" alt="" className="w-100"/>
                    </div>
                </div>
                <div className="row align-items-center mb-12">
                    <div className="col-md-5">
                        <img src="/img/iceup/brand-01-02.gif" alt="" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2>ICEUP 제빙기는 이러한 문제를 해결하기 위해 탄생했습니다.</h2>
                        <p>북극의 얼음처럼 깨끗하고 신성한 얼음을 공급하기 위해 ICEUP 제빙기는 뷸렛 타입 얼음 제조 방식을 과감히 버리고 너겟 타입 얼음 제조 방식을 채택했습니다.</p>
                        <p>뷸렛 타입 얼음은 주변에서 가장 많이 사용하는 얼음입니다. 뷸렛 타입 얼음을 제조하기 위해서는 노즐을 통해 물을 보내고 급랭시켜 얼음을 적당히 키운 후, 얼음을 노즐과 분리하기 위해 가열합니다. 이러한 방식은 제빙기의 노후를 촉진시킵니다.</p>
                        <p>또한, 얼음의 가운데가 비어 있어 부피가 커지므로 얼음 보관함에 들어가는 얼음의 양이 줄어들어, 여러 명이 사용할 경우 얼음이 부족할 수 있습니다.</p>
                        <p>가정용 정수기에서 나오는 얼음은 보통 5명이 연속으로 사용할 경우, 뒷사람은 오랜 시간 기다려야 합니다.</p>
                    </div>

                </div>
            </>)}
        </>
    );
}
