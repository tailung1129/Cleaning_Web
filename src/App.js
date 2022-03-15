
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ServiceRequest from "./pages/ServiceRequest"
import AccountPage from "./pages/AccountPage"
import Login from "./pages/Login"
import Register from "./pages/RegisterPage"

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/service/*" element={<ServiceRequest />} />
          <Route path="/account/*" element={<AccountPage />} />
          <Route path="/registercompany" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;