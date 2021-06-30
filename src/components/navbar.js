import '../css'
import React from 'react'

export default class Navbar extends React.Component {
    render() {
        return (
            <div id='nav' className='sticky-top'>
                <ul className='ulmenu'>
                    <a href="#films"> <span className="btoonn draw-borderes">
                        <span className='hrzLi'>FILMS</span> </span>
                    </a>
                    <a href="#videos"> <span className="btoonn draw-borderes">
                        <span className='hrzLi'>VIDEOS</span> </span>
                    </a>
                    <a href="#about">  <span className="btoonn draw-borderes">
                        <span className='hrzLi'>ABOUT</span> </span>
                    </a>
                    <a href="#contacts">  <span className="btoonn draw-borderes">
                        <span className='hrzLi'>CONTACT</span> </span>
                    </a>
                    {/* <span className="btoonn draw-borderes">
                        <span className='hrzLi'>BG</span>
                    </span> */}
                </ul>   
            </div>
        );
    }
}