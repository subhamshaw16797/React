import React from "react";
interface IProps
{
    
}
interface IState
{
    msg:string;
}
class Welcome extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
        this.state={
            msg:'Message'
        }
    }
    //sayHi function
    sayHi=()=>
    {
        this.setState(
            {
                msg:'Hiiiiiiii'
            }
        )
    }

    //sayHello function
    sayHello=(value:string)=>
    {
        this.setState(
            {
                msg:value
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
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <h2>{this.state.msg}</h2>
                                    <button onClick={this.sayHi} className="btn btn-success btn-md">HI</button>
                                    <button onClick={this.sayHello.bind(this,'Hellooo')} className="btn btn-danger btn-md">HELLO</button>
                                    <button onClick={()=>this.setState({msg:'Byeeee'})} className="btn btn-warning btn-md">BYE</button>
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
export default Welcome;