import { useEffect, useState } from "react"

function Vocabulary() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
   fetch("https://marineregions.org/rest/getGazetteerTypes.json")
   .then(res=> res.json())
   .then(json=> setVocabulary(json))
  }, [])


  
  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>Type ID</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {vocabulary.map(voc=>
              <tr key={voc.type}>
                <td>{voc.typeID}</td>
                <td>{voc.type}</td>
                <td>{voc.description}</td>
              </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default Vocabulary