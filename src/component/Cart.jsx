import PropType from "prop-types"
const Cart = ({cart, removeItems}) => {
    return (
        <div>
            <h3> Add to cart : {cart.length} </h3>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img  style={{width:'80px' , marginRight:'5px'}} src={bottle.img}></img>
                    <button onClick={()=>removeItems(bottle.id)} >Remove</button>
                </div>)
            }
        </div>
    );
};
Cart.propTypes={
    cart:PropType.array.isRequired,
    removeItems:PropType.func.isRequired
}
export default Cart;