import { useEffect,  useState } from "react"

function Floods() {

  const [floods, setFloods] = useState([])


  useEffect(() => {
    fetch("https://environment.data.gov.uk/flood-monitoring/id/floods")
    .then(res=> res.json())
    .then(json=> setFloods(json.items))
  }, [])
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Area Name</th>
            <th>County</th>
            <th>Severity</th>
            <th>Message</th>
            <th>Time Raised</th>
          </tr>
        </thead>
        <tbody>
          {floods.map(flood=>
            <tr key={flood["@id"]}>
              <td>{flood.floodAreaID}</td>
              <td>{flood.description}</td>
              <td>{flood.eaAreaName}</td>
              <td>{flood.floodArea.county}</td>
              <td>{flood.severity}</td>
              <td>{flood.message}</td>
              <td>{new Date(flood.timeRaised).toLocaleString()}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Floods