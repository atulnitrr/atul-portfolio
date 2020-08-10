import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./component/MainHeader";
import LeftSideBar from "./component/LeftSideBar";
import Main from "./component/Main";
import RightSideBar from "./component/RightSideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="top-container">
        <MainHeader />
        <LeftSideBar />
        <Main />
        <RightSideBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
