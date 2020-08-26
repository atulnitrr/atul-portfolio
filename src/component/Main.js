import React from "react";
import { Switch, Route } from "react-router-dom";
import MyProjects from "./MyProjects";
import UseFulLinks from "./UseFulLinks";
import NotFound from "./NotFound";
import InterviewCorners from "./InterviewCorners";
import NodeResource from "./NodeResource";
import JavaScriptResources from "./resources/JavaScriptResources";
import Setups from "./Setups";
import Home from "./Home";
import ReactJsResource from "./resources/ReactJsResource";
import DeesinResources from "./DeesinResources";

function Main() {
  return (
    <main className="top-container-item tc-main">
      <Switch>
        <Route path="/myprojects" component={MyProjects} exact />
        <Route path="/usefulinks" component={UseFulLinks} exact />
        <Route path="/nodejs" component={NodeResource} exact />
        <Route path="/js" component={JavaScriptResources} exact />
        <Route path="/rjs" component={ReactJsResource} exact />
        <Route path="/setups" component={Setups} exact />
        <Route path="/ds" component={DeesinResources} exact />
        <Route path="/ic" component={InterviewCorners} exact />
        <Route path="/" component={Home} />
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
