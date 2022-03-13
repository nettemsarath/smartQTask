import React, {useEffect} from "react";
import "./App.css";

import useStore from "@/store";
import {selectSetAvailableOrders} from "@/selectors"

import Header from "@/components/Header";
import Home from "@/pages/Home";

function App() {
  const getAvailableOrders = useStore(selectSetAvailableOrders)
  useEffect(()=>{
    getAvailableOrders();
  },[]);
  return (
    <div className="body_section" >
      <Header />
      <Home />
    </div>
  )
};

export default App;
