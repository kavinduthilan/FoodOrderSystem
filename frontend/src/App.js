import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import { useState } from "react";
import SignIn from "./components/Login-Popup/Sign-In";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <>
      <div className="app">
        {showSignIn ? <SignIn setShowLogin={setShowSignIn} /> : null}
        <Navbar setShowSignIn={setShowSignIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
