import React from 'react'
import '../css'


export default class Modal extends React.Component {


    render() {


        console.log(this.props.showModal);


        const close = () => {
              
            console.log(  this.props);
            //   this.props.showModal = false;
    }


        return (
        

            <div id="modal-container3" className={`${this.props.showModal ? "six" : "out"}`}>
                <div className="modal-background3 modal-active3" onClick={ close }>
                <div className="modal3">
                <h2>I'm a Modal</h2>
                <p>Hear me roar.</p>
                        <svg className="modal-svg3"
                            xmlns="http://www.w3.org/2000/svg" width="100%"
                            height="100%" preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none"
                                width="226" height="162" rx="3" ry="3"></rect>
							</svg>
    </div>
  </div>
</div>


           );
    }
}
