import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import useGetPageTitle from "../hooks/useGetPageTitile";
import ResourceLinks from "../ResourceLinks";

function HtmlCssResources() {
  useGetPageTitle("Htmlcss resources");
  const {
    appInitialState: { htmlCssInititalState },
  } = useContext(AppContext);
  return (
    <div className="myresources">
      <header>html css resources</header>
      <ResourceLinks links={htmlCssInititalState} />
    </div>
  );
}

export default HtmlCssResources;
