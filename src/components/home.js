import '../css'
import React from 'react'
import drop from '../images/drop.png'

export default class Home extends React.Component {

    render() {
        return (
            <div id="home" className="home">
                <div>
                    <div className="glitch">
                        <div className="glitch__item"></div>
                        <div className="glitch__item"></div>
                        <div className="glitch__item"></div>
                        <div className="glitch__item"></div>
                        <div className="glitch__item"></div>
                        <a href="#nav">
                            <img className='drop' alt='sp' src={drop} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
