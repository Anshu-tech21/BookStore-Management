import { useState } from "react";
import { addBook } from "../services/api";

function BookForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // convert image to base64
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await addBook({ title, author, price, image });

      setTitle("");
      setAuthor("");
      setPrice("");
      setImage("");

      refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to add book");
    }
  };

  return (
    <form className="book-form"onSubmit={submit}>
      <h2>Add Book</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br></br>

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      /><br></br>

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      /><br></br>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      /><br></br>

      <button>Add</button>
    </form>
  );
}

export default BookForm;
