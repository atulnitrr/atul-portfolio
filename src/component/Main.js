import React from "react";
import { Switch, Route } from "react-router-dom";
import MyProjects from "./MyProjects";
import UseFulLinks from "./UseFulLinks";
import NotFound from "./NotFound";
import InterviewCorners from "./InterviewCorners";

function Main() {
  return (
    <main className="top-container-item tc-main">
      <Switch>
        <Route path="/" component={MyProjects} exact />
        <Route path="/myprojects" component={MyProjects} exact />
        <Route path="/usefulinks" component={UseFulLinks} exact />
        <Route path="/interviewcorner" component={InterviewCorners} exact />
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
