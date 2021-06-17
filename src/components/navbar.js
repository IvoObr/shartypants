import '../css'
import React from 'react'

export default class Navbar extends React.Component {
    render() {
        return (
            <div id='nav' className='sticky-top'>
                <ul className='ulmenu'>
                    <button class="btoon draw-borders">
                        <a href="#films"> <li className='hrzLi'>FILMS</li></a>
                    </button>
                    <button class="btoon draw-borders">
                        <a href="#videos">  <li className='hrzLi'>VIDEOS</li></a>
                    </button>
                    <button class="btoon draw-borders">
                        <a href="#about"> <li className='hrzLi'>ABOUT</li></a>
                    </button>
                    <button class="btoon draw-borders">
                        <a href="#contacts">  <li className='hrzLi'>CONTACT</li></a>
                    </button>
                </ul>
            </div>
        );
    }
}