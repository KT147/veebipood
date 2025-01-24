import { useNavigate } from "react-router-dom";
// import kasutajadFailist from "../../data/kasutajad.json"
import { useRef, useState } from "react";

function Login() {

    //const kasutajad = kasutajadFailist;

    const emailRef = useRef();
    const paroolRef = useRef();

    const [sonum, setSonum] = useState("");

    const navigate = useNavigate();

    const kasutajad = JSON.parse(localStorage.getItem("kasutajad")) ||  [];

    // .find() --> otsib mingi omaduse järgi terve objekti üles
    // .filter  jätab alles kõik, kellel on true; .find jätab alles ühe, kellel on true (esimese)

    const login = () => {
        const leitud= kasutajad.find(kasutaja => kasutaja.email === emailRef.current.value);
        if (leitud === undefined) {
            setSonum ("Sellise emailiga kasutajat ei leitud");
            return; // lõpeta funktsiooni
        }
        if (leitud.parool !== paroolRef.current.value) {
            setSonum ("Parool pole õige");
            return;
        }
       // setSonum("Edukalt sisse logitud");
       // window.location.href= "/halda-kasutajad"; <--- Reactis ei kasutata, kuna teeb refreshi. kasutatakse väliste URL-le minekuks
       navigate("/halda-kasutajad")
    }

  return (
    <div>
        <div>{sonum}</div>
        <label>Email</label> <br />
        <input ref={emailRef} type="text" /><br />
        <label>Parool</label> <br />
        <input ref={paroolRef} type="password" /><br />
        <button onClick={login}>Logi sisse</button>
    </div>
  )
}

export default Login