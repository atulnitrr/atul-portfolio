import React from "react";

function EducationHistory(props) {
  return (
    <div>
      <h3>Education history</h3>
      <h4>{JSON.stringify(props.match)}</h4>
    </div>
  );
}

export default EducationHistory;
