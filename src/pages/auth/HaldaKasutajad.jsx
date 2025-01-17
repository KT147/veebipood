
import kasutajadFailist from "../../data/kasutajad.json"

function HaldaKasutajad() {

  const kasutajad = kasutajadFailist;


  return (
    <div>
      {kasutajad.map(kasutaja =>
        <div key={kasutaja.email}>
          {/*JSON.stringify(kasutaja)
          objekte ei saa tervukuna välja näidata. leht on valge
          inspect -> console all error:
          */}
          <div>{kasutaja.email}</div>
          <div>{kasutaja.nimi}</div>
          <br />
        </div>
      )}
    </div>
  )
}

export default HaldaKasutajad