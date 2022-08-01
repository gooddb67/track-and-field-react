import "./TrackAndField/styles/trackAndFieldContainer.scss";
import TrackAndFieldContainer from "./TrackAndField/trackAndFieldContainer.js";
import AboutTrackAndField from "./TrackAndField/pages/about-track-and-field";
import Reviews from "./TrackAndField/pages/reviews";
import Trivia from "./TrackAndField/pages/trivia";
import Interview from "./TrackAndField/pages/interview";
import PersonalityQuiz from "./TrackAndField/pages/PersonalityQuiz";
import Soundtrack from "./TrackAndField/pages/soundtrack";
import GoForTheGold from "./TrackAndField/pages/go-for-the-gold";
import MeetTheCast from "./TrackAndField/pages/meet-the-cast";
import Store from "./TrackAndField/pages/store";
import JoiningOfOurSouls from "./TrackAndField/pages/JoiningOfOurSouls";
import PoliceReport from "./TrackAndField/PoliceReport";
import CautionTape from "./TrackAndField/CautionTape";

import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <CautionTape />
        <Routes>
          <Route path="/" element={<TrackAndFieldContainer />}></Route>
          <Route
            path="/pages/about-track-and-field"
            element={<AboutTrackAndField />}
          ></Route>
          <Route path="/pages/reviews" element={<Reviews />}></Route>
          <Route path="/pages/meet-the-cast" element={<MeetTheCast />}></Route>
          <Route
            path="/pages/go-for-the-gold"
            element={<GoForTheGold />}
          ></Route>
          <Route path="/pages/soundtrack" element={<Soundtrack />}></Route>
          <Route path="/pages/store" element={<Store />}></Route>
          <Route path="/pages/trivia" element={<Trivia />}></Route>
          <Route
            path="/pages/personality"
            element={<PersonalityQuiz />}
          ></Route>
          <Route path="/pages/interview" element={<Interview />}></Route>

          <Route
            path="/assets/audio/TheJoiningOfOurSouls.mp3"
            element={<JoiningOfOurSouls />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <button className="btn-report" onClick={() => setShowModal(true)}>
        REPORT
      </button>
      {showModal && <PoliceReport showModal={setShowModal} />}
    </div>
  );
}

export default App;
