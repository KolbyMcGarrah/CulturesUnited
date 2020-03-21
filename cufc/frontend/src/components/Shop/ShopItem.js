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
    adjusted_price = (this.props.shop_item.price * this.props.shop_item.adjust_price)
    addItemToCart = e => {
        if(this.state.quantity > 0){
            const cartItem = {
                item:this.props.shop_item.name,
                price:this.adjusted_price,
                quantity:this.state.quantity,
                size:this.state.size,
                img:this.props.shop_item.image
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
                        <figure  className="media-left image" style={{margin:"auto"}}>
                                <img src={this.props.shop_item.image} style={{maxHeight:"480px",maxWidth:"480px"}}/>
                        </figure>
                        <div className='media-content'>
                                <h1 className="title is-2 has-text-grey-light">{this.props.shop_item.name}</h1>
                                <p className="content is-6" style={{width:"100%"}}>{this.props.shop_item.description}</p>
                                <h6 className="has-text-weight-normal is-size-6">Price</h6>
                                <p className="has-text-weight-light is-size-4">${this.adjusted_price}</p>
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
