import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link to="/landing">Landing</Link>
        </ul>
        <ul>
            <Link to="/home">Home</Link>
        </ul>
        <ul>
            <Link to="/dashboard">Dashboard</Link>
        </ul>
        <ul>
            <Link to="/analytics">Analitycs</Link>
        </ul>
        <ul>
            <Link to="/admin">Admin</Link>
        </ul>
    </nav>
  )
}

export default Navbar