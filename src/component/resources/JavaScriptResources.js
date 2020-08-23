import React from "react";
import useGetPageTitle from "../hooks/useGetPageTitile";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import ResourceLinks from "../ResourceLinks";

function JavaScriptResources() {
  useGetPageTitle("Java script resources");
  const {
    appInitialState: { jsInitialState },
  } = useContext(AppContext);
  return (
    <div className="myresources">
      <header>Java script resources</header>
      <ResourceLinks links={jsInitialState} />
    </div>
  );
}

export default JavaScriptResources;
