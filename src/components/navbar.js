import '../css'
import React from 'react'

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
            </div>
        );
    }
}
