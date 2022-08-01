import Navbar from "../Navbar";

function Store() {
  const goToAlaco = () => {
    window.open("https://www.joinalaco.com", "_blank");
    return null;
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1>TRACK AND FIELD STORE</h1>

        <a href="#joinUs" className="store-item">
          <h3>TRACK AND FIELD TEE</h3>
          <img
            width="200"
            src={require("../assets/storeImages/T Shirt.jpg")}
            alt=""
          />
          <p>Wear your T+F love on your sleeve!</p>
        </a>
        <a href="#joinUs" className="store-item">
          <h3>ALACO ENERGY</h3>
          <img
            width="200"
            src={require("../assets/storeImages/Energy Drink.jpg")}
            alt=""
          />
          <p>Restores vital nutrients to all your Quadrants!</p>
        </a>
        <a href="#joinUs" className="store-item">
          <h3>ALACO MIGHTY BAR</h3>
          <img
            width="200"
            src={require("../assets/storeImages/Energy Bar.jpg")}
            alt=""
          />
          <p>Powerful nutrients to build the necessary strength…</p>
        </a>
        <a href="#joinUs" className="store-item">
          <h3>ALACO HITS CD</h3>
          <img
            width="200"
            src={require("../assets/storeImages/CD Edited.jpg")}
            alt=""
          />
          <p>Steven sings Psalm on CD Rom!</p>
        </a>
        <a href="#joinUs" className="store-item">
          <h3>ALACOLA</h3>
          <img
            width="200"
            src={require("../assets/storeImages/Cola.jpg")}
            alt=""
          />
          <p>Our #1 seller. Has raised thousands for Alaco.</p>
        </a>

        <div className="popup" id="joinUs">
          <a className="popup__overlay" href="#"></a>
          <div className="popup__wrapper">
            <a
              className="popup__close"
              style={{ textDecoration: "none" }}
              href="#"
            >
              X
            </a>
            <p>Get it FREE if you join Alaco!</p>
            <button onClick={goToAlaco} type="button">
              JOIN ALACO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
