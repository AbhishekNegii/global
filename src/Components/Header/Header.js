import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='display'>
      <h1>Student Data</h1>
      <Link to='/'><h4>Add Student</h4></Link>
     <Link to='/studentdetails'><h4>View Students</h4></Link> 
    </div>
  )
}

export default Header
