import React from "react";
import useGetPageTitle from "./hooks/useGetPageTitile";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import ResourceLinks from "./ResourceLinks";

function DeesinResources() {
  useGetPageTitle(" Design resources");
  const {
    appInitialState: { designInitialState },
  } = useContext(AppContext);
  return (
    <div className="myresources">
      <header>Design Resources</header>
      <ResourceLinks links={designInitialState} />
    </div>
  );
}

export default DeesinResources;
