import { useState } from 'react'

import logo from './assets/potential_logo.png'
import slogan from './assets/potential_slogan.png'
import redOnion from './assets/red_onion_logo.png'
import fnfLogo from './assets/fnf_logo.png'
import globalLogo from './assets/global_logo.png'


import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="headPart">
        <a href="mailto:contact@potential49.com"><img src={logo} /></a>
      </div>
      <div className="comingSoon">
        <img src={slogan} />
        <p className="soonText">Coming Soon</p>
      </div>
      <div className="footer">
        <div className="projectBy">a project by</div>
        <div className="projectLogos">
          <img src={redOnion} />
          <img src={fnfLogo} />
          <img src={globalLogo} />
        </div>
      </div>
    </div>
  )
}

export default App
