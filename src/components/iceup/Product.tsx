import ModelViewer from "../Modeilng/ModelViewer";

interface Props {
    language : any
}
export default function Product({language} : Props) {
    return (
        <>
            <div style={{height:"80vh"}}>
            <ModelViewer/>
            </div>
        </>
    );
}
