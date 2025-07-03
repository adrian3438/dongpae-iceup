'use client';

import ModelViewer2 from "../Modeilng/ModelViewer2";
import {useRouter} from "next/navigation";

interface Props {
    language : any;
  modelId: string;
  view: string;
}
export default function Product2({language, modelId, view} : Props) {
  const router = useRouter();

    return (
        <>
          <div className="d-flex align-items-center justify-content-between row pb-10">
            {/*<p className='position-lg-absolute w-20' style={{gap: '0 6px', top: '10%'}}><span className="d-inline-block mt-1" style={{background: 'rgb(0, 229, 255)', padding: '7px', borderRadius: '10px', width: '10px', height: '10px'}}></span> {language?.product_37}</p>*/}
            <p className="mb-0"><span className="d-inline-block mt-1" style={{background: 'rgb(0, 229, 255)', padding: '7px', borderRadius: '10px', width: '10px', height: '10px'}}></span> {language?.product_37} <button className="btn btn-outline-primary btn-sm rounded-pill" onClick={() => router.push('/product/product02')}>{language?.product_37_01}</button></p>
            <ModelViewer2 language={language} modelId={modelId} view={view}/>
          </div>
        </>
    );
}
