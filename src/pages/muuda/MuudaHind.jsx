import { Link, useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"
import { useRef } from "react"

function MuudaHind() {
    const {index} = useParams()
    const leitud = hinnadFailist[index]
    const hindRef = useRef()

    const muuda = () => {
        hinnadFailist[index] = {
        "id" : leitud.id,
        "number": Number(hindRef.current.value),
        "lisaja": "Pille"
      }
    }

  return (
    <div>
        <label>Hind</label> <br />
        <input ref={hindRef} type="number" defaultValue={leitud.number} /><br />
        <Link to="/halda-hinnad">
            <button onClick={muuda}>Muuda</button>
        </Link>
    </div>
  )
}

export default MuudaHind