import React from 'react'
import './style.css'
import Container from '../Container'
class SocialMedia extends React.Component {
    render() {
        return (
            <div className="social-div">
                <Container>
                    <div className="social-content">
                        <div className="social-one">
                            <div className="social-logo">
                                <img src={'/assets/logo.png'} alt="img" className="social-img" />
                                <h3 className="logo-name">Golden View Dine  </h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.<br /> Sollicitudin </p>
                            <div className="social-icon">
                                <img src={'/assets/instagram.png'} alt="img" className="social-iconimg" />
                                <img src={'/assets/tiwtter.png'} alt="img" className="social-iconimg" />
                                <img src={'/assets/youtube.png'} alt="img" className="social-iconimg" />
                            </div>
                        </div>

                        <div className="social-two">
                            <p>Other Links</p>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li> <a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Our Kitchen</a></li>
                            </ul>
                        </div>

                        <div className="contactus">
                            <p>Contact Us</p>
                            <div className="contactus-content">
                                <div className="contact1">
                                    <img src={'/assets/email.png'} alt="img" className="social-iconimg" />
                                    <p>Gogreendineservice@gmail.com</p>
                                </div>

                                <div className="contact1">
                                    <img src={'/assets/location.png'} alt="img" className="social-iconimg" />
                                    <p>AZ complex bylane3 Mandari Rd<br />
                                        Mumbai 1100 867 </p>
                                </div>

                                <div className="contact1">
                                    <img src={'/assets/phone.png'} alt="img" className="social-iconimg" />
                                    <p>+1800 287 256</p>
                                </div>
                            </div>



                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
export default SocialMedia