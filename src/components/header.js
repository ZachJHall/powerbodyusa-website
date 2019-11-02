import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div class="header-links">
    <Link to="/">Home</Link>
    <Link to="/about/">About</Link>
    </div>
  )
}

export default Header
