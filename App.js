import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = ()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' 
                src='https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg' />
            </div>

            <div className='nav-items'>
                <ul className='list'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard=()=>{
    return(
        <div className='res-card'>
            
            <img className='res-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2yb943N0rzsn4zkcHJs5GpBbtKpmRii_VA&s'></img>

            <h3 className='res-name'>Meghna Foods</h3>
            <h5>Biryani,Hyderabadi Biryani,North Indian</h5>
            <div className='rating-time'>
                <span>4.4 Star</span>
                <span>38 Mins</span>
            </div>
        </div>
    )
}

const Body=()=>{
    return(
        <div className='body'>
            <div className='search'>
                <input type="text" placeholder="Search Restaurants..." />
            </div>
            <div className='res-container'>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout =() => {
    return(
    <div className='app'>
        <Header/>
        <Body/>
    </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);