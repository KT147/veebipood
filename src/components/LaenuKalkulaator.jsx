import { useState } from "react";
import { useRef } from "react";


function LaenuKalkulaator() {
    const [laenusumma, setLaenusumma] = useState(75000); //HTMLs panna mingi koht muutuma
    const [intress, setIntress] = useState(4.44)
    const [kuumakse, setKuumakse] = useState(0)

    const laenusummaRef = useRef();
    const sissemakseRef = useRef();
    const perioodRef = useRef();
    const marginaalRef = useRef();
    const euriborRef = useRef();

    function arvutaLaen (){  //nupu sisestuseks kui on 2+ rida
        setLaenusumma(laenusummaRef.current.value - sissemakseRef.current.value);
        arvutaKuumakse()
    }

    function arvutaIntress () {
      setIntress(Number(marginaalRef.current.value) +(Number(euriborRef.current.value)))
      arvutaKuumakse()
    }

    const arvutaKuumakse = () => {
      setKuumakse(
        (laenusummaRef.current.value - sissemakseRef.current.value) *
        ((Number(marginaalRef.current.value) + Number(euriborRef.current.value)) / 12 / 100) /
        (1 - (1 + (Number(marginaalRef.current.value) + Number(euriborRef.current.value)) / 12 / 100) ** -(perioodRef.current.value * 12))
      )
    }


  return (
    <div>
        <label>Kinnisvara ostuhind:</label>
        <input onChange={arvutaLaen} defaultValue={75000} ref={laenusummaRef}type="number" /><br />

        <label>Sissemakse:</label>
        <input onChange={arvutaLaen} ref={sissemakseRef} defaultValue={0} type="number" /><br />

        <div>Laenusumma: {laenusumma}</div><br />

        <label>Periood:</label>
        <input onChange={arvutaKuumakse} ref={perioodRef} type="number" /><br />

        <label>Marginaal:</label>
        <input onChange={arvutaIntress} ref={marginaalRef} defaultValue={1.7} type="number" /><br />

        <label>Euribor:</label>
        <input onChange={arvutaIntress} ref={euriborRef} defaultValue={2.74} type="number" /><br />

        <div>Intress kokku: {intress.toFixed(2)} </div>

        <div>Kuumakse: {kuumakse.toFixed(2)} </div>

        
        {laenusumma >= 10000 && laenusumma <=10000000 ? 
        null :
        <div style={{color: "red"}}>Laenusumma võib olla vahemikus 10 000-10 000 000 eurot.</div>}
    </div>
  )
}

//toFixed komakohad

export default LaenuKalkulaator