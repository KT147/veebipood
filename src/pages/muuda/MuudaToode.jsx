import { Link, useParams } from "react-router-dom"
import tootedFailist from "../../data/tooted.json"
import { useRef } from "react"

function MuudaToode() {

    const {index} = useParams()
    const leitud = tootedFailist[index]
    const toodeRef = useRef()

    const muuda = () => {
      tootedFailist[index] = toodeRef.current.value;
    }

  return (
    <div>
      <label>Toode</label><br />
      <input ref={toodeRef} type="text" defaultValue={leitud} /><br />
      <Link to="/halda-tooted">
      <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaToode