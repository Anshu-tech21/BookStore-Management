import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="container">
      <h1>📚 Bookstore Management</h1>
      <BookForm refresh={() => window.location.reload()} />
      <BookList />
    </div>
  );
}

export default App;
