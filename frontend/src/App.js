import FoodDisplay from "./components/FoodDisplay";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <Menu />
        <FoodDisplay />
      </div>
        <Footer />
    </>
    
  );
}

export default App;
