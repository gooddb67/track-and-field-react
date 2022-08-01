import audio from "../assets/audio/TheJoiningOfOurSouls.mp3";

function JoiningOfOurSouls() {
  return (
    <audio className="center" controls autoPlay name="media">
      <source src={audio} type="audio/mpeg"></source>
    </audio>
  );
}

export default JoiningOfOurSouls;
