import { createContext } from "react";

import usefulLinkInitialState from "./usefulLInksInitialState";
import nodejsInitialState from "./nodejsinitialState";
import icInitialState from "./interviewcornerInitialState";
import jsrInitialState from "./javaScriptResourcesInitialState";
import setupInitialState from "./setupInitialState";
import reactJsInitialState from "./reactJsResourceInitialState";
import designInitialState from "./designInitialState";
import databaseInititalState from "./databaseInitialState";

const AppContext = createContext();

const appInitialState = {
  usefulLinks: usefulLinkInitialState,
  nodejsInitialState: nodejsInitialState,
  icInitialState: icInitialState,
  jsInitialState: jsrInitialState,
  rjsInitialState: reactJsInitialState,
  setupInitialState: setupInitialState,
  designInitialState: designInitialState,
  databaseInititalState: databaseInititalState,
};

export default AppContext;

export { appInitialState };
