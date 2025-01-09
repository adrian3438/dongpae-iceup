import ModelViewer2 from "../Modeilng/ModelViewer2";

interface Props {
    language : any
}
export default function Product2({language} : Props) {
    return (
        <>
            <div style={{height:"80vh"}} className="d-flex align-items-center justify-content-between">
            <ModelViewer2/>
            </div>
        </>
    );
}
