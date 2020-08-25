import React from "react";
import "../css/RightSideBar.css";
function RightSideBar() {
  return (
    <aside className="top-container-item tc-rs">
      <div className="tc-ts">
        <p>Frontends</p>
        <div className="ts-tn">
          <span>Reactjs</span>
          <span>Javascript</span>
          <span>html</span>
          <span>css</span>
        </div>
      </div>
      <div className="tc-ts">
        <p>Backends</p>
        <div className="ts-tn">
          <span>Java</span>
          <span>SpringBoot</span>
          <span>NodeJs</span>
        </div>
      </div>
      <div className="tc-ts">
        <p>Databases</p>
        <div className="ts-tn">
          <span>PostgreSQL</span>
          <span>MySQL</span>
          <span>Mongo</span>
        </div>
      </div>
      <div className="tc-ts">
        <p>Other Techs</p>
        <div className="ts-tn">
          <span>RabbitMQ</span>
          <span>Socket.io</span>
        </div>
      </div>
      <div className="tc-ts">
        <p>Tools</p>
        <div className="ts-tn">
          <span>VSCode</span>
          <span>IntelliJ</span>
          <span>Git</span>
        </div>
      </div>
    </aside>
  );
}

export default RightSideBar;
