import '../css'
import React from 'react'
import { vick, character } from '../content'

export default class Videos extends React.Component {
    render() {
        return (
            <div id="videos" className="screen">
                <h1 className="header">VIDEOS</h1>
                {/* <div className="floatL"> */}
                <div className="floatL">
                    <div className="gradient-border">
                        <p dangerouslySetInnerHTML={{ __html: vick.video }}></p>
                    </div>
                    <p className="videoInfo" dangerouslySetInnerHTML={{ __html: vick.header }}></p>
                    <p className="videoInfo" dangerouslySetInnerHTML={{ __html: vick.text.p1 }}></p>
                </div>
                <div className="floatL">
                    <div className="gradient-border">
                        <p dangerouslySetInnerHTML={{ __html: character.video }}></p>
                    </div>
                    <p className="videoInfo" dangerouslySetInnerHTML={{ __html: character.header }}></p>
                    <p className="videoInfo" dangerouslySetInnerHTML={{ __html: character.text.p1 }}></p>
                </div>
                {/* </div> */}
            </div>
        );
    }
}
