import React from "react";
import useGetPageTitle from "../hooks/useGetPageTitile";
import ResourceLinks from "../ResourceLinks";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function ReactJsResource() {
  useGetPageTitle("ReactJs  resources");
  const {
    appInitialState: { rjsInitialState },
  } = useContext(AppContext);
  return (
    <div className="myresources">
      <header>ReactJs resources</header>
      <ResourceLinks links={rjsInitialState} />
    </div>
  );
}

export default ReactJsResource;
