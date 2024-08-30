import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUI";

const Body = () => {
    const [listOfRest, setListOfRest] = useState([]);
    const [searchedInputValue,setSearchedInputVlaue]=useState("");
    const [filteredResList,setFilterdResList]=useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://66d0b136181d059277df7063.mockapi.io/api/zippy/retaurantsName");
        const restData = await data.json();
        setListOfRest(restData);
        setFilterdResList(restData)
    };

    if (listOfRest.length === 0) {
        return <ShimmerUi />;
    }

    return (
        <div className='body'>
            <div className='filter'>
                <div className='search-container'>
                    <input type="text" placeholder="Search Restaurants..." value={searchedInputValue} onChange={(e)=>{
                        setSearchedInputVlaue(e.target.value);
                    }}
                    />
                    <button className="search-button" onClick={()=>{
                        const searchedRestList=listOfRest.filter(res=>res.name.toLowerCase().includes(searchedInputValue.toLocaleLowerCase()))

                        setFilterdResList(searchedRestList);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRest.filter(res => res.avgRating > 4.5);
                        setFilterdResList(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {filteredResList.map((restaurant) => {
                    return (<RestaurantCard key={restaurant.id} resObject={restaurant}></RestaurantCard>)
                })}
            </div>
        </div>
    );
}

export default Body;
