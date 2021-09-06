import React from "react";
interface IProps
{

}
interface IState
{
    isLoggedIn:boolean;
}
class AuthUser extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            isLoggedIn:false
        }
    }

    //logIn()

    logIn=()=>
    {
        this.setState(
            {
                isLoggedIn:true
            }
        )
    }

    //logOut()

    logOut=()=>
    {
        this.setState(
            {
                isLoggedIn:false
            }
        )
    }
   render()
    {
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-body bg-dark">
                                    {
                                        this.state.isLoggedIn? <button className="btn btn-danger btn-md" onClick={this.logOut}>LogOut</button>:
                                        <button className="btn btn-success btn-md" onClick={this.logIn}>LogIn</button>
                                    }
                                    {
                                        this.state.isLoggedIn? <h1 className="text-white">Welcome User</h1> : <h1 className="text-white">Welcome Guest</h1>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default AuthUser;