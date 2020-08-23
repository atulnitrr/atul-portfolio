import React from "react";

import "../css/Resource.css";
import useGetPageTitle from "./hooks/useGetPageTitile";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import ResourceLinks from "./ResourceLinks";

function NodeResource() {
  const {
    appInitialState: { nodejsInitialState },
  } = useContext(AppContext);
  useGetPageTitle("NodeJs resources");
  return (
    <div className="myresources">
      <header>Node Resources</header>
      <ResourceLinks links={nodejsInitialState} />
    </div>
  );
}

export default NodeResource;
