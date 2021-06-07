import React from 'react'
import shears from '../images/shears.jpg'
import jewel from '../images/the_jewel.jpg'
import bridge from '../images/bridge.jpg'
import '../css'

export default class Films extends React.Component {

    render() {
        return (
            <div id="films" className="screen">
          
                

                <div className="row">
                    <div className="column item-zoom">
                        <img src={shears} alt='sp' />
                    </div>
                    <div className="column item-zoom">
                        <img src={jewel}  alt='sp' />
                    </div>
                    <div className="column item-zoom">
                        <img src={bridge}  alt='sp' />
                    </div>
                </div>


            </div>
        );
    }
}
