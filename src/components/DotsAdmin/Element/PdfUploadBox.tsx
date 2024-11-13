'use client'
interface Props {
    setData : Function
}
export default function PdfUploadBox ({
    setData
} : Props) {
    function handleChange (e:any){
        console.log('test');
        const {name , files} = e.target;
        const reader = new FileReader()
        if(files[0]) {reader.readAsDataURL(files[0])}
        reader.onload = () => {
            setData((prev:any) => ({...prev, [name] : files[0]}))
        }
    }
    return(
        <>
            <tr>
                <th>카탈로그 PDF 파일</th>
                <td><input type="file" name="attachedFile" onChange={handleChange}/></td>
            </tr>
        </>
    )
}
