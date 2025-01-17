import esindusedFailist from "../../data/esindused.json"
import { useState } from "react"
import { Link } from "react-router-dom"

function HaldaEsindused() {
  const [keskused, setKeskused] = useState(esindusedFailist)

  const kustutaEsindus = (index) => {
    esindusedFailist.splice(index, 1)
    setKeskused(esindusedFailist.slice())

  }

  return (
    <div> 
      {keskused.length === 0 && <div>Esindusi pole</div>}
      <table>
      <thead>
            <tr>
              <th>Järjekord</th>
              <th>Keskus</th>
              <th>Telefon</th>
              <th>Aadress</th>
              <th>Kustuta</th>
              <th>Muuda</th>
            </tr>
          </thead>
          <tbody>
            {keskused.map((keskus, index) =>
            <tr key={keskus.nimi}>
             <td>{index}</td>
             <td>{keskus.nimi}</td>
             <td>{keskus.tel}</td>
             <td>{keskus.aadress}</td>
             <td><button onClick={() => kustutaEsindus(index)}>x</button></td>
             <td><Link to={"/muuda-esindus/" + index}><button>Muuda</button></Link></td>
           </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default HaldaEsindused