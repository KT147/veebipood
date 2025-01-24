import { useRef } from "react"
// import kasutajadFailist from "../../data/kasutajad.json"

function Registreeru() {
    const emailRef = useRef();
    const paroolRef = useRef();
    const nimiRef = useRef();

    const registreeru = () => {
        const kasutaja = {// <-- teeme uue muutuja, aga ei pea
            "email": emailRef.current.value,
            "parool": paroolRef.current.value,
            "nimi": nimiRef.current.value
        };
        // kasutajadFailist.push(kasutaja);
        const kasutajadLS = JSON.parse(localStorage.getItem("kasutajad")) || [];
        kasutajadLS.push(kasutaja)
        localStorage.setItem("kasutajad", JSON.stringify(kasutajadLS));
    }




  return (
    <div>
        <label>Email</label> <br />
        <input ref={emailRef} type="text" /><br />
        <label>Parool</label> <br />
        <input ref={paroolRef} type="password" /><br />
        <label>Nimi</label> <br />
        <input ref={nimiRef} type="text" /><br />
        <button onClick={registreeru}>Registreeru</button>
    </div>
  )
}

export default Registreeru