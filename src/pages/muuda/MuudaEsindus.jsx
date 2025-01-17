import { Link, useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"
import { useRef } from "react"

function MuudaEsindus() {

  const {index} = useParams();
  const leitud = esindusedFailist[index]
  const esindusRef = useRef();
  const telRef = useRef();
  const aadressRef = useRef()

  const muuda = () =>  {
    esindusedFailist[index] = {
      "nimi": esindusRef.current.value,
      "tel": telRef.current.value,
      "aadress": aadressRef.current.value
    }
  }


  return (
    <div>
      <label>Esindus</label><br />
      <input ref={esindusRef} type="text" defaultValue={leitud.nimi} /><br />
      <label>Telefon</label> <br />
      <input ref={telRef} type="text" defaultValue={leitud.tel} /><br />
      <label>Telefon</label> <br />
      <input ref={aadressRef} type="text" defaultValue={leitud.aadress} /><br />
      <Link to="/halda-esindused">
        <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaEsindus