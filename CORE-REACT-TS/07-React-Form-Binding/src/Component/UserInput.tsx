import React from "react";
interface IProps
{

}
interface IState
{
    username:string;
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
class UserInput extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            username:''
        }
    }

    //updateInput()
    updateInput=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState(
            {
                username:event.target.value
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
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-warning text-center text-white">
                                    <h2>
                                        Change UserName
                                    </h2>
                                </div>
                                <div className="card-body bg-light">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" placeholder="Enter Username" value={this.state.username} className="form-control" onChange={this.updateInput}/>
                                        </div>
                                    </form>
                                    <h2>{this.state.username}</h2>
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
export default UserInput;