import React from "react";
import "../css/Awards.css";

import mmtImg from "../img/go_tr.png";

function Awards() {
  return (
    <div className="aw-w">
      <header>Awards and Recognitions</header>
      <div className="aw-w-cw">
        <div className="aw-card">
          <h5>Won go tripper of quarter award</h5>
          <div>
            <img src={mmtImg} alt="" />
          </div>
        </div>
        <div className="aw-card">
          <h5>Future award</h5>
          <div>
            <img src="#" alt="may be from your company" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
