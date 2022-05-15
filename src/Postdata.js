import React from 'react'
import "./style.css"
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import App from "./App"
import FetchApi from './FetchApi'
import Nav from "./Nav"


const Postdata = () => {
  return (
      <>
         <Router>
             <div className='Postdata'>
                 <Nav/>
             </div>
             <Routes>
                <Route path='/' element={<FetchApi/>}/>
                <Route path="/app" element={<App/>}/>
             </Routes>

         </Router>
      </>
    
  )
}

export default Postdata;