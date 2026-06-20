import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));

     console.log(res.data);

// Save token
localStorage.setItem("token", res.data.token);

// Save user
localStorage.setItem(
  "user",
  JSON.stringify(res.data.user)
);

alert("Login Successful!");
navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Login Failed");
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
   
    {/* 👇 Login Card starts here */}
    <div
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow =
      "0 0 50px rgba(0,255,170,0.8)";
    e.currentTarget.style.border =
      "1px solid rgba(0,255,170,0.8)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow =
      "0 0 20px rgba(0,255,170,0.3)";
    e.currentTarget.style.border =
      "1px solid rgba(0,255,170,0.2)";
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
}}
>
  Campus Maintenance System
</h1>
      <h2
  style={{
    color: "#6dd5fa",
    marginBottom: "25px",
  }}
>
  Login Page
</h2>

      <form onSubmit={handleLogin}>
       <input
  type="email"
  placeholder="Enter Email"
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
  placeholder="Enter Password"
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
<br />
        <button type="submit"
          style={{
  padding: "12px 30px",
  fontSize: "18px",
  fontWeight: "bold",
  background: "linear-gradient(90deg,#00ff99,#00cc88)",
  color: "black",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "0 0 20px #00ff99",
}}
>
       Login
        </button>
        <br />
        <p>
   <p
  style={{
    marginTop: "20px",
    color: "#cbd5e1",
    fontSize: "16px",
  }}
>
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    style={{
      color: "#4EF0C6",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Register here
  </span>
</p>
</p>
      </form>
    </div>
    </div>
     );
}

export default Login;