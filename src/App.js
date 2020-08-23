import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainHeader from "./component/MainHeader";
import LeftSideBar from "./component/LeftSideBar";
import Main from "./component/Main";
import RightSideBar from "./component/RightSideBar";

import AppContext, { appInitialState } from "./component/context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ appInitialState }}>
        <div className="top-container">
          <MainHeader />
          <LeftSideBar />
          <Main />
          <RightSideBar />
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
