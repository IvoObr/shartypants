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
                            {/* 
                            POLYGON
                            <div className="image-wrapper drop">
                                <img className="image-1" alt="drop" src={drop} />
                                <img className="image-2" alt="drop" src={drop} />
                                <img className="image-3" alt="drop" src={drop} />
                                <img className="image-4" alt="drop" src={drop} />
                            </div> */}
                            <img className='drop' alt='sp' src={drop} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
