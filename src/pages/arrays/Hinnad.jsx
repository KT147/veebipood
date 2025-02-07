import { useState } from "react"
import hinnadFailist from "../../data/hinnad.json"
import { Link } from "react-router-dom"
// ../ -> kausta võrra üles

function Hinnad() {
    const [hinnad, setHinnad] = useState (hinnadFailist)

    // const abil loon uusi muutujaid/funktioone, mille sisse panen võrdusmärgiga väärtuse

    const filtreeriSuuremKui100 = () => {
        const vastus = hinnad.filter(hind => hind.number > 100)
        setHinnad(vastus)
        //setHinnad([245, 673, 310, 486, 531, 192])
    }
    
    const sorteeriKasvavalt = () => {
        const vastus = hinnad.toSorted((a,b) => a.number - b.number);
        setHinnad(vastus);
    }

    const sorteeriKahanevalt = () => {
        const vastus = hinnad.toSorted((a,b) => b.number - a.number);
        setHinnad(vastus);
    }

    const originaali = () => {
        setHinnad(hinnadFailist)
    }

    const arvutaKokku = () => {
        //kuna käivitatakse kohe, siis siia useState Set panna ei saa -> jääb loopima
        let summa = 0;
        hinnad.forEach(hind => summa= summa + hind.number);
        return summa;
    }


  return (
    <div>
        <button onClick={originaali}>Reset sorteeri ja filtreeri</button>
        <div>Hindade arv kokku: {hinnad.length} tk</div>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={filtreeriSuuremKui100}>Jäta alles suuremad kui 100</button>
        {hinnad.map(hind => 
        <div key={hind.number}>
            {hind.number}
            <Link to={"/hind/" + hind.id}><button>Vt lähemalt</button></Link>
            </div>)}
        <div>Kokku:{arvutaKokku()}</div>
    </div>
  )
}

export default Hinnad