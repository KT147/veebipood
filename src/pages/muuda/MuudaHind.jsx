import { Link, useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"
import { useRef } from "react"

function MuudaHind() {
    const {index} = useParams()
    const leitud = hinnadFailist[index]
    const hindRef = useRef()

    const muuda = () => {
        hinnadFailist[index] = Number(hindRef.current.value)
    }

  return (
    <div>
        <label>Hind</label> <br />
        <input ref={hindRef} type="number" defaultValue={leitud} /><br />
        <Link to="/halda-hinnad">
            <button onClick={muuda}>Muuda</button>
        </Link>
    </div>
  )
}

export default MuudaHind