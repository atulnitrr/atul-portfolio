import React from "react";
import "../css/MyProjects.css";
import useGetPageTitle from "./hooks/useGetPageTitile";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import ResourceLinks from "./ResourceLinks";

function InterviewCorners() {
  useGetPageTitle("Interview Corners");
  const {
    appInitialState: { icInitialState },
  } = useContext(AppContext);
  return (
    <div className="myresources">
      <header>Interview Corners</header>
      <ResourceLinks links={icInitialState} />
    </div>
  );
}

export default InterviewCorners;
