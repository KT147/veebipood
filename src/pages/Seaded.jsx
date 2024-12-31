import { useState } from "react";



function Seaded() {
    const [keel, setKeel] = useState("est");

  return (
    <div>
        <div>Hetkel aktiivse keele lühend on: {keel}</div>
        <button className={keel === "est" ? "keel-aktiivne" : undefined} onClick={() => setKeel("est")}>eesti</button>
        <button className={keel === "eng" ? "keel-aktiivne" : undefined} onClick={() => setKeel("eng")}>english</button>
        <button className={keel === "rus" ? "keel-aktiivne" : undefined} onClick={() => setKeel("rus")}>pycckij</button>
        <button className={keel === "esp" ? "keel-aktiivne" : undefined} onClick={() => setKeel("esp")}>espanol</button>

        <br /><br />

        {keel === "est" && <div>Leht on eesti keeles</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" &&<div>Cтpaницa на русском языке</div>}
        {keel === "esp" &&<div>La pagina esta en español</div>}

    </div>
  )
}

export default Seaded