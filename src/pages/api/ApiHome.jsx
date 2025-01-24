import { Link } from "react-router-dom"

// Books2:   // https://www.freetestapi.com/api/v1/books
// Cars:   // https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100
// Countries: // https://restcountries.com/v3.1/all?fields=name
// Countries2:   // https://www.freetestapi.com/api/v1/countries
// Floods:   // https://environment.data.gov.uk/flood-monitoring/id/floods
// Vocabulary:   // https://marineregions.org/rest/getGazetteerTypes.json
// Tarnija3: ISE OTSIDA

function ApiHome() {
  return (
    <div>
        <h2>API-d:</h2>
        <Link to= "/tarnija-1">
        <button className='nupp'>Tarnija 1</button>
      </Link>

      <Link to= "/tarnija-2">
        <button className='nupp'>Tarnija 2</button>
      </Link>

      <Link to= "/tarnija-3">
        <button className='nupp'>Tarnija 3</button>
      </Link>

      <Link to= "/books-1">
        <button className='nupp'>Books 1</button>
      </Link>

      <Link to= "/books-2">
        <button className='nupp'>Books 2</button>
      </Link>

      <Link to= "/cars">
        <button className='nupp'>Cars</button>
      </Link>

      <Link to= "/countries-1">
        <button className='nupp'>Countries 1</button>
      </Link>

      <Link to= "/countries-2">
        <button className='nupp'>Countries 2</button>
      </Link>

      <Link to= "/electricity">
        <button className='nupp'>Electricity</button>
      </Link>

      <Link to= "/floods">
        <button className='nupp'>Floods</button>
     </Link>

     <Link to= "/vocabulary">
        <button className='nupp'>Vocabulary</button>
    </Link>
    
    </div>
  )
}

export default ApiHome