import { Link, useParams } from "react-router-dom"
import pildidFailist from "../../data/pildid.json"
import { useRef } from "react"


function MuudaPilt() {

  const {index} = useParams ()
  const leitud = pildidFailist [index]

  const piltRef = useRef()

  const muuda = () => {
    pildidFailist[index] = {
      "url": piltRef.current.value
    }
  }

  return (
    <div>
      <label>Sisesta uus URL</label> <br />
      <input ref={piltRef} type="text" defaultValue={leitud.url} /><br />
      <Link to ="/halda-pildid">
      <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaPilt