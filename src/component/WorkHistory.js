import React from "react";

function WorkHistory(props) {
  return (
    <div>
      <h3>work history</h3>
      <h4>{JSON.stringify(props.match)}</h4>
    </div>
  );
}

export default WorkHistory;
