import { useRef, useState } from "react"
import tootedFailist from "../../data/tooted.json"

//if () {tõde} else {väär}  põhi


function LisaToode() {

    const toodeRef = useRef ();
    const hindRef = useRef ();
    const saadavusRef = useRef ();
    const piltRef = useRef ();


    const [sonum, setSonum] = useState ("Sisesta toode!");


    const sisestus = () => {
        if (toodeRef.current.value === "") {
            setSonum("Tühja nimega ei saa toodet sisestada!");
            return;
        }

        setSonum("Toode sisestatud!");
            // const toode = {nimi: "Nobe", hind: 20, aktiivne: true, pilt: "https:// jpg."} pilt URL-st
            //. push () faili
    
    const toode = {
        "nimi": toodeRef.current.value,
        "hind": hindRef.current.value,
        "aktiivne" : saadavusRef.current.checked,
        "pilt" : piltRef.current.value
      }
      tootedFailist.push(toode)
      toodeRef.current.value = ""
      hindRef.current.value = ""
      saadavusRef.current.value = false
      piltRef.current.value = ""
    }

    
    

  return (
    <div>
        <div>{sonum}</div> <br />
        <label>Toote nimi</label>
        <input ref={toodeRef} type="text" /> <br />
        <label>Hind</label>
        <input ref={hindRef} type="number" /> <br />
        <label>Saadavus</label>
        <input ref={saadavusRef} type="checkbox" /> <br />
        <label>Pilt (URL)</label>
        <input ref={piltRef} type="text" /> <br />
        <button onClick={sisestus}>Sisesta</button>
    </div>
  )
}

export default LisaToode