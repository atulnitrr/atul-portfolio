import React from "react";

import "../css/Resource.css";
import useGetPageTitle from "./hooks/useGetPageTitile";

function NodeResource() {
  useGetPageTitle("NodeJs resources");
  return (
    <div className="myresources">
      <header>Node Resources</header>
      <div className="mpl">
        <a
          href="https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to use env variable in node
        </a>
        <a
          href="https://itnext.io/how-to-use-environment-variables-in-node-js-cb2ef0e9574a"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to use env variable in node, simple one page
        </a>
      </div>
    </div>
  );
}

export default NodeResource;
