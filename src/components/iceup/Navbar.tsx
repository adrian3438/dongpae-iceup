"use client";

import { Fragment, ReactElement, useRef } from "react";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
// LOCAL CUSTOM COMPONENTS
import FancyHeader from "../../components/blocks/navbar/components/fancy-header";
import LangBox from "./Langbox";
import { useTranslation } from "react-i18next";

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
  lang?:any,
}
// ===================================================================

export default function Navbar({
  fancy,
  logoAlt,
  stickyBox = true,
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light",
  lang
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? "logo-dark" : logoAlt ?? "logo-dark";

  // dynamically added navbar className
  const fixedClassName = "navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed";
  // all main header contents
  const headerContent = (
      <Fragment>
        <div className="navbar-brand w-100">
          <NextLink href="/" title={<img alt="logo" src={`/img/iceup/${logo}.svg`} />} />
        </div>

        <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div className="offcanvas-header d-lg-none">
            <h3 className="text-white fs-30 mb-0">Sandbox</h3>
            <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white"/>
          </div>

          <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul className="navbar-nav">

              {/* ===================== nav ===================== */}
              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                {lang.header_1}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="/brand/brand01" title={lang.header_2}/>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                {lang.header_3}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="/product/product01" title="ICEUP"/>
                  </li>
                </ul>
              </li>

              {/*<li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                  사업영역
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="#" title="유통"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="제빵"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="가공"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="사우나/스파"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="연구실"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="화학산업"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="식당"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="기타"/>
                  </li>
                </ul>
              </li>*/}

              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                {lang.header_4}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="/promotion-center/catalogue" title={lang.header_5}/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="/promotion-center/promotion-videos" title={lang.header_6}/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="/promotion-center/blog" title={lang.header_7}/>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                {lang.header_8}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="/guide/guide01" title={lang.header_9}/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="/guide/guide02" title={lang.header_10}/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="/guide/guide03" title={lang.header_11}/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="/guide/guide04" title={lang.header_12}/>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                {lang.header_13}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="/customer/faq" title={lang.header_14}/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="/customer/inquiry" title={lang.header_15}/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="/customer/buy" title={lang.header_16}/>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* ============= right side header content ============= */}
        <div className={navOtherClass}>
          <ul className="navbar-nav flex-row align-items-center ms-auto">

            <LangBox/>
            
            <li className="nav-item">
              <a href="/sitemap" className="nav-link">
                SITEMAP
              </a>
            </li>
          </ul>
        </div>
      </Fragment>
);

return (
  <Fragment>
    {stickyBox ? <div style={{paddingTop: sticky ? navbarRef.current?.clientHeight : 0}}/> : null}

        <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
          {fancy ? (
              <FancyHeader>{headerContent}</FancyHeader>
          ) : (
              <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
          )}
        </nav>
      </Fragment>
  );
}
