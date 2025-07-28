import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
      alert("User created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to create user");
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="First name" onChange={handleChange} /><br />
        <input type="text" name="last_name" placeholder="Last name" onChange={handleChange} /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
