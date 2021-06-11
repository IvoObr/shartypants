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
            <div id="films" className="screen">
                <h1 className="header">FILMS</h1>
                {/* <div className="row">
                    <div className="column item-zoom">
                        <img src={noplaceImg} alt='sp'
                            onClick={() => this.openModal(noplace)} />
                    </div>
                    <div className="column item-zoom">
                        <img src={shearsImg} alt='sp'
                            onClick={() => this.openModal(shears)} />
                    </div>
                    <div className="column item-zoom">
                        <img src={jewelImg} alt='sp'
                            onClick={() => this.openModal(jewel)} />
                    </div>
                </div> */}

                <figure className="snip1482 " onClick={() => this.openModal(noplace)}>
                    <figcaption>
                        <h2>{noplace.header}</h2>
                        {/* <p>{noplace.header}</p> */}
                    </figcaption>
                    <img src={noplaceImg} alt="sample45" />
                </figure>
                <figure className="snip1482 " onClick={() => this.openModal(shears)}>
                    <figcaption>
                        <h2>{shears.header}</h2>
                        {/* <p>{shears.header}</p> */}
                    </figcaption>
                   <img src={shearsImg} alt="sample59" />
                </figure>
                <figure className="snip1482 " onClick={() => this.openModal(jewel)}>
                    <figcaption>
                        <h2>{jewel.header}</h2>
                        {/* <p>{jewel.header}</p> */}
                    </figcaption>
                    <img src={jewelImg} alt="sample60" />
                </figure>

       
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
