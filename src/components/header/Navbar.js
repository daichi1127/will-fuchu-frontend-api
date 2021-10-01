import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return(
      <div>
        <Link exact to="/">Home</Link>
        <Link to="/About">About</Link>
      </div>
    )
  }
}

export default Navbar;
