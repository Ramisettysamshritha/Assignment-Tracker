import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [role, setRole] = useState("student");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password &&
        u.role === role
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    alert(`Welcome ${user.name}!`);

    console.log("Logged In User:", user);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <span className="login-tag">
          Welcome Back
        </span>

        <h1>Sign In</h1>

        <p>
          Access assignments, deadlines, grades,
          and feedback through your personalized dashboard.
        </p>

        <div className="role-selector">

          <button
            type="button"
            className={`role-btn ${
              role === "student" ? "active" : ""
            }`}
            onClick={() => setRole("student")}
          >
            🎓 Student
          </button>

          <button
            type="button"
            className={`role-btn ${
              role === "teacher" ? "active" : ""
            }`}
            onClick={() => setRole("teacher")}
          >
            👨‍🏫 Teacher
          </button>

        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;