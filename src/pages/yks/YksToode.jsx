import { useParams } from "react-router-dom"
import tootedFailist from "../../data/tooted.json"

function YksToode() {
  const{i} = useParams()
  const leitud = tootedFailist [i]

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
}

  return (
    <div>
      {leitud}
    </div>
  )
}

export default YksToode