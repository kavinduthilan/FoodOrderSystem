import FoodDisplay from "./components/FoodDisplay";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { useState } from "react";



function App() {

  const [category, setCategory] = useState("All");
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <Menu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
      </div>
        <Footer />
    </>
    
  );
}

export default App;
