import { toast } from "react-hot-toast";
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice"

const CartItem = ({item,itemIndex}) => {
  
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id))
    toast.success("Item removed successfully");

  }
  
  
  return(
    <div >
      <div className=" border-b-4  border-slate-500  flex flex-col justify-center items-center mt-10 mx-auto ml-10" >
        <div className="flex gap-5">
        <div className="h-[180px] w-[180px]">
          <img src={item.image} className="h-full w-full"/>
        </div>

        <div className="flex flex-col">
          <h1 className="text-gray-700 font-semibold text-lg text-left  w-40 mt-1">{item.title}</h1>
          <h2 className="w-40 text-black font-normal text-[10px] text-left mt-2" >{item.description.split(" ").slice(0,10).join(" ")+"..."}</h2>
          <div className="flex justify-between items-center mt-2">
            <p className="text-green-600 font-semibold ">
              ${item.price}
            </p>
            <div 
            className="rounded-full bg-red-300 text-red-500 w-7 h-7 flex justify-center items-center hover:cursor-pointer"
            onClick={removeFromCart}><AiFillDelete/></div>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
