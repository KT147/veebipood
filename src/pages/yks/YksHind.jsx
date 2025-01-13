import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"


function YksHind() {
    const {i} = useParams();
    const leitud = hinnadFailist[i]

    if (leitud === undefined) {
        return <div>Hinda ei leitud</div>
    }

  return (
    <div>{leitud}</div>
  )
}

export default YksHind