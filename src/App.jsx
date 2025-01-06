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
import Haldapildid from './pages/halda/Haldapildid';
import Haldatootajad from './pages/halda/Haldatootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import LisaEsindus from './pages/lisa/LisaEsindus';
import LisaHind from './pages/lisa/LisaHind';
import LisaPilt from './pages/lisa/LisaPilt';
import LisaTootaja from './pages/lisa/LisaTootaja';

function App() {

  return (
    <>
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

      <Route path="*" element={<NotFound/>} />

    </Routes>
    </>
  )
}

export default App
