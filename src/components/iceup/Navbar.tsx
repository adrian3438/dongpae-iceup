"use client";

import { Fragment, ReactElement, useRef } from "react";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// LOCAL CUSTOM COMPONENTS
import FancyHeader from "../../components/blocks/navbar/components/fancy-header";

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
}
// ===================================================================

export default function Navbar({
  fancy,
  logoAlt,
  stickyBox = true,
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light"
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
                  브랜드 소개
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="/products/iceup" title="ICEUP제빙기"/>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                  제품소개
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="#" title="ICEUP"/>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
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
              </li>

              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                  홍보센터
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="#" title="카탈로그"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="영상"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="블로그"/>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                  사용안내
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="#" title="설치 가이드"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="유지보수 팁"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="보증 및 서비스 정책"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="안전 지침"/>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle">
                  고객지원
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NextLink className="dropdown-item" href="#" title="자주찾는 질문"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="문의하기"/>
                  </li>
                  <li>
                    <NextLink className="dropdown-item" href="#" title="구매방법"/>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* ============= right side header content ============= */}
        <div className={navOtherClass}>
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item dropdown language-select">
              <a
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  className="nav-link dropdown-item dropdown-toggle">
                Ko
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <button className="dropdown-item">
                    Ko
                  </button>
                </li>
                <li className="nav-item">
                  <button className="dropdown-item">
                    En
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" data-bs-toggle="dropdown" className="nav-link">
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
