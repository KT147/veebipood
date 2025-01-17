import { useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
    const {nimi} = useParams()
    //const esindus = esindusedFailist[index]; //undefined --> tühjus
    // const esindus = esindusedFailist.at(index) <-- teeb sama välja

    const esindus = esindusedFailist.find(e => e.nimi === nimi);

    if (esindus === undefined) {
    return <div>Esindusi ei leitud</div>
    }

  return (
    <div>
        <div>Nimi: {esindus.nimi}</div>
        <div>Telefon: {esindus.tel}</div>
        <div>Aadress: {esindus.aadress}</div>
    </div>
  )
}

export default YksEsindus