import { Link, useParams } from "react-router-dom"
import tootedFailist from "../../data/tooted.json"
import { useRef } from "react"

function MuudaToode() {

    const {index} = useParams()
    const leitud = tootedFailist[index]
    const toodeRef = useRef()
    const hindRef = useRef()
    const saadavusRef = useRef()
    const piltRef = useRef()

    const muuda = () => {
      tootedFailist[index] = {
        "nimi": toodeRef.current.value,
        "hind": hindRef.current.value,
        "aktiivne": saadavusRef.current.checked,
        "pilt": piltRef.current.value
    }}

  return (
    <div>
      <label>Toode</label><br />
      <input ref={toodeRef} type="text" defaultValue={leitud.nimi} /><br />
      <label>Hind</label><br />
      <input ref={hindRef} type="number" defaultValue={leitud.hind} /><br />
      <label>Saadavus</label><br />
      <input ref={saadavusRef} type="checkbox" defaultChecked={leitud.aktiivne} /><br />
      <label>Pilt (URL)</label><br />
      <input ref={piltRef} type="text" defaultValue={leitud.pilt} /><br />
      <Link to="/halda-tooted">
      <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaToode