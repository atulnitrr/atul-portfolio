import React from "react";
import { Link } from "react-router-dom";
import "../css/LeftSideBar.css";

function LeftSideBar() {
  return (
    <aside className="top-container-item tc-ls">
      <div className="tc-ls-l-w">
        <Link to="/">Home</Link>
        <Link to="/myprojects">MyProjects</Link>
        <Link to="/usefulinks">UsefulBlogs</Link>
        <Link to="/nodejs">NodejsResources</Link>
        <Link to="/rjs">ReactJsResources</Link>
        <Link to="/js">JavaScriptResources</Link>
        <Link to="/setups">Setups</Link>
        <Link to="/ic">InterviewCorner</Link>
      </div>
    </aside>
  );
}

export default LeftSideBar;
