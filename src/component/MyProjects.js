import React, { useEffect } from "react";
import "../css/MyProjects.css";

function MyProjects() {
  useEffect(() => {
    document.title = "AP | Projects";
  }, []);
  return (
    <div className="mp">
      <header>My projects</header>
      <div className="mpl">
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter clone{" "}
        </a>
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook clone{" "}
        </a>
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Insta clone{" "}
        </a>
      </div>
    </div>
  );
}

export default MyProjects;
