import Navbar from "../Navbar";

function GoForTheGold() {
  return (
    <div>
      <Navbar />

      <h1>TRACK AND FIELD THE GAME!</h1>

      <p>
        Featuring state of the art graphics, thrilling gameplay and
        breathtakingly immersive worlds, Fogle’s Javelin Toss is the greatest
        video game ever created. Play it now.
      </p>

      <button
        style={{ display: "block", margin: "0 auto", marginTop: "100px;" }}
      >
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "42px;" }}
          href="/assets/Join Us.pdf"
          download
        >
          Start!
        </a>
      </button>
    </div>
  );
}

export default GoForTheGold;
