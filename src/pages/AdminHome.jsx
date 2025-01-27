import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function AdminHome() {
  return (
    <div>
        <Link to= "/halda-esindused">
        <button className='nupp'>Halda esindusi</button>
      </Link>

      <Link to= "/halda-hinnad">
        <button className='nupp'>Halda hindu</button>
      </Link>

      <Link to= "/halda-pildid">
        <button className='nupp'>Halda pilte</button>
      </Link>

      <Link to= "/halda-tootajad">
        <button className='nupp'>Halda töötajaid</button>
      </Link>

      <Link to= "/halda-tooted">
        <button className='nupp'>Halda tooteid</button>
      </Link>

      <Link to= "/halda-kasutajad">
        <button className='nupp'>Halda kasutajaid</button>
      </Link>

      <br /><br />

      <Link to= "/lisa-esindus">
        <button className='nupp'>Lisa esindus</button>
      </Link>

      <Link to= "/lisa-hind">
        <button className='nupp'>Lisa hind</button>
      </Link>

      <Link to= "/lisa-pilt">
        <button className='nupp'>Lisa pilt</button>
      </Link>

      <Link to= "/lisa-tootaja">
        <button className='nupp'>Lisa töötaja</button>
      </Link>

      <Link to= "/lisa-toode">
        <button className='nupp'>Lisa toode</button>
      </Link>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      
    </div>
  )
}

export default AdminHome