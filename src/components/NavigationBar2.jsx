import { Link } from "react-router-dom"
import { useState } from "react"


function NavigationBar() {
    const [count, setCount] = useState(0) //algväärtus e refreshi järgne väärtus

  return (
    <div>


      <Link to= "/api-home">
        <button className='nupp'>Api-</button>
      </Link>

      <br /><br />

        <Link to ="/">
        <img className='pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
      </Link>

      <br /><br />

      <Link to= "/login">
        <button className='nupp'>Logi sisse</button>
      </Link>

      <Link to= "/registreeru">
        <button className='nupp'></button>
      </Link>

      <Link to= "/ostukorv">
        <button className='nupp'></button>
      </Link>

      <Link to= "/osta-kinkekaart">
        <button className='nupp'>Kinkekaart</button>
      </Link>

      <Link to= "/seaded">
        <button className='nupp'>Seaded</button>
      </Link>

      <Link to= "/kalkulaator">
        <button className='nupp'>Kalkulaator</button>
      </Link>

      <button onClick={()=> setCount(count+1)}>Vajuta mind {count}</button>



      
    </div>
  )
}

export default NavigationBar