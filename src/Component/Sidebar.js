import React from "react";
import { Accordion, Image } from "react-bootstrap";
import UserImage from ".././Assest/Image/profile-img.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Sidebar = () => {

  // const [first, setfirst] = useState(second)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])

  return (
    <div className="glass sidebar-parent" id="sidebar-parent">
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
            <NavLink to='/' className="nav-link text-black fs-6">
              Home
            </NavLink>
          </li>
          <li className=" m-1 fs-6">
            <NavLink to='/Education' className="nav-link text-black">
              {/* <svg className="bi me-2" width="16" height="16"></svg> */}
              Education
            </NavLink>
          </li>
          <li className=" m-1 fs-6">
            <NavLink to='/Skills' className="nav-link text-black">
              {/* <svg className="bi me-2" width="16" height="16"></svg> */}
              Skills                                                            </NavLink>
          </li>
          {/* <li className="m-1">
            <NavLink to='/Project' className="nav-link text-black fs-6">
              Project
            </NavLink>
          </li> */}

          <li className=" m-1 fs-6">
            <NavLink to='/Experience' className="nav-link text-black">
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
  );
};
