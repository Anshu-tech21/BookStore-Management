import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import { getBooks } from "../services/api";

function Admin() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container4">
      <h1>Admin Dashboard</h1>
      <BookForm refresh={fetchBooks} />
      <BookList books={books} />
    </div>
  );
}

export default Admin;
