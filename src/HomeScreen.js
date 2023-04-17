import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
function HomeScreen() {
    return (<div className='homescreen'>
       This homescreen is working
        {/*Nav Bar */} 
        <Nav />    

        {/* Banner */}
        <Banner />
        {/* ROWS */}
    </div>
    )
}

export default HomeScreen;