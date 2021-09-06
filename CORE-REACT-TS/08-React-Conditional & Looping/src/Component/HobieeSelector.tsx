import React from "react";
interface IProps
{

}
interface IState
{
    eating:boolean;
    sleeping:boolean;
    coding:boolean;
}

class HobieeSelector extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            eating:false,
            sleeping:false,
            coding:false
        }
    }

    //update check function
    updateCheck=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState(
            {
                ...this.state,
                [event.target.name]:event.target.checked
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
                                <div className="card-header bg-success text-white">
                                    <h2>Hobiee Selector</h2>
                                </div>
                                <div className="card-body bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="eating" onChange={this.updateCheck}/>
                                                    <label className="form-check-label">
                                                    Eating
                                                    </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="sleeping" onChange={this.updateCheck}/>
                                                    <label className="form-check-label">
                                                    Sleeping
                                                    </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="coding" onChange={this.updateCheck}/>
                                                    <label className="form-check-label">
                                                    Coding
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            {
                                                this.state.eating===true &&
                                                <div className="card">
                                                <div className="card-body bg-danger text-white">
                                                    <h2>Eating</h2>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore deleniti placeat sapiente magnam quisquam eos minus voluptatibus rem a? Nihil voluptates</p>
                                                </div>
                                            </div>
                                            }
                                            {
                                                this.state.sleeping===true &&
                                                <div className="card mt-2">
                                                <div className="card-body bg-info text-white">
                                                    <h2>Sleeping</h2>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore deleniti placeat sapiente magnam quisquam eos minus voluptatibus rem a? Nihil voluptates</p>
                                                </div>
                                            </div>
                                            }
                                            {
                                                this.state.coding===true &&
                                                <div className="card mt-2">
                                                <div className="card-body bg-warning text-white">
                                                    <h2>Coding</h2>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore deleniti placeat sapiente magnam quisquam eos minus voluptatibus rem a? Nihil voluptates</p>
                                                </div>
                                            </div>
                                            }
                                        </div>
                                    </div>
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
export default HobieeSelector;