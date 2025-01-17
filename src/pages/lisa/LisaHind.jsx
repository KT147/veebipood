import { useRef } from "react"
import hinnadFailist from "../../data/hinnad.json"

function LisaHind() {

    const hindRef = useRef();

    const lisa = () => {
        hinnadFailist.push({
          "id": hinnadFailist.length+1,
          "lisaja": "Toomas", 
          "number": Number(hindRef.current.value)})
        hindRef.current.value = ""
    }


  return (
    <div>
        <label>Hind</label> <br />
        <input ref={hindRef} type="number" /> <br />
        <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default LisaHind