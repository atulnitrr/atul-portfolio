import React from "react";

function ResourceLinks({ links }) {
  return (
    <div className="mpl">
      {links.map((singleLink) => {
        return (
          <a
            key={singleLink.id}
            href={singleLink.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {singleLink.title}
          </a>
        );
      })}
    </div>
  );
}

export default ResourceLinks;
