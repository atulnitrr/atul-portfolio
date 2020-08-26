import React from "react";

function EducationHistory(props) {
  return (
    <div>
      <header>Academics</header>

      <h4>{JSON.stringify(props.match)}</h4>
    </div>
  );
}

export default EducationHistory;
