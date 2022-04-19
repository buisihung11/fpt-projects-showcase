/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../../components/Split";
import DarkTheme from "../../layouts/Dark";
import addParlx from "../../common/addParlx";
import initIsotope from "../../common/initIsotope";
import Works2Light from "../works2/works2-light";
import LightTheme from "../../layouts/Light";
import WorksThreeColumnWithFilter from "../../components/Works-three-column-with-filter";
import SmallFooter from "../../components/Small-footer";
import Navbar from "../../components/Navbar";

const Demos = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    document.querySelector('body').classList.add('menubarblack');
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedHeader, MainContent, navbarRef]);

  return (
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
        <header
            ref={fixedHeader}
            className="works-header fixed-slider hfixd valign"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-11 static">
                <div className="capt mt-50">
                  <div className="parlx">
                    <h2 className="custom-font">My amazing works</h2>
                    <p>
                      Creative way to showcase your works at their absolute best.
                    </p>
                  </div>

                  <div className="bactxt custom-font valign">
                    <span className="full-width">Works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div ref={MainContent} className="main-content">
          <WorksThreeColumnWithFilter filterPosition="right" />
          <SmallFooter />
        </div>
      </LightTheme>
  );
};

export default Demos;
