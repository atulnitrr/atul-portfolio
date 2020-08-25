import React from "react";
import { NavLink } from "react-router-dom";
import useGetPageTitle from "./hooks/useGetPageTitile";

function Home() {
  useGetPageTitle("Home");
  return (
    <div className="mp">
      <header>/</header>
      <nav>
        <NavLink to="/test3">Work History</NavLink>

        <NavLink to="/test4"> Eductaion details </NavLink>
      </nav>
    </div>
  );
}

export default Home;
