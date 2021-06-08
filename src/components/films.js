import React from 'react'
import shears from '../images/shears.jpg'
import jewel from '../images/the_jewel.jpg'
import Modal from './modal'
import '../css'

export default class Films extends React.Component {

    text = 'jhgfdsafsddfgh';
    video = 'nbvcxz';

    constructor(props) {
         
      super(props);
      this.state = {
        showModal: false
      };

      this.openModal = this.openModal.bind(this);
   }

   openModal() {
      this.setState({showModal: true });
    }

    render() {

        return (
            <div id="films" className="screen">

                <h1 className="header">
                    FILMS</h1>

                <div className="row">
                    <div className="column item-zoom">
                        <img src={shears}
                            alt='sp'
                            onClick={ this.openModal }/>
                    </div>
                    <div className="column item-zoom">
                        <img src={jewel}
                            alt='sp'/>
                    </div>

                </div>

                <Modal showModal={this.state.showModal }
                    text={ this.text}
                    video={this.video} />
                
            </div>


        );;
    }
}
