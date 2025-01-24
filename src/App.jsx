import './App.css'
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Ostukorv from './pages/Ostukorv';
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/arrays/Esindused';
import Seaded from './pages/Seaded';
import LisaToode from './pages/lisa/LisaToode';
import Kalkulaator from './pages/Kalkulaator';
import NavigationBar from './components/NavigationBar';
import Hinnad from './pages/arrays/Hinnad';
import Pildid from './pages/arrays/Pildid';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import Haldapildid from './pages/halda/HaldaPildid';
import Haldatootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import LisaEsindus from './pages/lisa/LisaEsindus';
import LisaHind from './pages/lisa/LisaHind';
import LisaPilt from './pages/lisa/LisaPilt';
import LisaTootaja from './pages/lisa/LisaTootaja';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksPilt from './pages/yks/YksPilt';
import YksTootaja from './pages/yks/YksTootaja';
import YksToode from './pages/yks/YksToode';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaPilt from './pages/muuda/MuudaPilt';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import MuudaToode from './pages/muuda/MuudaToode';
import HaldaKasutajad from './pages/auth/HaldaKasutajad';
import Login from './pages/auth/Login';
import Registreeru from './pages/auth/Registreeru';
import { useState } from 'react';
import Tarnija1 from './pages/api/Tarnija1';
import Tarnija2 from './pages/api/Tarnija2';
import Tarnija3 from './pages/api/Tarnija3';
import Books from './pages/api/Books';
import Books2 from './pages/api/Books2';
import Cars from './pages/api/Cars';
import Countries from './pages/api/Countries';
import Countries2 from './pages/api/Countries2';
import Electricity from './pages/api/Electricity';
import Floods from './pages/api/Floods';
import Vocabulary from './pages/api/Vocabulary';
import ApiHome from './pages/api/ApiHome';

function App() {

  const [dark, setDark] = useState(localStorage.getItem("dark") || "false");

  const darkMode = () => {
    setDark("true")
    localStorage.setItem("dark", "true")
  }

  const lightMode = () => {
    setDark("false")
    localStorage.setItem("dark", "false")
  }

  return (
    <div className={dark === "true" ? "dark": undefined}>
      <button onClick={darkMode}>Tume taust</button>
      <button onClick={lightMode}>Hele taust</button>
      <br /><br />
      <NavigationBar/>
      
      <Routes>
      <Route path="/" element={<Avaleht/>} />
      <Route path="/ostukorv" element={<Ostukorv/>} />
      <Route path="/osta-kinkekaart" element={<Kinkekaart/>} />
      <Route path="/seaded" element={<Seaded/>} />
      <Route path="/kalkulaator" element={<Kalkulaator/>} />
      
      <Route path="/esindused" element={<Esindused/>} />
      <Route path="/hinnad" element={<Hinnad/>} />
      <Route path="/pildid" element={<Pildid/>} />
      <Route path="/tootajad" element={<Tootajad/>} />
      <Route path="/tooted" element={<Tooted/>} />

      <Route path="/halda-esindused" element={<HaldaEsindused/>} />
      <Route path="/halda-hinnad" element={<HaldaHinnad/>} />
      <Route path="/halda-pildid" element={<Haldapildid/>} />
      <Route path="/halda-tootajad" element={<Haldatootajad/>} />
      <Route path="/halda-tooted" element={<HaldaTooted/>} />

      <Route path="/lisa-esindus" element={<LisaEsindus/>} />
      <Route path="/lisa-hind" element={<LisaHind/>} />
      <Route path="/lisa-pilt" element={<LisaPilt/>} />
      <Route path="/lisa-tootaja" element={<LisaTootaja/>} />
      <Route path="/lisa-toode" element={<LisaToode/>} />

      {/* yks peale sattumiseks ei pane teda Navbari/ Menüüsse, tema peale satun nt Avalehelt või Toodete lehelt: .map() seest*/}

      <Route path="/esindus/:nimi" element={<YksEsindus/>} />
      <Route path="/hind/:i" element={<YksHind/>} />
      <Route path="/pilt/:id" element={<YksPilt/>} />
      <Route path="/tootaja/:nimi" element={<YksTootaja/>} />
      <Route path="/toode/:nimi" element={<YksToode/>} />

      <Route path="/muuda-esindus/:index" element={<MuudaEsindus/>} />
      <Route path="/muuda-hind/:index" element={<MuudaHind/>} />
      <Route path="/muuda-pilt/:index" element={<MuudaPilt/>} />
      <Route path="/muuda-tootaja/:index" element={<MuudaTootaja/>} />
      <Route path="/muuda-toode/:index" element={<MuudaToode/>} />

      <Route path="/halda-kasutajad" element={<HaldaKasutajad/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registreeru" element={<Registreeru/>} />

      <Route path="/tarnija-1" element={<Tarnija1/>} />
      <Route path="/tarnija-2" element={<Tarnija2/>} />
      <Route path="/tarnija-3" element={<Tarnija3/>} />
      <Route path="/books-1" element={<Books/>} />
      <Route path="/books-2" element={<Books2/>} />
      <Route path="/cars" element={<Cars/>} />
      <Route path="/countries-1" element={<Countries/>} />
      <Route path="/countries-2" element={<Countries2/>} />
      <Route path="/electricity" element={<Electricity/>} />
      <Route path="/floods" element={<Floods/>} />
      <Route path="/vocabulary" element={<Vocabulary/>} />
      <Route path="/api-home" element={<ApiHome/>} />

      <Route path="*" element={<NotFound/>} />

    </Routes>
    </div>
  )
}

export default App
