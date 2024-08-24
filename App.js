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

const AppLayout =() => {
    return(
    <div className='app'>
        <Header/>
    </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);