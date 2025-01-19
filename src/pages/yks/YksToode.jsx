import { useParams } from "react-router-dom"
import tootedFailist from "../../data/tooted.json"

function YksToode() {
  const{nimi} = useParams()
  const leitud = tootedFailist.find(toode=> toode.nimi === nimi)

  if (leitud === undefined) {
    return <div>
      <div>Tooteid ei leitud</div>
    </div>
}

  return (
    <div>
      <div>Toode: {leitud.nimi}</div>
      <div>Hind: {leitud.hind} €</div>
      <div>{leitud.aktiivne ? 'Saadaval' : 'Pole saadaval'}</div>
      <img src={leitud.pilt} style={{ width: '300px', height: 'auto' }}/>
    </div>
  )
}

export default YksToode