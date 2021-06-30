import '../css'
import React from 'react'
import { vick, character } from '../content'

export default class Videos extends React.Component {
    render() {
        return (
            <div className="screen">
                <h1 id="videos" className="topV header">VIDEOS</h1>
                <div className="gridTwoCol">
                    <div className=" colTwo">
                        <p dangerouslySetInnerHTML={{ __html: vick.video }}></p>
                        <p className="videoInfo" dangerouslySetInnerHTML={{ __html: vick.header }}></p>
                        <p className="videoInfo" dangerouslySetInnerHTML={{ __html: vick.text.p1 }}></p>
                    </div>
                    <div className=" colTwo">
                        <p dangerouslySetInnerHTML={{ __html: character.video }}></p>
                        <p className="videoInfo" dangerouslySetInnerHTML={{ __html: character.header }}></p>
                        <p className="videoInfo" dangerouslySetInnerHTML={{ __html: character.text.p1 }}></p>
                    </div>
                </div>
            </div>
        );
    }
}
