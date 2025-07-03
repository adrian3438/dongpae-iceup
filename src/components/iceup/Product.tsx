import ModelViewer from "../Modeilng/ModelViewer";

interface Props {
    language : any;
    modelId: string;
    view: string;
}
export default function Product({language, modelId, view} : Props) {
    return (
        <>
          <div className="d-flex align-items-center justify-content-between row pb-10">
            <p className="mb-0"><span className="d-inline-block mt-1" style={{background: 'rgb(0, 229, 255)', padding: '7px', borderRadius: '10px', width: '10px', height: '10px'}}></span> {language?.product_37}</p>
            <ModelViewer language={language} modelId={modelId} view={view}/>
          </div>
        </>
    );
}
