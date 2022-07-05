import React from 'react';
import FooterList from './FooterList';

function Footer(props) {
    return (
        <div>
            <h2>Back to top</h2>
            <div>
                <FooterList/>
                <FooterList/>
                <FooterList/>
                <FooterList/>
            </div>
            <img src = "" alt = "amazon-logo"/>
        </div>
    );
}

export default Footer;