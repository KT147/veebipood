import { useState } from "react"


function Pildid() {
    const [pildid, setPildid] = useState(["/laigitud.svg", "/mittelaigitud.svg", "/vite.svg"]);
    
    const filtreeriSydamed = () => {
        // result
        const vastus = pildid.filter(pilt => pilt.includes("laigitud"));
        setPildid(vastus);
        // kui loon funktsiooni sees const abil uue muutujua, siis saan
        // seda kasutada ainult siin funktsiooni sees ( scope )
    }

    const sorteeriKasvavalt = () => {
        const vastus = pildid.toSorted((a,b) => a.length - b.length);
        setPildid(vastus);
    }

    const sorteeriKahanevalt = () => {
        const vastus = pildid.toSorted((a,b) => b.length - a.length);
        setPildid(vastus);
    }

  return (
    <div>
        <div>Kokku: {pildid.length} tk</div>
        <button onClick={sorteeriKasvavalt}>Sorteeri faili nime pikkus kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri faili nime pikkus kahanevalt</button>
        <button onClick={filtreeriSydamed}>Jäta alles südamed</button>
        {pildid.map(pilt => <img key={pilt} src={pilt} alt="" /> )}
    </div>
  )
}

export default Pildid