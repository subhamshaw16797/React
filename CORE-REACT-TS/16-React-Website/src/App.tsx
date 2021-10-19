import React from "react";
import './App.css';
import NavBar from "./Component/Layout/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Component/Layout/Home";
import About from './Component/Layout/About';
import Employees from './Component/Employees/Employees';
import Stocks from './Component/Stocks/Stocks';
import UserRegister from './Component/Users/UserRegister';
import UserLogin from './Component/Users/UserLogin';
import EmployeeDetails from "./Component/Employees/EmployeeDetails";
import StocksDetails from './Component/Stocks/StocksDetails';

interface IProps
{
    
}
interface IState
{
  
}
class App extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
    }
   render()
    {
        return(
        <React.Fragment>
            <Router>
                <NavBar/>
                {/* <Employees/> */}
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/employees/list' component={Employees}/>
                    <Route exact path='/employees/:employeeId' component={EmployeeDetails}/>
                    <Route exact path='/stocks/list' component={Stocks}/>
                    <Route exact path='/stocks/:stockId' component={StocksDetails}/>
                    <Route exact path='/users/register' component={UserRegister}/>
                    <Route exact path='/users/login' component={UserLogin}/>
                </Switch>
            </Router>
        </React.Fragment>
        )
    }

}
export default App;