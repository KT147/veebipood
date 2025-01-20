import pildidJSON from "../../data/pildid.json"
import { useState } from "react"
import { Link } from "react-router-dom";


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
      {pildid.length === 0 && <div>Pilte ei ole</div>}
      <button disabled={pildid.length < 1} onClick={kustutaEsimene}>Kustuta järjekorras esimene pilt</button>
        <button disabled={pildid.length < 2} onClick={kustutaTeine}>Kustuta järjekorras teine pilt</button>
        <button disabled={pildid.length < 3} onClick={kustutaKolmas}>Kustuta järjekorras kolmas pilt</button> 
      <table>
      <thead>
        <tr>
          <th>Järjekord</th>
          <th>Pilt</th>
          <th>Nimi</th>
          <th>Kirjeldus</th>
          <th>Muuda</th>
        </tr>
      </thead>
      <tbody>
        {pildid.map((pilt,index) => 
        <tr key={pilt.url}>
          <td>{index}</td>
          <td><img src={pilt.url} alt="" className="small-image" /></td>
          <td>{pilt.pealkiri}</td>
          <td>{pilt.sisu}</td>
          <td><Link to={"/muuda-pilt/" + index}><button>Muuda</button></Link></td>
        </tr>)}
        </tbody>
        </table>
    </div>
  )
}

export default Haldapildid