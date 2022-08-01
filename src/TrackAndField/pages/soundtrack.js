import useSound from "use-sound";
import soulsAudio from "../assets/audio/TheJoiningOfOurSouls.mp3";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Soundtrack() {
  const [play] = useSound(soulsAudio);

  return (
    <div>
      <Navbar />
      <h1>Soundtrack</h1>
      <Link
        target="_blank"
        to="https://www.fye.com/bow-wow-wow---i-want-candy-aec.mocd2723339.2.html#q=i%2Bwant%2Bcandy&lang=default&start=3"
      >
        I Want Candy - Bow Wow Wow [2:45]
      </Link>
      <br />
      <br />
      <Link
        target="_blank"
        to="https://www.fye.com/search?q=2+unlimited&lang=default"
      >
        Get Ready For This - 2 Unlimited [3:46]
      </Link>
      <br />
      <br />
      <Link
        target="_blank"
        to="https://www.fye.com/car-wash--o.s.t.---car-wash-original-soundtrack-pid.2999650149.html#q=car%2Bwash%2Brose%2Broyce&lang=default&start=1"
      >
        Car Wash - Rose Royce [3:16]
      </Link>
      <br />
      <br />
      <Link
        target="_blank"
        to="https://www.fye.com/tag-team---best-of-fye.000000400029988547.html#q=tag%2Bteam&lang=default&start=1"
      >
        Whoomp (There It Is) - Tag Team [3:45]
      </Link>
      <br />
      <br />
      <Link target="_blank" to="../assets/audio/TheJoiningOfOurSouls.mp3">
        The Joining Of Our Souls Creates A Fabulous Light (Alaco Theme) - Steven
        [47:40]
      </Link>
      <br />
      <br />
      <Link
        target="_blank"
        to="https://www.fye.com/sister-sledge---very-best-of-sister-sledge-pid.2522833292.html#q=sister%2Bsledge&lang=default&start=1"
      >
        We Are Family - Sister Sledge [3:36]
      </Link>
    </div>
  );
}

export default Soundtrack;
