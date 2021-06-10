import '../css'
import React from 'react'
import logo from '../images/logo.jpg'
import smlogo from '../images/smlogo.jpg'


export default class Navbar extends React.Component {
    render() {
        return (
            <div id='nav' className='sticky-top'>
                <ul className='ulmenu'>
                    <a href="#films"> <li className='hrzLi'>Films</li>  </a>
                    <a href="#videos">  <li className='hrzLi'>Videos</li>  </a>
                    <a href="#about"> <li className='hrzLi'>About</li> </a>
                    <a href="#contacts">  <li className='hrzLi'>Contacts</li> </a>
                </ul>
                <a href="#home"><img className='smlogo' alt='sp' src={smlogo} />  </a>
            </div>
        );
    }
}
