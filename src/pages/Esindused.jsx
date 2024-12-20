import { useState } from "react"

// && ---> kui vasakul on tõsi, siis parempoolne näidatakse
// === ---> vasak ja parem pool on identsed
// =   ---> väärtuse andmiseks
// == ---> seda Reactis ei kasutata, see on identsuse kontroll ilma tüübi kontrollita


function Esindused() {
    //muutuja-->HTMLi ja muutja-->onClick külge
    const[linn, setLinn] = useState("Pärnu");

  return (
    <div>
        <button onClick={() => setLinn("Tallinn")}>Tallinn</button>
        <button onClick={() => setLinn("Tartu")}>Tartu</button>
        <button onClick={() => setLinn("Narva")}>Narva</button>
        <button onClick={() => setLinn("Pärnu")}>Pärnu</button>

        <br /><br />

        <div>Hetkel aktiivne linn: {linn}</div>

        <br /><br />
        {linn === "Tallinn" && 
            <div>
                <div>Ülemiste</div>
                <div>Rocca al Mare</div>
                <div>Magistrali</div>
                <div>Vesse</div>
                <div>Kristiine</div>
                <div>Järveotsa</div>
            </div>}

        {linn === "Tartu" && 
            <div>
                <div>Raatuse</div>
                <div>Lõunakeskus</div>
            </div>}

        {linn === "Narva" && <div>Fama</div>}

        {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused