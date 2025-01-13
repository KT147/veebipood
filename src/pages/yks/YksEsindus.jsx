import { useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
    const {index} = useParams()
    const esindus = esindusedFailist[index]; //undefined --> tühjus
    // const esindus = esindusedFailist.at(index) <-- teeb sama välja

    if (esindus === undefined) {
    return <div>Esindusi ei leitud</div>
    }

  return (
    <div>
        <div>{esindus}</div>
    </div>
  )
}

export default YksEsindus