import React from 'react';


const Layout = (props) => {
  return (
    <div>
      <h1>Header Test</h1>
      {props.children}
    </div>
  )
}

export default Layout
