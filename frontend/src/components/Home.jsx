import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>📚 Bookstore Management System</h1>

        <p>
          This Bookstore Management System helps administrators manage books,
          prices, and inventory efficiently. Admins can add, view, and update
          books with images and pricing details.
        </p>

        <p>
          It is built using <b>React</b>, <b>Node.js</b>, <b>Express</b>, and
          <b> MongoDB</b>.
        </p>

        <Link to="/user-login">
          <button>user Login</button>
        </Link>

        <Link to="/login">
          <button>Admin Login</button>
        </Link>
        <h3>Create a Account</h3>
        
      </div>
    </div>
  );
}

export default Home;
