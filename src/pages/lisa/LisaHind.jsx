import { useRef } from "react"
import hinnadFailist from "../../data/hinnad.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaHind() {

    const hindRef = useRef();

    const lisa = () => {
      if (hindRef.current.value === "") {
        toast.error("Hind on kohustuslik");
        return;
      } else toast.success("Hind edukalt lisatud!")
      
        hinnadFailist.push({
          "id": hinnadFailist.length+1,
          "lisaja": "Toomas", 
          "number": Number(hindRef.current.value)})
        hindRef.current.value = ""
    }


  return (
    <div>
        <label>Hind</label> <br />
        <input ref={hindRef} type="number" /> <br />
        <button onClick={lisa}>Lisa</button>

        <ToastContainer
        position="bottom-right"
        autoClose={4000}
        closeOnClick
        draggable
        theme="dark" />
    </div>
  )
}

export default LisaHind