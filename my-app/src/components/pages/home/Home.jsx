import Header from "../../Header";
import profilePhoto from '../../../img/profile-photo.jpeg';

const Home = () => {
    return (
        <>
        
        <main>
            <div className="h1-holder">
                <h1>Yelyzaveta Yehudkina</h1>
            </div>
            <div className="flex-container">
                <div className="profile-photo-holder">
                    <img src={profilePhoto} alt="my photo" width="250" height="250"/>
                </div>
                <div className="contact-inform-holder">
                    <div className="h2-holder h2-holder-home">
                    <h2>My contacts:</h2>
                    </div>
                    <ul className="contacts-list">
                    <li className="contact-item">
                        <a className="contact-link" href="tel:+380932754415"><span className="contact-header">My number:</span> +38 093 27 54 415</a>
                    </li>

                    <li className="contact-item">
                        <a className="contact-link" href="mailto:lizzadub@gmail.com"><span className="contact-header">E-mail:</span> lizzadub@gmail.com</a>
                    </li>

                    <li className="contact-item">
                        <a className="contact-link" href="https://t.me/liza_yehudkina" target="_blank"><span className="contact-header">Telegram:</span> @liza_yehudkina</a>
                    </li>
                    </ul>
                    
                </div>
            </div>
            <div className="text-holder">
                <p>You can learn more about me 
                    <br />
                    by clicking on the link below:</p>
            </div>

        </main>
        <Header/>
        </>
    )
}

export default Home;