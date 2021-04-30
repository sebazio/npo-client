import React from 'react';
import './Footer.css';

const Footer = () => {
    const [mock] = React.useState({

        img: "https://picsum.photos/200", 
        linkWeb: "https://jonathangomezit.com",
        socialMedia:[
            {
                name: "Instagram",
                url: "https://www.instagram.com/"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/",
            },
            {
                name: "Twitter",
                url: "https://www.twitter.com"
            }
        ]
    })
    return(
        <footer className="footer__content">
            <img src={mock.img} alt="logo" className="footer__logo"/>
            <a href={mock.linkWeb} className="footer__linkweb" >Test Site</a>
            <div className="footer__content-social">
            {
                mock.socialMedia.map(({name, url}, index) => <a key= {index} href={url} className="footer__items">{name}</a>)
            }
            </div>
        </footer>
    )
}

export default Footer;