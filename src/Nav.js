import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <>
      <ul>
          <li>
              <Link to="/app">App</Link>
          </li>
          <li>
            <Link to="/">FetchApi</Link>
          </li>
      </ul>
    </>
  )
}

export default Nav;