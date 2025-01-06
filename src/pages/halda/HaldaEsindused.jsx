import esindusedFailist from "../../data/esindused.json"
import { useState } from "react"

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
              <th>Kustuta</th>
            </tr>
          </thead>
          <tbody>
            {keskused.map((keskus, index) =>
            <tr key={keskus}>
             <td>{index}</td>
             <td>{keskus}</td>
             <td><button onClick={() => kustutaEsindus(index)}>x</button></td>
           </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default HaldaEsindused