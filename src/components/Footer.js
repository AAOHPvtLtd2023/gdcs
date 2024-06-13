import React from "react";

const Footer = () => {
    const mail = "support@gdcs.in";
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
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" /></svg>
                            <a className="footer__link" href="/services/Desktop App Developing">
                                Web Development
                            </a>
                        </li>
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 768 731"><path fill="currentColor" d="m577 429l-3 2c-15 8-25 14-29 14c-3 1-5 2-7 3c-7-13-27-52-57-104c-36-66-139-309-142-319c-2-10 0-20 7-24c1-1 3-1 5-1c6 0 13 4 17 7c6 5 123 184 186 298c38 69 51 94 56 103c-2 1-4 2-6 4c-4 5-18 13-24 16h-1zM353 129l13 7c22 12 27 38 16 60l-87-50c8-14 23-22 37-22c8 0 15 1 21 5zm15 91l1 1c3 1 3 6 2 8s-3 3-5 3h-4l-1-1l-3 5h1c3 2 4 5 3 8c-2 2-3 3-5 3c-1 0-2 0-3-1l-1-1l-6 11l1 1c2 1 3 5 2 7s-3 3-5 3c-1 0-2 0-3-1h-1l-3 5l1 1c3 2 4 5 2 8c-1 2-2 3-4 3c-1 0-2-1-3-1l-1-1l-3 4l-4 7l-87-50l4-7l3-4l-1-1c-3-1-4-6-2-8c1-2 2-3 4-3c1 0 2 0 3 1h1l3-4l-1-1c-3-2-4-5-2-8c1-2 3-3 5-3c1 0 2 1 3 1l1 1l6-11h-1c-3-2-4-5-2-8c1-2 2-3 4-3c1 0 2 1 3 1l1 1l3-6l-1-1c-3-1-4-5-2-7c1-2 3-3 5-3h4l1 1l4-7l87 50zM56 558l172-298l87 51l-172 297l-4 7c-15-6-30-14-44-22c-14-9-29-19-42-29l1-3zM0 514V365h133L46 514H0zm521-32l14 21l5 5l3 6H232l87-149h139c34 61 55 101 55 102c2 3 3 5 5 6c1 3 2 7 3 9zm136-48l-9-21c-2-3-3-5-5-7c-1-3-2-6-3-8l-8-16c-3-5-6-10-10-17h146v149h-75c0-1-1-3-1-5l-11-23c-1-2-2-5-4-7c0-3-1-5-2-7l-10-23c-1-2-4-4-5-6c-1-3-2-7-3-9zm-4 65l10 20l1 3s-15 13-28 20s-31 13-31 13l-3-4l-11-18v-8l-8-6l-15-21v-7l-7-5l-8-13l-5-8c7-1 19-6 37-16c1 0 1-1 2-1s1-1 2-1c15-8 26-15 31-22l4 9l6 13v11l7 4l10 23l-1 10zm17 45l84 126c11 20 1 44-19 55c-7 4-15 6-22 6c-14 0-27-6-35-19l-61-139c7-3 19-8 29-13c8-5 18-11 24-16zM32 715l-5 9c-1 2-4 3-7 3h-1c-1 0-2 0-2-1c-1 0-1-1-2-1c-2-2-2-6-1-8l5-9l29-122c12 9 25 18 37 25s25 13 38 18z" /></svg>
                            <a className="footer__link" href="/services/App Development">
                                App Development
                            </a>
                        </li>
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09a1.29 1.29 0 0 0 .7-.22a1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03zm-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5z" /></svg>
                            <a className="footer__link" href="/services/Digital Marketing">
                                Digital Marketing
                            </a>
                        </li>
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 17V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2l2-2zM16 7h4m-2 12H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6" /></svg>
                            <a className="footer__link" href="/services/">
                                Content Writing
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Our Company</h3>
                    <ul className="footer__links">
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                    <path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H13M8 10h8M8 6h4m-4 8h3" />
                                    <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20m-.008 9.125l2.556.649c.266.068.453.31.445.584C22.821 22.116 19.5 23 19.5 23s-3.321-.884-3.493-6.642a.588.588 0 0 1 .445-.584l2.556-.649c.323-.082.661-.082.984 0Z" />
                                </g>
                            </svg>
                            <a href="/privacy-policy" className="footer__link">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6q-.825 0-1.413-.588T8 4q0-.825.588-1.413T10 2q.825 0 1.413.588T12 4q0 .825-.588 1.413T10 6Zm6.5 12q1.05 0 1.775-.725T19 15.5q0-1.05-.725-1.775T16.5 13q-1.05 0-1.775.725T14 15.5q0 1.05.725 1.775T16.5 18Zm5.1 4l-2.7-2.7q-.55.35-1.15.525T16.5 20q-1.875 0-3.187-1.313T12 15.5q0-1.875 1.313-3.188T16.5 11q1.875 0 3.188 1.313T21 15.5q0 .65-.175 1.25T20.3 17.9l2.7 2.7l-1.4 1.4ZM11 22v-3.025q.375.6.888 1.1t1.112.9V22h-2Zm-4 0V9q-1.525-.125-3.025-.363T1 8l.5-2q2.1.575 4.213.788T10 7q2.175 0 4.288-.213T18.5 6l.5 2q-1.475.4-2.975.638T13 9v1.025q-1.35.875-2.175 2.313T10 15.5v.25q0 .125.025.25H9v6H7Z" /></svg>
                            <a href="/terms & codition" className="footer__link">
                                Terms & Condition
                            </a>
                        </li>
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5l-3.75 1.5l-3.75-1.5l-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" /></svg>
                            <a href="/" className="footer__link">
                                Refund Policy
                            </a>
                        </li>
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m8-3V4M8 8H3" /></svg>
                            <a href="/" className="footer__link">
                                Delivery Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Community</h3>
                    <ul className="footer__links">
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="m576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64s-64 28.656-64 64s28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512c0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01z" /></svg>
                            <a href="/" style={{ color: '#FDC212' }} className="footer__link">
                                About Us
                            </a>
                        </li>
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="12" cy="12" r="9" /><path d="m18 6l-3.525 3.525M6 18l3.525-3.525M6 6l3.525 3.525M18 18l-3.525-3.525m-4.95 0c-1.348-1.348-1.348-3.601 0-4.95m0 4.95c1.348 1.348 3.601 1.348 4.95 0m0 0c1.348-1.348 1.348-3.601 0-4.95m0 0c-1.348-1.348-3.601-1.348-4.95 0" /></g></svg>
                            <a href={`mailto:${mail}`} style={{ color: '#FDC212' }} className="footer__link">
                                Support
                            </a>
                        </li>
                        <li className="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778v66.562z" /><path fill="currentColor" d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z" /></svg>
                            <a href="http://tranings.gdcs.in" className="footer__link">
                                Trainings
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