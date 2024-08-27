'use client'

import {usePathname} from "next/navigation";
import { useTranslation } from "react-i18next";
export default function Guide() {
    const pathName = usePathname();
    const {t} = useTranslation()
    return (
        <>
            {pathName === '/guide/guide01' && (<div className="mb-15">
                <h2 className="mb-10">{t("guide_1")}</h2>
                <p>{t("guide_2")}<br/>
                {t("guide_3")}<br/>
                {t("guide_4")}
                </p>
                <p>{t("guide_5")}</p>
                <p>{t("guide_6")}<br/>
                {t("guide_7")}
                </p>
                <p>{t("guide_8")}</p>
                <p>{t("guide_9")}</p>
                <p>{t("guide_10")}</p>
                <p>{t("guide_11")}<br/>
                {t("guide_12")}
                </p>
                <p>
                {t("guide_13")}
                </p>
            </div>)}

            {pathName === '/guide/guide02' && (<div className="mb-15">
                <h2 className="mb-10">{t("guide_14")}</h2>
                <h3>{t("guide_15")}</h3>
                <h4>{t("guide_16")}</h4>
                <p>{t("guide_17")}</p>
                <p>{t("guide_18")}</p>
                <p>{t("guide_19")}</p>
                <h4>{t("guide_20")}</h4>
                <p>{t("guide_21")}</p>
                <table className="table table-responsive table-bordered text-center align-middle">
                    <thead>
                    <tr>
                        <th scope="col">{t("guide_22")}</th>
                        <th scope="col" colSpan={3}>{t("guide_23")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" rowSpan={6}>{t("guide_24")}</th>
                        <th scope="col">{t("guide_25")}</th>
                        <th scope="col">{t("guide_26")}</th>
                        <th scope="col">{t("guide_27")}</th>
                    </tr>
                    <tr>
                        <td>{t("guide_28")}</td>
                        <td>{t("guide_29")}</td>
                        <td>{t("guide_29")}</td>
                    </tr>
                    <tr>
                        <td>{t("guide_30")}</td>
                        <td>{t("guide_31")}</td>
                        <td>{t("guide_31")}</td>
                    </tr>
                    <tr>
                        <td>{t("guide_32")}</td>
                        <td>{t("guide_31")}</td>
                        <td>{t("guide_31")}</td>
                    </tr>
                    <tr>
                        <td>{t("guide_33")}</td>
                        <td>{t("guide_34")}</td>
                        <td>{t("guide_34")}</td>
                    </tr>
                    <tr>
                        <td>{t("guide_35")}</td>
                        <td>{t("guide_31")}</td>
                        <td>{t("guide_31")}</td>
                    </tr>
                    </tbody>
                </table>
                <h4>{t("guide_36")}</h4>
                <p>{t("guide_37")}</p>
                <p>{t("guide_38")}</p>
            </div>)}

            {pathName === '/guide/guide03' && (<div className="mb-15">
                <h2 className="mb-10">{t("guide_39")}</h2>
                <h3>{t("guide_41")}</h3>
                <h4>{t("guide_42")}</h4>
                <p><strong>{t("guide_43")}</strong><br/>
                {t("guide_44")}</p>
                <p><strong>{t("guide_45")}</strong><br/>
                {t("guide_46")}</p>
                <p><strong>{t("guide_47")}</strong><br/>
                {t("guide_48")}</p>
                <h4>{t("guide_49")}</h4>
                <p>{t("guide_50")}</p>
                <p><strong>{t("guide_51")}</strong><br/>
                {t("guide_52")}</p>
                <p><strong>{t("guide_53")}</strong><br/>
                {t("guide_54")}</p>
                <h4>{t("guide_55")}</h4>
                <p>{t("guide_56")}</p>
                <h4>{t("guide_57")}</h4>
                <p>{t("guide_58")}</p>
                <h4>{t("guide_59")}</h4>
                <p>{t("guide_60")}</p>
            </div>)}

            {pathName === '/guide/guide04' && (<div className="mb-15">
                <h2 className="mb-10">{t("guide_61")}</h2>
                <h3>{t("guide_62")}</h3>
                <p>{t("guide_63")}</p>
                <p>{t("guide_64")}</p>
                <p>{t("guide_65")}</p>
                <p>{t("guide_66")}</p>
                <p>{t("guide_67")}</p>
                <h4>{t("guide_68")}</h4>
                <p>{t("guide_69")}</p>
                <h3>{t("guide_70")}</h3>
                <h4>{t("guide_71")}</h4>
                <p>{t("guide_72")}<br/>{t("guide_73")}</p>
                <h4>{t("guide_74")}</h4>
                <p>{t("guide_75")}<br/>{t("guide_76")}</p>
                <h3>{t("guide_77")}</h3>
                <p>{t("guide_78")}</p>
                <p>{t("guide_79")}</p>
                <p>{t("guide_80")}</p>
                <p>{t("guide_81")}</p>
                <p>{t("guide_82")}</p>
                <h3>{t("guide_83")}</h3>
                <p>{t("guide_84")}</p>
            </div>)}
        </>
    );
}
