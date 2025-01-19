import { useParams } from "react-router-dom";
import pildidFailist from "../../data/pildid.json"


function YksPilt() {
  const {jrknr} = useParams();
  const leitud = pildidFailist.find(pilt=> pilt.url === jrknr);


  return (
    <div>
      <img src={"/" + leitud.url} alt={leitud.pealkiri} />
    </div>
  )
}

export default YksPilt