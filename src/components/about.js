import '../css'
import React from 'react'
import { about } from '../content'
import { rali, niki } from '../images';

export default class About extends React.Component {
    render() {
        return (
            <div id="aboutScreen" className="screen">
                <h1 id="about" className="header">About Us</h1>
                <div>
                    <span>
                        <img className="photo" src={rali} alt="rali" />
                        <img className="photo" src={niki} alt="niki" />
                    </span>
                    <p className="textCol">{about.text.p1}</p>
                    <p className="textCol">{about.text.p2}</p>
                    <p className="textCol">{about.text.p3}</p>
                    <p>{about.text.niki}</p>
                    <p>{about.text.rali}</p>
                </div>
            </div>
        );
    }
}
