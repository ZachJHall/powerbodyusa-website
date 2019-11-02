import React from 'react';
import Header from './header'

const Layout = (props) => {
  return (
    <div>
      <Header/>
      <h1>Header Test</h1>
      {props.children}
    </div>
  )
}

export default Layout
