import { useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"

function YksTootaja() {

  const {i} = useParams()
  const leitud = tootajadFailist[i]

  if (leitud === undefined) {
    return <div>Töötajat ei leitud</div>
  }

  return (
    <div>
      {leitud}
    </div>
  )
}

export default YksTootaja