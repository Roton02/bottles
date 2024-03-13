import './botol.css'
import PropTypes from 'prop-types'
const Botol = ({bottle, handlePurchase}) => {
    // console.log(bottle);
    const {name, img, price } = bottle
    // console.log(name, img, price);
    return (
        <div className='bottle'>
            <h4>name: {name}</h4>
            <img src={img} alt="" />
            <h4><small>price: {price}</small></h4>
            <button onClick={()=>handlePurchase(bottle)} style={{backgroundColor:'pink', padding:'10px'}}>Pearchase Now</button>
        </div>
    );
};

Botol.propTypes={
    bottle:PropTypes.object.isRequired,
    handlePurchase:PropTypes.func.isRequired
}

export default Botol;