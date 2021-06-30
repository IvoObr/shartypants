import '../css'
import React from 'react'
import { about } from '../content'
import { rali, niki } from '../images';

export default class About extends React.Component {
    render() {
        return (
            <div id="aboutScreen" className="screen">
                <h1 id="about" className="header">About Us</h1>
                <div className="">
                    <p className="textCol">{about.text.p1}</p>
                    <p className="textCol">{about.text.p2}</p>
                </div>
                <div className="people">
                    <div className="aboutCol">
                        <img className="photo" src={rali} alt="rali" />
                        <div className="cen">
                            <p className="name">Ralitsa Golemanova</p>
                            <p className="h2sm">{about.text.rali}</p>
                        </div>
                    </div>
                    <div className="aboutCol">
                        <img className="photo" src={niki} alt="niki" />
                        <div className="cen">
                            <p className="name">Nikolay Stefanov</p>
                            <p className="h2sm">{about.text.niki}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
