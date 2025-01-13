import { Link, useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"
import { useRef } from "react"

function MuudaTootaja() {

  const {index} = useParams()
  const leitud= tootajadFailist[index]
  const tootajadRef= useRef()

  const muuda = () => {
    tootajadFailist [index] = tootajadRef.current.value
  }


  return (
    <div>
      <label>Töötaja</label> <br />
      <input ref={tootajadRef} type="text"defaultValue={leitud}/> <br />
      <Link to="/halda-tootajad">
      <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaTootaja