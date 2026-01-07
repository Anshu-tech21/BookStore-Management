import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css"; 

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    // DEFAULT USER CREDENTIALS
    if (username === "user" && password === "user123") {
      navigate("/user");
    } else {
      alert("Invalid user credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>User Login</h2>

        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
