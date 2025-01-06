import { useRef, useState } from "react"
import tootedFailist from "../../data/tooted.json"

//if () {tõde} else {väär}  põhi


function LisaToode() {

    const toodeRef = useRef ();

    const [sonum, setSonum] = useState ("Sisesta toode!");

    const esimeneSonum = () => {
        tootedFailist.push(toodeRef.current.value)
        toodeRef.current.value = ""
    }

    const teineSonum = () => {
        if (toodeRef.current.value === "") {
            setSonum("Tühja nimega ei saa toodet sisestada!");
        } else {
            setSonum("Toode sisestatud!");
            esimeneSonum()
        }}

    
    

  return (
    <div>
        <div>{sonum}</div> <br />
        <input ref={toodeRef} type="text" /> <br />
        <button onClick={teineSonum}>Sisesta</button>
    </div>
  )
}

export default LisaToode