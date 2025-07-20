import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utilies/CartSlice";





const Cart = ()=>{

const cartitems = useSelector((state)=>state.cart.items);

const dispatch = useDispatch()


const handleClearItem =()=>{
      dispatch(clearItem())
}

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>

            <button className=" text-white bg-black rounded-lg p-2 m-4 border " onClick={handleClearItem}>Clear Cart</button>

           <div className="w-6/12 m-auto">

            <ItemList items={cartitems} />


            </div>
            
             

 </div>

)
}

export default Cart;