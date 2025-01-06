import { useRef } from "react"
import tootajadFailist from "../../data/tootajad.json"

function LisaTootaja() {
  const tootajaRef = useRef ()

  const lisa = () => {
    tootajadFailist.push(tootajaRef.current.value)
    tootajaRef.current.value = ""
  }

  return (
    <div>
      <label>Lisa töötaja</label> <br />
      <input ref={tootajaRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default LisaTootaja