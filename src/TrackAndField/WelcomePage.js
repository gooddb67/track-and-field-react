import "./styles/welcomePage.scss";

function WelcomePage({ showWelcomePage }) {
  return (
    <div className="welcome-container">
      <p>In the year 1992, Fudgeman disappeared</p>
      <button onClick={() => showWelcomePage(false)}>Begin</button>
    </div>
  );
}

export default WelcomePage;
