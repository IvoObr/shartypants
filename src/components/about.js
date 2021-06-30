import '../css'
import React from 'react'
import { about } from '../content'

export default class About extends React.Component {
    render() {
        return (
            <div className="screen">
                <h1 id="about" className="header">About Us</h1>
                <div className="textP">
                    <p className="textCol">{about.text.p1}</p>
                    <p className="textCol">{about.text.p2}</p>
                    <p className="textCol">{about.text.p3}</p>
                </div>
            </div>
        );
    }
}
