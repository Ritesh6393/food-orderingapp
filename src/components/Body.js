import {useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUI";

const Body=()=>{
    const[listOfRest,setListOfRest]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://66d0b136181d059277df7063.mockapi.io/api/zippy/retaurantsName");
        const restData = await data.json();
        
        

        setListOfRest(restData)
        
    };

    if(listOfRest.length===0){
        return <ShimmerUi/> 
    }
    return(
        <div className='body'>
            {/* <div className='search'>
                <input type="text" placeholder="Search Restaurants..." />
            </div> */}
            <div className='filter'>
                <button 
                onClick={()=>{
                    const filteredList=listOfRest.filter(res=>res.avgRating>4.5);

                    setListOfRest(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {listOfRest.map((restaurant)=>{
                    return(<RestaurantCard key={restaurant.id} resObject={restaurant}></RestaurantCard>)
                })}
            </div>
        </div>
    )
}

export default Body;