import '../css'
import React from 'react'
import Modal from './modal'
import { shears, jewel, noplace } from '../content'
import { shearsImg, jewelImg, noplaceImg } from '../images'

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
        noplace.video = `<img class="sm-img" src=${noplaceImg} alt='sp'/>`

        return (
            <div className="screen">
                <div className="center">
                    <h1 id="films" className="header">FILMS</h1>
                </div>

                <div className="row">
                    <div className="film item-zoom">
                        <img src={noplaceImg} alt='sp'
                            onClick={() => this.openModal(noplace)} />
                    </div>
                    <div className="film item-zoom">
                        <img src={shearsImg} alt='sp'
                            onClick={() => this.openModal(shears)} />
                    </div>
                    <div className="film item-zoom">
                        <img src={jewelImg} alt='sp'
                            onClick={() => this.openModal(jewel)} />
                    </div>
                </div>

                < Modal ref={this.modal}
                    out={this.state.out}
                    text={this.state.text}
                    video={this.state.video}
                    header={this.state.header}
                    showModal={this.state.showModal}
                    onClick={this.modal?.current?.open()} />
            </div >
        );
    }
}
