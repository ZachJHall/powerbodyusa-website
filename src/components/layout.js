import React from 'react';
import '../css/base.css'


const Layout = (props) => {
  return (
    <div class = "container">

      {props.children}

    </div>
  )
}

export default Layout
