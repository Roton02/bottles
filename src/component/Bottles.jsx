import { useEffect } from "react";
import { useState } from "react";
import Botol from "./Botol";
import { addToLs, getItemLs, removeFromLs } from "../allJs/cart";
import Cart from "./Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [purchase , setPurchase]= useState([])

    useEffect(()=>{
        fetch('Bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    useEffect(()=>{
        // console.log("item is already",bottles.length );
         
          if (bottles.length ) {
            const reGeteItemsLs= getItemLs()
            const setcart =[];
            //   console.log(reGeteItemsLs);
              for (const id of reGeteItemsLs) {
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    setcart.push(bottle);
                }
               }
            //    console.log("ami ", setcart);
               setPurchase(setcart);
          }
          

    }, [bottles])

    const handlePurchase = (clickBtn) =>{
        // console.log('click khaici mama');
        // console.log(clickBtn);
        setPurchase([...purchase, clickBtn])
        addToLs(clickBtn.id)
    }
    // console.log(purchase);
    const removeItems = id =>{
        // reove veisully
        const visuallyRemove = purchase.filter(idx => idx.id !==id)
        console.log(bottles);
        setPurchase(visuallyRemove)
        // remove from ls 
        removeFromLs(id)
    }

    return (
        <div>
            <h3>Available bottles : {bottles.length} </h3>
            <Cart key={purchase.id} cart={purchase} removeItems={removeItems}></Cart>
            
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px'}}>
          {
                bottles.map(bottle => <Botol 
                    key={bottle.id} 
                    handlePurchase={handlePurchase}
                    bottle={bottle} ></Botol> )
            }
          </div>
        </div>
    );
};

export default Bottles;