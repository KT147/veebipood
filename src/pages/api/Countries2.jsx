import { useEffect, useRef, useState } from "react"

function Countries2() {

  const [countries, setCountries] = useState([])

  const [searched, setSearched] = useState("")

  const otsingRef = useRef()

  useEffect(() => {
    fetch("https://www.freetestapi.com/api/v1/countries")
    .then(res=>res.json())
    .then(json=> setCountries(json) )
   
  }, [])

  const otsi = () => {
    setSearched(otsingRef.current.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searched.toLowerCase())
  )
  
  return (
    <div>
      <label>Otsi:</label><br />
      <input onChange={otsi} ref={otsingRef} type="text" />
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Population</th>
            <th>Land Area</th>
            <th>Density</th>
            <th>Capital</th>
            <th>Currency</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map(country=>
            <tr key={country.id}>
              <td>{country.id}</td>
              <td>{country.name}</td>
              <td>{country.population}</td>
              <td>{country.land_area}</td>
              <td>{country.density}</td>
              <td>{country.capital}</td>
              <td>{country.currency}</td>
              <td><img style={{width: "30px"}} src={country.flag} alt="" /></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Countries2