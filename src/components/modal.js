import React from 'react'
import '../css'


export default class Modal extends React.Component {

    modal = React.createRef();

    constructor(props) {
        super(props);
        this.state = { out: props.out };
    }

    open = () => {
        this.setState({ out: false })
    }


    render() {
        const close = () => {
            this.setState({ out: true })
        }


        const notCLose = (event) => {
            event.stopPropagation();
        }




        return (
        

            <div id="modal-container3" ref={this.modal}
                className={
                    `${this.props.showModal ? "six" : ""}
                     ${this.state?.out ? "out" : ""}
                `}>
        


                <div className="modal-background3 modal-active3" onClick={close}>
                    <div className="modal3" onClick={notCLose}>
                        <h2>{this.props.header}</h2>
                        <br/>
                        <p dangerouslySetInnerHTML={{ __html: this.props.text.p1 }}></p>

                        <p dangerouslySetInnerHTML={{ __html: this.props.text.p2 }} ></p>
                        <br />
                       

                        
                        <section className="container">
                            <div className="one" dangerouslySetInnerHTML={{ __html: this.props.text.p3 }}></div>
                            <div className="two" >{this.props.video}</div>
                        </section>
               

                    </div>
                </div>
            </div>


           );
    }
}
