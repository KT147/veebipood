import { useRef, useState } from "react"
import tootajadFailist from "../../data/tootajad.json"

function LisaTootaja() {
  const tootajaRef = useRef ()
  const telRef = useRef ()
  const ametRef = useRef ()
  const kogemusRef = useRef ()

  const [sonum, setSonum] = useState()

  const lisa = () => {
    if (tootajaRef.current.value === "") {
      setSonum("Nimi puudub");
      return;
    } 
    if (telRef.current.value === "") {
      setSonum("Telefon puudub");
      return;
    } 
    if (ametRef.current.value === "") {
      setSonum("Amet puudub");
      return;
    }
    if (kogemusRef.current.value === "") {
      setSonum("Kogemus puudub");
      return;
    }

    const tootaja = {
      "nimi": tootajaRef.current.value,
      "telefon": telRef.current.value,
      "amet" : ametRef.current.value,
      "kogemus" : kogemusRef.current.value
    }
    tootajadFailist.push(tootaja)
    tootajaRef.current.value = ""
    telRef.current.value = ""
    ametRef.current.value = ""
    kogemusRef.current.value = ""
  }

  const kontrolli = () => {
    if (telRef.current.value.startsWith ("5") === false) {
      setSonum("Telefoninumber peab algama numbriga 5");
      return;
    }
    if (telRef.current.value.length < 7) {
      setSonum("Telefoninumber on liiga lühike");
      return;
    }
    if (telRef.current.value.length > 8) {
      setSonum("Telefoninumber on liiga pikk");
      return;
    }
    setSonum("");
  }

  return (
    <div>
      <label>Töötaja nimi</label> <br />
      <input ref={tootajaRef} type="text" /> <br />
      <label>Telefon</label> <br />
      <input onChange={kontrolli} ref={telRef} type="number" /> <br />
      <label>Amet</label> <br />
      <input ref={ametRef} type="text" /> <br />
      <label>Töökogemus aastates</label> <br />
      <input ref={kogemusRef} type="number" /> <br />
      <div>{sonum}</div>
      <button onClick={lisa}>Lisa</button>
    </div>
  )
}

// nimi, telefon, amet, kogemus aastates --> 20 && <div> Seenior</div>
// . push()

export default LisaTootaja