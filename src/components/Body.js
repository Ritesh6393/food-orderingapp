import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
    return(
        <div className='body'>
            <div className='search'>
                <input type="text" placeholder="Search Restaurants..." />
            </div>
            <div className='res-container'>
                {resList.map((restaurant)=>{
                    return(<RestaurantCard key={restaurant.id} resObject={restaurant}></RestaurantCard>)
                })}
            </div>
        </div>
    )
}

export default Body;