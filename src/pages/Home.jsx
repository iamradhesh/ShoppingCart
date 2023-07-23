import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = () => {
  
  const API_URL = "https://fakestoreapi.com/products";

    const [loading,setLoading]=useState(false);
    const [posts,setPost]=useState([]);
    
    async function fetchProductData(){

      setLoading(true);

      try{

        const res=await fetch(API_URL);
        const data=await res.json();
        setPost(data);
      }
      catch(e){
            alert("Error fetching product");
            setPost([]);
      }

      setLoading(false);
    }


    useEffect(()=>{
        fetchProductData();
    },[]);
  
    return (

      <div>
        {
          loading?<Spinner/>:
          posts.length>0?
          (<div className="grid sm:grid-cols-2 md: grid-cos-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
             {

              posts.map((post)=>(
                <Product key={post.id} post={post}/>
              ))
             }
          </div>):
          <div className="flex justify-centre items-center">
            <p>No Data Found</p>
          </div>
        }
      </div>


  );
};

export default Home;
