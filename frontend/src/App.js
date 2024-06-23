import FoodDisplay from "./components/FoodDisplay";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Menu />
      <FoodDisplay />
    </div>
  );
}

export default App;
