import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

// Navigeerimiseks on vajalik
// 1. alla laadima navigeerimiseks vajaliku koodi
// npm install react-router-dom
// 2. Importima BrowserRouteri
// import { BrowserRouter } from 'react-router-dom';
// 3. Ümbritsema App> elemendi BrowserRouteriga
// 4. Tekitama App.jsx sees URLi ja HTMLi vahelisi seoseid

createRoot(document.getElementById('root')).render(

  // teeb topelt renderdamise kõrvalektide leidmiseks --> testkeskkonda
  // kui läheb live keskkonda, siis automaatikaga tuleb strictmode maha
  <StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)

