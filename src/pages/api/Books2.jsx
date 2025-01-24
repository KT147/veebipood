import { useEffect, useState } from "react"

function Books2() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.freetestapi.com/api/v1/books")
    .then(res=> res.json())
    .then(json => setBooks(json))
  }, [])
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Year</th>
            <th>Genre</th>
            <th>Description</th>
            <th>Cover Image</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book =>
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publication_year}</td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
              <td><img style={{width: "60px"}} src={book.cover_image} alt="" /></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Books2