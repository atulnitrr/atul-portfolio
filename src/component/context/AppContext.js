import { createContext } from "react";

import usefulLinkInitialState from "./usefulLInksInitialState";
import nodejsInitialState from "./nodejsinitialState";
import icInitialState from "./interviewcornerInitialState";
import jsrInitialState from "./javaScriptResourcesInitialState";

const AppContext = createContext();

const appInitialState = {
  usefulLinks: usefulLinkInitialState,
  nodejsInitialState: nodejsInitialState,
  icInitialState: icInitialState,
  jsInitialState: jsrInitialState,
};

export default AppContext;

export { appInitialState };
