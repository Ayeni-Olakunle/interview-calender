import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { RiBriefcaseLine } from "react-icons/ri";
import { BsPersonBadge } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { BiBarChartSquare } from "react-icons/bi";
import navbarStyle from "./nav-bar.module.scss";

function NavBar() {
  const [navValue, setNavValue] = useState("");

  useEffect(() => {
    const tabs = () => {
      setNavValue(window.location.pathname);
    };
    tabs();
  });

  const tabs = () => {
    setNavValue(window.location.pathname);
  };
  return (
    <Fragment>
      <div className={navbarStyle.holdNav}>
        <ul className={navbarStyle.unorderedList}>
          <li onClick={tabs}>
            <Link
              to={"/"}
              className={
                navValue === "/"
                  ? navbarStyle.holdIcon + " " + navbarStyle.active
                  : navbarStyle.holdIcon
              }
            >
              <VscHome className={navbarStyle.iconStyle} />
            </Link>
          </li>
          <li onClick={tabs}>
            <Link
              to={"/jobs"}
              className={
                navValue === "/jobs"
                  ? navbarStyle.holdIcon + " " + navbarStyle.active
                  : navbarStyle.holdIcon
              }
            >
              <RiBriefcaseLine />
            </Link>
          </li>
          <li onClick={tabs}>
            <Link
              to={"/profile"}
              className={
                navValue === "/profile"
                  ? navbarStyle.holdIcon + " " + navbarStyle.active
                  : navbarStyle.holdIcon
              }
            >
              <BsPersonBadge />
            </Link>
          </li>
          <li onClick={tabs}>
            <Link
              to={"/chat"}
              className={
                navValue === "/chat"
                  ? navbarStyle.holdIcon + " " + navbarStyle.active
                  : navbarStyle.holdIcon
              }
            >
              <TbMessages />
            </Link>
          </li>
          <li onClick={tabs}>
            <Link
              to={"/calendar"}
              className={
                navValue === "/calendar"
                  ? navbarStyle.holdIcon + " " + navbarStyle.active
                  : navbarStyle.holdIcon
              }
            >
              <MdDateRange />
            </Link>
          </li>
          <li onClick={tabs}>
            <Link
              to={"/settings"}
              className={
                navValue === "/settings"
                  ? navbarStyle.holdIcon + " " + navbarStyle.active
                  : navbarStyle.holdIcon
              }
            >
              <BiBarChartSquare />
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default NavBar;
