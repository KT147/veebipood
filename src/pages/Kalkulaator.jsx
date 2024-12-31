import { useState } from "react"
import LaenuKalkulaator from "../components/LaenuKalkulaator"
import TavaKalkulaator from "../components/Tavakalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator";



function Kalkulaator() {
  const [vaade, setVaade] = useState ("tava");

  return (
    <div>
      <button onClick={() => setVaade ("tava")}>Tavakalkulaator</button>
      <button onClick={() => setVaade ("laenu")}>Näidiskuumakse</button>
      <button onClick={() => setVaade ("maksimaalne")}>Maksimaalne limiit</button>
      {vaade === "tava" && <TavaKalkulaator/> }
      {vaade === "laenu" &&<LaenuKalkulaator/> }
      {vaade === "maksimaalne" && <MaksimaalneKalkulaator/>}
    </div>
  )
}

export default Kalkulaator