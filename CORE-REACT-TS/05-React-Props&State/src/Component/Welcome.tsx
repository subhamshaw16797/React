import React from "react";

interface IProps
{
    msg:string;
}
interface IState
{
    message:string;
}
class Welcome extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
        this.state={
            message:"Thanks for the gift"
        }
    }
   render()
    {
        return(
        <React.Fragment>
            <h1>{this.props.msg}</h1>
            <h1>{this.state.message}</h1>
        </React.Fragment>
        )
    }

}
export default Welcome;