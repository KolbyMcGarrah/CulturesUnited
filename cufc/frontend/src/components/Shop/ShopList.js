import React, { Component, Fragment } from 'react';
import ShopItem from "./ShopItem";
import axios from "axios"

export class ShopList extends Component {
    state = {
        shopItems:[],
        cart:[],
        amount:0,
        showCart:false,
        total:0.00
    }
    componentDidMount(){
        axios.get("api/shop/items/")
        .then(res => {
            const shopItems = res.data
            this.setState({shopItems})
        })
    }
    addToCart = item => {
        console.log(item)
        let curAmount = this.state.amount
        curAmount += parseInt(item.quantity)
        this.setState({amount:curAmount})
        let curCart = this.state.cart
        curCart.push(item)
        this.setState({cart:curCart})
        let curTotal = this.state.total
        curTotal += parseInt(item.price) * curAmount
        this.setState({total:curTotal})
    }

    showCart = () => {
        this.setState({
            showCart:true
        })
    }

    hideCart = () => {
        this.setState({
            showCart:false
        })
    }

    render() {
        const { amount, cart } = this.state;
        for(let i=0;i<cart.length;i++){
            console.log(cart[i].item)
        }
        const modal = (
            <div className="modal is-active">
                            <div className="modal-background"></div>
                            <div className="modal-card">
                                <div className="modal-card-head">
                                    <h3 className="modal-card-title">Cart</h3>
                                </div>
                                <div className="modal-card-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Details</th>
                                                <th>Individual Price</th>
                                                <th>Quantity</th>
                                                <th>Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cart.map(cartItem =>{
                                            <tr>
                                                <td>cartItem.item</td>
                                                <td>cartItem.size</td>
                                                <td>cartItem.price</td>
                                                <td><input 
                                                        type="number"
                                                        name="quantity" 
                                                        value={cartItem.item.quantity}
                                                    />
                                                </td>
                                                <td>{parseInt(cartItem.item.price) * parseInt(cartItem.item.quantity)}</td>
                                            </tr>
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-card-foot">
                                    <label className="label">Total: {this.state.total.toFixed(2)}</label>
                                    <button className="button is-black">Checkout</button>
                                </div>
                            </div>
                            <button className="modal-close is-large" aria-label="close" onClick={this.hideCart}></button>
                        </div>
        )

        const cartButton = (
            <button className='button is-black is-rounded' 
                    style={{position:'fixed', zIndex:'2', marginLeft:'20px'}}
                    onClick={this.showCart}
                    >
                <span className="icon is-small">
                    <i className="fas fa-shopping-cart"/>
                </span>
                <p>Checkout {amount} items</p>
            </button>
        )
        return (
            <Fragment>
                {this.state.showCart ? <Fragment /> : cartButton}
                <div className="container section">
                    <div className="">
                        {
                                this.state.shopItems.map(shop_item =>(
                                    <ShopItem addToCart={this.addToCart} key={shop_item.id} shop_item={shop_item}/>
                                ))
                        }
                    </div>
                </div>
                {this.state.showCart ? modal : <Fragment />}
            </Fragment>
        )
    }
}

export default ShopList
