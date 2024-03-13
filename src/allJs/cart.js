const getItemLs =()=>{
    const lsValue = localStorage.getItem('cart');
    if (lsValue) {
        return  JSON.parse(lsValue);
    }      return [];
}
const  setItemLs =(cart)=>{
     localStorage.setItem('cart', JSON.stringify(cart))
}
const addToLs = (id)=>{
    const cart = getItemLs();
    cart.push(id)
    setItemLs(cart);
}
const removeFromLs=id=>{
    const cart = getItemLs();
   const removeFromCart =  cart.filter(idx => idx!==id);
   setItemLs(removeFromCart)
}

export { addToLs, getItemLs, removeFromLs}