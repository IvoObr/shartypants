import React from 'react'
import logo from '../images/logo.jpg'
import drop from '../images/drop.png'
import '../css'

export default class Home extends React.Component {

    render() {
        return (
            <div id="home" className="home">
                <div className="paddTop">
                    <img className='logo' src={logo} />
                    <a href="#nav">
                        <img className='drop' src={drop} />
                    </a>
                </div>
            </div>
        );
    }
}
