import '../css'
import React from 'react'

export default class Navbar extends React.Component {
    render() {
        return (
            <div id='nav' className='sticky-top'>
                <ul className='ulmenu'>
                    <a href="#films"> <span className="btoonn draw-borderes">
                        <li className='hrzLi'>FILMS</li> </span>
                    </a>
                    <a href="#videos"> <span className="btoonn draw-borderes">
                        <li className='hrzLi'>VIDEOS</li> </span>
                    </a>
                    <a href="#about">  <span className="btoonn draw-borderes">
                        <li className='hrzLi'>ABOUT</li> </span>
                    </a>
                    <a href="#contacts">  <span className="btoonn draw-borderes">
                        <li className='hrzLi'>CONTACT</li> </span>
                    </a>
                </ul>
            </div>
        );
    }
}