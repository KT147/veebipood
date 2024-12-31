import { useRef, useState } from "react"


function MaksimaalneKalkulaator() {
    const ylalpeetavadRef = useRef();
    const sissetulekudRef = useRef();
    const kohustusedRef = useRef();
    const [summa, setSumma] = useState(0);

    const arvutaSummaKokku = () => {
        setSumma(sissetulekudRef.current.value - kohustusedRef.current.value) / 
        (ylalpeetavadRef.current.value /10 ) *
        100
    }
    

  return (
    <div>
        <label>Ülalpeetavad</label>
        <input onChange={arvutaSummaKokku} defaultValue={1} type="number" ref={ylalpeetavadRef} /> <br />
        <label>Sissetulek</label>
        <input onChange={arvutaSummaKokku} defaultValue={1000} type="number" ref={sissetulekudRef} /> <br />
        <label>Kohustused</label>
        <input onChange={arvutaSummaKokku} defaultValue={0} type="number" ref={kohustusedRef} /> <br/>
        {summa >= 20000 && summa <=10000000 ? 
        <div>Maksimaalne võimalik laen: {summa.toFixed(2)}</div>:
        <div style={{color: "red"}}>Maksimaalse limiidi arvutamiseks on netosissetulek liiga väike või igakuised kohustused liiga suured.</div>}
    </div>
  )
}

export default MaksimaalneKalkulaator