import "./components/Styles.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PlaySong from "./pages/PlaySong";
import MenuHeader from "./components/MenuHeader";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <MenuHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<PlaySong />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
