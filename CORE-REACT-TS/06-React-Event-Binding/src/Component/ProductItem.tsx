import React from 'react';

interface IProps
{
    
}
interface IProduct
{
    sno:string;
    name:string;
    image:string;
    price:number;
    qty:number;
}
interface IState
{
    product:IProduct
}
class ProductItem extends React.Component<IProps,IState>
{
    

    constructor(props:IProps)
    {
        super(props)
        this.state={
            product:{
                sno:'A1',
                name:'MI WATCH',
                image:'https://i.gadgets360cdn.com/products/large/mi-watch-458x800-1572951509.jpg',
                price:15000,
                qty:2
            }
        }
    }
    //incr quantity function
    incrQty=()=>
    {
        this.setState(
            {
                product:{
                    ...this.state.product,
                qty:this.state.product.qty+1
                }
            }
        )
    }

    //decr quantity function
    decrQty=()=>
    {
        this.setState(
            {
                product:{
                    ...this.state.product,
                qty:(this.state.product.qty-1>0)?this.state.product.qty-1:1
                }
            }
        )
    }
    //render() method is an instance method
    render()
    {
        let {product}=this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-primary">ProductItem:-</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo necessitatibus reprehenderit laborum libero autem quas eveniet atque rem. Veritatis, unde vero esse facilis beatae necessitatibus amet officia expedita quaerat reprehenderit voluptatem laudantium aliquid consequatur repellendus magnam ratione accusamus est?</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-light table-hover text-center table-striped">
                                <thead>
                                    <tr>
                                        <th>SNO</th>
                                        <th>IMAGE</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>QTY</th>
                                        <th>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{product.sno}</td>
                                        <td><img src={product.image} alt="" width={40} height={40}/></td>
                                        <td>{product.name}</td>
                                        <td>&#8377;{product.price.toFixed(2)}</td>
                                        <td><i className="fa fa-minus-circle mx-1" onClick={this.decrQty}></i>
                                            {product.qty}
                                            <i className="fa fa-plus-circle mx-1" onClick={this.incrQty}></i>
                                        </td>
                                        <td>{product.price*product.qty}</td>
                                    </tr>
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

export default ProductItem;

