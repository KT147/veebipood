import { useRef, useState } from "react"
import tootedFailist from "../../data/tooted.json"
import { ToastContainer, toast } from 'react-toastify';

//if () {tõde} else {väär}  põhi


function LisaToode() {

    const toodeRef = useRef ();
    const hindRef = useRef ();
    const saadavusRef = useRef ();
    const piltRef = useRef ();


    const [sonum, setSonum] = useState ("Sisesta toode!");


    const sisestus = () => {
        if (toodeRef.current.value === "") {
          toast.error("Nimi on kohustuslik");
          return;
        } 
        if (hindRef.current.value === "") {
          toast.error("Hind on kohustuslik")
          return;
        }
        if (!saadavusRef.current.checked) {
          toast.error ("Toode peab olema saadaval")
        return;
        }
        if (piltRef.current.value === "") {
          toast.error("Pilt on kohustuslik")
        }
        else
        setSonum("Toode sisestatud!");
            // const toode = {nimi: "Nobe", hind: 20, aktiivne: true, pilt: "https:// jpg."} pilt URL-st
            //. push () faili
    
    const toode = {
        "nimi": toodeRef.current.value,
        "hind": hindRef.current.value,
        "aktiivne" : saadavusRef.current.checked,
        "pilt" : piltRef.current.value
      }
      tootedFailist.push(toode)
      toodeRef.current.value = ""
      hindRef.current.value = ""
      saadavusRef.current.value = false
      piltRef.current.value = ""
    }

    
    

  return (
    <div>
        <div>{sonum}</div> <br />
        <label>Toote nimi</label>
        <input ref={toodeRef} type="text" /> <br />
        <label>Hind</label>
        <input ref={hindRef} type="number" /> <br />
        <label>Saadavus</label>
        <input ref={saadavusRef} type="checkbox" /> <br />
        <label>Pilt (URL)</label>
        <input ref={piltRef} type="text" /> <br />
        <button onClick={sisestus}>Sisesta</button>

        <ToastContainer
        position="bottom-right"
        autoClose={4000}
        closeOnClick
        draggable
        theme="dark" />
    </div>
  )
}

export default LisaToode