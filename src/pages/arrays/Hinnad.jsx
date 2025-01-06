import { useState } from "react"
import hinnadFailist from "../../data/hinnad.json"
// ../ -> kausta võrra üles

function Hinnad() {
    const [hinnad, setHinnad] = useState (hinnadFailist)

    // const abil loon uusi muutujaid/funktioone, mille sisse panen võrdusmärgiga väärtuse

    const filtreeriSuuremKui100 = () => {
        const vastus = hinnad.filter(hind => hind > 100)
        setHinnad(vastus)
        //setHinnad([245, 673, 310, 486, 531, 192])
    }
    
    const sorteeriKasvavalt = () => {
        const vastus = hinnad.toSorted((a,b) => a - b);
        setHinnad(vastus);
    }

    const sorteeriKahanevalt = () => {
        const vastus = hinnad.toSorted((a,b) => b - a);
        setHinnad(vastus);
    }

    const originaali = () => {
        setHinnad(hinnadFailist)
    }


  return (
    <div>
        <button onClick={originaali}>Reset sorteeri ja filtreeri</button>
        <div>Hindade arv kokku: {hinnad.length} tk</div>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={filtreeriSuuremKui100}>Jäta alles suuremad kui 100</button>
        {hinnad.map(hind => <div key={hind}>{hind}</div>)}
    </div>
  )
}

export default Hinnad