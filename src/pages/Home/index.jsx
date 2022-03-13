import React from 'react'
import "./index.css";

import MenuItems from "@/components/MenuItems";
import Menu from "./Menu";
import Cart from "@/components/Cart";

function Home() {
  return (
    <div className='home' >
      <h1>Build Your Menu </h1>
      <div>
        <Menu />
        <Cart />
      </div>
  </div>
  )
};

export default Home;