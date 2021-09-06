import React from "react";
import { CustomerStore, ICustomer } from "./CustomerStore";

interface IProps
{

}

interface IState
{
    customers:ICustomer[];
}

class Customers extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
        this.state={
            customers:CustomerStore.customerData
        }
    }
   render()
    {
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-primary">Customer Details</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum numquam molestias delectus natus possimus, modi fugit nostrum tempore maxime inventore officiis assumenda similique sunt minima mollitia id nobis minus?</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-primary text-center">
                                <thead>
                                    <tr>
                                        <th>Sno</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.customers.map((customer)=>
                                        {
                                            return(
                                                <tr>
                                                    <td>{customer.login.uuid.substr(customer.login.uuid.length-5)}</td>
                                                    <td><img src={customer.picture.large} width="50" height="50" alt="" /></td>
                                                    <td>{customer.name.first} {customer.name.last}</td>
                                                    <td>{customer.dob.age}</td>
                                                    <td>{customer.email}</td>
                                                    <td>{customer.location.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default Customers;