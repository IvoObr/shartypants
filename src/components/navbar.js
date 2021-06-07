import React from 'react'
import logo from '../images/logo.jpg'
import '../css'

export default class Navbar extends React.Component {
    render() {
        return (
            <div id='nav' className='sticky-top'>
                
                <ul className='ulmenu'>
                    <li className='hrzLi'>Films</li>
                    <li className='hrzLi'>Videos</li>
                    <li className='hrzLi'>About</li>
                    <li className='hrzLi'>Contacts</li>
                    <li className='hrzLi'>BG</li>
                </ul>

                <a href="#home">
                    <img className='smlogo' src={logo} />
                </a>
            </div >
         
        );
    }
}
