import '../css'
import React from 'react'
import { about } from '../content'

export default class About extends React.Component {
    render() {
        return (
            <div id="about" className="halfScreen">
                <h1 className="header">About</h1>
                <p className="textCol">{about.text.p1}</p>
                <p className="textCol">{about.text.p2}</p>
                <p className="textCol">{about.text.p3}</p>
            </div>
        );
    }
}
