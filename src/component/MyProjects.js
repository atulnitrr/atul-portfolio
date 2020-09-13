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
            href="https://atulnitrr-project-tracker.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project tracker{" "}
          </a>
          <div className="pd">
            <div>
              <span>Description: </span> Jira like system to track progress of
              project, like creating user story , task etc.
            </div>
            <div className="pdurl">
              <span>Project url : </span>{" "}
              <a
                href="https://atulnitrr-project-tracker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://atulnitrr-project-tracker.netlify.app/
              </a>
            </div>
            <div className="pdurl">
              <span>Backend url : </span>{" "}
              <a
                href="https://atulknitrr-project-tracker.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://atulknitrr-project-tracker.herokuapp.com/
              </a>
            </div>
            <div className="pdurl">
              <span>Forntend github : </span>{" "}
              <a
                href="https://github.com/atulnitrr/project_tracker_front"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/atulnitrr/project_tracker_front
              </a>
            </div>
            <div className="pdurl">
              <span>Backend github : </span>{" "}
              <a
                href="https://github.com/atulnitrr/project_tracker_back"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/atulnitrr/project_tracker_back
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
              <span>Express </span>
            </div>
            <div>
              <span>Database </span> : Postgresql
            </div>
          </div>
        </div>

        <div className="singleproject">
          <a
            href="https://atulnitrr-chat-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat app{" "}
          </a>
          <div className="pd">
            <div>
              <span>Description: </span> Discord like chat app
            </div>
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
            Url shortener{" "}
          </a>
          <div className="pd">
            <div>
              <span>Description: </span> Url shortener like bit.ly
            </div>
            <div className="pdurl">
              <span>Project url : </span>{" "}
              <a
                href="https://atulnitrr-url-shortener.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://atulnitrr-url-shortener.netlify.app/
              </a>
            </div>
            <div className="pdurl">
              <span>Backend url : </span>{" "}
              <a
                href="https://atulnitrr-url-shortener.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://atulnitrr-url-shortener.herokuapp.com/
              </a>
            </div>
            <div className="pdurl">
              <span>Forntend github : </span>{" "}
              <a
                href="https://github.com/atulnitrr/url_shortener_front"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/atulnitrr/url_shortener_front
              </a>
            </div>
            <div className="pdurl">
              <span>Backend github : </span>{" "}
              <a
                href="https://github.com/atulnitrr/url_shortener_back"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/atulnitrr/url_shortener_back
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
