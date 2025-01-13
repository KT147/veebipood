import { Link, useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"
import { useRef } from "react"

function MuudaEsindus() {

  const {index} = useParams();
  const leitud = esindusedFailist[index]
  const esindusRef = useRef();

  const muuda = () =>  {
    esindusedFailist[index] = esindusRef.current.value
  }


  return (
    <div>
      <label>Esindus</label><br />
      <input ref={esindusRef} type="text" defaultValue={leitud} /><br />
      <Link to="/halda-esindused">
        <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaEsindus