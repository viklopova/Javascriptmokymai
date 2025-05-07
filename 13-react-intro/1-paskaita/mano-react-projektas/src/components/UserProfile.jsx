
import './UserProfile.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function UserProfile({ vardas, amzius, spalva, nuotrauka }) {
    return (
        <div className="profile" >
            <img src={nuotrauka} alt={`${vardas} nuotrauka`} className="ProfilePhoto" />
            <h1 className="UserName" > Vartotojo vardas: {vardas}</h1>
            <p className="UserInfo" >Amžius: {amzius}</p>
            
            <div className="ColorBox"
            style={{ backgroundColor: spalva }}
            title={`Mėgstama spalva: ${spalva}`}
            ></div>

            <div className="SocialIcon">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebook /> </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
            </div>
        </div>
    );
}
          
    export default UserProfile;
          

