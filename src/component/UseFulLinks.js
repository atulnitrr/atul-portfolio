import React from "react";
import "../css/Resource.css";
import useGetPageTitle from "./hooks/useGetPageTitile";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import ResourceLinks from "./ResourceLinks";

function UseFulLinks() {
  useGetPageTitle("Links");

  const {
    appInitialState: { usefulLinks },
  } = useContext(AppContext);

  return (
    <div className="myresources">
      <header>My links</header>
      <ResourceLinks links={usefulLinks} />
    </div>
  );
}

export default UseFulLinks;
