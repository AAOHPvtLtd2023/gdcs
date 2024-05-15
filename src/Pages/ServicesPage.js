import React from "react";
import './ServicesPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ServicesPage = ({ darkMode }) => {
    let navigate = useNavigate();
    const { state } = useLocation();
    console.log(state);

    const mail = "gtechnology.n@gmail.com";
    const phoneNumber = "+917645083377";

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/*=============== BOXICONS ===============*/}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
            />
            {/*=============== HEADER ===============*/}
            {state &&
                <main className="main">
                    {/*=============== HOME ===============*/}
                    <section className="home section" id="home">
                        <div id="db1" />
                        <div className="home__container container grid">
                            <div className="home__data">
                                <h1 className="home__title_service">{state.title}</h1>
                                <p className="home__description_service">
                                    {state.subTitle}. Enjoy your experience!
                                </p>
                                {/* <a href="#" class="button">Get Started</a> */}
                            </div>
                        </div>

                    </section>

                    {/*=============== ABOUT ===============*/}
                    <section className="about_service section container1" id="about">
                        {/* <div id="db" /> */}
                        <div className="about__container_service1 ">
                            <div className="about__data2">
                                <p className="about__description_service">
                                    {state.p1}
                                </p>
                                <br />
                                <p className="about__description_service">
                                    {state.p2}
                                </p>
                            </div>
                            <img src={require(`../assets/illustration/${darkMode ? state.ilu1PathLight : state.ilu1PathDark}`)} alt={darkMode ? state.ilu1PathLight : state.ilu1PathDark} className="about__img" />
                        </div>
                    </section>

                    <section className="about_service section container1" id="about" style={{ marginBottom: '-5%' }}>
                        <div className="about__container_service2 ">
                            <div className="about__data2">
                                <p className="about__description_service">
                                    {state.p4}
                                </p>
                            </div>
                            <img src={require(`../assets/illustration/${darkMode ? state.ilu2PathLight : state.ilu2PathDark}`)} alt={darkMode ? state.ilu2PathLight : state.ilu2PathDark} className="about__img" />
                        </div>
                    </section>

                    <section className="about_service section container" id="about">
                        <div className="about__container_service3 ">
                            <div className="about__data3">
                                <p className="about__description_service">
                                    {state.p3}
                                </p>
                                <h2 className="section__title-center" style={{ marginTop: '10%' }}>
                                    {state.cardHeading}
                                </h2>
                            </div>

                        </div>
                    </section>


                    <section
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: 20,
                            padding: 20
                        }}
                    >
                        <div id="db" />
                        <div className='point__card'>
                            <div className="content">
                                <div className="back  dark_back">
                                    <div className="back-content">
                                        <strong>{state.c1Front}</strong>
                                    </div>
                                </div>
                                <div className="front dark_front">
                                    <div className="img">
                                        <div className="circle"></div>
                                        <div className="circle" id="right"></div>
                                        <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                        <small className="badge">{state.c1Front}</small>
                                        <div className="description">
                                            <div className="title">
                                                <p className="title">
                                                    <strong>{state.c1Back}</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='point__card'>
                            <div className="content">
                                <div className="back  dark_back">
                                    <div className="back-content">
                                        <strong>{state.c2Front}</strong>
                                    </div>
                                </div>
                                <div className="front dark_front">
                                    <div className="img">
                                        <div className="circle"></div>
                                        <div className="circle" id="right"></div>
                                        <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                        <small className="badge">{state.c2Front}</small>
                                        <div className="description">
                                            <div className="title">
                                                <p className="title">
                                                    <strong>{state.c2Back}</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='point__card'>
                            <div className="content">
                                <div className="back  dark_back">
                                    <div className="back-content">
                                        <strong>{state.c3Front}</strong>
                                    </div>
                                </div>
                                <div className="front dark_front">
                                    <div className="img">
                                        <div className="circle"></div>
                                        <div className="circle" id="right"></div>
                                        <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                        <small className="badge">{state.c3Front}</small>
                                        <div className="description">
                                            <div className="title">
                                                <p className="title">
                                                    <strong>{state.c3Back}</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='point__card'>
                            <div className="content">
                                <div className="back  dark_back">
                                    <div className="back-content">
                                        <strong>{state.c4Front}</strong>
                                    </div>
                                </div>
                                <div className="front dark_front">
                                    <div className="img">
                                        <div className="circle"></div>
                                        <div className="circle" id="right"></div>
                                        <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                        <small className="badge">{state.c4Front}</small>
                                        <div className="description">
                                            <div className="title">
                                                <p className="title">
                                                    <strong>{state.c4Back}</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about_service section container" id="about">
                        <div className="about__container_service3 ">
                            <div className="about__data3">

                                <p className="about__description_service">
                                    {state.p5}
                                </p>

                            </div>

                        </div>
                    </section>
                    <section className="contact section container" id="contact">
                        <div className="contact__container grid">
                            <div className="contact__content">
                                <h2 className="section__title-center">
                                    Contact Us From <br />
                                    Here
                                </h2>
                                <p className="contact__description">
                                    You can contact us from here, you can write to us, call us or visit
                                    our service center, we will gladly assist you.
                                </p>
                            </div>
                            <ul className="contact__content grid">
                                <li className="contact__address">
                                    Telephone:
                                    <span className="contact__information"><a href={`tel:${phoneNumber}`} style={{color:'#FDC212'}}>  {phoneNumber}</a></span>
                                </li>
                                <li className="contact__address">
                                    Email:
                                    <span className="contact__information"><a href={`mailto:${mail}`}style={{color:'#FDC212'}}> {mail}</a></span>
                                </li>
                                <li className="contact__address">
                                    Location: <span className="contact__information">Bhubaneswar</span>
                                </li>
                            </ul>
                            <div className="contact__content">
                                {/* <a href="/contact" className="button">
                                    Contact Us
                                </a> */}
                                <button className="button" onClick={() => {
                                            navigate('/contact')
                                        }}>Contact Us</button>
                            </div>
                        </div>
                    </section>
                </main>
            }
        </>
    );
}

export default ServicesPage;
