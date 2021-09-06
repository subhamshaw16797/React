import React from 'react';
import './App.css';
import UserInput from './Component/UserInput';
// import SmsApp from './Component/SmsApp';



let App=() =>
{
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="xyz" className="navbar-brand">React-Registration-Form</a>
      </nav>
      {/* <ShoppingCart/> */}
      {/* <Registration/> */}
      {/* <SmsApp/> */}
      <UserInput/>
    </React.Fragment>
    
  );
}

export default App;
