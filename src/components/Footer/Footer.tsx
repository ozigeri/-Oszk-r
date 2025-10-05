import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import './Footer.scss';

const socialLogos = [
    { node: <FaFacebook />, title: 'Facebook', href: 'https://facebook.com' },
    { node: <FaInstagram />, title: 'Instagram', href: 'https://instagram.com' },
    { node: <FaXTwitter />, title: 'X', href: 'https://x.com' },
];

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                {socialLogos.map((logo, index) => (
                    <a
                        key={index}
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={logo.title}
                        className="icon-link"
                    >
                        {logo.node}
                    </a>
                ))}
            </div>

            <div className="footer-links">
                <a href="/privacy-policy">Adatvédelmi irányelvek</a>
                <span>·</span>
                <a href="/terms-of-service">Felhasználási feltételek</a>
            </div>

            <div className="footer-copy">© {new Date().getFullYear()} EKKE Webapp. Minden jog fenntartva.</div>
        </footer>
    );
};

export default Footer;
