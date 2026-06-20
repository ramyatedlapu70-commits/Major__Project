import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../services/api";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/tickets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTickets(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch tickets");
    }
  };

  useEffect(() => {
    const loadTickets = async () => {
    await fetchTickets();
  };
  loadTickets();
}, []);

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/tickets/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTickets();
    } catch (err) {
      console.log(err);
      alert("Failed to update status");
    }
  };

  const upvoteTicket = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/tickets/${id}/upvote`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTickets();
    } catch (err) {
      console.log(err);
      alert("Failed to upvote");
    }
  };

  const deleteTicket = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/tickets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTickets();
    } catch (err) {
      console.log(err);
      alert("Failed to delete ticket");
    }
  };

  return (
    <>
      <Navbar />

     <div
 style={{
  minHeight: "100vh",
  background: `
    radial-gradient(circle at center,
      rgba(59,130,246,0.35) 0%,
      rgba(37,99,235,0.18) 25%,
      rgba(15,23,42,0.95) 60%,
      #020617 100%
    )
  `,
  backgroundColor: "#020617",
  width: "100%",
  padding: "40px",
  paddingTop: "100px",
}}
>
        <div
          style={{
  maxWidth: "1100px",
  margin: "auto",
  background: "rgba(18,18,18,0.65)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,215,0,0.2)",
  borderRadius: "20px",
  padding: "30px",
  color: "white",
  boxShadow: "0 0 15px rgba(255,215,0,0.15)",
  textAlign: "center",
}}
        >
         <h1
  style={{
    color: "#ffffff",
    fontSize: "46px",
    fontWeight: "bold",
    textShadow: "0 0 8px rgba(255,215,0,0.5)",
  }}
>
  All Tickets
</h1>

          <input
            type="text"
            placeholder="Search tickets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              marginBottom: "30px",
              fontSize: "16px",
            }}
          />

          {tickets
            .filter((ticket) =>
              ticket.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((ticket) => (
          <div
  key={ticket._id}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.border = "1px solid rgba(255,215,0,0.8)";
    e.currentTarget.style.boxShadow =
      "0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.3)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.border = "1px solid rgba(255,215,0,0.2)";
    e.currentTarget.style.boxShadow =
      "0 0 8px rgba(255,215,0,0.15)";
  }}
  style={{
    transition: "all 0.3s ease",
    transform: "translateY(0px)",

    borderLeft:
      ticket.priority === "High"
        ? "6px solid red"
        : ticket.priority === "Medium"
        ? "6px solid orange"
        : "6px solid limegreen",

    border: "1px solid rgba(255,215,0,0.2)",
    background: "rgba(18,18,18,0.65)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "18px",
    padding: "25px",
    marginBottom: "25px",
    boxShadow: "0 0 8px rgba(255,215,0,0.15)",
  }}
>
                <h2 style={{ color: "#6dd5fa" }}>{ticket.title}</h2>

                <p>
                  <strong>Category:</strong> {ticket.category}
                </p>

                <p>
                  <strong>⚡ Priority:</strong> {ticket.priority}
                </p>

                <p>{ticket.description}</p>

                <p>
                  <strong>📌 Status:</strong> {ticket.status}
                </p>

                <p>
                  <strong>👍 Upvotes:</strong> {ticket.upvotes}
                </p>

                <button
                  onClick={() => upvoteTicket(ticket._id)}
                 style={{
  background: "linear-gradient(90deg, #2563eb, #06b6d4)",
  color: "white",
  border: "none",
  padding: "8px 15px",
  borderRadius: "8px",
  cursor: "pointer",
  boxShadow: "0 0 15px rgba(59,130,246,0.5)",
}}
                >
                  👍 Upvote
                </button>

                <select
                  value={ticket.status}
                  onChange={(e) =>
                    updateStatus(ticket._id, e.target.value)
                  }
                  style={{
                    padding: "8px",
                    marginRight: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>

                <button
                  onClick={() => deleteTicket(ticket._id)}
                 style={{
  background: "linear-gradient(90deg, #ef4444, #dc2626)",
  color: "white",
  border: "none",
  padding: "8px 15px",
  borderRadius: "8px",
  cursor: "pointer",
  boxShadow: "0 0 15px rgba(239,68,68,0.5)",
}}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Tickets;