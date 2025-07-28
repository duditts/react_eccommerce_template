import { Routes, Route, Link } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/signup">Signup</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}
