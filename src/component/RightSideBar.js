import React from "react";
import "../css/RightSideBar.css";
function RightSideBar() {
  return (
    <aside className="top-container-item tc-rs">
      <div className="tc-ts">
        <p>Fontend</p>
        <div className="ts-tn">
          <span>reactjs</span>
          <span>javascript</span>
          <span>html</span>
          <span>css</span>
        </div>
      </div>
      <div className="tc-ts">
        <p>Backend</p>
        <div className="ts-tn">
          <span>Java</span>
          <span>SpringBoot</span>
          <span>NodeJs</span>
        </div>
      </div>
      <div className="tc-ts">
        <p>Database</p>
        <div className="ts-tn">
          <span>MySql</span>
          <span>Mongo</span>
        </div>
      </div>
    </aside>
  );
}

export default RightSideBar;
