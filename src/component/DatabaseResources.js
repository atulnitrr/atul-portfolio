import React from "react";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import useGetPageTitle from "./hooks/useGetPageTitile";
import ResourceLinks from "./ResourceLinks";

function DatabaseResources() {
  const {
    appInitialState: { databaseInititalState },
  } = useContext(AppContext);
  useGetPageTitle("DB resources");
  return (
    <div className="myresources">
      <header>Databse Resources</header>
      <ResourceLinks links={databaseInititalState} />
    </div>
  );
}

export default DatabaseResources;
