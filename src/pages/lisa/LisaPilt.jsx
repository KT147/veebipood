import { useRef } from "react"
import pildidJSON from "../../data/pildid.json"

function LisaPilt() {

    const piltRef = useRef();

    const lisa = () =>{
      // const pilt = {url, pealkiri, sisu}
        pildidJSON.push(piltRef.current.value);
        piltRef.current.value= ""
    }

  return (
    <div>
        <label>Pilt</label> <br />
        <input ref={piltRef} type="text" placeholder="Sisesta lehekülg" /> <br />
        <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaPilt