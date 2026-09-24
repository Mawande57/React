import './index.css';
import cat from './images/mr-whiskerson.png'
import phone from './images/phone-icon.png'
import mail from './images/mail-icon.png'

export default function Contact(props){
    return (
        <article className="contact-card">
                <img 
                    src={props.img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img 
                        src={phone}
                        alt="phone icon" 
                    />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src={mail} 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
    )

}