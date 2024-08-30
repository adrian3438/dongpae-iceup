'use client'

import {usePathname} from "next/navigation";
import { useTranslation } from "react-i18next";
interface Props {
    language : any
}
export default function Guide({language} : Props) {
    const pathName = usePathname();
    return (
        <>
            {pathName === '/guide/guide01' && (<div className="mb-15">
                <h2 className="mb-10">{language.guide_1}</h2>
                <p>{language.guide_2}<br/>
                {language.guide_3}<br/>
                {language.guide_4}
                </p>
                <p> {language.guide_5}</p>
                <p> {language.guide_6}<br/>
                {language.guide_7}
                </p>
                <p>{language.guide_8}</p>
                <p>{language.guide_9}</p>
                <p>{language.guide_10}</p>
                <p>{language.guide_11}<br/>
                {language.guide_12}
                </p>
                <p>
                {language.guide_13}
                </p>
            </div>)}

            {pathName === '/guide/guide02' && (<div className="mb-15">
                <h2 className="mb-10">{language.guide_14}</h2>
                <h3>{language.guide_15}</h3>
                <h4>{language.guide_16}</h4>
                <p>{language.guide_17}</p>
                <p>{language.guide_18}</p>
                <p>{language.guide_19}</p>
                <h4>{language.guide_20}</h4>
                <p>{language.guide_21}</p>
                <table className="table table-responsive table-bordered text-center align-middle">
                    <thead>
                    <tr>
                        <th scope="col">{language.guide_22}</th>
                        <th scope="col" colSpan={3}>{language.guide_23}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" rowSpan={6}>{language.guide_24}</th>
                        <th scope="col">{language.guide_25}</th>
                        <th scope="col">{language.guide_26}</th>
                        <th scope="col">{language.guide_27}</th>
                    </tr>
                    <tr>
                        <td>{language.guide_28}</td>
                        <td>{language.guide_29}</td>
                        <td>{language.guide_29}</td>
                    </tr>
                    <tr>
                        <td>{language.guide_30}</td>
                        <td>{language.guide_31}</td>
                        <td>{language.guide_31}</td>
                    </tr>
                    <tr>
                        <td>{language.guide_32}</td>
                        <td>{language.guide_31}</td>
                        <td>{language.guide_31}</td>
                    </tr>
                    <tr>
                        <td>{language.guide_33}</td>
                        <td>{language.guide_34}</td>
                        <td>{language.guide_34}</td>
                    </tr>
                    <tr>
                        <td>{language.guide_35}</td>
                        <td>{language.guide_31}</td>
                        <td>{language.guide_31}</td>
                    </tr>
                    </tbody>
                </table>
                <h4>{language.guide_36}</h4>
                <p>{language.guide_37}</p>
                <p>{language.guide_38}</p>
            </div>)}

            {pathName === '/guide/guide03' && (<div className="mb-15">
                <h2 className="mb-10">{language.guide_39}</h2>
                <h3>{language.guide_41}</h3>
                <h4>{language.guide_42}</h4>
                <p><strong>{language.guide_43}</strong><br/>
                {language.guide_44}</p>
                <p><strong>{language.guide_45}</strong><br/>
                {language.guide_46}</p>
                <p><strong>{language.guide_47}</strong><br/>
                {language.guide_48}</p>
                <h4>{language.guide_49}</h4>
                <p>{language.guide_50}</p>
                <p><strong>{language.guide_51}</strong><br/>
                {language.guide_52}</p>
                <p><strong>{language.guide_53}</strong><br/>
                {language.guide_54}</p>
                <h4>{language.guide_55}</h4>
                <p>{language.guide_56}</p>
                <h4>{language.guide_57}</h4>
                <p>{language.guide_58}</p>
                <h4>{language.guide_59}</h4>
                <p>{language.guide_60}</p>
            </div>)}

            {pathName === '/guide/guide04' && (<div className="mb-15">
                <h2 className="mb-10">{language.guide_61}</h2>
                <h3>{language.guide_62}</h3>
                <p>{language.guide_63}</p>
                <p>{language.guide_64}</p>
                <p>{language.guide_65}</p>
                <p>{language.guide_66}</p>
                <p>{language.guide_67}</p>
                <h4>{language.guide_68}</h4>
                <p>{language.guide_69}</p>
                <h3>{language.guide_70}</h3>
                <h4>{language.guide_71}</h4>
                <p>{language.guide_72}<br/>{language.guide_73}</p>
                <h4>{language.guide_74}</h4>
                <p>{language.guide_75}<br/>{language.guide_76}</p>
                <h3>{language.guide_77}</h3>
                <p>{language.guide_78}</p>
                <p>{language.guide_79}</p>
                <p>{language.guide_80}</p>
                <p>{language.guide_81}</p>
                <p>{language.guide_82}</p>
                <h3>{language.guide_83}</h3>
                <p>{language.guide_84}</p>
            </div>)}
        </>
    );
}
