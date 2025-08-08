import React, { useState } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";
import ContactUs from "../components/ContactUs/ContactUs";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="home">
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <ContactUs />
    </div>
  );
};

export default Home;
