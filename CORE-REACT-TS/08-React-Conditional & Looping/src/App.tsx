import React from 'react';
import './App.css';
import Customers from './Component/Customer';






let App=() =>
{
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="xyz" className="navbar-brand">React-Looping</a>
      </nav>
      <Customers/>
    </React.Fragment>
    
  );
}

export default App;
