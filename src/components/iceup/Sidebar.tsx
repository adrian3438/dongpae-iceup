'use client'
import NextLink from "components/reuseable/links/NextLink";
import { usePathname } from 'next/navigation'
interface SidebarProps {
    title?: string;
    sidebarList?: {
        id?: number;
        title?: string;
        url?: string;
    }[];
}

export default function Sidebar({title, sidebarList}: SidebarProps): JSX.Element {
    const pathName = usePathname();
    return (
        <>
            <aside className="col-lg-12 sidebar mt-8 mt-lg-15">
                {/* ========== categories section ========== */}
                <div className="widget">
                    <h4 className="widget-title mb-3">{title}</h4>

                    <ul className="unordered-list bullet-primary text-reset">
                        {sidebarList?.map(({id, title, url}) => (
                            <li key={id}>
                                <NextLink title={title} href={`${url}`} className={`${pathName === url ? 'nav-link active' : ''}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}
