import pildidJSON from "../../data/pildid.json"
import { useState } from "react"

function Haldapildid() {
  const [pildid, setPildid] = useState(pildidJSON);

  const kustutaEsimene = () => {
    pildidJSON.splice(0, 1);
    setPildid(pildidJSON.slice())
}

const kustutaTeine = () => {
    pildidJSON.splice(1, 1);
    setPildid(pildidJSON.slice())
}

const kustutaKolmas = () => {
    pildidJSON.splice(2, 1);
    setPildid(pildidJSON.slice())
}

  return (
    <div>
      <button disabled={pildid.length < 1} onClick={kustutaEsimene}>Kustuta järjekorras esimene pilt</button>
        <button disabled={pildid.length < 2} onClick={kustutaTeine}>Kustuta järjekorras teine pilt</button>
        <button disabled={pildid.length < 3} onClick={kustutaKolmas}>Kustuta järjekorras kolmas pilt</button>
        {pildid.map(pilt => <img key={pilt} src={pilt} alt="" /> )}
    </div>
  )
}

export default Haldapildid