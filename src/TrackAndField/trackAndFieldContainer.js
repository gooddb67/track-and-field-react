import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./styles/trackAndFieldContainer.scss";
import WelcomePage from "./WelcomePage";
import { CSSTransitionGroup } from "react-transition-group";

function TrackAndFieldContainer() {
  const [animate, setAnimation] = useState("sign-up display-none");
  const [welcomePage, setWelcomePage] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(function () {
      setAnimation("sign-up marquee");
    }, 4500);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div>
      <CSSTransitionGroup
        transitionName="welcome"
        transitionLeaveTimeout={12000}
        transitionLeave={true}
        classNames="welcome"
      >
        {welcomePage && <WelcomePage showWelcomePage={setWelcomePage} />}
      </CSSTransitionGroup>

      <h2 className="welcome-message">
        Welcome to the website for the hit Alaco Pictures straight to VHS film!
      </h2>
      <h1 className={`${animate}`}>
        <a
          style={{ whiteSpace: "nowrap" }}
          target="_blank"
          href="https://www.joinalaco.com"
        >
          Join Alaco
        </a>
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="navbar">
        <div className="row row-top">
          <Link id="page-about" to="/pages/about-track-and-field">
            About Track and Field
          </Link>
          <Link id="page-cast" to="/pages/meet-the-cast">
            Meet the Cast
          </Link>

          <Link id="page-game" to="/pages/go-for-the-gold">
            Play Game!
          </Link>
        </div>
        <div
          className="marquee-div"
          style={{ display: "block", margin: "0 auto" }}
        >
          <marquee behavior="alternate">
            <img
              height="375"
              width="220"
              className="hero-poster"
              src="https://alaco-assets.s3.amazonaws.com/poster.jpg"
            />
          </marquee>
        </div>

        <div className="row row-bottom">
          <Link id="page-reviews" to="pages/reviews">
            Reviews
          </Link>
          <Link id="page-store" to="/pages/store">
            Store
          </Link>
          <Link id="page-interview" to="/pages/interview">
            Interview
          </Link>
          <Link id="page-soundtrack" to="/pages/soundtrack">
            Soundtrack
          </Link>
          <Link id="page-trivia" to="/pages/trivia">
            Trivia
          </Link>
        </div>
      </div>
      <div className="flex-center">
        <a
          href="https://alaco-legal.s3.amazonaws.com/TERMS+OF+USE.pdf"
          target="_blank"
        >
          Terms
        </a>
        <a href="mailto:JoinAlaco@yahoo.com" target="_blank">
          Contact
        </a>
        <a href="https://joinalaco.com" target="_blank">
          Join!
        </a>
      </div>
    </div>
  );
}

export default TrackAndFieldContainer;
