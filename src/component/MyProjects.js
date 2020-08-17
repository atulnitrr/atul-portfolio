import React from "react";
import "../css/MyProjects.css";
import useGetPageTitle from "./hooks/useGetPageTitile";

function MyProjects() {
  useGetPageTitle("Projects");
  return (
    <div className="mp">
      <header>My projects</header>
      <div className="mpl">
        <div className="singleproject">
          <a
            href="https://atulnitrr-chat-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat app{" "}
          </a>
          <div className="pd">
            <div className="pdurl">
              <span>Project url : </span>{" "}
              <a
                href="https://atulnitrr-chat-app.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://atulnitrr-chat-app.netlify.app
              </a>
            </div>
            <div className="pdurl">
              <span>Backend url : </span>{" "}
              <a
                href="https://ak-chat-back.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ak-chat-back.herokuapp.com
              </a>
            </div>
            <div className="pdurl">
              <span>Forntend github : </span>{" "}
              <a
                href="https://github.com/atulnitrr/chat_front"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/atulnitrr/chat_front
              </a>
            </div>
            <div className="pdurl">
              <span>Backend github : </span>{" "}
              <a
                href="https://github.com/atulnitrr/chat_back"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/atulnitrr/chat_back
              </a>
            </div>
            <div>
              <span>Frontend tech </span> : ReactJs {",  "}
              <span>Grid {",  "}</span>
              <span>FlexBox {", "}</span>
              <span className="danger">No external css libray </span>
            </div>
            <div>
              <span>Backend tech </span> : NodeJs {",   "}
              <span>Express {",  "}</span>
              <span>Socket.io {"  "}</span>
            </div>
          </div>
        </div>

        <div className="singleproject">
          <a
            href="https://atulnitrr-chat-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat v2{" "}
          </a>
          <div className="pd">
            <div className="pdurl">
              <span>Project url : </span>{" "}
              <a
                href="https://atulnitrr-chat-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://atulnitrr-chat-app.netlify.app
              </a>
            </div>
            <div className="pdurl">
              <span>Backend url : </span>{" "}
              <a
                href="https://ak-chat-back.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ak-chat-back.herokuapp.com
              </a>
            </div>
            <div>
              <span>Frontend tech </span> : React js
            </div>
            <div>
              <span>Backend tech </span> : NodeJs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
