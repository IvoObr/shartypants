import '../css'
import React from 'react'

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { out: props.out };
    }

    open = () => {
        this.setState({ out: false })
        
        document.querySelectorAll('iframe').forEach(iframe => {
            iframe.classList.add('block');
        });
    }

    preventCLose = (event) => event.stopPropagation();

    close = () => {
        this.setState({ out: true })
       
        document.querySelectorAll('iframe').forEach(iframe => {
            iframe.src = iframe.src;
            iframe.classList.add('none');
        });

        document.querySelectorAll('video').forEach(video => video.pause());

    }

    render() {
        const modalInner = React.createRef();

        return (
            <div id="modal-container3" ref={modalInner}
                className={`${this.props.showModal ? "six" : ""}${this.state?.out ? "out" : ""}`}>
                <div className="modal-background3 modal-active3" onClick={this.close}>
                    <div className="modal3" onClick={this.preventCLose}>
                        <h2>{this.props.header}</h2> <br />
                        <p dangerouslySetInnerHTML={{ __html: this.props.text.p1 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: this.props.text.p2 }} ></p><br />
                        <section className="container">
                            <div className="one" dangerouslySetInnerHTML={{ __html: this.props.text.p3 }}></div>
                            <div className="two" dangerouslySetInnerHTML={{ __html: this.props.video }}></div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
