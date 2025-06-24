import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
            <Route path="/reg" element={<Register />} />
          </Routes>
        </BrowserRouter>
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App;
