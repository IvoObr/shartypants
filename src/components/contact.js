import '../css'
import React from 'react'
import { contact } from '../content/contact'
import { facebook } from '../images'

export default class Contact extends React.Component {
    render() {
        return (
            <div className="screen">
                <h1 id="contacts" className="header">Contact</h1>
                <p className="textCol">{contact.text.p1}</p>
                <p className="textCol">{contact.text.p2}</p>
                <p className="textCol" dangerouslySetInnerHTML={{ __html: contact.text.p3 }}></p>
                <div className="padd">
                    <a href="https://www.facebook.com/smartypantsshooter/" target="_blank">
                        <img src={facebook} alt='sp' className="fblogo" />
                    </a>
                </div>

                <div className="centerMenu" data-hover-hint="navSocialIcons">
                    <p className="bottom-content">
                        © Smarty Pants Shooter Ltd,
                        {new Date().getFullYear()}</p>
                </div>
            </div>
        );
    }
}
