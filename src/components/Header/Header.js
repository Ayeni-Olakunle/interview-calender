import React, { Fragment } from "react";
import HeaderStyles from "./Header.module.scss";
import CompanyLogo from "../../images/logo.png";

function Header() {
  return (
    <Fragment>
      <div className={HeaderStyles.HeaderImage}>
        <img
          src={CompanyLogo}
          alt="Company Logo"
          className={HeaderStyles.HoldImage}
        />
      </div>
    </Fragment>
  );
}

export default Header;
