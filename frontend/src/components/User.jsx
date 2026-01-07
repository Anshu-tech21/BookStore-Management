/*function User() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome User 👋</h1>
      <p>You are logged in successfully.</p>
    </div>
  );
}

export default User;
*/

import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Welcome User 👋</h1>
        <p>You have successfully logged in.</p>

        <button style={styles.button} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "wheat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#e9f4ff",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.15)",
  },
  button: {
    marginTop: "20px",
    padding: "10px 25px",
    fontSize: "16px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default User;
