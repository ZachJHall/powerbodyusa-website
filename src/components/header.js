import React from 'react';
import { Link } from 'gatsby';
import '../css/header.css'

const Header = () => {
  return (
    <div class="header-links">

      <Link to="/">Home</Link>

      <Link to="/about/">About</Link>

      <Link to="/clients/">Clients</Link>

    </div>
  )
}

export default Header
