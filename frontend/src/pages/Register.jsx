import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", {
        username,
        email,
        password,
        role: "Student",
      });

      alert("Registration Successful!");
      navigate("/");
    } catch (err) {
  console.log(err);
  console.log(err.response?.data);
  alert(err.response?.data?.message || "Registration Failed");
}
  };

  return (
   <div
  style={{
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
}}
>
<div
  onMouseEnter={(e) => {
    e.currentTarget.style.border = "2px solid #00ff99";
    e.currentTarget.style.boxShadow =
      "0 0 20px #00ff99, 0 0 40px #00ff99, 0 0 60px rgba(0,255,153,0.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.border = "1px solid rgba(0,255,170,0.2)";
    e.currentTarget.style.boxShadow =
      "0 0 20px rgba(0,255,170,0.3)";
  }}
  style={{
    background: "rgba(18,18,18,0.65)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(0,255,170,0.2)",
    padding: "50px",
    borderRadius: "20px",
    width: "600px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 0 20px rgba(0,255,170,0.3)",
    transition: "all 0.3s ease",
  }}
>
     <h1
  style={{
    color: "#ffffff",
    fontSize: "42px",
    fontWeight: "bold",
    textShadow: "0 0 6px rgba(0,255,170,0.5)",
    marginBottom: "20px",
  }}
>
  Create Account
</h1>

     <form
  onSubmit={handleRegister}
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  }}
>
       <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  style={{
    width: "80%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  }}
/>

        

     <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{
    width: "80%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  }}
/>

       

      <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{
    width: "80%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  }}
/>
        

        <button
  type="submit"
  style={{
  padding: "12px 30px",
  fontSize: "18px",
  fontWeight: "bold",
 background: "linear-gradient(90deg,#00ff99,#00cc88)",
color: "black",
boxShadow: "0 0 20px #00ff99",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
   transition: "0.3s ease",
}}
>
  Register
</button>
      </form>
      <p
  style={{
    marginTop: "20px",
    color: "#cbd5e1",
    fontSize: "16px",
  }}
>
  Already have an account?{" "}
  <span
    onClick={() => navigate("/")}
    style={{
      color: "#4EF0C6",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Login here
  </span>
</p>
    </div>
    </div>
  );
}

export default Register;