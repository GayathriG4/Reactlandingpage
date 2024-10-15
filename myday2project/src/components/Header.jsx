import React from 'react';
import './Header.css'

const Header = () => {
    const handlesubmit=()=>{
        console.log("button event");
        
    }
    return (
        <div className='head'>
            <h1 id='font'>Nav content</h1>
            <button onClick={handlesubmit}>click me</button>
        </div>
    );
};

export default Header;