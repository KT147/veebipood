import { useState } from "react"
import pildidJSON from "../../data/pildid.json"
import { Link } from "react-router-dom";

function Pildid() {
    const [pildid, setPildid] = useState(pildidJSON);
    
    const filtreeriSydamed = () => {
        // result
        const vastus = pildid.filter(pilt => pilt.url.includes("laigitud"));
        setPildid(vastus);
        // kui loon funktsiooni sees const abil uue muutujua, siis saan
        // seda kasutada ainult siin funktsiooni sees ( scope )
    }

    const sorteeriKasvavalt = () => {
        const vastus = pildid.toSorted((a,b) => a.url.length - b.url.length);
        setPildid(vastus);
    }

    const sorteeriKahanevalt = () => {
        const vastus = pildid.toSorted((a,b) => b.url.length - a.url.length);
        setPildid(vastus);
    }


  return (
    <div>

        <div>Kokku: {pildid.length} tk</div>
        <button onClick={sorteeriKasvavalt}>Sorteeri faili nime pikkus kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri faili nime pikkus kahanevalt</button>
        <button onClick={filtreeriSydamed}>Jäta alles südamed</button>
        {pildid.map(pilt => 
            <Link to={"/pilt/" + pilt.url} key={pilt}>
            <img src={pilt.url} alt="" /> 
            </Link>
            )}
    </div>
  )
}

export default Pildid