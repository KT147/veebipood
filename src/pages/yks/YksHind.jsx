import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"


function YksHind() {
    const {i} = useParams();
    //const leitud = hinnadFailist[i]
    const leitud = hinnadFailist.find(hind=> hind.id === Number(i))

    if (leitud === undefined) {
        return <div>Hinda ei leitud</div>
    }

  return (
    <>
    <div>Hind: {leitud.number}</div>
    <div>Lisaja: {leitud.lisaja}</div>
    </>
  )
}

export default YksHind