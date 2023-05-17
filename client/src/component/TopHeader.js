import React from "react";
import "../App.css";
import Logo from "../images/jannat-mark.png";
import UK_svg from "../images/flag-united-kingdom.svg";
function TopHeader() {
  return (
    <div className="Topbar">
      <img
        src={Logo}
        href="#http://localhost:3000/"
        className="logostyle"
        alt="Logo"
      />
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 second">
        <div className="Topbar_menu">
          <p>
            <a className="style_a" href="#">
              HOME
            </a>
          </p>
          <p>
            <a className="style_a" href="#">
              MENU
            </a>
          </p>
          <p>
            <a className="style_a" href="#">
              RESERVATION
            </a>
          </p>
          <p>
            <a className="style_a" href="#">
              GALLERY
            </a>
          </p>
          <p>
            <a className="style_a" href="#">
              CONTACT
            </a>
          </p>
          <p>
            <a className="style_a" href="#">
              LOGIN
            </a>
          </p>
          <p>
            <img src={UK_svg} className="UKstyle"></img>
          </p>
        </div>
      </div>
    </div>
  );
}
export default TopHeader;
