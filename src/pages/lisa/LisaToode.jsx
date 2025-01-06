import { useRef, useState } from "react"

//if () {tõde} else {väär}  põhi


function LisaToode() {
    const [sonum, setSonum] = useState ("Sisesta toode!");
    const nimiRef = useRef(); //inputi seest andmete kätte saamiseks

    function sisesta () {
        if (nimiRef.current.value === "") {
            setSonum("Tühja nimega ei saa toodet sisestada!");
        } else {
            setSonum("Toode sisestatud!");
        }
    }

  return (
    <div>
        <div>{sonum}</div>
        <label>Toote nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={sisesta}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode