import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
    const[listOfRest,setListOfRest]=useState(resList);


    return(
        <div className='body'>
            {/* <div className='search'>
                <input type="text" placeholder="Search Restaurants..." />
            </div> */}
            <div className='filter'>
                <button 
                onClick={()=>{
                    const filteredList=listOfRest.filter(res=>res.star>4.5);

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