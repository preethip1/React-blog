import React from 'react';
import './topbar.css';


export default function Topbar() {
    return ( 
        <div className='top'>
            <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className='toplistItem'>HOME</li>
                    <li className='toplistItem'>ABOUT</li>
                    <li className='toplistItem'>CONTACT</li>
                    <li className='toplistItem'>WRITE</li>
                    <li className='toplistItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
                <i className="topSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
     );
}
