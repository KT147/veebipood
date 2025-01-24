import { useState, useEffect } from "react"


function Countries() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
    .then(res =>res.json())
    .then(json => setCountries (json))
}, [])
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Official</th>
            <th>Native Name Official</th>
            <th>Native Name common</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(country =>
            <tr key={country.id}>
              <td>{country.name.common}</td>
              <td>{country.name.official}</td>
              <td>{country.name.nativeName.eng?.official}</td>
              <td>{country.name.nativeName.eng?.common}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Countries