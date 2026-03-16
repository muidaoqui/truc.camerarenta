import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* ================= LAYOUT ================= */
import CustomerLayout from "./layouts/CustomerLayout";
/* ================= PAGES ================= */
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";


function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> */}
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
