import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #0A2342, #1E5F9E, #4CC9F0)",
        padding: "15px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link
        to="/dashboard"
        style={{ color: "white", textDecoration: "none" }}
      >
        Dashboard
      </Link>

      <Link
        to="/tickets"
        style={{ color: "white", textDecoration: "none" }}
      >
        View Tickets
      </Link>

      <Link
        to="/create-ticket"
        style={{ color: "white", textDecoration: "none" }}
      >
        Create Ticket
      </Link>

      <button
        onClick={logout}
        style={{
          background: "linear-gradient(90deg, #187066, #70e9d9, #137957)",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 0 15px rgba(46, 121, 111, 0.5)",
          transform: "scale(1.02)",
          transition: "all 0.3s ease",
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
