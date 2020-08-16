import React from "react";
import "../css/Resource.css";
import useGetPageTitle from "./hooks/useGetPageTitile";

function UseFulLinks() {
  useGetPageTitle("Links");

  return (
    <div className="myresources">
      <header>My links</header>
      <div className="mpl">
        <a
          href="http://rachelbythebay.com/w/"
          target="_blank"
          rel="noopener noreferrer"
        >
          rachelbythebay
        </a>
        <a
          href="https://csslayout.io/patterns"
          target="_blank"
          rel="noopener noreferrer"
        >
          css layouts{" "}
        </a>
        <a
          href="https://ponyfoo.com/articles/es6-arrow-functions-in-depth"
          target="_blank"
          rel="noopener noreferrer"
        >
          pony fooo{" "}
        </a>

        <a
          href="https://edgedb.com/blog/we-can-do-better-than-sql/"
          target="_blank"
          rel="noopener noreferrer"
        >
          we can do better than sql{" "}
        </a>
        <a
          href="https://davnicwil.com/#blog-posts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          nice to have problem{" "}
        </a>
      </div>
    </div>
  );
}

export default UseFulLinks;
