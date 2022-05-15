import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <>
      <ul className='ul'>
          <li>
            <NavLink to="/">FetchApi</NavLink>
          </li>
          <li>
              <NavLink to="/app">App</NavLink>
          </li>
          {/* <li>
            <NavLink to="/">FetchApi</NavLink>
          </li> */}
      </ul>
    </>
  )
}

export default Nav;