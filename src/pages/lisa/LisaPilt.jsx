import { useRef } from "react"
import pildidJSON from "../../data/pildid.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaPilt() {

    const piltRef = useRef();
    const nimiRef = useRef();
    const kirjelduRef = useRef()

    const lisa = () => {
      if (piltRef.current.value === "") {
        toast.error("Pilt on kohustuslik");
        return;
      }
      if (nimiRef.current.value === "") {
        toast.error("Nimetus on kohustuslik");
        return;
      }
      if (kirjelduRef.current.value === "") {
        toast.error("Kirjeldus on kohustuslik");
        return;
      } else 
      toast.success("Pilt edukalt lisatud!")

    const pilt ={
      "url": piltRef.current.value,
      "pealkiri":nimiRef.current.value,
      "sisu" : kirjelduRef.current.value
    }
      // const pilt = {url, pealkiri, sisu}
        pildidJSON.push(pilt);
        piltRef.current.value= ""
        nimiRef.current.value= ""
        kirjelduRef.current.value = ""
      }
  

  return (
    <div>
        <label>Pilt</label> <br />
        <input ref={piltRef} type="text" placeholder="Sisesta URL" /> <br />
        <label>Nimi</label>
        <input ref={nimiRef} type="text" /><br />
        <label>Kirjeldus</label>
        <input ref={kirjelduRef} type="text" /><br />
        <button onClick={lisa}>Lisa</button> <br />

        <ToastContainer
        position="bottom-right"
        autoClose={4000}
        closeOnClick
        draggable
        theme="dark" />
    </div>
  )
}

export default LisaPilt