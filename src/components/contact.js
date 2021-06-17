import '../css'
import React from 'react'
import { contact } from '../content/contact'

export default class Contact extends React.Component {
    render() {
        return (
            <div id="contacts" className="halfScreen">
                <h1 className="header">Contact</h1>
                <p className="textCol">{contact.text.p1}</p>
                <p className="textCol">{contact.text.p2}</p>
                <p className="textCol" dangerouslySetInnerHTML={{ __html: contact.text.p3 }}></p>
                <div className="centerMenu" data-hover-hint="navSocialIcons">
                    <a href="https://www.facebook.com/smartypantsshooter/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 30 24" className="smallIcon">
                            <path d="M16.21 20h-3.26v-8h-1.63V9.24h1.63V7.59c0-2.25 0.92-3.59 3.53-3.59h2.17v2.76H17.3 c-1.02 0-1.08 0.39-1.08 1.11l0 1.38h2.46L18.38 12h-2.17V20z"></path>
                        </svg>
                    </a>
                    <p>© Smarty Pants Shooter Ltd, {new Date().getFullYear()}</p>
                </div>
            </div>
        );
    }
}
