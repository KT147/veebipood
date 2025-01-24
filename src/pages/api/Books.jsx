import { useEffect, useRef, useState } from "react";

function Books() {

    const [raamatud, setRaamatud] = useState([]);

    const [searched, setSearched] = useState("react");

    const otsingRef = useRef();

    const [leht, setLeht] = useState (1);

    const otsi = () => {
      if (otsingRef.current.value.length < 3) {
        return;
      }
      setSearched(otsingRef.current.value)
    }

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/" + searched + "?page=" + leht)
            .then(res => res.json()) 
            .then(json => setRaamatud(json.books))
    }, [searched, leht]);

  return (
    <div>
      <label>Otsi:</label>
      <input onChange={otsi} ref={otsingRef} type="text" />
      <br />
      <button disabled={leht === 1} onClick={() => setLeht(leht-1)}>Väiksem leht</button>
      <span>{leht}</span>
      <button onClick={() => setLeht (leht+1)}>Suurem leht</button>
        <table>
            <thead>
                <tr>
                    <th>Pilt</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Price</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
            {raamatud.map(toode => 
             <tr key={toode.isbn13}>
                <td><img style={{width: "60px"}} src={toode.image} alt="" /></td>
                <td>{toode.isbn13}</td>
                <td>{toode.title}</td>
                <td>{toode.subtitle}</td>
                <td>{toode.price}</td>
                <td>{toode.url}</td>
                </tr>)}
            </tbody>
        </table>
        
    </div>
  )
}

export default Books