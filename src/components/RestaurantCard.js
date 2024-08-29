
const RestaurantCard=(props)=>{
    const {name,cuisines,image,avgRating,deliveryTime,costForTwo}=props.resObject;
    return(
        <div className='res-card'>
            
            <img className='res-logo' src={image}></img>

            <h3 className='res-name'>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <div className='rating-time'>
                <span>{avgRating} Star</span>
                <span>{deliveryTime} Mins</span>
                
            </div>
            <div className="cost-two"><span>₹ {costForTwo}</span></div>
        </div>
    )
}

export default RestaurantCard;