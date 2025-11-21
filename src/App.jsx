import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="leftbar">
        <div className="home-button">

          <img src="toppng.com-white-home-icon-no-background-1985x2016.png" alt="Home Icon" className="home-icon" width={30} height={30} />
          <p>Home</p>
        </div>
      </div>
    </>
  )
};

export default App
