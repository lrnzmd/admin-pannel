import React from 'react'
import './home.css'
import Featuredinfo from "../featueredinfo/Featuredinfo";
import Chart from "../chart/Chart"

const Home = () => {
    return (
        <div className="home">
          <Featuredinfo/>
          <Chart/>
        </div>
    )
}

export default Home
