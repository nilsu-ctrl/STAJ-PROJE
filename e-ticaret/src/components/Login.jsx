import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        }
      );
       alert("Giriş başarılı!");
       navigate("/");

    } catch (err) {
  if (err.response) {
    alert(err.response.data.message);
  } else {
    alert("Sunucuya bağlanılamadı.");
  }
}
  };
  return (
     <div className="auth-page">

    <div className="login-container">

      <h2>Giriş Yap</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre"
      />

      <button type="submit">Giriş Yap</button>
    </form>
    </div>

  </div>

  );
}

export default Login;