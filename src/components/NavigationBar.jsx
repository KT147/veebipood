import { Link } from "react-router-dom"
import { useState } from "react"


function NavigationBar() {
    const [count, setCount] = useState(0) //algväärtus e refreshi järgne väärtus
  return (
    <div>
        <Link to ="/">
        <img className='pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
      </Link>

      <Link to= "/ostukorv">
        <button className='nupp'>Ostukorv</button>
      </Link>

      <Link to= "/osta-kinkekaart">
        <button className='nupp'>Kinkekaart</button>
      </Link>

      <Link to= "/esindused">
        <button className='nupp'>Esindused</button>
      </Link>

      <Link to= "/seaded">
        <button className='nupp'>Seaded</button>
      </Link>

      <Link to= "/lisa-toode">
        <button className='nupp'>Lisa toode</button>
      </Link>

      <Link to= "/kalkulaator">
        <button className='nupp'>Kalkulaator</button>
      </Link>

      <button onClick={()=> setCount(count+1)}>Vajuta mind {count}</button>

    </div>
  )
}

export default NavigationBar