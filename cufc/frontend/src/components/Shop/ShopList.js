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
    addToCart = item => {
        let curAmount = this.state.amount
        curAmount += parseInt(item.quantity)
        this.setState({amount:curAmount})
        let curCart = this.state.cart
        curCart.push(item)
        this.setState({cart:curCart})
        let curTotal = this.state.total
        curTotal += parseInt(item.price) * parseInt(item.quantity)
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

    removeCartItem = index => {
        let curTotal = this.state.total
        let curAmount = this.state.amount
        let curCart = this.state.cart
        let item = curCart[index]
        curTotal -= parseInt(item.price) * parseInt(item.quantity)
        if(curTotal<0){
            curTotal = 0
        }
        curAmount -= parseInt(item.quantity)
        if(curAmount<0){
            curAmount = 0
        }
        curCart.splice(index,1)
        this.setState({
            cart:curCart,
            total:curTotal,
            amount:curAmount
        })
    }

    checkout = () => {
        const cart = this.state.cart
        axios.post("api/shop/checkout/",cart)
    }

    componentDidMount(){
        axios.get("api/shop/items/")
        .then(res => {
            const shopItems = res.data
            this.setState({shopItems})
        })
    }
    
    render() {
        const { amount } = this.state;
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
                <div className={this.state.showCart ? "modal is-active" : "modal"}>
                            <div className="modal-background" onClick={this.hideCart}></div>
                            <div className="modal-card">
                                <div className="modal-card-head">
                                    <h3 className="modal-card-title">Cart</h3>
                                </div>
                                <div className="modal-card-body">
                                    <table className="table image is-hoverable">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Item</th>
                                                <th>Size</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total Price</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.cart.map((cartItem, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <figure className="image is-24x24">
                                                        <img src={cartItem.img}/>
                                                    </figure>
                                                </td>
                                                <td>{cartItem.item}</td>
                                                <td>{cartItem.size}</td>
                                                <td>{cartItem.price}</td>
                                                <td>{cartItem.quantity}</td>
                                                <td>{(parseInt(cartItem.quantity)*parseInt(cartItem.price)).toFixed(2)}</td>
                                                <td>
                                                    <button 
                                                        className='button is-danger is-outlined is-small' 
                                                        style={{margin:"0"}}
                                                        onClick={() => this.removeCartItem(index)}
                                                    >
                                                    Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-card-foot">
                                    <button className="button is-black is-right" onClick={this.checkout}>Checkout</button>
                                    <label className="label" style={{marginLeft:"auto"}}>Total: {this.state.total.toFixed(2)}</label>
                                </div>
                            </div>
                            <button className="modal-close is-large" aria-label="close" onClick={this.hideCart}></button>
                        </div>
            </Fragment>
        )
    }
}

export default ShopList
