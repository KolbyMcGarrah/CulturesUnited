import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import Select from "react-select"

export class ShopItem extends Component {
    static propTypes = {
        shop_item: PropTypes.object.isRequired,
        addToCart: PropTypes.func.isRequired
    }
    state = {
        quantity:0,
        size:"",

    }
    adjusted_price = (this.props.shop_item.price * this.props.shop_item.adjust_price).toFixed(2)
    addItemToCart = e => {
        if(this.state.quantity > 0){
            console.log(this.state)
            const cartItem = {
                item:this.props.shop_item.name,
                price:this.adjusted_price,
                quantity:this.state.quantity,
                size:this.state.size
                }
                this.props.addToCart(cartItem)
        }
        this.setState({quantity:0})
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    handleSize = selectedOption =>{
        this.setState({
            size:selectedOption
        })
    }
    adjusted_price = (this.props.shop_item.price * this.props.shop_item.adjust_price).toFixed(2)
    render() {
        const { quantity, size } = this.state;
        const sizes = this.props.shop_item.sizes.split(',')
        const sale = (
            <span className="tag is-danger">
                <span className="icon is-small is-white">
                    <i className="fas fa-tag"/>
                </span>
                <p>On Sale</p>                
            </span>
            )
        return (
                
                <div className="box">
                    {this.props.shop_item.sale ? sale : <Fragment /> }
                    <article className="media">

                        <figure  className="media-left">
                            <p className="image">
                                <img src={this.props.shop_item.image} style={{maxHeight:"480px",maxWidth:"480px"}}/>
                            </p>
                        </figure>
                        <div className='media-content'style={{textAlign:"center"}}>
                            <div className='section'>
                                <h1 className="title has-text-grey-light">{this.props.shop_item.name}</h1>
                                <p className="subtitle">{this.props.shop_item.description}</p>
                            </div>
                            <h2 className="heading">Price</h2>
                            <p className="subtitle">${this.adjusted_price}</p>
                                <div className="field">
                                    <label className="heading">Available Sizes</label>
                                    <div className="field">
                                        {
                                            sizes.map(size =>(
                                                <label key={size} className="radio">
                                                    <input type="radio" name="size" value={size} onChange={this.onChange}/> 
                                                    {size}
                                                </label>
                                        ))
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <p className='heading'>Quantity</p>
                                        <input  
                                                type="number"
                                                name="quantity" 
                                                value={quantity} 
                                                onChange={this.onChange}
                                        />
                                </div>
                                <div className="field">
                                    <button className="button is-success is-outlined is-rounded" onClick={this.addItemToCart}>
                                        + Add to Cart
                                    </button>
                                </div>
                        </div>
                    </article>
                </div>
                    
        )
    }
}
export default ShopItem
