import { useRef } from "react"
import pildidJSON from "../../data/pildid.json"

function LisaPilt() {

    const piltRef = useRef();
    const nimiRef = useRef();
    const kirjelduRef = useRef()

    const lisa = () => {

    const pilt ={
      "url": piltRef.current.value,
      "pealkiri":nimiRef.current.value,
      "sisu" : kirjelduRef.current.value
    }
      // const pilt = {url, pealkiri, sisu}
        pildidJSON.push(pilt);
        piltRef.current.value= ""
      }
  

  return (
    <div>
        <label>Pilt</label> <br />
        <input ref={piltRef} type="text" placeholder="Sisesta URL" /> <br />
        <label>Nimi</label>
        <input ref={nimiRef} type="text" /><br />
        <label>Kirjeldus</label>
        <input ref={kirjelduRef} type="text" /><br />
        <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaPilt