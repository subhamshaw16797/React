import React from 'react';
import './App.css';
import Welcome from './Component/Welcome';


let App=() =>
{
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="xyz" className="navbar-brand">React-Props-State</a>
      </nav>
      <Welcome msg="Welcome React"/>
    </React.Fragment>
    
  );
}

export default App;
