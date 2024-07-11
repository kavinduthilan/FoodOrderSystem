import React,{useState} from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import FoodDisplay from '../components/FoodDisplay'

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div className='home'>
        <Header />
        <Menu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
