import { useState } from "react"

// Array- mitme väärtuse hoidmiseks [,  ,  ,  ] komaga eraldatud väärtused
// element - üks väärtus array sees

// array elementidega operatsioonide tegemiseks tuleb kasutada tsüklit
// --- HTMLs välja näitamine .map ()
// --- kokkuarvutus          .forEach()
// --- filtreerimisi         .filter()
// --- sorteerimisi          .sort()
// tsüklite sees on nool ( => )

// key={} on alati HTMls .map sees, vahetult esimese tagi (nt div) küljes
// see võimaldab Reactil meelde jätta HTML elemente, et kui toimub rerenderdus,
// siis ei pea uuesti seda tsüklit tegema

//rerenderdus --> iga kord kui läheb useSet set funktsioon käima
// renderdamine --> HTMLi väljakuvamine/printimine, koodi näitamine brauseris

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);

  return (
    <div>
      <div>Kokku: {tooted.length} tk</div>
      <button onClick={() => setTooted([])}>Tühjenda</button>
      {tooted.map (toode => <div key={toode}>{toode} <button>x</button></div>)}
    </div>
  )
}

export default Ostukorv