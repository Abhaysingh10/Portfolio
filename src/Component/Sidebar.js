import React from "react";
import { Image } from "react-bootstrap";
import UserImage from ".././Assest/Image/Me.JPEG";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {

  return (
    <>
      <div className="navbar-res">
        <div class="hamburger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
      <div className="">
        <div className="expanded-list">
          <ul className="nav nav-pills flex-column mb-auto sidebar-ul">
            <li className="fs-6 m-1">
              <NavLink to="/" className="nav-link text-black fs-6">
                Home
              </NavLink>
            </li>
            <li className=" m-1 fs-6">
              <NavLink to="/Education" className="nav-link text-black">
                Education
              </NavLink>
            </li>
            <li className=" m-1 fs-6">
              <NavLink to="/Skills" className="nav-link text-black">
                Skills{" "}
              </NavLink>
            </li>

            <li className=" m-1 fs-6">
              <NavLink to="/Experience" className="nav-link text-black">
                Experience
              </NavLink>
            </li>

            <li className=" m-1 fs-6">
              <NavLink to={"/Contact"} className="nav-link text-black">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="glass sidebar-parent " id="sidebar-parent">
        <div className="sidebar-content" id="sidebar-content">
          <div className="banner">
            {/* <Col xs={6} md={4}> */}
            <Image className="image-logo" src={`${UserImage}`} roundedCircle style={{ objectFit: "cover" }} />
            {/* </Col> */}
          </div>

          <div>
            <p className="fw-bolder fs-4 my-1 sidebar-name-title">ABHAY SINGH</p>
            <div className="sub-name-title">Developer in Straive</div>
          </div>
          <ul className="nav nav-pills flex-column mb-auto sidebar-ul">
            <li className="fs-6 m-1">
              <NavLink to="/" className="nav-link text-black fs-6">
                Home
              </NavLink>
            </li>
            <li className=" m-1 fs-6">
              <NavLink to="/Education" className="nav-link text-black">
                {/* <svg className="bi me-2" width="16" height="16"></svg> */}
                Education
              </NavLink>
            </li>
            <li className=" m-1 fs-6">
              <NavLink to="/Skills" className="nav-link text-black">
                {/* <svg className="bi me-2" width="16" height="16"></svg> */}
                Skills{" "}
              </NavLink>
            </li>
            <li className=" m-1 fs-6">
              <NavLink to="/Experience" className="nav-link text-black">
                {/* <svg className="bi me-2" width="16" height="16"></svg> */}
                Experience
              </NavLink>
            </li>

            <li className=" m-1 fs-6">
              <NavLink to={"/Contact"} className="nav-link text-black">
                {/* <svg className="bi me-2" width="16" height="16"></svg> */}
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="flex" style={{ alignItems: "flex-end", marginTop: "50px" }}>
            <p className="my-4 " style={{ fontSize: "10px" }}>
              @Copyright @2023 All rights reserved. This portfolio is made with React.
            </p>
          </div>
        </div>
        {/* <button onClick={transition}>Transition</button> */}
      </div>
    </>
  );
};
