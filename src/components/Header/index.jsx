import React from 'react'
import "./index.css";

import SmartqLogo from "@/assets/SmartQ_Logo.png";

function Header() {
  return (
    <div className='header_nav' >
      <img src={SmartqLogo} />
      <div>
        <input type="text" />
      </div>
    </div>
  )
}

export default Header