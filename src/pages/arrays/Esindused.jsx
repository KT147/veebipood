import { useState } from "react" //use-d: useState, useRef
import { Link } from "react-router-dom"; //kõik URL-ga seotud asjad
import esindusedFailist from "../../data/esindused.json"
import { useTranslation } from 'react-i18next';

// && ---> kui vasakul on tõsi, siis parempoolne näidatakse
// === ---> vasak ja parem pool on identsed
// =   ---> väärtuse andmiseks
// == ---> seda Reactis ei kasutata, see on identsuse kontroll ilma tüübi kontrollita

// Array peab tegema:
// 1. kui tuleb andmebaasist
// 2. kui tahan filtreerimisi/sorteerimisi või muid muudatusi

// Array võiks teha:
// kui pean pidevalt koguaeg andmeid muutma, sest siis saan kõigile korraga muuta
// Kui andmeid on palju >10-15


function Esindused() {

    const { t } = useTranslation();

    //muutuja-->HTMLi ja muutja-->onClick külge
    const[linn, setLinn] = useState("Tallinn");
    const [keskused, setKeskused] = useState(esindusedFailist)

    const sorteeriAZ = () => {
        const vastus = keskused.toSorted((a, b) => a.nimi.localeCompare(b.nimi))
        setKeskused(vastus)
    }

    const sorteeriZA = () => {
        const vastus = keskused.toSorted((a, b) => b.nimi.localeCompare(a.nimi))
        setKeskused(vastus)
    }

    const sorteeriKolmasTahtZA = () => {
        const vastus = keskused.toSorted((a, b) => a.nimi[2].localeCompare(b.nimi[2]))
        setKeskused(vastus)
    }

    const filtreeriEgaLoppevad = () => {
        const vastus = keskused.filter(keskus => keskus.nimi.endsWith("e"))
        setKeskused(vastus)
    }

    const filtreeri9Tahelised = () => {
        const vastus = keskused.filter(keskus => keskus.nimi.length === 9)
        setKeskused(vastus)
    }

    const filtreeriNeljasTahtS = () => {
        const vastus = keskused.filter(keskus => keskus.nimi[3] === "s" )
        setKeskused(vastus)
    }

    const originaali = () =>
        setKeskused(esindusedFailist)

    const arvutaKokku = () => {
        let sum = 0;
        /// sama keskused.forEach(keskus => sum = sum + keskus)
        keskused.forEach(keskus => sum += keskus.nimi.length)
        return sum;
    }

  return (
    <div>
        <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
        <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
        <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
        <button className={linn === "Pärnu" ? "linn-aktiivne" : "mingu-muu"} onClick={() => setLinn("Pärnu")}>Pärnu</button>

        <br /><br />

        <div>{t('currently-active-city')} : {linn}</div>

        <br />
        {linn === "Tallinn" && 
            <>
                {keskused.length === 0 && <div>{t('no-shops')}</div>}
                {keskused.length > 0 && <div>{t('shops-total-number')}: {keskused.length} tk</div>}
                <button onClick={originaali}>Reset sorteeri ja filtreeri</button>
                <br /><br />
                <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
                <button onClick={sorteeriZA}>Sorteeri Z-A</button>
                <button onClick={sorteeriKolmasTahtZA}>Sorteeri kolmandast tähest</button>
                <button onClick={filtreeriEgaLoppevad}>Filtreeri &quot;e&quot;-ga lõppevad</button>
                <button onClick={filtreeri9Tahelised}>Filtreeri 9-tähelised</button>
                <button onClick={filtreeriNeljasTahtS}>Filtreeri neljas täht S</button>

                {keskused.map(keskus => 
                <div key={keskus.nimi}>
                    {keskus.nimi}
                    <Link to={"/esindus/" + keskus.nimi}><button>Vt lähemalt</button></Link>
                    </div>)}
                <div>Tähed kokku: {arvutaKokku()}</div>
            </>}

        {linn === "Tartu" && 
            <>
                <div>Raatuse</div>
                <div>Lõunakeskus</div>
            </>}

        {linn === "Narva" && <div>Fama</div>}

        {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused