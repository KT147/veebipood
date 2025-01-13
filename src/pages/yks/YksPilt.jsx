import { useParams } from "react-router-dom";
import pildidFailist from "../../data/pildid.json"


function YksPilt() {
  const {jrknr} = useParams();
  const leitud = pildidFailist[jrknr];

  return (
    <div>
      <img src={leitud} alt="" />
    </div>
  )
}

export default YksPilt