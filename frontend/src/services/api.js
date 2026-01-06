import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const addBook = (book) => API.post("/books", book);
export const getBooks = () => API.get("/books");
