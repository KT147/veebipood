import { useState, useEffect } from "react"


function Tarnija3() {
  const [tooted, setTooted] = useState([])

  useEffect(() => {
    fetch("https://reqres.in/api/products")
    .then(res=> res.json())
    .then(json=> setTooted(json.data))
  }, [])
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Color</th>
            <th>Panteone Value</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map(toode=>
          <tr key={toode.name}>
            <td>{toode.id}</td>
            <td>{toode.name}</td>
            <td>{toode.year}</td>
            <td>{toode.color}</td>
            <td>{toode.pantone_value}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija3