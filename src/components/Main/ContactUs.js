import React,{useState} from 'react';
import axios from 'axios';
import decoration from '../../assets/Decoration.svg';
import FacebookIcon from '../../assets/Facebook.svg'
import InstagramIcon from '../../assets/Instagram.svg'

const ContactUs=()=>{
    
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const [errname, setErrname] = useState('');
    const [errmail, setErrmail] = useState('');
    const [errmsg, setErrmsg] = useState('');
    const [subsuccess, setSubsuccess] = useState(``);
    const [wrongname,setWrongName] = useState('');
    const [wrongmail,setWrongMail] = useState('');
    const [wrongmsg,setWrongMsg] = useState('');
 
    const contact = {
        name: name,
        email: mail,
        message: message,
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    const handleSubmit=()=>{
        setErrname('');
        setWrongName('');
        setErrmail('')
        setWrongMail('');
        setErrmsg('')
        setWrongMsg('');
        setSubsuccess('Wiadomość została wysłana! Wkrótce się skontaktujemy.');
        setName('');
        setMail('');
        setMessage('');
    }

    // const API = `http://localhost:3002/ContactUs`;

    const sendForm = () => {   
        if (name.length < 3 || name.includes(' ')){
            setErrname("Podane imię jest nieprawidłowe!");
            setWrongName('error');
        }else{
            setErrname('');
            setWrongName('')
        }
        if(!validateEmail(mail)) {
            setErrmail("Podany email jest nieprawidłowy!")
            setWrongMail('error');
        }else{
            setErrmail('');
            setWrongMail('');
        } 
        if (message.length < 120) {
            setErrmsg("Wiadomość musi mieć conajmniej 120 znaków!")
            setWrongMsg('error');
        }else{
            setErrmsg('');
            setWrongMsg('');
        }
        if(validateEmail(mail)){
            handleSubmit();
                axios.post(`http://localhost:3002/ContactUs`,{
                    contact
                }, {
                    withCredentials: false 
                })
                .then(response=> {
                    console.log(response);
                    console.log(contact);
                })
                    .catch(error => {
                      console.log(error);
                    });    
        }
    };

    return<>
        <section className='contactUs' id='contactUs'>
            <nav>
                <div className='contactUs-content'>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={decoration} alt='decoration'/>
                    <p>{subsuccess}</p>
                    <form>
                        <div className='contact-info'>
                            <div>
                                <h6>Wpisz swoje imię</h6>
                                <input className={wrongname} type='text' onChange={e=>setName(e.target.value)} value={name} placeholder='Imię'/>
                                <small>{errname}</small>
                            </div>
                            <div>
                                <h6>Wpisz swój email</h6>
                                <input className={wrongmail} type='mail' onChange={e=>setMail(e.target.value)} value={mail} placeholder='e-mail'/>
                                <small>{errmail}</small>
                            </div>
                        </div>
                        <h6>Wpisz swoją wiadomość</h6>
                        <textarea className={wrongmsg} onChange={e=>setMessage(e.target.value)} value={message} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        <small>{errmsg}</small>
                    </form>
                    <div className='contactUs-btn-holder'>
                        <button onClick={sendForm}>Wyślij</button>
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
