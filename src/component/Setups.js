import React from "react";
import useGetPageTitle from "./hooks/useGetPageTitile";
import { useContext } from "react";
import ResourceLinks from "./ResourceLinks";
import AppContext from "./context/AppContext";

function Setups() {
  useGetPageTitle("Setups and installation");
  const {
    appInitialState: { setupInitialState },
  } = useContext(AppContext);
  return (
    <div className="myresources">
      <header>Setups and installation</header>
      <ResourceLinks links={setupInitialState} />
    </div>
  );
}

export default Setups;
