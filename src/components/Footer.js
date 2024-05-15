import React from "react";

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content">
                    <a href="/" className="footer__logo" style={{ fontSize: '50px' }}>
                        GDCS
                    </a>

                </div>
                <div className="footer__content" >
                    <h3 className="footer__title">Our Services</h3>
                    <ul className="footer__links">
                        <li>
                            <p className="footer__link">
                                Web Development
                            </p>
                        </li>
                        <li>
                            <p className="footer__link">
                                App Development
                            </p>
                        </li>
                        <li>
                            <p className="footer__link">
                                Digital Marketing
                            </p>
                        </li>
                        <li>
                            <p className="footer__link">
                                Content Writing
                            </p>
                        </li>
                    </ul>

                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Our Company</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="/" className="footer__link">
                                Our mision
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Terms & Condition
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Community</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="/" className="footer__link">
                                Support
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Questions
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Customer help
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__social">
                    <a href="/" className="footer__social-link">
                        <i className="bx bxl-facebook-circle" />
                    </a>
                    <a href="/" className="footer__social-link">
                        <i className="bx bxl-twitter" />
                    </a>
                    <a href="/" className="footer__social-link">
                        <i className="bx bxl-instagram-alt" />
                    </a>
                </div>
            </div>
            <p className="footer__copy">© GDCS. All right reserved</p>
        </footer>
    );
}

export default Footer;