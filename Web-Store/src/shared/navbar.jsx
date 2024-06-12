import React from 'react'

export default function navbar() {
  return (
    <>
    <nav>
        <div className="container">
            <div className="nav-con">
                <div className="logo">
                    <img src="logo.png" alt="" />
                    <div className="nav-text">
                        <h1>Kind heart Charity</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                </div>

                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Cause</a></li>
                    <li><a href="#">Volunteer</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li className='li-donate' ><a style={{border: '1px solid #597081', padding: '12px 25px', borderRadius: '100px'}} href="#">Donate</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
