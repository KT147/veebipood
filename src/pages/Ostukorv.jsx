import { useState } from "react"
// import ostuKorvFailist from "../data/ostukorv.json"

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
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const kustuta = (index) => {
    tooted.splice(index,1);
    setTooted(tooted.slice()) //HTML uuenduseks
    localStorage.setItem("ostukorv", JSON.stringify(tooted)); //Localstorage uuenduseks
  }

  const arvutaKokku = () =>  {
    let summa = 0;
    // forEach peab tegema mingi tegevuse(tal endal pole eriomadust, käib lihtsalt läbi)
    //praegu anname iga tsükli iteratsioon summa muutujale uue väärtuse
    // summa = 0
    // ({Nobe, hind: 12} => 12  = 0 + 12)
    // summa = 12
    tooted.forEach(toode => summa = summa + toode.hind )
    return summa;
  }

  return (
    <div>
      {tooted.length === 0 && <div>Ostukorv on tühi</div>}

    {tooted.length > 0 && 
    <>
      <div>Kokku: {tooted.length} tk</div>
      <button onClick={() => setTooted([])}>Tühjenda</button>
    </>}


      {tooted.map ((toode, index) => 
        <div key={index}>
          {index+1}. {toode.nimi} - {toode.hind} €
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

        {tooted.length > 0 && <div>Kokku: {arvutaKokku()} €</div>}
    </div>
  )
}

export default Ostukorv