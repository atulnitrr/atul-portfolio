import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
import useGetPageTitle from "./hooks/useGetPageTitile";
import WorkHistory from "./WorkHistory";
import EducationHistory from "./EducationHistory";
import "../css/Home.css";
import Awards from "./Awards";

function Home(props) {
  const { match } = props;

  useGetPageTitle("Home");
  return (
    <div className="mp">
      <header>Home</header>
      <div className="rs-wrapper">
        <nav className="home-nav">
          <NavLink to={`${match.url}wh`}>Work history</NavLink>
          <span>|</span>
          <NavLink to={`${match.url}eh`}> Academics </NavLink>
          <span>|</span>
          <NavLink to={`${match.url}aw`}> Awards </NavLink>
        </nav>
        <section>
          Thanks for visiting my profile, I am Atul, currently working as Senior
          Software Engineer II at{" "}
          <span>
            <a
              href="https://www.makemytrip.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.makemytrip.com/
            </a>
          </span>{" "}
          since <strong> October, 2019.</strong> I am having toatl{" "}
          <strong>6+ years</strong> of industry experience. I can work on both
          front end (javascript, react) and backend technology (nodejs, java).
          Please visit <NavLink to={`${match.url}wh`}> work history</NavLink>{" "}
          and <Link to="/myprojects"> side projects</Link> to know about my
          work. Thanks, again for visiting my profile.
        </section>
        <div className="ressection">
          <Route path={`${match.path}wh`} component={WorkHistory} />
          <Route path={`${match.path}eh`} component={EducationHistory} />
          <Route path={`${match.path}aw`} component={Awards} />
        </div>
      </div>
    </div>
  );
}

export default Home;
