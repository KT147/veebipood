import { useState } from "react"
import tootajadFailist from "../../data/tootajad.json"
import { Link } from "react-router-dom"


function Tootajad() {
  //eesnimed 10x

  const [nimed, setNimed] = useState (tootajadFailist)

  const taasta = () => 
    setNimed(tootajadFailist)

  const sorteeriAZ = () => {
    const vastus = nimed.toSorted((a, b) => a.nimi.localeCompare(b.nimi))
    setNimed(vastus)
  }

  const sorteeriZA = () => {
    const vastus = nimed.toSorted((a,b) => b.nimi.localeCompare(a.nimi))
    setNimed(vastus)
  }

  const sorteeriKasvavalt = () => {
    const vastus = nimed.toSorted((a,b) => a.nimi.length - b.nimi.length)
    setNimed(vastus)
  }

  const sorteeriKahanevalt = () => {
    const vastus = nimed.toSorted((a,b) => b.nimi.length - a.nimi.length)
    setNimed(vastus)
  }

  const sorteeriNeljandaTaheJargi = () => {
    const vastus = nimed.toSorted((a,b) => a.nimi[3].localeCompare(b.nimi[3]))
    setNimed(vastus)
  }

  const sorteeriSonadeArvuJargi = () => {
    const vastus = nimed.toSorted((a, b) => a.nimi.length - b.nimi.length)
    setNimed(vastus)
  }

  const filtreeriS = () => {
    const vastus = nimed.filter(nimi => nimi.nimi.endsWith("s"))
    setNimed(vastus);
  }

  const filtreeri5tahelised = () => {
    const vastus = nimed.filter(nimi => nimi.nimi.length >= 5)
    setNimed(vastus)
  }

  const filtreerit2pselt5 = () => {
    const vastus = nimed.filter (nimi => nimi.nimi.length === 5)
    setNimed(vastus)
  }

  const maSisaldavad = () => {
    const vastus = nimed.filter (nimi => nimi.nimi.includes("Ma"))
    setNimed(vastus)
  }

  const teineTahtA = () => {
    const vastus = nimed.filter (nimi => nimi.nimi[1] === "a")
    setNimed(vastus);
  }

  const paarituArv = () => {
    const vastus = nimed.filter (nimi => nimi.nimi.length % 2 !== 0)
    setNimed(vastus)
  }

  const arvutaKokku = () => {
    let sum = 0
    nimed.forEach(nimi=> sum += nimi.nimi.length)
    return sum;

  }

  return (
    <div>
      {nimed.length === 0 && <div>Töötajaid pole</div>}
      {nimed.length > 0 && <div>Kokku {nimed.length} tk</div>}
      <button onClick={taasta}>Reset sorteeri ja filtreeri</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri A-Z</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri tähtede järgi kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri tähtede järgi kahanevalt</button>
      <button onClick={sorteeriNeljandaTaheJargi}>Sorteeri neljanda tähe järgi</button>
      <button onClick={sorteeriSonadeArvuJargi}>Sorteeri tähtede arvu järgi</button>
      <button onClick={filtreeriS}>Filtreeri &quot;s&quot;-iga lõppevad</button>
      <button onClick={filtreeri5tahelised}>Filtreeri vähemalt &quot;5&quot;-tähelised</button>
      <button onClick={filtreerit2pselt5}>Filtreeri täpselt &quot;5&quot;-tähelised</button>
      <button onClick={maSisaldavad}>Filtreeri &quot;Ma&quot;-ga algavad</button>
      <button onClick={teineTahtA}>Filtreeri need, kelle teine täht&quot;a&quot;</button>
      <button onClick={paarituArv}>Filtreeri paaritu arvuga nimed</button>
      {nimed.map(nimi => 
      <div key={nimi.nimi}>
        {nimi.nimi}
        <Link to={"/tootaja/" + nimi.nimi}><button>Vt lähemalt</button></Link>
        </div>)}
        <div>Tähed kokku: {arvutaKokku()}</div>
    </div>
  )
}

// sorteeri A-Z
  // sorteeri Z-A
  // tähed kasvavalt
  // tähed kahanevalt
  // neljas täht A-Z
  // sorteeri sõnad arvu järgi

  // filtreeri ????'ga lõppevad
  // vähemalt ???? tähelised
  // täpselt ???? tähelised
  // '????' lühendit sisaldavad
  // kellel on ???'s täht "????"
  // paarisarv tähti sisaldavad

  // kogus --> mitu tk

export default Tootajad