import { useState } from "react"


function Seaded() {
    const [keel, setKeel] = useState("est");

  return (
    <div>
        <div>Hetkel aktiivse keele lühend on: {keel}</div>
        <button onClick={() => setKeel("est")}>eesti</button>
        <button onClick={() => setKeel("eng")}>english</button>
        <button onClick={() => setKeel("rus")}>pycckij</button>
        <button onClick={() => setKeel("esp")}>espanol</button>

        <br /><br />

        {keel === "est" && <div>Leht on eesti keeles</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" &&<div>Cтpaницa на русском языке</div>}
        {keel === "esp" &&<div>La pagina esta en español</div>}

    </div>
  )
}

export default Seaded