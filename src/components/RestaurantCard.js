const RestaurantCard=(props)=>{
    const {restName,cuisines,image,star,time,costForTwo}=props.resObject;
    return(
        <div className='res-card'>
            
            <img className='res-logo' src={image}></img>

            <h3 className='res-name'>{restName}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <div className='rating-time'>
                <span>{star} Star</span>
                <span>{time} Mins</span>
                <span>₹ {costForTwo} For Two</span>
            </div>
        </div>
    )
}

export default RestaurantCard;