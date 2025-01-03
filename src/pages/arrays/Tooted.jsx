import { useState } from "react"

function Tooted() {
  const [tooted, setTooted] = useState (["Nobe", "BMW", "Tesla", "Toyota", "Nissan", "Bentley", "Audi", "Mercedes"]);

  const sorteeriAZ = () => {
    const vastus = tooted.toSorted((a, b) => a.localeCompare(b))
    setTooted(vastus);
  }

  const sorteeriZA = () => {
    const vastus = tooted.toSorted((a, b) => b.localeCompare(a))
    setTooted(vastus);
  }

  const sorteeriKasvavalt = () => {
    const vastus = tooted.toSorted((a, b) => a.length - b.length)
    setTooted(vastus);
  }

  const sorteeriKahanevalt = () => {
    const vastus = tooted.toSorted((a, b) => b.length - a.length)
    setTooted(vastus);
  }

  const sorteeriTeiseTaheJargi = () => {
    const vastus = tooted.toSorted((a, b) => a[1].localeCompare(b[1]))
    setTooted(vastus)
  }

  const filtreeriN = () => {
    const vastus = tooted.filter(toode=> toode.startsWith("N"))
    setTooted (vastus)
  }

  const filtreeriB = () => {
    const vastus = tooted.filter(toode=> toode.startsWith("B"))
    setTooted (vastus)
  }

  const filtreeriT = () => {
    const vastus = tooted.filter(toode=> toode.startsWith("T"))
    setTooted (vastus)
  }

  const filtreeriKuuetahelised = () => {
    const vastus = tooted.filter(toode => toode.length === 6)
    setTooted(vastus)
  }

  const filtreeriKuniKuuetahelised = () => {
    const vastus = tooted.filter(toode => toode.length <= 6)
    setTooted(vastus)
  }

  const eslyhendiga = () => {
    const vastus = tooted.filter(toode => toode.includes("es"))
    setTooted(vastus)
  }

  const teinetahtE = () => {
    const vastus = tooted.filter(toode => toode[1] === "e")
    setTooted(vastus)
  }

  const paarisarv = () => {
    const vastus = tooted.filter(toode => toode.length % 2 === 0);
    setTooted(vastus)
  }



  return (
    <div>
      <div>Kokku: {tooted.length} tk</div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri A-Z</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri tähtede järgi kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri tähtede järgi kahanevalt</button>
      <button onClick={sorteeriTeiseTaheJargi}>Sorteeri teise tähe järgi</button>
      <button onClick={filtreeriN}>Filtreeri N-tähega algavad</button>
      <button onClick={filtreeriB}>Filtreeri B-tähega algavad</button>
      <button onClick={filtreeriT}>Filtreeri T-tähega algavad</button>
      <button onClick={filtreeriKuuetahelised}>Filtreeri täpselt 6-tähelised tooted</button>
      <button onClick={filtreeriKuniKuuetahelised}>Filtreeri kuni 6-tähelised tooted</button>
      <button onClick={eslyhendiga}>Filtreeri &quot;es&quot;- lühendit sisaldavad</button>
      <button onClick={teinetahtE}>Filtreeri, kus teine täht on &quot;e&quot;</button>
      <button onClick={paarisarv}>Filtreeri paarisarv tähtedega tooted</button>
      {tooted.map(toode => <div key={toode}>{toode}</div>)}
    </div>
  )
}

export default Tooted

//Nobe, BMW, Tesla, Toyota, Nissan, Bentley, Audi, Mercedes

  // sorteeri A-Z
  // sorteeri Z-A
  // tähed kasvavalt
  // tähed kahanevalt
  // teine täht A-Z

  // filtreeri n-ga algavad
  // filtreeri b-ga algavad
 // filtreeri t-ga algavad
  // kuni 6 tähelised
  // täpselt 6 tähelised
  // 'es" lühendit sisaldavad
  // kellel on 2. täht "e"
  // paarisarv tähti sisaldavad

  // kogus --> mitu tk