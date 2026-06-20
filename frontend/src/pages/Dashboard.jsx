import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        background: `
  radial-gradient(
    circle at center,
    rgba(59,130,246,0.35) 0%,
    rgba(37,99,235,0.18) 25%,
    rgba(15,23,42,0.95) 60%,
    #020617 100%
  )
`,
backgroundColor: "#020617",
        }}
      >
        <div
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.border =
              "1px solid rgba(255,215,0,0.7)";
            e.currentTarget.style.boxShadow =
              "0 0 25px rgba(255,215,0,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.border =
              "1px solid rgba(255,215,0,0.2)";
            e.currentTarget.style.boxShadow =
              "0 0 12px rgba(255,215,0,0.15)";
          }}
          style={{
            width: "600px",
            maxWidth: "90%",

            background: "rgba(18,18,18,0.65)",

            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",

            border: "1px solid rgba(255,215,0,0.2)",

            borderRadius: "20px",

            padding: "50px",

            textAlign: "center",

            color: "white",

            boxShadow: "0 0 12px rgba(255,215,0,0.15)",

            transition: "all 0.3s ease",

            transform: "translateY(0px)",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "42px",
              fontWeight: "bold",

              textShadow:
                "0 0 8px rgba(255,215,0,0.45)",

              marginBottom: "25px",
            }}
          >
            Dashboard
          </h1>

          <h2
            style={{
              color: "#f8fafc",
              marginBottom: "15px",
            }}
          >
            Welcome, {user?.username}
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            Email: {user?.email}
          </p>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              marginBottom: "25px",
            }}
          >
            Role: {user?.role}
          </p>

          <button
            onClick={() => navigate("/create-ticket")}
            style={{
              padding: "14px 30px",

              background:
                "linear-gradient(90deg,#FFD700,#FBBF24)",

              color: "#000",

              border: "none",

              borderRadius: "10px",

              cursor: "pointer",

              fontWeight: "bold",

              fontSize: "16px",

              boxShadow:
                "0 0 15px rgba(255,215,0,0.5)",

              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(255,215,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 15px rgba(255,215,0,0.5)";
            }}
          >
            Create Ticket
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;