import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Hero from "./pages/Hero"; // <-- add hero page

export default function App() {
  return (
    <div>
      {/* Simple Navigation */}
      <nav className="p-4 bg-gray-800 text-white flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Hero as homepage */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
