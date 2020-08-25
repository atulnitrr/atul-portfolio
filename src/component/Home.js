import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
import useGetPageTitle from "./hooks/useGetPageTitile";
import WorkHistory from "./WorkHistory";
import EducationHistory from "./EducationHistory";
import "../css/Home.css";

function Home(props) {
  const { match } = props;

  useGetPageTitle("Home");
  return (
    <div className="mp">
      <header>/</header>
      <div className="rs-wrapper">
        <nav className="home-nav">
          <NavLink to={`${match.url}wh`}>Work history</NavLink>
          <span>|</span>
          <NavLink to={`${match.url}eh`}> Eductaion details </NavLink>
        </nav>
        <section>
          Thanks for visiting my profile, I am atul, currently working as Senior
          Software Engineer 2 at{" "}
          <span>
            <a
              href="https://www.makemytrip.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.makemytrip.com/
            </a>
          </span>{" "}
          since <strong>28 October, 2019</strong> having toatl{" "}
          <strong>6+ years</strong> of industry experiance. I can work on both
          front end (javascript, react) and backend technology (nodejs, java).
          Please visit <NavLink to={`${match.url}wh`}> my work history</NavLink>{" "}
          and <Link to="/myprojects">my side projects</Link> to know about my
          work. Thanks, again for visiting my profile.
        </section>
        <div className="ressection">
          <Route path={`${match.path}wh`} component={WorkHistory} />
          <Route path={`${match.path}eh`} component={EducationHistory} />
        </div>
      </div>
    </div>
  );
}

export default Home;
