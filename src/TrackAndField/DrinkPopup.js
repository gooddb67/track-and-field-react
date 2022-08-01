import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function DrinkPopup(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupCount, setPopupCount] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(function () {
      setShowPopup(true);
      setPopupCount(popupCount + 1);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {showPopup && popupCount < 2 && (
        <div className="store-item drink-popup page-item hide-item">
          <button
            style={{ float: "right" }}
            id="btn-2"
            onClick={() => setShowPopup(false)}
          >
            X
          </button>

          <h2 style={{ color: "red" }}>DRINK HIS DRINK</h2>
          <img
            width="600"
            src={require("./assets/storeImages/Energy Drink.jpg")}
            alt=""
          />
          <br />
          <br />
          <Link style={{ fontSize: "24px" }} to="./pages/store">
            Visit The Store Now!
          </Link>
        </div>
      )}
    </div>
  );
}

export default DrinkPopup;
