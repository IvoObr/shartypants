import '../css'
import React from 'react'
import Modal from './modal'
import { rali, niki } from '../images';
import { about, raliT, nikiT } from '../content'

export default class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            pic: '',
            header: '',
            out: false,
            showModal: false,
        };

        this.modal = React.createRef(); // Warning: Cannot update during an existing state
    }

    openModal(person) {
        this.setState({
            showModal: true,
            text: person.text,
            pic: person.pic,
            header: person.header,
        })
    }



    render() {
        return (
            <div id="aboutScreen" className="screen">
                <h1 id="about" className="header">About Us</h1>
                <div className="">
                    <p className="textCol">{about.text.p1}</p>
                    <p className="textCol">{about.text.p2}</p>
                </div>
                <div className="people">
                    <table className="aboutCol" onClick={() => this.openModal(raliT)}>
                        <tr>
                            <td>
                                <img className="photo" src={rali} alt="rali" />
                            </td>
                            <td className="">
                                <p className="name">{raliT.header}</p>
                                <p className="overflow">{raliT.text.p1}</p>
                            </td>
                        </tr>
                    </table>
                    <table className="aboutCol" onClick={() => this.openModal(nikiT)}>
                        <tr>
                            <td>
                                <img className="photo" src={niki} alt="rali" />
                            </td>
                            <td className="">
                                <p className="name">{nikiT.header}</p>
                                <p className="overflow">{nikiT.text.p1} </p>
                            </td>
                        </tr>
                    </table>
                </div>


                < Modal ref={this.modal}
                    out={this.state.out}
                    text={this.state.text}
                    pic={this.state.pic}
                    header={this.state.header}
                    showModal={this.state.showModal}
                    onClick={this.modal?.current?.open()} />
            </div>
        );
    }
}
