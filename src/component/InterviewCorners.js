import React from "react";
import "../css/MyProjects.css";
import useGetPageTitle from "./hooks/useGetPageTitile";

function InterviewCorners() {
  useGetPageTitle("Interview Corners");
  return (
    <div className="myresources">
      <header>Interview Corners</header>
      <div className="mpl">
        <a
          href="https://www.toptal.com/react/interview-questions"
          target="_blank"
          rel="noopener noreferrer"
        >
          React interview questions
        </a>
        <a
          href="https://github.com/sudheerj/reactjs-interview-questions"
          target="_blank"
          rel="noopener noreferrer"
        >
          React interview questions v2
        </a>
        <a
          href="https://github.com/sudheerj/javascript-interview-questions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Java script interview questions
        </a>
      </div>
    </div>
  );
}

export default InterviewCorners;
