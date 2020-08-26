import React from "react";
import "../css/EducationHistory.css";

function EducationHistory(props) {
  return (
    <div className="ac-w">
      <header>Academics</header>
      <div className="ac-card-wrapper">
        <div className="ac-card">
          <p className="ac-card-elem">
            <span>
              <strong>Degree </strong>{" "}
            </span>{" "}
            <span> B.tech</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>Branch </strong>{" "}
            </span>{" "}
            <span> IT</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>College </strong>{" "}
            </span>{" "}
            <span>NIT Raipur</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>Year </strong>{" "}
            </span>{" "}
            <span>2009 - 2013</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>Percentage </strong>{" "}
            </span>{" "}
            <span>73.2</span>
          </p>
        </div>

        <div className="ac-card">
          <p className="ac-card-elem">
            <span>
              <strong>Degree </strong>{" "}
            </span>{" "}
            <span> I.Sc (10+ 2)</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>Subjects </strong>{" "}
            </span>{" "}
            <span> Physics, Chemistry, Math</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>College </strong>{" "}
            </span>{" "}
            <span>College of commerce</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>Year </strong>{" "}
            </span>{" "}
            <span>2006 - 2008</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>Percentage </strong>{" "}
            </span>{" "}
            <span>68</span>
          </p>
        </div>
        <div className="ac-card">
          <p className="ac-card-elem">
            <span>
              <strong>Degree </strong>{" "}
            </span>{" "}
            <span> 10th</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>School </strong>{" "}
            </span>{" "}
            <span> N K SH High school</span>
          </p>

          <p className="ac-card-elem">
            <span>
              <strong>Year </strong>{" "}
            </span>{" "}
            <span>2004-2006</span>
          </p>
          <p className="ac-card-elem">
            <span>
              <strong>Percentage </strong>{" "}
            </span>{" "}
            <span>77.42</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationHistory;
