import React from 'react'
import shears from '../images/shears.jpg'
import jewel from '../images/the_jewel.jpg'
import Modal from './modal'
import '../css'

export default class Films extends React.Component {

    text = {
        p1: `The feature documentary SHEARS tells the story of the four stars of
         Bulgarian hairdressing - the working group K.E.N.T. - who developed their
          art during the Communist era in the country.`,
        p2: `Determined to turn their craft into an art in a time that's difficult
         for creative expression, they go beyond borders and restrictions to build up
          the art of modern hairdressing in Bulgaria.`,
        p3: `Shears (2018), 60 min, Bulgaria
            Cast: Krustyu Kapanov, Evgeni Petroff, Nedialko Nedialkov and Todor Toshev
            Director: Nikolay Stefanov
            Writer: Ralitsa Golemanova
            DoP: Nikolay Stefanov
            Original Idea: Rusko Rusev
            Producer: Smarty Pants Shooter &  <a href="http://nouhau.bg/" target="_blank">Nouhau</a>   
            Selections: East Silver Market 2018; Mind the Indie Film Festival 2018; Thessaloniki Doc Market 2019; Master of Art Festival 2019
            You can watch Shears online on <a href="https://cinesquare.net/#/movie/2480/shears" target="_blank">Cinesquare</a> (English) and on <a href="https://filmira.bg/documentary/ostrieta" target="_blank">Filmira</a> (Bulgarian).
            <a href="https://www.facebook.com/shearsthefilm/" target="_blank">Facebook</a> / <a href="http://www.imdb.com/title/tt7999930/" target="_blank">IMDb&nbsp;</a>
        `
    }


    header = 'SHEARS'
    video = <iframe src="https://www.youtube.com/embed/c5Sbd_jqIAk" frameborder="" allowfullscreen="" title='vid' ></iframe>;

    modal2 = React.createRef();

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
