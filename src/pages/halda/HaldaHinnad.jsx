import { Link } from "react-router-dom";
import hinnadFailist from "../../data/hinnad.json"
import { useState } from "react"

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState (hinnadFailist)

    const kustutaHind = (index) => {
        hinnadFailist.splice(index, 1);
        setHinnad(hinnadFailist.slice())
    }

  return (
    <div>
        <div>Hindade arv kokku: {hinnad.length} tk</div>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Hind</th>
              <th>Lisaja</th>
              <th>Kustuta</th>
              <th>Muuda</th>
            </tr>
          </thead>
          <tbody>
             {hinnad.map((hind, index) => 
             <tr key={hind.number}>
              <td>{index}</td>
              <td>{hind.number}</td>
              <td>{hind.lisaja}</td>
              <td><button onClick={() => kustutaHind(index)}>x</button></td>
              <td><Link to={"/muuda-hind/" + index}><button>Muuda</button></Link></td>
              </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad