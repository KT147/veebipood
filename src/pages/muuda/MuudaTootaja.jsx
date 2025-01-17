import { Link, useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"
import { useRef } from "react"

function MuudaTootaja() {

  const {index} = useParams()
  const leitud= tootajadFailist[index]
  const tootajadRef= useRef()
  const telRef= useRef()
  const ametRef= useRef()
  const kogemusRef= useRef()

  const muuda = () => {
    tootajadFailist [index] = {
      "nimi": tootajadRef.current.value,
      "telefon": telRef.current.value,
      "amet": ametRef.current.value,
      "kogemus": kogemusRef.current.value,
    }
  }


  return (
    <div>
      <label>Töötaja</label> <br />
      <input ref={tootajadRef} type="text"defaultValue={leitud.nimi}/> <br />
      <label>Telefon</label> <br />
      <input ref={telRef} type="number"defaultValue={leitud.telefon}/> <br />
      <label>Amet</label> <br />
      <input ref={ametRef} type="text"defaultValue={leitud.amet}/> <br />
      <label>Kogemus</label> <br />
      <input ref={kogemusRef} type="number"defaultValue={leitud.kogemus}/> <br />
      <Link to="/halda-tootajad">
      <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaTootaja