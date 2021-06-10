import '../css'
import React from 'react'
import Modal from './modal'
import { shears, jewel } from '../content'
import shearsImg from '../images/shears.jpg'
import jewelImg from '../images/the_jewel.jpg'

export default class Films extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            video: '',
            header: '',
            out: false,
            showModal: false,
        };

        this.modal = React.createRef(); // Warning: Cannot update during an existing state
    }

    openModal(movie) {
        this.setState({
            showModal: true,
            text: movie.text,
            video: movie.video,
            header: movie.header,
        })
    }

    render() { 
        return (
            <div id="films" className="screen">
                <h1 className="header">FILMS</h1>
                <div className="row">
                    <div className="column item-zoom">
                        <img src={shearsImg} alt='sp'
                            onClick={() => this.openModal(shears)}/>
                    </div>
                    <div className="column item-zoom">
                        <img src={jewelImg} alt='sp'
                            onClick={() => this.openModal(jewel)}/>
                    </div>
                </div>
                <Modal
                    ref={this.modal}
                    out={this.state.out}
                    text={this.state.text}
                    video={this.state.video}
                    header={this.state.header}
                    showModal={this.state.showModal}
                    onClick={this.modal?.current?.open()} />
            </div>
        );
    }
}
