import ModelViewer2 from "../Modeilng/ModelViewer2";

interface Props {
    language : any
}
export default function Product2({language} : Props) {
    return (
        <>
            <div style={{height:"80vh"}} className="d-flex">
            <ModelViewer2/>
            </div>
        </>
    );
}
