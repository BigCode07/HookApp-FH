import { Routes, Route, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage.jsx";
import { AboutPage } from "./AboutPage.jsx";
import { LoginPage } from "./LoginPage.jsx";
import Navbar from "./Navbar.jsx";
import UserProvider from "./context/UserProvider.jsx";
export default function MainApp() {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
}
