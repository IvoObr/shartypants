import React from 'react'
import shearsImg from '../images/shears.jpg'
import jewel from '../images/the_jewel.jpg'
import Modal from './modal'
import { shears} from '../content'
import '../css'

export default class Films extends React.Component {

    text = shears.text;

    header = shears.header
    video = shears.video

    modal2 = React.createRef();

    constructor(props) {
         
      super(props);
      this.state = {
        showModal: false
      };

        this.openModal = this.openModal.bind(this);
   }

   openModal() { // TODO pass {{shears}} to open modal !!!!!!!!!!!!!!!
      this.setState({showModal: true });
    }

    render() {

        return (
            <div id="films" className="screen">

                <h1 className="header">
                    FILMS</h1>

                <div className="row">
                    <div className="column item-zoom">
                        <img src={shearsImg}
                            alt='sp'
                            onClick={this.openModal} />
                    </div>
                    <div className="column item-zoom">
                        <img src={jewel}
                            alt='sp' />
                    </div>

                </div>

                <Modal
                    ref={this.modal2}
                    onClick={this.modal2.current?.open()}
                    showModal={this.state.showModal}
                    out={false}
                    text={this.text}
                    header={this.header}

                    video={this.video} />

            </div>


        );;
    }
}
