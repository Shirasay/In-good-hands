import React from 'react';
import decoration from '../assets/Decoration.svg';
import FacebookIcon from '../assets/Facebook.svg'
import InstagramIcon from '../assets/Instagram.svg'

const ContactUs=()=>{



    return<>
        <section className='contactUs' id='contactUs'>
            <nav>
                <div className='contactUs-content'>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={decoration} alt='decoration'/>
                    <form>
                        <div className='contact-info'>
                            <div>
                                <h6>Wpisz swoje imię</h6>
                                <input placeholder='Imię'/>
                            </div>
                            <div>
                                <h6>Wpisz swój email</h6>
                                <input placeholder='e-mail'/>
                            </div>
                        </div>
                        <h6>Wpisz swoją wiadomość</h6>
                        <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    </form>
                    <div className='contactUs-btn-holder'>
                        <button>Wyślij</button>
                    </div>
                </div>
            </nav>
            <footer>
                <section>
                    <small>Copyright by Coders Lab</small>
                    <div>
                        <a href='!#'><img src={FacebookIcon} alt='facebook-icon'/></a>
                        <a href='!#'><img src={InstagramIcon} alt='instagram-icon'/></a>
                    </div>
                </section>
            </footer>
        </section>
    </>
}
export default ContactUs;
