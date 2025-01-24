import { useEffect, useState } from "react"

function Cars() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
   fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100")
   .then(res=> res.json())
   .then(json=> setCars(json.results))
  }, [])
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Barrels</th>
            <th>Barrels a</th>
            <th>Charge 120</th>
            <th>Charge 240</th>
            <th>City 08</th>
            <th>City 08u</th>
            <th>City A 08 u</th>
            <th>City cd</th>
            <th>City e</th>
            <th>CO2</th>
            <th>CO2 a</th>
            <th>CO2 a Tail</th>
            <th>CO2 Tail Pipe</th>
            <th>CO2 Tail Pipe</th>
            <th>CO2 Tail Pipe</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car=>
            <tr key={car}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.barrels08}</td>
              <td>{car.barrelsa08}</td>
              <td>{car.charge120}</td>
              <td>{car.charge240}</td>
              <td>{car.city08}</td>
              <td>{car.city08u}</td>
              <td>{car.citya08}</td>
              <td>{car.citya08u}</td>
              <td>{car.citya08}</td>
              <td>{car.citycd}</td>
              <td>{car.citye}</td>
              <td>{car.cityuf}</td>
              <td>{car.co2}</td>
              <td>{car.co2a}</td>
              <td>{car.co2tailpipeagpm2}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Cars