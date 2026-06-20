import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function CreateTicket() {
  const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("Electrical");
const [priority, setPriority] = useState("Medium")
const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
const formData = new FormData();

formData.append("title", title);
formData.append("description", description);
formData.append("category", category);
formData.append("priority", priority);

if (image) {
  formData.append("image", image);
}
    try {
      const token = localStorage.getItem("token");

      await API.post("/tickets", formData, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

      alert("Ticket Created Successfully!");

      setTitle("");
      setDescription("");
      setCategory("Electrical")
      setPriority("Medium")
    } catch (err) {
      console.log(err);
      alert("Failed to create ticket");
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
display: "flex",
justifyContent: "center",
alignItems: "center",
        paddingTop: "30px",
        paddingBottom: "40px",
      }}
    >
      <div
  onMouseEnter={(e) => {
    e.currentTarget.style.border = "2px solid #FFD700";
    e.currentTarget.style.boxShadow =
      "0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.border = "1px solid rgba(255,215,0,0.2)";
    e.currentTarget.style.boxShadow =
      "0 0 15px rgba(255,215,0,0.15)";
  }}
  style={{
    width: "700px",
    maxWidth: "90%",
    margin: "30px auto",

    background: "rgba(18,18,18,0.65)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",

    border: "1px solid rgba(255,215,0,0.2)",

    boxShadow: "0 0 15px rgba(255,215,0,0.15)",

    borderRadius: "20px",

    padding: "40px",

    textAlign: "center",

    color: "white",

    transition: "all 0.3s ease",
  }}
>
        <h1
         style={{
  color: "#fff",
  textShadow: "0 0 8px rgba(255,215,0,0.5)",
  fontSize: "42px",
  fontWeight: "bold",
}}
        >
          Create Ticket
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ticket Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "70%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              marginBottom: "20px",
            }}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "70%",
              height: "80px",
              padding: "12px",
              borderRadius: "10px",
             border: "1px solid rgba(255,255,255,0.2)",
background: "rgba(255,255,255,0.08)",
color: "white",
outline: "none",
              marginBottom: "20px",
            }}
          />

          <br />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          style={{
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "20px",
  backgroundColor: "#1e293b",
  color: "white",
  border: "1px solid #475569",
}}
          >
           <option value="Electrical" style={{ backgroundColor: "#1e293b", color: "white" }}>
  Electrical
</option>

<option value="Plumbing" style={{ backgroundColor: "#1e293b", color: "white" }}>
  Plumbing
</option>

<option value="AC" style={{ backgroundColor: "#1e293b", color: "white" }}>
  AC
</option>

<option value="Furniture" style={{ backgroundColor: "#1e293b", color: "white" }}>
  Furniture
</option>

<option value="Other" style={{ backgroundColor: "#1e293b", color: "white" }}>
  Other
</option>
          </select>

          <br />
          
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
           style={{
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "20px",
  backgroundColor: "#1e293b",
  color: "white",
  border: "1px solid #475569",
}}
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>

          <br />
          <br />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <br />
          <br />

          <button
            type="submit"
style={{
 background: "linear-gradient(90deg,#FFD700,#FBBF24)",
color: "#000",
boxShadow: "0 0 15px rgba(255,215,0,0.5)",
  border: "none",
  padding: "12px 30px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
 }}
          >
            Create Ticket
          </button>
        </form>
      </div>
    </div>
  </>
);
}
export default CreateTicket;