import './App.css'
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Ostukorv from './pages/Ostukorv';
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import Kalkulaator from './pages/Kalkulaator';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <>
      <NavigationBar/>
      <Routes>
      <Route path="/" element={<Avaleht/>} />
      <Route path="/ostukorv" element={<Ostukorv/>} />
      <Route path="/osta-kinkekaart" element={<Kinkekaart/>} />
      <Route path="/esindused" element={<Esindused/>} />
      <Route path="/seaded" element={<Seaded/>} />
      <Route path="/lisa-toode" element={<LisaToode/>} />
      <Route path="/kalkulaator" element={<Kalkulaator/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
