// algus tagi ja lõputagiga: <button>20 €</button>   <div>Tekst</div>    <p>Tekst2</p>
// self-closing elemendid  <br/>   <img />
//    self-closing elementide osas võin teha algus ja lõputagiga ja ta töötab, aga pole mõtet
//    sest ma ei kirjuta kunagi mitte midagi nende kahe elemendi vahele
//    kui kogemata kirjutan nende vahele midagi, kuhu ei käi tegelikult midagi, siis on error

import { useState } from "react"

function Kinkekaart() {
    const [summa, setSumma]= useState(20);
    const [kogus, setKogus] = useState (1);

  return (
    <div>
        <button onClick={() => setSumma (20)}>20 €</button>
        <button onClick={() => setSumma (50)}>50 €</button>
        <button onClick={() => setSumma (100)}>100 €</button>

        <br /> <br />

        <div>Kinkekaart {summa} €</div>

        <br /><br /><br />

        <button disabled={kogus === 1} onClick={() => setKogus (kogus - 1)}>-</button>
        <span>{kogus}</span>
        <button onClick={() => setKogus (kogus + 1)}>+</button>


    </div>
  )
}

export default Kinkekaart