import { useParams } from "react-router-dom";
import pildidFailist from "../../data/pildid.json"


function YksPilt() {
  const {id} = useParams();
  const leitud = pildidFailist.find(pilt=> pilt.id === Number(id));

  if (leitud === undefined) {
    return <div>
      <div>Pilte ei leitud</div>
    </div>
  }

  return (
    <div>
      <img src={leitud.url} alt={leitud.pealkiri} />
    </div>
  )
}

export default YksPilt