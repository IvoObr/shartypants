import '../css'
import React from 'react'

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { out: props.out };
    }

    player() {
        let instance = null;

        function iframe(show) {
            return {
                display() {
                    document.querySelectorAll('iframe').forEach(iframe => {
                        instance = iframe;
                        instance.src = iframe.src;
                        if (show === 'block') {
                            instance.classList.add('block')
                            instance.classList.remove('none');
                        }
                        instance.classList.add('none')
                        instance.classList.remove('block');
                    })
                }
            }
        }

        return {
            pause() { document.querySelectorAll('video').forEach(video => video.pause()) },
            show() { iframe().display('block'); return this },
            hide() { iframe().display('none'); return this }
        }
    }

    open = () => {
        this.setState({ out: false })
        this.player().show().pause()
    }


    close = () => {
        this.setState({ out: true })
        this.player().hide().pause()
    }

    preventCLose = (event) => event.stopPropagation();

    render() {
        const modalInner = React.createRef();

        return (
            <div id="modal-container3" ref={modalInner}
                className={`${this.props.showModal ? "six" : ""}${this.state?.out ? "out" : ""}`}>
                <div className="modal-background3 modal-active3" onClick={this.close}>
                    <div className="modal3" onClick={this.preventCLose}>
                        <h2>{this.props.header}</h2> <br />
                        <p dangerouslySetInnerHTML={{ __html: this.props?.pic }}></p>
                        <p dangerouslySetInnerHTML={{ __html: this.props?.text?.p1 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: this.props?.text?.p2 }} ></p><br />
                        <section className="container">
                            <div className="one" dangerouslySetInnerHTML={{ __html: this.props?.text?.p3 }}></div>
                            <div className="two" dangerouslySetInnerHTML={{ __html: this.props?.video }}></div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
