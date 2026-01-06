import { useEffect, useState } from "react";
import { getBooks } from "../services/api";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>Books</h2>

      <div className="books"style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {books.map(book => (
          <div className="book-card"
            key={book._id}
            style={{
              border: "3px solid #722020ff",
              padding: "10px",
              width: "200px",
              borderRadius: "10px"
            }}
          >
            {/* BOOK IMAGE */}
            {book.image && (
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  marginBottom: "10px"
                }}
              />
            )}

            <b>{book.title}</b>
            <p>{book.author}</p>
            <p>₹{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
