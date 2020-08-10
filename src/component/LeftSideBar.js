import React from "react";
import { Link } from "react-router-dom";
import "../css/LeftSideBar.css";

function LeftSideBar() {
  return (
    <aside className="top-container-item tc-ls">
      <div className="tc-ls-l-w">
        <Link to="/">home</Link>
        <Link to="/myprojects">myprojects</Link>
        <Link to="/usefulinks">usefullinks</Link>
      </div>
    </aside>
  );
}

export default LeftSideBar;
