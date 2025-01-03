import { useState } from "react"

// best practice:
// kui on 1 tegevus, siis võiks seda teha otse onClick sees
// kui on 2+ tegevust, siis võiks tõsta eraldi funktsiooni

// JavaScriptis on 3 tüüpi väärtusi:
// number -> teha arvutusi, teha võrdusi kas on suurem/väiksem
//          kogus, kogusumma
// string (sõna) -> saan funktsioone kasutada .includes(), .endsWith()
//          isikukood, postiindeks, telefoninumber, maksmisel erinevad staadiumid
// boolean -> kahendväärus. true/false. "y"/"n". eriomadus: keerata teistpidi hüüumärgi abil
//          makstud, registreerunud, sisselogitud, täisealine

// array-d --> üks tüüp sees
// ["Coca", "Fanta", "Sprite"]

function Avaleht() {

    const[kogus, setKogus] = useState(0);
    const[sonum, setSonum] = useState("Uuenda kogust!");
    const [laigitud, setLaigitud] = useState(false);

    function nulli(){
      setKogus(0);
      setSonum("Kogus on nullitud!");
    }

  function vahenda () {
    setKogus(kogus - 1)
    setSonum("Kogus vähendatud!");
  }

  function suurenda () {
    setKogus(kogus + 1)
    setSonum("Kogus suurendatud!");
  }

  return (
    <div>
      {laigitud === true &&<img src="/laigitud.svg"></img>}
     {laigitud === false && <img src="/mittelaigitud.svg"></img>}
    <button onClick={() => setLaigitud(!laigitud)}>Muuda like-i</button>

    {/* {laigitud === false && <button onClick={() => setLaigitud(true)}>Pane like peale</button>}
      {laigitud === true && <button onClick={() => setLaigitud(false)}>Võta like maha</button>} */}

      <div>{sonum}</div>
      <br />
      {kogus > 0 && <button onClick={nulli}>Nulli kogus</button>}
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus > 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht