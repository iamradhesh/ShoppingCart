import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {
  
  const{cart}=useSelector((state)=>state);
  const[totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);
 
 
  return(
    <div >
      {
        cart.length>0 ?
        (<div className="flex   gap-30 justify-center ml-40">
            <div>
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>
              <div className="flex flex-col ml-40  relative  ">
                  <div className="mt-10">
                  <div className="w-40 text-green-700 font-bold text-lg text-left">YOUR CART</div>
                  <div><h1 className="text-green-700 font-bold text-4xl text-left  w-40 mt-1 ">SUMMARY</h1></div>
                  <p>
                    <span className="w-40  font-bold  text-left">Total Items:{cart.length}</span>
                  </p>
                </div>
                <div className=" mt-60 ">
                  <p className="font-semibold">Total Amount:<span className="font-bold ml-2">${totalAmount.toFixed(2)}</span></p>
                  <button className="text-slate-300 border-2 border-green-700 bg-green-700 rounded-md font-semibold
            text-[12px] p-1 px-3 uppercase hover:bg-green-900 hover:text-white transition duration-300 ease-in w-full h-full">
                    Checkout Now
                  </button>
                </div>
              </div>
            
        </div>):
        (<div className="flex flex-col mt-2 justify-center items-center">
            <h1 className="text-green-700 font-bold text-4xl text-center   mt-1">CART EMPTY..!!</h1>
            <Link to={"/"}>
              <button
              className="text-slate-300 border-2 border-green-700 bg-green-700 rounded-md font-semibold
            text-[12px] p-1 px-3 uppercase hover:bg-green-900 hover:text-white transition duration-300 w-[300px] h-full ease-in  mt-4"
              >Shop Now</button>
            </Link>
        </div>)
      }
    </div>
  )
};

export default Cart;
