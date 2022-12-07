import React from "react";
import { NavLink, Outlet } from "react-router-dom";
class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <NavLink className="nav-link" to="/">
            Homepage
          </NavLink>
          <br />
          <NavLink className="nav-link" to="/blogs">
            Blogs list
          </NavLink>
          <br />
          <NavLink className="nav-link" to="/contact">
            Contact us
          </NavLink>
          <br />
        </div>
        <Outlet />
      </>
    );
  }
}

export default Layout;
