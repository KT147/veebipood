import tootajadFailist from "../../data/tootajad.json"
import { useState } from "react"

function Haldatootajad() {

  const [nimed, setNimed] = useState (tootajadFailist)

  const kustutaNimi = (index) => {
    tootajadFailist.splice(index, 1)
    setNimed(tootajadFailist.slice())
  }

  return (
    <div>
      {nimed.length === 0 && <div>Töötajaid pole</div>}
      <table>
        <thead> 
          <tr>
            <th>Järjekord</th>
            <th>Töötaja</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {nimed.map((nimi, index) =>
          <tr key={nimi}>
            <td>{index}</td>
            <td>{nimi}</td>
            <td><button onClick={() => kustutaNimi (index)}>x</button></td> 
        </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Haldatootajad