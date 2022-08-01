import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-page">
      <Link to="../">Home</Link>

      <Link id="page-about-page" to="../pages/about-track-and-field">
        About Track and Field
      </Link>

      <Link id="page-cast-page" to="../pages/meet-the-cast">
        Meet the Cast
      </Link>
      <Link id="page-game-page" to="../pages/go-for-the-gold">
        Play Game!
      </Link>
      <Link id="page-interview-page" to="../pages/interview">
        Interview
      </Link>

      <Link id="page-reviews-page" to="../pages/reviews">
        Reviews
      </Link>

      <Link id="page-soundtrack-page" to="../pages/soundtrack">
        Soundtrack
      </Link>
      <Link id="page-store-page" to="../pages/store">
        Store
      </Link>

      <Link id="page-trivia-page" to="../pages/trivia">
        Trivia
      </Link>
    </div>
  );
}

export default Navbar;
