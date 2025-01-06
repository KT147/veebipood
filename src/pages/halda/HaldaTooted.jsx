import { useState } from "react"
import tootedFailist from "../../data/tooted.json"

function HaldaTooted() {

  const [tooted, setTooted] = useState (tootedFailist);

  const kustutaToode = (index) => {
    tootedFailist.splice(index, 1)
    setTooted(tootedFailist.slice())

  }

  return (
    <div>
      {tooted.length === 0 && <div>Tooteid ei ole</div>}
      <table>
        <thead>
          <tr>
            <th>Järjekord</th>
            <th>Toode</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) =>
          <tr key={toode}>
            <td>{index}</td>
            <td>{toode}</td>
            <td><button onClick={() => kustutaToode (index)}>x</button></td>
          </tr>)}
       </tbody>
    </table>
    </div>
  )
}

export default HaldaTooted