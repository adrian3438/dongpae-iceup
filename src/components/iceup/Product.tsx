import ModelViewer from "../Modeilng/ModelViewer";

interface Props {
    language : any
}
export default function Product({language} : Props) {
    return (
        <>
            <div style={{height:"80vh"}} className="d-flex align-items-center justify-content-between">
            <ModelViewer language={language}/>
            </div>
        </>
    );
}
